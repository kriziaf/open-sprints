"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=c(r),b=o,f=i["".concat(p,".").concat(b)]||i[b]||m[b]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[i]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["slorber"],tags:["docusaurus"]},s=void 0,l={permalink:"/open-sprints/blog/mdx-blog-post",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/open-sprints/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/open-sprints/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/open-sprints/blog/long-blog-post"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},i="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Blog posts support ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,o.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);