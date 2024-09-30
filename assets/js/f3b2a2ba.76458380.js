"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[619],{2363:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>P,contentTitle:()=>T,default:()=>S,frontMatter:()=>w,metadata:()=>$,toc:()=>H});var l=i(5893),t=i(1151),r=i(7294),s=i(512),o=i(2466),a=i(6550),c=i(469),h=i(1980),d=i(7392),u=i(12);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:i}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:i,attributes:l,default:t}}=e;return{value:n,label:i,attributes:l,default:t}}))}(i);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function x(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:i}=e;const l=(0,a.k6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,h._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,t=g(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=i.find((e=>e.default))??i[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[a,h]=j({queryString:i,groupId:l}),[d,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,u.Nk)(i);return[l,(0,r.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:l}),m=(()=>{const e=a??d;return x({value:e,tabValues:t})?e:null})();(0,c.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var k=i(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),l=a[i].value;l!==t&&(h(n),r(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function y(e){let{lazy:n,children:i,selectedValue:t}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=m(e);return(0,l.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,l.jsx)(f,{...e,...n}),(0,l.jsx)(y,{...e,...n})]})}function E(e){const n=(0,k.Z)();return(0,l.jsx)(v,{...e,children:p(e.children)},String(n))}const O={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:i,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(O.tabItem,t),hidden:i,children:n})}var N=i(9965),M=i(4996);const w={sidebar_position:3},T="Cookbook",$={id:"Cookbook",title:"Cookbook",description:"These are practical recipes for different deployment scenarios.",source:"@site/docs/Cookbook.mdx",sourceDirName:".",slug:"/Cookbook",permalink:"/interLink/docs/Cookbook",draft:!1,unlisted:!1,editUrl:"https://github.com/interTwin-eu/interLink/docs/Cookbook.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/interLink/docs/arch"},next:{title:"Guides",permalink:"/interLink/docs/category/guides"}},P={},H=[{value:"Install interLink",id:"install-interlink",level:2},{value:"Deploy Remote components (if any)",id:"deploy-remote-components-if-any",level:3},{value:"Interlink API server",id:"interlink-api-server",level:4},{value:"Plugin service",id:"plugin-service",level:4},{value:"Test interLink stack health",id:"test-interlink-stack-health",level:4},{value:"Deploy Kubernetes components",id:"deploy-kubernetes-components",level:3},{value:"Test the setup",id:"test-the-setup",level:2}];function C(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"cookbook",children:"Cookbook"}),"\n",(0,l.jsx)(n.p,{children:"These are practical recipes for different deployment scenarios."}),"\n",(0,l.jsx)(n.p,{children:"Select here the tab with the scenario you want deploy:"}),"\n",(0,l.jsxs)(E,{groupId:"scenarios",children:[(0,l.jsx)(I,{value:"edge",label:"Edge node",children:(0,l.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,M.Z)("/img/scenario-1_light.svg"),dark:(0,M.Z)("/img/scenario-1_dark.svg")}})}),(0,l.jsx)(I,{value:"incluster",label:"In-cluster",default:!0,children:(0,l.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,M.Z)("/img/scenario-2_light.svg"),dark:(0,M.Z)("/img/scenario-2_dark.svg")}})}),(0,l.jsx)(I,{value:"tunnel",label:"Tunneled",children:(0,l.jsx)(N.Z,{alt:"Docusaurus themed image",sources:{light:(0,M.Z)("/img/scenario-3_light.svg"),dark:(0,M.Z)("/img/scenario-3_dark.svg")}})})]}),"\n",(0,l.jsx)(n.p,{children:"Select here the featured plugin you want to try:"}),"\n",(0,l.jsxs)(E,{groupId:"plugins",children:[(0,l.jsx)(I,{value:"docker",label:"Docker",default:!0,children:(0,l.jsx)(n.p,{children:"Offload your pods to a remote machine with Docker engine available"})}),(0,l.jsx)(I,{value:"slurm",label:"SLURM",children:(0,l.jsx)(n.p,{children:"Offload your pods to an HPC SLURM based batch system"})}),(0,l.jsx)(I,{value:"kubernetes",label:"Kubernetes",children:(0,l.jsx)(n.p,{children:"Offload your pods to a remote Kubernetes cluster: COMING SOON\nFor test instructions contact us!"})})]}),"\n",(0,l.jsxs)(n.p,{children:["There are more 3rd-party plugins developed that you can get inspired by or even use out of the box. You can find some ref in the ",(0,l.jsx)(n.a,{href:"guides/deploy-interlink#attach-your-favorite-plugin-or-develop-one",children:"quick start section"})]}),"\n",(0,l.jsx)(n.h2,{id:"install-interlink",children:"Install interLink"}),"\n",(0,l.jsx)(n.h3,{id:"deploy-remote-components-if-any",children:"Deploy Remote components (if any)"}),"\n",(0,l.jsxs)(n.p,{children:["In general, starting from the deployment of the remote components is adviced. Since the kubernetes virtual node won't reach the ",(0,l.jsx)(n.code,{children:"Ready"})," status until all the stack is successfully deployed."]}),"\n",(0,l.jsx)(n.h4,{id:"interlink-api-server",children:"Interlink API server"}),"\n",(0,l.jsxs)(E,{groupId:"scenarios",children:[(0,l.jsxs)(I,{value:"edge",label:"Edge node",children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"For this deployment mode the remote host has to allow the kubernetes cluster to connect to the Oauth2 proxy service port (30443 if you use the automatic script for installation)"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["You first need to initialize an OIDC client with you Identity Provider (IdP).","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Different options. We have instructions ready for ",(0,l.jsx)(n.a,{href:"./guides/deploy-interlink#create-an-oauth-github-app",children:"GitHub"}),", ",(0,l.jsx)(n.a,{href:"./guides/oidc-IAM",children:"EGI checkin"}),", ",(0,l.jsx)(n.a,{href:"./guides/oidc-IAM",children:"INFN IAM"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Any OIDC provider working with ",(0,l.jsx)(n.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/",children:"OAuth2 Proxy"})," tool will do the work though."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Create the ",(0,l.jsx)(n.code,{children:"install.sh"})," utility script through the ",(0,l.jsx)(n.a,{href:"./guides/deploy-interlink#configuring-your-virtual-kubelet-setup",children:"installation utility"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"N.B."})," if your machine is shared with other users, you better indicate a socket as address to communicate with the plugin. Instead of a web URL is enough to insert something like ",(0,l.jsx)(n.code,{children:"unix:///var/run/myplugin.socket"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Install Oauth2-Proxy and interLink API server services as per ",(0,l.jsx)(n.a,{href:"./guides/deploy-interlink#deploy-the-interlink-core-components",children:"Quick start"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["by default logs are store in ",(0,l.jsx)(n.code,{children:"~/.interlink/logs"}),", checkout there for any error before moving to the next step."]}),"\n"]}),"\n"]}),"\n"]})]}),(0,l.jsx)(I,{value:"incluster",label:"In-cluster",default:!0,children:(0,l.jsxs)(n.p,{children:["Go directly to ",(0,l.jsx)(n.a,{href:"Cookbook#test-and-debug",children:'"Test and debugging tips"'}),". The selected scenario does not expect you to do anything here."]})}),(0,l.jsxs)(I,{value:"tunnel",label:"Tunneled",children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"For this installation you need to know which node port is open on the main kubernetes cluster, and that will be used to expose the ssh bastion for the tunnel."})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create utility folders:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Generate a pair of password-less SSH keys:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ecdsa\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ssh-tunnel binary ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interLink/releases/latest",children:"latest release"})," binary in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/bin/ssh-tunnel"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the tunnel"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'CLUSTER_PUBLIC_IP="IP of you cluster where SSH will be exposed"\nSSH_TUNNEL_NODE_PORT="node port where the ssh service will be exposed"\nPRIV_KEY_FILE="path the ssh priv key created above"\n\n$HOME/.interlink/bin/ssh-tunnel  -addr $CLUSTER_PUBLIC_IP:$SSH_TUNNEL_NODE_PORT -keyfile $PRIV_KEY_FILE -user interlink -rport 3000 -lsock plugin.sock  &> $HOME/.interlink/logs/ssh-tunnel.log &\necho $! > $HOME/.interlink/ssh-tunnel.pid     \n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Check the logs in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/logs/ssh-tunnel.log"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/ssh-tunnel.pid)\n\n# restart\n$HOME/.interlink/bin/ssh-tunnel &> $HOME/.interlink/logs/ssh-tunnel.log &\necho $! > $HOME/.interlink/ssh-tunnel.pid     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["at this stage ",(0,l.jsx)(n.strong,{children:"THIS WILL CORRECTLY FAIL"})," until we setup all the stack. So let's go ahead"]}),"\n"]}),"\n"]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"plugin-service",children:"Plugin service"}),"\n",(0,l.jsxs)(E,{groupId:"scenarios",children:[(0,l.jsx)(I,{value:"edge",label:"Edge node",children:(0,l.jsxs)(E,{groupId:"plugins",children:[(0,l.jsxs)(I,{value:"docker",label:"Docker",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="./plugin-config.yaml"',children:'## Multi user host\n# SidecarURL: "unix:///home/myusername/plugin.socket"\n# InterlinkPort: "0"\n# SidecarPort: "0"\n\n## Dedicated edge node\n# InterlinkURL: "http://127.0.0.1"\n# SidecarURL: "http://127.0.0.1"\n# InterlinkPort: "3000"\n# SidecarPort: "4000"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: true\nErrorsOnlyLogging: false\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"N.B."})," Depending on wheter you edge is single user or not, you should know by previous steps which section to uncomment here."]}),"\n",(0,l.jsxs)(n.li,{children:["More on configuration options at ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create utility folders:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/releases",children:"latest release"})," binary in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})," for either GPU host or CPU host (tags ending with ",(0,l.jsx)(n.code,{children:"no-GPU"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Check the logs in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,l.jsxs)(I,{value:"slurm",label:"SLURM",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="./plugin-config.yaml"',children:'## Multi user host\n# SidecarURL: "unix:///home/myusername/plugin.socket"\n# InterlinkPort: "0"\n# SidecarPort: "0"\n\n## Dedicated edge node\n# InterlinkURL: "http://127.0.0.1"\n# SidecarURL: "http://127.0.0.1"\n# InterlinkPort: "3000"\n# SidecarPort: "4000"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: true\nErrorsOnlyLogging: false\nSbatchPath: "/usr/bin/sbatch"\nScancelPath: "/usr/bin/scancel"\nSqueuePath: "/usr/bin/squeue"\nSingularityPrefix: ""\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"N.B."})," Depending on wheter you edge is single user or not, you should know by previous steps which section to uncomment here."]}),"\n",(0,l.jsxs)(n.li,{children:["More on configuration options at ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create utility folders"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/releases",children:"latest release"})," binary in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})," for either GPU host or CPU host (tags ending with ",(0,l.jsx)(n.code,{children:"no-GPU"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Check the logs in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,l.jsx)(I,{value:"kubernetes",label:"Kubernetes",children:(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"KUBERNTES PLUGIN COMING SOOON... CONTACT US FOR TEST INSTRUCTIONS"})})})]})}),(0,l.jsx)(I,{value:"incluster",label:"In-cluster",default:!0,children:(0,l.jsxs)(n.p,{children:["Go directly to ",(0,l.jsx)(n.a,{href:"Cookbook#test-and-debug",children:'"Test and debugging tips"'}),". The selected scenario does not expect you to do anything here."]})}),(0,l.jsx)(I,{value:"tunnel",label:"Tunneled",children:(0,l.jsxs)(E,{groupId:"plugins",children:[(0,l.jsxs)(I,{value:"docker",label:"Docker",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="./plugin-config.yaml"',children:'SidecarURL: "unix:///home/myusername/plugin.socket"\nSidecarPort: "0"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: true\nErrorsOnlyLogging: false\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"N.B."})," you should know by previous steps what to put in place of ",(0,l.jsx)(n.code,{children:"myusername"})," here."]}),"\n",(0,l.jsxs)(n.li,{children:["More on configuration options at ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create utility folders:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-docker-plugin/releases",children:"latest release"})," binary in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})," for either GPU host or CPU host (tags ending with ",(0,l.jsx)(n.code,{children:"no-GPU"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Check the logs in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,l.jsxs)(I,{value:"slurm",label:"SLURM",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a configuration file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="./plugin-config.yaml"',children:'SidecarURL: "unix:///home/myusername/plugin.socket"\nSidecarPort: "0"\n\nCommandPrefix: ""\nExportPodData: true\nDataRootFolder: "/home/myusername/.interlink/jobs/"\nBashPath: /bin/bash\nVerboseLogging: true\nErrorsOnlyLogging: false\nSbatchPath: "/usr/bin/sbatch"\nScancelPath: "/usr/bin/scancel"\nSqueuePath: "/usr/bin/squeue"\nSingularityPrefix: ""\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"N.B."})," you should know by previous steps what to put in place of ",(0,l.jsx)(n.code,{children:"myusername"})," here."]}),"\n",(0,l.jsxs)(n.li,{children:["More on configuration options at ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/blob/main/README.md",children:"official repo"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create utility folders:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.interlink/logs\nmkdir -p $HOME/.interlink/bin\nmkdir -p $HOME/.interlink/config\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Download the ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-slurm-plugin/releases",children:"latest release"})," binary in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/bin/plugin"})," for either GPU host or CPU host (tags ending with ",(0,l.jsx)(n.code,{children:"no-GPU"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Start the plugins passing the configuration that you have just created:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Check the logs in ",(0,l.jsx)(n.code,{children:"$HOME/.interlink/logs/plugin.log"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To kill and restart the process is enough:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# kill\nkill $(cat $HOME/.interlink/plugin.pid)\n\n# restart\nexport INTERLINKCONFIGPATH=$PWD/plugin-config.yaml\n$HOME/.interlink/bin/plugin &> $HOME/.interlink/logs/plugin.log &\necho $! > $HOME/.interlink/plugin.pid\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"Almost there! Now it's time to add this virtual node into the Kubernetes cluster!"})]}),(0,l.jsx)(I,{value:"kubernetes",label:"Kubernetes",children:(0,l.jsx)(n.p,{children:"COMING SOOON..."})})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"test-interlink-stack-health",children:"Test interLink stack health"}),"\n",(0,l.jsx)(n.p,{children:"interLink comes with a call that can be used to monitor the overall status of both interlink server and plugins, at once."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"curl -v $INTERLINK_SERVER_ADDRESS:$INTERLINK_PORT/pinginterlink\n"})}),"\n",(0,l.jsx)(n.p,{children:"This call will return the status of the system and its readiness to submit jobs."}),"\n",(0,l.jsx)(n.h3,{id:"deploy-kubernetes-components",children:"Deploy Kubernetes components"}),"\n",(0,l.jsxs)(n.p,{children:["The deployment of the Kubernetes components are managed by the official ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart",children:"HELM chart"}),". Depending on the scenario you selected, there might be additional operations to be done."]}),"\n",(0,l.jsxs)(E,{groupId:"scenarios",children:[(0,l.jsxs)(I,{value:"edge",label:"Edge node",children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"For this deployment mode the remote host has to allow the kubernetes cluster to connect to the Oauth2 proxy service port (30443 if you use the automatic script for installation)"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Since you might already have followed the installation script steps, you can simply follow the ",(0,l.jsx)(n.a,{href:"./guides/deploy-interlink#deploy-the-interlink-kubernetes-agent-kubeclt-host",children:"Guide"})]}),"\n"]}),(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"If the installation script is not what you are currently used, you can configure the virtual kubelet manually:"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create an helm values file:"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"nodeName: interlink-with-rest\n\ninterlink:\n  address: https://remote_oauth2_proxy_endpoint\n  port: 30443\n\nvirtualNode:\n  CPUs: 1000\n  MemGiB: 1600\n  Pods: 100\n  HTTPProxies:\n    HTTP: null\n    HTTPs: null\nOAUTH:\n  image: ghcr.io/intertwin-eu/interlink/virtual-kubelet-inttw-refresh:latest\n  TokenURL: DUMMY\n  ClientID: DUMMY\n  ClientSecret: DUMMY\n  RefreshToken: DUMMY\n  GrantType: authorization_code\n  Audience: DUMMY\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Substitute the OAuth value accordingly as"}),"\n"]})]}),(0,l.jsxs)(I,{value:"incluster",label:"In-cluster",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create an helm values file:"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:'nodeName: interlink-with-socket\n\nplugin:\n  enabled: true\n  image: "plugin docker image here"\n  command: ["/bin/bash", "-c"]\n  args: ["/app/plugin"]\n  config: |\n    your plugin\n    configuration\n    goes here!!!\n  socket: unix:///var/run/plugin.socket \n\ninterlink:\n  enabled: true\n  socket: unix:///var/run/interlink.socket\n'})})]}),(0,l.jsxs)(I,{value:"tunnel",label:"Tunneled",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create an helm values file:"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="values.yaml"',children:"nodeName: interlink-with-socket\n\ninterlink:\n  enabled: true\n  socket: unix:///var/run/interlink.socket\n\nplugin:\n  address: http://localhost\n\nsshBastion:\n  enabled: true\n  clientKeys:\n    authorizedKey: |\n      ssh-rsa A..........MG0yNvbLfJT+37pw==\n  port: 31021\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"insert the plublic key generated when installing interlink and ssh tunnel service"}),"\n"]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Eventually deploy the latest release of the official ",(0,l.jsx)(n.a,{href:"https://github.com/interTwin-eu/interlink-helm-chart",children:"helm chart"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install --create-namespace -n interlink my-virtual-node oci://ghcr.io/intertwin-eu/interlink-helm-chart/interlink --values ./values.yaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"Whenever you see the node ready, you are good to go!"}),"\n",(0,l.jsx)(n.h2,{id:"test-the-setup",children:"Test the setup"}),"\n",(0,l.jsxs)(n.p,{children:["Please find a demo pod to test your setup ",(0,l.jsx)(n.a,{href:"./guides/develop-a-plugin#lets-test-is-out",children:"here"}),"."]})]})}function S(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(C,{...e})}):C(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var l=i(7294);const t={},r=l.createContext(t);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);