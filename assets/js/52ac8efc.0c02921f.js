"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[7108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1739:(e,t,n)=>{n.d(t,{Z:()=>a});const a={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","DesignSystem"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Github","DesignSystem"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]}}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function j(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},2656:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="container_hhg0",o="tagList_Fwf8",l=e=>{let{goalStatement:t,projectTags:n}=e;const l=n.map((e=>a.createElement("li",{key:e},"#",e)));return a.createElement("div",{className:r},t,a.createElement("ul",{className:o},l))}},7546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>v,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),o=n(2656),l=n(4866),i=n(5162);const s={toc:[{value:"Summary",id:"summary",level:2},{value:"Timeline",id:"timeline",level:3},{value:"Contributors",id:"contributors",level:3}]},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("br",null),(0,r.kt)("h3",null,o.headline),(0,r.kt)("p",null,o.description),(0,r.kt)("p",null,(0,r.kt)("u",null,"Level of Difficulty: ",(0,r.kt)("span",null,o.level),(0,r.kt)("br",null),"Role: ",(0,r.kt)("span",null,o.roles.join(", ")))),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A beagle",src:n(3261).Z,width:"1600",height:"1057"}))),(0,r.kt)("p",null,"This feature is named after the Beagle."),(0,r.kt)("p",null,"Beagle, small hound dog breed popular as both a pet and a hunter. It looks like a small foxhound and has large brown eyes, hanging ears, and a short coat, usually a combination of black, tan, and white. The Beagle is a solidly built dog, heavy for its height. It generally excels as a rabbit hunter and is typically an alert, affectionate dog."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"timeline"},"Timeline"),(0,r.kt)("p",null,"Accordions are used within a card component, and contains a main icon button on the left hand side, and is available in heading size: H5. Content within an accordion is configurable to have body text, expandable list items, or data tables."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Accordions are used within a card component, and contains a main icon button on the left hand side, and is available in heading size: H5. Content within an accordion is configurable to have body text, expandable list items, or data tables."))}c.isMDXComponent=!0;var d=n(1739);const p={id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},b=void 0,m={unversionedId:"projects/beagle/projects-beagle",id:"projects/beagle/projects-beagle",title:"",description:"<Banner",source:"@site/docs/projects/beagle/beagle.mdx",sourceDirName:"projects/beagle",slug:"/projects/beagle/",permalink:"/open-sprints/docs/projects/beagle/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Akita",permalink:"/open-sprints/docs/projects/akita/"},next:{title:"Templates",permalink:"/open-sprints/docs/templates/"}},f={},g=[],h={toc:g},y="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{goalStatement:d.Z.beagle.goal_statement,projectTags:d.Z.beagle.project_tags,mdxType:"Banner"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,r.kt)(c,{headline:d.Z.beagle.headline,description:d.Z.beagle.description,level:d.Z.beagle.level_of_difficulty,roles:d.Z.beagle.roles,mdxType:"Summary"})),(0,r.kt)(i.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Feature Links"),(0,r.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Figma Layouts")))}v.isMDXComponent=!0},3261:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/beagle-51a99c39f67da5506297fde4eda03e7d.jpeg"}}]);