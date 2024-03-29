"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[312],{56276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(85893),o=t(11151),r=t(19965),s=t(44996);const l={sidebar_position:1},a="Deploy interLink virtual nodes",c={id:"tutorial-admins/deploy-interlink",title:"Deploy interLink virtual nodes",description:"Learn how to deploy interLink virtual nodes on your cluster. In this tutorial you are going to setup all the needed components to be able to either develop or deploy the sidecar for container management on a remote host via a local kubernetes cluster.",source:"@site/docs/tutorial-admins/01-deploy-interlink.mdx",sourceDirName:"tutorial-admins",slug:"/tutorial-admins/deploy-interlink",permalink:"/interLink/docs/tutorial-admins/deploy-interlink",draft:!1,unlisted:!1,editUrl:"https://github.com/interTwin-eu/interLink/docs/tutorial-admins/01-deploy-interlink.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/interLink/docs/category/guides"},next:{title:"Develop an interLink plugin",permalink:"/interLink/docs/tutorial-admins/develop-a-plugin"}},d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Create an OAuth GitHub app",id:"create-an-oauth-github-app",level:2},{value:"Configuring your virtual kubelet setup",id:"configuring-your-virtual-kubelet-setup",level:2},{value:"Deploy the interlink Kubernetes Agent",id:"deploy-the-interlink-kubernetes-agent",level:2},{value:"Deploy the interLink core components",id:"deploy-the-interlink-core-components",level:2},{value:"Attach your favorite plugin or develop one!",id:"attach-your-favorite-plugin-or-develop-one",level:2},{value:"Remote docker execution",id:"remote-docker-execution",level:3},{value:"Remote SLURM job submission",id:"remote-slurm-job-submission",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploy-interlink-virtual-nodes",children:"Deploy interLink virtual nodes"}),"\n",(0,i.jsxs)(n.p,{children:["Learn how to deploy interLink virtual nodes on your cluster. In this tutorial you are going to setup all the needed components to be able to either ",(0,i.jsx)(n.strong,{children:"develop"})," or ",(0,i.jsx)(n.strong,{children:"deploy"})," the sidecar for container management on a ",(0,i.jsx)(n.strong,{children:"remote"})," host via a ",(0,i.jsx)(n.strong,{children:"local"})," kubernetes cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["The installation script that we are going to configure will take care of providing you with a complete Kubernetes manifest to instatiate the virtual node interface. Also you will get an installation bash script to be executed on the remote host where you want to delegate your container execution. That script is already configured to ",(0,i.jsx)(n.strong,{children:"automatically"})," authenticate the incoming request from the virtual node component, and forward the correct instructions to the openAPI interface of the ",(0,i.jsx)(n.a,{href:"/interLink/docs/tutorial-admins/api-reference",children:"interLink plugin"})," (a.k.a. sidecar) of your choice. Thus you can use this setup also for directly ",(0,i.jsx)(n.a,{href:"/interLink/docs/tutorial-admins/develop-a-plugin",children:"developing a sidecar"}),", without caring for anything else."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MiniKube"}),"\n",(0,i.jsx)(n.li,{children:"A GitHub account"}),"\n",(0,i.jsx)(n.li,{children:'A "remote" machine with a port that is reachable by the MiniKube host'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oauth-github-app",children:"Create an OAuth GitHub app"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["In this tutoria GitHub tokens are just an example of authentication mechanism, any OpenID compliant identity provider is also supported with the very same deployment script, see ",(0,i.jsx)(n.a,{href:"/interLink/docs/tutorial-admins/oidc-IAM",children:"examples here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"As a first step, you need to create a GitHub OAuth application to allow interLink to make authentication between your Kubernetes cluster and the remote endpoint."}),"\n",(0,i.jsxs)(n.p,{children:["Head to ",(0,i.jsx)(n.a,{href:"https://github.com/settings/apps",children:"https://github.com/settings/apps"})," and click on ",(0,i.jsx)(n.code,{children:"New GitHub App"}),". You should now be looking at a form like this:"]}),"\n",(0,i.jsx)(r.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/github-app-new.png"),dark:(0,s.Z)("/img/github-app-new.png")}}),"\n",(0,i.jsxs)(n.p,{children:["Provide a name for the OAuth2 application, e.g. ",(0,i.jsx)(n.code,{children:"interlink-demo-test"}),", and you can skip the description, unless you want to provide one for future reference.\nFor our purpose Homepage reference is also not used, so fill free to put there ",(0,i.jsx)(n.code,{children:"https://intertwin-eu.github.io/interLink/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Check now that refresh token and device flow authentication:"}),"\n",(0,i.jsx)(r.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/github-app-new2.png"),dark:(0,s.Z)("/img/github-app-new2.png")}}),"\n",(0,i.jsxs)(n.p,{children:["Disable webhooks and save clicking on ",(0,i.jsx)(n.code,{children:"Create GitHub App"})]}),"\n",(0,i.jsx)(r.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("/img/github-app-new3.png"),dark:(0,s.Z)("/img/github-app-new3.png")}}),"\n",(0,i.jsxs)(n.p,{children:["You can click then on your application that should now appear at ",(0,i.jsx)(n.a,{href:"https://github.com/settings/apps",children:"https://github.com/settings/apps"})," and you need to save two strings: the ",(0,i.jsx)(n.code,{children:"Client ID"})," and clicking on ",(0,i.jsx)(n.code,{children:"Generate a new client secret"})," you should be able to note down the relative ",(0,i.jsx)(n.code,{children:"Client Secret"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Now it's all set for the next steps."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-your-virtual-kubelet-setup",children:"Configuring your virtual kubelet setup"}),"\n",(0,i.jsxs)(n.p,{children:["You can download the interLink ",(0,i.jsx)(n.strong,{children:"installer CLI"})," for your OS and processor architecture from the ",(0,i.jsx)(n.a,{href:"https://github.com/interTwin-eu/interLink/releases",children:"release page"}),", looking for the binaries starting with ",(0,i.jsx)(n.code,{children:"interlink-install"}),". For instance, if on a ",(0,i.jsx)(n.code,{children:"Linux"})," platform with ",(0,i.jsx)(n.code,{children:"x86_64"})," processor:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget -O interlink-install https://github.com/interTwin-eu/interLink/releases/download/0.1.2/interlink-install_Linux_x86_64\nchmod +x interlink-install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The CLI offers a utility option to initiate an empty config file for the installation at ",(0,i.jsx)(n.code,{children:"$HOME/.interlink.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"interlink-install --init\n"})}),"\n",(0,i.jsx)(n.p,{children:"You are now ready to go ahead and edit the produced file with all the setup information."}),"\n",(0,i.jsx)(n.p,{children:"Let's take the following as an example of a valid configuration file:"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["see ",(0,i.jsx)(n.a,{href:"https://github.com/interTwin-eu/interLink/releases",children:"release page"})," to get the latest one! And change the value accordingly!"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'interlink_ip: 192.168.1.127\ninterlink_port: 30443\ninterlink_version: 0.2.1-patch2\nkubelet_node_name: my-civo-node\nkubernetes_namespace: interlink\nnode_limits:\n    cpu: "10"\n    memory: 256Gi\n    pods: "10"\noauth:\n    provider: github\n    issuer: https://github.com/oauth\n    scopes:\n      - "read:user"\n    github_user: "dciangot"\n    token_url: "https://github.com/login/oauth/access_token"\n    device_code_url: "https://github.com/login/device/code"\n    client_id: "XXXXXXX"\n    client_secret: "XXXXXXXX"\n'})}),"\n",(0,i.jsx)(n.p,{children:"This config file has the following meaning:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['the remote components (where the pods will be "offloaded") will listen on the ip address ',(0,i.jsx)(n.code,{children:"192.168.1.127"})," on the port ",(0,i.jsx)(n.code,{children:"30443"})]}),"\n",(0,i.jsxs)(n.li,{children:["deploy all the components from interlink release 0.1.2 (see ",(0,i.jsx)(n.a,{href:"https://github.com/interTwin-eu/interLink/releases",children:"release page"})," to get the latest one)"]}),"\n",(0,i.jsxs)(n.li,{children:["the virtual node will appear in the cluster under the name ",(0,i.jsx)(n.code,{children:"my-civo-node"})]}),"\n",(0,i.jsxs)(n.li,{children:["the in-cluster components will run under ",(0,i.jsx)(n.code,{children:"interlink"})," namespace"]}),"\n",(0,i.jsxs)(n.li,{children:["the virtual node will show the following static resources availability:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"10 cores"}),"\n",(0,i.jsx)(n.li,{children:"256GiB RAM"}),"\n",(0,i.jsx)(n.li,{children:"a maximum of 10 pods"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["the cluster-to-interlink communication will be authenticated via github provider, with a token with minimum capabilities (scope ",(0,i.jsx)(n.code,{children:"read:user"})," only), and only the tokens for user ",(0,i.jsx)(n.code,{children:"dciangot"})," will be allowed to talk to the interlink APIs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"token_url"})," and ",(0,i.jsx)(n.code,{children:"device_code_url"})," should be left like that if you use GitHub"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cliend_id"})," and ",(0,i.jsx)(n.code,{children:"client_secret"})," noted down at the beginning of the tutorial"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You are ready now to go ahead generating the needed manifests and script for the deployment."}),"\n",(0,i.jsx)(n.h2,{id:"deploy-the-interlink-kubernetes-agent",children:"Deploy the interlink Kubernetes Agent"}),"\n",(0,i.jsx)(n.p,{children:"Generate the manifests and the automatic interlink installation script with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"interlink-install \n"})}),"\n",(0,i.jsx)(n.p,{children:"follow the instruction to authenticate with the device code flow and, if everything went well, you should get an output like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'please enter code XXXX-XXXX at https://github.com/login/device\n\n\n=== Deployment file written at:  /Users/dciangot/.interlink/interlink.yaml ===\n\n To deploy the virtual kubelet run:\n    kubectl apply -f /Users/dciangot/.interlink/interlink.yaml\n\n\n=== Installation script for remote interLink APIs stored at: /Users/dciangot/.interlink/interlink-remote.sh ===\n\n  Please execute the script on the remote server: 192.168.1.127\n\n  "./interlink-remote.sh install" followed by "interlink-remote.sh start"\n'})}),"\n",(0,i.jsx)(n.p,{children:"We are almost there! Essentially you need to follow what suggested by the prompt."}),"\n",(0,i.jsx)(n.p,{children:"So go ahead and apply the produced manifest to your minikube/kubernetes instance with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f $HOME/.interlink/interlink.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check that the node appears successfully after some time, or as soon as you see the pods in namespace ",(0,i.jsx)(n.code,{children:"interlink"})," running."]}),"\n",(0,i.jsx)(n.p,{children:"You are now ready to setup the second component on the remote host."}),"\n",(0,i.jsx)(n.h2,{id:"deploy-the-interlink-core-components",children:"Deploy the interLink core components"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"$HOME/.interlink/interlink-remote.sh"})," file on the remote host:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scp -r $HOME/.interlink/interlink-remote.sh ubuntu@192.168.1.127:~ \n"})}),"\n",(0,i.jsx)(n.p,{children:"Then login into the machine and start installing all the needed binaries and configurations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x ./interlink-remote.sh\n./interlink-remote.sh install\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["By default the script will generate self-signed certificates for your ip adrress. If you want to use yours you can place them in ",(0,i.jsx)(n.code,{children:"~/.interlink/config/tls.{crt,key}"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Now it's time to star the components (namely oauth2_proxy and interlink API server):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./interlink-remote.sh start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Check that no errors appear in the logs located in ",(0,i.jsx)(n.code,{children:"~/.interlink/logs"}),". You should also start seeing ping requests coming in from your kubernetes cluster."]}),"\n",(0,i.jsx)(n.p,{children:"To stop or restart the components you can use the dedicated commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./interlink-remote.sh stop\n./interlink-remote.sh restart \n"})}),"\n",(0,i.jsx)(n.h2,{id:"attach-your-favorite-plugin-or-develop-one",children:"Attach your favorite plugin or develop one!"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/interLink/docs/tutorial-admins/develop-a-plugin",children:"Next chapter"})," will show the basics for developing a new plugin following the interLink openAPI spec."]}),"\n",(0,i.jsx)(n.p,{children:"In alterative you can start an already supported one."}),"\n",(0,i.jsx)(n.h3,{id:"remote-docker-execution",children:"Remote docker execution"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Coming soon..."})}),"\n",(0,i.jsx)(n.h3,{id:"remote-slurm-job-submission",children:"Remote SLURM job submission"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Coming soon..."})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);