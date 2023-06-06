"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[4193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=o,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},s="Deploy your site",i={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/open-sprints/docs/tutorial-basics/deploy-your-site",draft:!1,editUrl:"https://github.com/femmecubator/open-sprints/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/open-sprints/docs/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/open-sprints/docs/tutorial-basics/congratulations"}},l={},p=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,o.kt)("p",null,"Docusaurus is a ",(0,o.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,o.kt)("p",null,"It builds your site as simple ",(0,o.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,o.kt)("h2",{id:"build-your-site"},"Build your site"),(0,o.kt)("p",null,"Build your site ",(0,o.kt)("strong",{parentName:"p"},"for production"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("p",null,"The static files are generated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,o.kt)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,o.kt)("p",null,"Test your production build locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,o.kt)("p",null,"You can now deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,o.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,o.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);