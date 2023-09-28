"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[1124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1739:(e,t,r)=>{r.d(t,{Z:()=>a});const a={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]},corgi:{id:"corgi",emoji:"\ud83e\udd17",goal_statement:"Mapping User Journey for Project Aggregator Landing Page",project_tags:["Research","Product Development"],headline:"Project Corgi: Mapping User Journey for Project Aggregator Landing Page",description:"Refine and future proof the site\u2019s features driven by UX research methods like User Journey, JBTD and Empathy Maps",level_of_difficulty:"Intermediate",roles:["UX Designer","UX Researcher"]},dachshund:{id:"dachshund",emoji:"\ud83d\ude07",goal_statement:"Creating Themeable Design Tokens using Figma Variables",project_tags:["UI Design","DesignSystem","Figma"],headline:"Project Dachshund: Creating Themeable Design Tokens",description:"Some description",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]},eurasier:{id:"eurasier",emoji:"\ud83e\udd7a",goal_statement:"Learning Accessibility as a Designer",project_tags:["Development"],headline:"Project Eurasier: Learning Accessibility as a Designer",description:"Some description",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]}}},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(7462),n=r(7294),i=r(6010),o=r(2466),l=r(6550),s=r(1980),u=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var v=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function j(e){const t=(0,v.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},2656:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n="container_hhg0",i="tagList_Fwf8",o=e=>{let{goalStatement:t,projectTags:r}=e;const o=r.map((e=>a.createElement("li",{key:e},"#",e)));return a.createElement("div",{className:n},t,a.createElement("ul",{className:i},o))}},4656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var a=r(7462),n=(r(7294),r(3905)),i=r(2656),o=r(4866),l=r(5162),s=r(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("br",null),(0,n.kt)("h3",null,r.headline),(0,n.kt)("p",null,r.description),(0,n.kt)("p",null,(0,n.kt)("u",null,"Level of Difficulty: ",(0,n.kt)("span",null,r.level),(0,n.kt)("br",null),"Role: ",(0,n.kt)("span",null,r.roles.join(", ")))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,n.kt)("p",null,"Suscipit est quae natus quis voluptas. Quibusdam aperiam fuga aut."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,n.kt)("h3",{id:"deliverable"},"Deliverable"),(0,n.kt)("p",null,"Est sint eius omnis omnis. Eos cupiditate cupiditate exercitationem. Et nisi nostrum aliquid eius at aut illo."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"current-state"},"Current State"),(0,n.kt)("p",null,"Quia magni porro facilis quo maxime. Possimus aut eveniet fugit enim. Pariatur voluptatem nulla totam at eligendi aliquid consequatur accusamus. Et et non assumenda voluptatem beatae dolorem similique adipisci velit. Occaecati doloribus id est quasi ea. Est voluptatem quos magnam totam voluptatum quisquam aut omnis dolores."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"team-goal"},"Team Goal"),(0,n.kt)("p",null,"Perferendis suscipit repellat. Sint iusto minima eum. Delectus accusamus enim aut quae quisquam omnis quo. Maxime nam impedit quis distinctio eum rerum accusamus sed reiciendis."),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"proposal"},"Proposal"),(0,n.kt)("p",null,"Et et magni qui molestiae distinctio. Sunt laborum molestiae odit cum vel delectus molestiae eos eum. Nobis quam ut inventore ducimus quidem culpa incidunt. Rerum modi in esse."),(0,n.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,n.kt)("p",null,"Voluptatem illo odit nam qui. Unde quis labore magnam rerum. Fuga deleniti repudiandae debitis non tempora omnis. Velit omnis inventore aliquid voluptatem. Eveniet laboriosam delectus at."))}d.isMDXComponent=!0;const m={id:"projects-eurasier",title:"",sidebar_label:"Eurasier",sidebar_position:5,hide_table_of_contents:!0},p=void 0,b={unversionedId:"projects/eurasier/projects-eurasier",id:"projects/eurasier/projects-eurasier",title:"",description:"<Banner",source:"@site/docs/projects/eurasier/eurasier.mdx",sourceDirName:"projects/eurasier",slug:"/projects/eurasier/",permalink:"/open-sprints/docs/projects/eurasier/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"projects-eurasier",title:"",sidebar_label:"Eurasier",sidebar_position:5,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Dachshund",permalink:"/open-sprints/docs/projects/dachshund/"},next:{title:"Templates",permalink:"/open-sprints/docs/templates/"}},f={},v=[],g={toc:v},h="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{goalStatement:s.Z.eurasier.goal_statement,projectTags:s.Z.eurasier.project_tags,mdxType:"Banner"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,n.kt)(d,{headline:s.Z.eurasier.headline,description:s.Z.eurasier.description,level:s.Z.eurasier.level_of_difficulty,roles:s.Z.eurasier.roles,mdxType:"Summary"})),(0,n.kt)(l.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Coming soon!"),(0,n.kt)(l.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Coming soon!")))}y.isMDXComponent=!0}}]);