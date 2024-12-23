"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[619],{2363:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>P,contentTitle:()=>_,default:()=>$,frontMatter:()=>T,metadata:()=>C,toc:()=>M});var t=i(5893),r=i(1151),l=i(7294),s=i(512),o=i(2466),a=i(6550),c=i(469),d=i(1980),u=i(7392),h=i(12);function p(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:i}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const t=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,d._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function k(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=g(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[a,d]=x({queryString:i,groupId:t}),[u,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,h.Nk)(i);return[t,(0,l.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),k=(()=>{const e=a??u;return m({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var b=i(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:i,selectedValue:r,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const n=e.currentTarget,i=c.indexOf(n),t=a[i].value;t!==r&&(d(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,s.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:i??n},n)}))})}function y(e){let{lazy:n,children:i,selectedValue:r}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=k(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,t.jsx)(j,{...e,...n}),(0,t.jsx)(y,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function O(e){let{children:n,hidden:i,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(I.tabItem,r),hidden:i,children:n})}var N=i(9965),E=i(4996);const T={sidebar_position:3},_="Cookbook",C={id:"Cookbook",title:"Cookbook",description:"These are practical recipes for different deployment scenarios.",source:"@site/docs/Cookbook.mdx",sourceDirName:".",slug:"/Cookbook",permalink:"/interLink/docs/Cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/interTwin-eu/interLink/docs/Cookbook.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/interLink/docs/arch"},next:{title:"Guides",permalink:"/interLink/docs/category/guides"}},P={},M=[{value:"Install interLink",id:"install-interlink",level:2},{value:"Deploy Remote components (if any)",id:"deploy-remote-components-if-any",level:3},{value:"Interlink API server",id:"interlink-api-server",level:4},{value:"Plugin service",id:"plugin-service",level:4},{value:"Test interLink stack health",id:"test-interlink-stack-health",level:4},{value:"Deploy Kubernetes components",id:"deploy-kubernetes-components",level:3},{value:"Test the setup",id:"test-the-setup",level:2}];function S(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cookbook",children:"Cookbook"}),"\n",(0,t.jsx)(n.p,{children:"These are practical recipes for different deployment scenarios."}),"\n",(0,t.jsx)(n.p,{children:"Select here the tab with the scenario you want deploy:"}),"\n",(0,t.jsxs)(w,{groupId:"scenarios",children:[(0,t.jsx)(O,{value:"edge",label:"Edge node",children:(0,t.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,E.Z)("/img/scenario-1_light.svg"),dark:(0,E.Z)("/img/scenario-1_dark.svg")}})}),(0,t.jsx)(O,{value:"incluster",label:"In-cluster",default:!0,children:(0,t.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,E.Z)("/img/scenario-2_light.svg"),dark:(0,E.Z)("/img/scenario-2_dark.svg")}})}),(0,t.jsx)(O,{value:"tunnel",label:"Tunneled",children:(0,t.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,E.Z)("/img/scenario-3_light.svg"),dark:(0,E.Z)("/img/scenario-3_dark.svg")}})})]}),"\n",(0,t.jsx)(n.p,{children:"Select here the featured plugin you want to try:"}),"\n",(0,t.jsxs)(w,{groupId:"plugins",children:[(0,t.jsx)(O,{value:"docker",label:"Docker",default:!0,children:(0,t.jsx)(n.p,{children:"Offload your pods to a remote machine with Docker engine available"})}),(0,t.jsx)(O,{value:"slurm",label:"SLURM",children:(0,t.jsx)(n.p,{children:"Offload your pods to an HPC SLURM based batch system"})}),(0,t.jsx)(O,{value:"kubernetes",label:"Kubernetes",children:(0,t.jsx)(n.p,{children:"Offload your pods to a remote Kubernetes cluster: COMING SOON\nFor test instructions contact us!"})})]}),"\n",(0,t.jsxs)(n.p,{children:["There are more 3rd-party plugins developed that you can get inspired by or even use out of the box. You can find some ref in the ",(0,t.jsx)(n.a,{href:"guides/deploy-interlink#attach-your-favorite-plugin-or-develop-one",children:"quick start section"})]}),"\n",(0,t.jsx)(n.h2,{id:"install-interlink",children:"Install interLink"}),"\n",(0,t.jsx)(n.h3,{id:"deploy-remote-components-if-any",children:"Deploy Remote components (if any)"}),"\n",(0,t.jsxs)(n.p,{children:["In general, starting from the deployment of the remote components is adviced. Since the kubernetes virtual node won't reach the ",(0,t.jsx)(n.code,{children:"Ready"})," status until all the stack is successfully deployed."]}),"\n",(0,t.jsx)(n.h4,{id:"interlink-api-server",children:"Interlink API server"}),"\n",(0,t.jsxs)(w,{groupId:"scenarios",children:[(0,t.jsxs)(O,{value:"edge",label:"Edge node",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"For this deployment mode the remote host has to allow the kubernetes cluster to connect to the Oauth2 proxy service port (30443 if you use the automatic script for installation)"})}),(0,t.jsx)(n.p,{children:"You first need to initialize an OIDC client with you Identity Provider (IdP)."}),(0,t.jsxs)(n.p,{children:["Since any OIDC provider working with ",(0,t.jsx)(n.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/",children:"OAuth2 Proxy"})," tool will do the work, we are going to put the configuration for a generic OIDC identity provider in this cookbook. Nevertheless you can find more detailed on dedicated pages with instructions ready for ",(0,t.jsx)(n.a,{href:"./guides/deploy-interlink#create-an-oauth-github-app",children:"GitHub"}),", ",(0,t.jsx)(n.a,{href:"./guides/oidc-IAM",children:"EGI checkin"}),", ",(0,t.jsx)(n.a,{href:"./guides/oidc-IAM",children:"INFN IAM"}),"."]}),(0,t.jsxs)(n.p,{children:["First of all download the ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interLink/releases",children:"latest release"})," of the interLink installer:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export VERSION=0.3.3\nwget -O interlink-installer https://github.com/interTwin-eu/interLink/releases/download/$VERSION/interlink-installer_Linux_amd64\nchmod +x interlink-installer\n"})}),(0,t.jsx)(n.p,{children:"Create a template configuration with the init option:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p interlink\n./interlink-installer --init --config ./interlink/.installer.yaml\n"})}),(0,t.jsxs)(n.p,{children:["The configuration file should be filled as followed. This is the case where the ",(0,t.jsx)(n.code,{children:"my-node"})," will contact an edge service that will be listening on ",(0,t.jsx)(n.code,{children:"PUBLIC_IP"})," and ",(0,t.jsx)(n.code,{children:"API_PORT"})," authenticating requests from an OIDC provider ",(0,t.jsx)(n.code,{children:"https://my_oidc_idp.com"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="./interlink/.installer.yaml"',children:'interlink_ip: PUBLIC_IP\ninterlink_port: API_PORT\ninterlink_version: 0.3.3\nkubelet_node_name: my-node\nkubernetes_namespace: interlink\nnode_limits:\n    cpu: "1000"\n    # MEMORY in GB\n    memory: 25600\n    pods: "100"\noauth:\n  provider: oidc\n  issuer: https://my_oidc_idp.com/\n  scopes:\n    - "openid"\n    - "email"\n    - "offline_access"\n    - "profile"\n  audience: interlink\n  grant_type: authorization_code\n  group_claim: groups\n  group: "my_vk_allowed_group"\n  token_url: "https://my_oidc_idp.com/token"\n  device_code_url: "https://my_oidc_idp/auth/device"\n  client_id: "oidc-client-xx"\n  client_secret: "xxxxxx"\ninsecure_http: true\n'})}),(0,t.jsx)(n.p,{children:"Now you are ready to start the OIDC authentication flow to generate all your manifests and configuration files for the interLink components. To do so, just execute the installer:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./interlink-installer --config ./interlink/.installer.yaml --output-dir ./interlink/manifests/\n"})}),(0,t.jsx)(n.p,{children:"Install Oauth2-Proxy and interLink API server services and configurations with:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod +x ./interlink/manifests/interlink-remote.sh\n./interlink/manifests/interlink-remote.sh install\n"})}),(0,t.jsx)(n.p,{children:"Then start the services with:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./interlink/manifests/interlink-remote.sh start\n"})}),(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"stop"})," command you can stop the service. By default logs are store in ",(0,t.jsx)(n.code,{children:"~/.interlink/logs"}),", checkout there for any error before moving to the next step."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"N.B."})," you can look the oauth2_proxy configuration parameters looking into the ",(0,t.jsx)(n.code,{children:"interlink-remote.sh"})," script."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"N.B."})," logs (expecially if in verbose mode) can become pretty huge, consider to implement your favorite rotation routine for all the logs in ",(0,t.jsx)(n.code,{children:"~/.interlink/logs/"})]})]}),(0,t.jsx)(O,{value:"incluster",label:"In-cluster",default:!0,children:(0,t.jsxs)(n.p,{children:["Go directly to ",(0,t.jsx)(n.a,{href:"Cookbook#test-and-debug",children:'"Test and debugging tips"'}),". The selected scenario does not expect you to do anything here."]})}),(0,t.jsx)(O,{value:"tunnel",label:"Tunneled",children:(0,t.jsx)(n.p,{children:"COMING SOON..."})})]}),"\n",(0,t.jsx)(n.h4,{id:"plugin-service",children:"Plugin service"}),"\n",(0,t.jsxs)(w,{groupId:"scenarios",children:[(0,t.jsx)(O,{value:"edge",label:"Edge node",children:(0,t.jsxs)(w,{groupId:"plugins",children:[(0,t.jsxs)(O,{value:"docker",label:"Docker",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create utility folders:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="$HOME/.interlink/config/plugin-config.yaml"',children:'## Multi user host\nSocket: "unix:///home/myusername/.plugin.sock"\nInterlinkPort: "0"\nSidecarPort: "0"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: false\nErrorsOnlyLogging: false\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"N.B."})," Depending on wheter you edge is single user or not, you should know by previous steps which section to uncomment here."]}),"\n",(0,t.jsxs)(n.li,{children:["More on configuration options at ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/releases",children:"latest release"})," binary in ",(0,t.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})," for either GPU host or CPU host (tags ending with ",(0,t.jsx)(n.code,{children:"no-GPU"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the logs in ",(0,t.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,t.jsxs)(O,{value:"slurm",label:"SLURM",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create utility folders"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a configuration file (",(0,t.jsxs)(n.strong,{children:["remember to substitute ",(0,t.jsx)(n.code,{children:"/home/username/"})," with your actual home path"]}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="./interlink/manifests/plugin-config.yaml"',children:'Socket: "unix:///home/myusername/.plugin.sock"\nInterlinkPort: "0"\nSidecarPort: "0"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: false\nErrorsOnlyLogging: false\nSbatchPath: "/usr/bin/sbatch"\nScancelPath: "/usr/bin/scancel"\nSqueuePath: "/usr/bin/squeue"\nSingularityPrefix: ""\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["More on configuration options at ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/releases",children:"latest release"})," binary in ",(0,t.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export PLUGIN_VERSION=0.3.8\nwget -O $HOME/.interlink/bin/plugin https://github.com/interTwin-eu/interlink-slurm-plugin/releases/download/${PLUGIN_VERSION}/interlink-sidecar-slurm_Linux_x86_64 \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export SLURMCONFIGPATH=$PWD/interlink/manifests/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the logs in ",(0,t.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport SLURMCONFIGPATH=$PWD/interlink/manifests/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,t.jsx)(O,{value:"kubernetes",label:"Kubernetes",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"KUBERNTES PLUGIN COMING SOOON... CONTACT US FOR TEST INSTRUCTIONS"})})})]})}),(0,t.jsx)(O,{value:"incluster",label:"In-cluster",default:!0,children:(0,t.jsxs)(n.p,{children:["Go directly to ",(0,t.jsx)(n.a,{href:"Cookbook#test-and-debug",children:'"Test and debugging tips"'}),". The selected scenario does not expect you to do anything here."]})}),(0,t.jsx)(O,{value:"tunnel",label:"Tunneled",children:(0,t.jsx)(n.p,{children:"COMING SOON..."})})]}),"\n",(0,t.jsx)(n.h4,{id:"test-interlink-stack-health",children:"Test interLink stack health"}),"\n",(0,t.jsx)(n.p,{children:"interLink comes with a call that can be used to monitor the overall status of both interlink server and plugins, at once."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -v --unix-socket ${HOME}/.interlink.sock  http://unix/pinglink\n"})}),"\n",(0,t.jsx)(n.p,{children:"This call will return the status of the system and its readiness to submit jobs."}),"\n",(0,t.jsx)(n.h3,{id:"deploy-kubernetes-components",children:"Deploy Kubernetes components"}),"\n",(0,t.jsxs)(n.p,{children:["The deployment of the Kubernetes components are managed by the official ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart",children:"HELM chart"}),". Depending on the scenario you selected, there might be additional operations to be done."]}),"\n",(0,t.jsxs)(w,{groupId:"scenarios",children:[(0,t.jsxs)(O,{value:"edge",label:"Edge node",children:[(0,t.jsxs)(n.p,{children:["You can now install the helm chart with the preconfigured (by the installer script) helm values in ",(0,t.jsx)(n.code,{children:"./interlink/manifests/values.yaml"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" helm upgrade --install \\\n  --create-namespace \\\n  -n interlink \\\n  my-node \\\n  oci://ghcr.io/intertwin-eu/interlink-helm-chart/interlink \\\n  --values ./interlink/manifests/values.yaml \n"})}),(0,t.jsxs)(n.p,{children:["You can fix the ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart/blob/main/interlink/Chart.yaml#L18",children:"version of the chart"})," by using the ",(0,t.jsx)(n.code,{children:"--version"})," option."]})]}),(0,t.jsxs)(O,{value:"incluster",label:"In-cluster",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create an helm values file:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'nodeName: interlink-with-socket\n\nplugin:\n  enabled: true\n  image: "plugin docker image here"\n  command: ["/bin/bash", "-c"]\n  args: ["/app/plugin"]\n  config: |\n    your plugin\n    configuration\n    goes here!!!\n  socket: unix:///var/run/plugin.sock\n\ninterlink:\n  enabled: true\n  socket: unix:///var/run/interlink.sock\n'})}),(0,t.jsxs)(n.p,{children:["Eventually deploy the latest release of the official ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart",children:"helm chart"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install --create-namespace -n interlink my-virtual-node oci://ghcr.io/intertwin-eu/interlink-helm-chart/interlink --values ./values.yaml\n"})}),(0,t.jsxs)(n.p,{children:["You can fix the ",(0,t.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart/blob/main/interlink/Chart.yaml#L18",children:"version of the chart"})," by using the ",(0,t.jsx)(n.code,{children:"--version"})," option."]})]}),(0,t.jsx)(O,{value:"tunnel",label:"Tunneled",children:(0,t.jsx)(n.p,{children:"COMING SOON..."})})]}),"\n",(0,t.jsx)(n.p,{children:"Whenever you see the node ready, you are good to go!"}),"\n",(0,t.jsx)(n.p,{children:"To start debugging in case of problems we suggest starting from the pod containers logs!"}),"\n",(0,t.jsx)(n.h2,{id:"test-the-setup",children:"Test the setup"}),"\n",(0,t.jsxs)(n.p,{children:["Please find a demo pod to test your setup ",(0,t.jsx)(n.a,{href:"./guides/develop-a-plugin#lets-test-is-out",children:"here"}),"."]})]})}function $(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(7294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);