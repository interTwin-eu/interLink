# HTCondor DEMO

## Deploy interlink+HTCondor demo locally

__N.B.__ in the demo the oauth2 proxy authN/Z is disabled. DO NOT USE THIS IN PRODUCTION unless you know what you are doing.

### Requirements

- Docker
- Minikube (kubernetes-version 1.24.3)
- Clone interlink repo

```bash
git clone https://github.com/interTwin-eu/interLink.git
```

Move to example location:

```bash
cd interLink/examples/interlink-htcondor
```

### Bootstrap a minikube cluster

```bash
minikube start --kubernetes-version=1.24.3
```

### Configure interLink

First of all, you need a valid kubeconfig file to be passed to the interLink docker compose. With minikube you will
need the following script (check that `PATH_TO_KUBECONFIG` env is pointing to the correct kubeconfig first), 
otherwise you can simply copy your own there.

__N.B.__ the kubeconfig file should be a stand-alone one. So the certificate data should be loaded as strings not as path.

```bash
export PATH_TO_KUBECONFIG=$HOME/.kube/config
export CA_DATA=$(cat $HOME/.minikube/ca.crt | base64 -w0)
export CERT_DATA=$(cat $HOME/.minikube/profiles/minikube/client.crt | base64 -w0)
export KEY_DATA=$(cat $HOME/.minikube/profiles/minikube/client.key | base64 -w0)

mkdir -p interlink/config

sed 's/certificate-authority:.*/certificate-authority-data: '$CA_DATA'/g'  $PATH_TO_KUBECONFIG | sed 's/client-certificate:.*/client-certificate-data: '$CERT_DATA'/g' - | sed 's/client-key:.*/client-key-data: '$KEY_DATA'/g' - > interlink/config/kubeconfig.yaml 
```

Then you need to provide the interLink IP address that should be reachable from the kubernetes pods. In case of this demo setup, that address __is the address of your machine__

```bash
INTERLINK_ADDR=XXX.XX.X.XXX

sed -i 's/InterlinkURL:.*/InterlinkURL: "http:\/\/'$INTERLINK_IP_ADDRESS'"/g'  interlink/config/InterLinkConfig.yaml | sed -i 's/InterlinkURL:.*/SidecarURL: "http:\/\/'$INTERLINK_IP_ADDRESS'"/g' interlink/config/InterLinkConfig.yaml

sed -i 's/InterlinkURL:.*/InterlinkURL: "http:\/\/'$INTERLINK_IP_ADDRESS'"/g'  vk/InterLinkConfig.yaml | sed -i 's/InterlinkURL:.*/SidecarURL: "http:\/\/'$INTERLINK_IP_ADDRESS'"/g' vk/InterLinkConfig.yaml
```

### Deploy virtualKubelet

Create the `vk` namespace:

```bash
kubectl create ns vk
```

Deploy the vk resources on the cluster with:

```bash
kubectl apply -n vk -k vk/
```

Check that both the pods and the node are in ready status

```bash
kubectl get pod -n vk

kubectl get node
```

### Deploy interLink via docker compose

```bash
cd interlink

docker compose -f docker-compose.yaml up -d
```

Check logs for both interLink APIs and HTCondor sidecar:

```bash
docker logs interlink-interlink-1 

docker logs interlink-docker-sidecar-1
```

### Deploy a sample application

```bash
kubectl apply -f ../tests/test_configmap.yaml 
kubectl apply -f ../tests/test_secret.yaml 
kubectl apply -f ../tests/busyecho.yaml 
```

Then observe the application running and eventually succeeding via:

```bash
kubectl get pod -n vk --watch
```

When finished, interrupt the watch with `Ctrl+C` and retrieve the logs with:

```bash
kubectl logs  -n vk test-pod-cfg-cowsay-dciangot
```

Also you can see with `condor_q` the jobs appearing on the `interlink-docker-sidecar-1` container with:

```bash
docker exec interlink-docker-sidecar-1 condor_q
```
