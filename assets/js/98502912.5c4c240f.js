"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[933],{8:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const r={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},l="Quick-start: local environment",o={id:"tutorial-users/quick-start",title:"Quick-start: local environment",description:"Requirements",source:"@site/docs/tutorial-users/01-quick-start.md",sourceDirName:"tutorial-users",slug:"/tutorial-users/quick-start",permalink:"/interLink/docs/tutorial-users/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/interTwin-eu/interLink/docs/tutorial-users/01-quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Tutorial - End Users",permalink:"/interLink/docs/category/tutorial---end-users"},next:{title:"Current limitations",permalink:"/interLink/docs/tutorial-users/limitations"}},a={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Connect a remote machine with Docker",id:"connect-a-remote-machine-with-docker",level:2},{value:"Setup Kubernetes cluster",id:"setup-kubernetes-cluster",level:3},{value:"Bootstrap a minikube cluster",id:"bootstrap-a-minikube-cluster",level:4},{value:"Deploy Interlink",id:"deploy-interlink",level:3},{value:"Configure interLink",id:"configure-interlink",level:4},{value:"Deploy virtualKubelet",id:"deploy-virtualkubelet",level:4},{value:"Deploy interLink via docker compose",id:"deploy-interlink-via-docker-compose",level:4},{value:"Deploy a sample application",id:"deploy-a-sample-application",level:4},{value:"Connect a SLURM batch system",id:"connect-a-slurm-batch-system",level:2},{value:"Setup Kubernetes cluster",id:"setup-kubernetes-cluster-1",level:3},{value:"Bootstrap a minikube cluster",id:"bootstrap-a-minikube-cluster-1",level:3},{value:"Configure interLink",id:"configure-interlink-1",level:3},{value:"Deploy the interLink components",id:"deploy-the-interlink-components",level:3},{value:"Deploy the interLink virtual node",id:"deploy-the-interlink-virtual-node",level:4},{value:"Deploy interLink remote components",id:"deploy-interlink-remote-components",level:4},{value:"Deploy a sample application",id:"deploy-a-sample-application-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quick-start-local-environment",children:"Quick-start: local environment"}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," (kubernetes-version 1.27.1)"]}),"\n",(0,t.jsx)(n.li,{children:"Clone interlink repo:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/interTwin-eu/interLink.git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"connect-a-remote-machine-with-docker",children:"Connect a remote machine with Docker"}),"\n",(0,t.jsx)(n.p,{children:"Move to example location:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd interLink/examples/interlink-slurm\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setup-kubernetes-cluster",children:"Setup Kubernetes cluster"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"N.B."})," in the demo the oauth2 proxy authN/Z is disabled. DO NOT USE THIS IN PRODUCTION unless you know what you are doing."]})}),"\n",(0,t.jsx)(n.h4,{id:"bootstrap-a-minikube-cluster",children:"Bootstrap a minikube cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minikube start --kubernetes-version=1.24.3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-interlink",children:"Deploy Interlink"}),"\n",(0,t.jsx)(n.h4,{id:"configure-interlink",children:"Configure interLink"}),"\n",(0,t.jsxs)(n.p,{children:["You need to provide the interLink IP address that should be reachable from the kubernetes pods. In case of this demo setup, that address ",(0,t.jsx)(n.strong,{children:"is the address of your machine"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export INTERLINK_IP_ADDRESS=XXX.XX.X.XXX\n\nsed -i 's/InterlinkURL:.*/InterlinkURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g'  interlink/config/InterLinkConfig.yaml | sed -i 's/SidecarURL:.*/SidecarURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g' interlink/config/InterLinkConfig.yaml\n\nsed -i 's/InterlinkURL:.*/InterlinkURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g'  vk/InterLinkConfig.yaml | sed -i 's/SidecarURL:.*/SidecarURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g' vk/InterLinkConfig.yaml\n"})}),"\n",(0,t.jsx)(n.h4,{id:"deploy-virtualkubelet",children:"Deploy virtualKubelet"}),"\n",(0,t.jsxs)(n.p,{children:["Create the ",(0,t.jsx)(n.code,{children:"vk"})," namespace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create ns vk\n"})}),"\n",(0,t.jsx)(n.p,{children:"Deploy the vk resources on the cluster with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -n vk -k vk/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check that both the pods and the node are in ready status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n vk\n\nkubectl get node\n"})}),"\n",(0,t.jsx)(n.h4,{id:"deploy-interlink-via-docker-compose",children:"Deploy interLink via docker compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd interlink\n\ndocker compose up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check logs for both interLink APIs and SLURM sidecar:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs interlink-interlink-1 \n\ndocker logs interlink-docker-sidecar-1\n"})}),"\n",(0,t.jsx)(n.h4,{id:"deploy-a-sample-application",children:"Deploy a sample application"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f ../test_pod.yaml \n"})}),"\n",(0,t.jsx)(n.p,{children:"Then observe the application running and eventually succeeding via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n vk --watch\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When finished, interrupt the watch with ",(0,t.jsx)(n.code,{children:"Ctrl+C"})," and retrieve the logs with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs  -n vk test-pod-cfg-cowsay-dciangot\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also you can see with ",(0,t.jsx)(n.code,{children:"docker ps"})," the container appearing on the ",(0,t.jsx)(n.code,{children:"interlink-docker-sidecar-1"})," container with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec interlink-docker-sidecar-1  docker ps\n"})}),"\n",(0,t.jsx)(n.h2,{id:"connect-a-slurm-batch-system",children:"Connect a SLURM batch system"}),"\n",(0,t.jsx)(n.p,{children:"Let's connect a cluster to a SLURM batch. Move to example location:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd interLink/examples/interlink-slurm\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setup-kubernetes-cluster-1",children:"Setup Kubernetes cluster"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"N.B."})," in the demo the oauth2 proxy authN/Z is disabled. DO NOT USE THIS IN PRODUCTION unless you know what you are doing."]})}),"\n",(0,t.jsx)(n.h3,{id:"bootstrap-a-minikube-cluster-1",children:"Bootstrap a minikube cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"minikube start --kubernetes-version=1.27.1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once finished you should check that everything went well with a simple ",(0,t.jsx)(n.code,{children:"kubectl get node"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you don't have ",(0,t.jsx)(n.code,{children:"kubectl"})," installed on your machine, you can install it as describe in the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"official documentation"})]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-interlink-1",children:"Configure interLink"}),"\n",(0,t.jsx)(n.p,{children:"You need to provide the interLink IP address that should be reachable from the kubernetes pods."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In case of this demo setup, that address ",(0,t.jsx)(n.strong,{children:"is the address of your machine"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export INTERLINK_IP_ADDRESS=XXX.XX.X.XXX\n\nsed -i 's/InterlinkURL:.*/InterlinkURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g'  interlink/config/InterLinkConfig.yaml | sed -i 's/SidecarURL:.*/SidecarURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g' interlink/config/InterLinkConfig.yaml\n\nsed -i 's/InterlinkURL:.*/InterlinkURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g'  vk/InterLinkConfig.yaml | sed -i 's/SidecarURL:.*/SidecarURL: \"http:\\/\\/'$INTERLINK_IP_ADDRESS'\"/g' vk/InterLinkConfig.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-the-interlink-components",children:"Deploy the interLink components"}),"\n",(0,t.jsx)(n.h4,{id:"deploy-the-interlink-virtual-node",children:"Deploy the interLink virtual node"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"vk"})," namespace:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create ns vk\n"})}),"\n",(0,t.jsx)(n.p,{children:"Deploy the vk resources on the cluster with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -n vk -k vk/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check that both the pods and the node are in ready status"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n vk\n\nkubectl get node\n"})}),"\n",(0,t.jsx)(n.h4,{id:"deploy-interlink-remote-components",children:"Deploy interLink remote components"}),"\n",(0,t.jsx)(n.p,{children:"With the following commands you are going to deploy a docker compose that emulates a remote center managing resources via a SLURM batch system."}),"\n",(0,t.jsx)(n.p,{children:"The following containers are going to be deployed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"interLink API server"}),": the API layer responsible of receiving requests from the kubernetes virtual node and forward a digested vertion to the interLink plugin"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"interLink SLURM plugin"}),": translates the information from the API server into a SLURM job"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"a SLURM local daemon"}),": a local instance of a SLURM dummy queue with ",(0,t.jsx)(n.a,{href:"https://apptainer.org/",children:"singularity/apptainer"})," available as container runtime."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd interlink\n\ndocker compose up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check logs for both interLink APIs and SLURM sidecar:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs interlink-interlink-1 \n\ndocker logs interlink-docker-sidecar-1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-a-sample-application-1",children:"Deploy a sample application"}),"\n",(0,t.jsx)(n.p,{children:"Congratulation! Now it's all set up for the execution of your first pod on a virtual node!"}),"\n",(0,t.jsx)(n.p,{children:"What you have to do, is just explicitly allow a pod of yours in the following way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="./examples/interlink-slurm/test_pod.yaml"',children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: test-pod-cfg-cowsay-dciangot\n  namespace: vk\n  annotations:\n    slurm-job.knoc.io/flags: "--job-name=test-pod-cfg -t 2800  --ntasks=8 --nodes=1 --mem-per-cpu=2000"\nspec:\n  restartPolicy: Never\n  containers:\n  - image: docker://ghcr.io/grycap/cowsay \n    command: ["/bin/sh"]\n    args: ["-c",  "\\"touch /tmp/test.txt && sleep 60 && echo \\\\\\"hello muu\\\\\\" | /usr/games/cowsay \\" " ]\n    imagePullPolicy: Always\n    name: cowsayo\n  dnsPolicy: ClusterFirst\n  // highlight-start\n  nodeSelector:\n    kubernetes.io/hostname: test-vk\n  tolerations:\n  - key: virtual-node.interlink/no-schedule\n    operator: Exists\n  // highlight-end\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then, you are good to go:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f ../test_pod.yaml \n"})}),"\n",(0,t.jsx)(n.p,{children:"Now observe the application running and eventually succeeding via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n vk --watch\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When finished, interrupt the watch with ",(0,t.jsx)(n.code,{children:"Ctrl+C"})," and retrieve the logs with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs  -n vk test-pod-cfg-cowsay-dciangot\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also you can see with ",(0,t.jsx)(n.code,{children:"squeue --me"})," the jobs appearing on the ",(0,t.jsx)(n.code,{children:"interlink-docker-sidecar-1"})," container with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec interlink-docker-sidecar-1 squeue --me\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or, if you need more debug, you can log into the sidecar and look for your POD_UID folder in ",(0,t.jsx)(n.code,{children:".local/interlink/jobs"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker exec -ti interlink-docker-sidecar-1 bash\n\nls -altrh .local/interlink/jobs\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);