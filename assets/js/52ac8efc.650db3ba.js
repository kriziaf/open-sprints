"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[7108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1739:(e,t,r)=>{r.d(t,{Z:()=>a});const a={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","Product Development"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Creating Themeable Design Tokens using Figma Variables",project_tags:["UI Design","DesignSystem","Figma"],headline:"Project Dachshund: Creating Themeable Design Tokens",description:"Some description",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Learning Accessibility as a Designer",project_tags:["Development"],headline:"Project Eurasier: Learning Accessibility as a Designer",description:"Some description",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]}}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},2656:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294);const n="container_hhg0",o="tagList_Fwf8",l=e=>{let{goalStatement:t,projectTags:r}=e;const l=r.map((e=>a.createElement("li",{key:e},"#",e)));return a.createElement("div",{className:n},t,a.createElement("ul",{className:o},l))}},7546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>b,toc:()=>f});var a=r(7462),n=(r(7294),r(3905)),o=r(2656),l=r(4866),i=r(5162);const s={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview\u200b",id:"work-plan-overview",level:2},{value:"Deliverable\u200b",id:"deliverable",level:3},{value:"Current State\u200b",id:"current-state",level:3},{value:"Team Goal\u200b",id:"team-goal",level:3},{value:"Proposal\u200b",id:"proposal",level:2},{value:"Constraints\u200b",id:"constraints",level:2},{value:"Audience",id:"audience",level:2}]},u="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("br",null),(0,n.kt)("h3",null,o.headline),(0,n.kt)("p",null,o.description),(0,n.kt)("p",null,(0,n.kt)("u",null,"Level of Difficulty: ",(0,n.kt)("span",null,o.level),(0,n.kt)("br",null),"Role: ",(0,n.kt)("span",null,o.roles.join(", ")))),(0,n.kt)("br",null),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A beagle",src:r(6107).Z,width:"1600",height:"1057"}))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,n.kt)("p",null,"This feature is named after the Beagle."),(0,n.kt)("p",null,"Beagle, a small hound dog breed popular as both a pet and a hunter. It looks like a small foxhound and has large brown eyes, hanging ears, and a short coat, usually a combination of black, tan, and white. The Beagle is a solidly built dog, heavy for its height. It generally excels as a rabbit hunter and is typically an alert, affectionate dog."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview\u200b"),(0,n.kt)("h3",{id:"deliverable"},"Deliverable\u200b"),(0,n.kt)("p",null,"Create a demo Component Library that is deployed on Storybook for WeSparkle.\nMVP build requires an estimated number 5 components, where a developer owns one component from build, test, document and publish."),(0,n.kt)("h3",{id:"current-state"},"Current State\u200b"),(0,n.kt)("p",null,"There's initial work on a Figma document that stores a collection of design data with global colors and typography that will serve as the stylesheet of the components. In the DS world, this is called a \u201cfoundations document\u201d. This document should be finalized in Figma exported as json code and published on a Design Token repo."),(0,n.kt)("h3",{id:"team-goal"},"Team Goal\u200b"),(0,n.kt)("p",null,"Expand frontend development and design skills by learning the Design System process"),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"proposal"},"Proposal\u200b"),(0,n.kt)("p",null,"The brand we are using for this round is WeSparkle, a startup geared towards women entrepreneurs. "),(0,n.kt)("p",null,"Ultimately, our call to action is to build a WeSparkle Theme and share this to future clients needing to build a simple component library."),(0,n.kt)("p",null,"The deliverable is a working Storybook that can be used for future Design System projects."),(0,n.kt)("h2",{id:"constraints"},"Constraints\u200b"),(0,n.kt)("p",null," 1) Pre-work is needed for design to export the design tokens for color and type styles. Estimated ~1 month time is needed for pre-work. "),(0,n.kt)("p",null," 2) Provide swimlanes for the limited amount of time for component health. What is the actual time that it takes to ensure that the build is stable? "),(0,n.kt)("h2",{id:"audience"},"Audience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"React and Frontend Developers - with interest in frontend development and have React.JS knowledge"),(0,n.kt)("li",{parentName:"ul"},"UI Designers - with visual design skills, knows how to use Figma and flex their UI skills")))}c.isMDXComponent=!0;var d=r(1739);const p={id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},m=void 0,b={unversionedId:"projects/beagle/projects-beagle",id:"projects/beagle/projects-beagle",title:"",description:"<Banner",source:"@site/docs/projects/beagle/beagle.mdx",sourceDirName:"projects/beagle",slug:"/projects/beagle/",permalink:"/open-sprints/docs/projects/beagle/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"projects-beagle",title:"",sidebar_label:"Beagle",sidebar_position:2,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Akita",permalink:"/open-sprints/docs/projects/akita/"},next:{title:"Corgi",permalink:"/open-sprints/docs/projects/corgi/"}},g={},f=[],h={toc:f},v="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(v,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{goalStatement:d.Z.beagle.goal_statement,projectTags:d.Z.beagle.project_tags,mdxType:"Banner"}),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,n.kt)(c,{headline:d.Z.beagle.headline,description:d.Z.beagle.description,level:d.Z.beagle.level_of_difficulty,roles:d.Z.beagle.roles,mdxType:"Summary"})),(0,n.kt)(i.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Coming soon!"),(0,n.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Coming soon!")))}y.isMDXComponent=!0},6107:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/beagle-51a99c39f67da5506297fde4eda03e7d.jpeg"}}]);