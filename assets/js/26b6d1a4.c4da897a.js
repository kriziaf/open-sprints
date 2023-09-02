"use strict";(self.webpackChunkopen_sprints=self.webpackChunkopen_sprints||[]).push([[6261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1739:(e,t,a)=>{a.d(t,{Z:()=>n});const n={Akita:{id:"akita",emoji:"\ud83d\ude0a",goal_statement:"Enabling Async Work using Github Pages and CSS Styled Templates",project_tags:["Development","Github","Docusaurus","Documentation"],headline:"Project Akita: Implement and Build Docusaurus CMS Site",description:"Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons",level_of_difficulty:"Beginner",roles:["HTML and CSS Frontend Developer","Content Designer"]},beagle:{id:"beagle",emoji:"\ud83d\ude0e",goal_statement:"Launch a Reusable Component Library on Storybook",project_tags:["Development","Design","Github","DesignSystem","Figma"],headline:"Project Beagle: Hacking A Design System Component Library",description:"Join this squad to build a component libraries to be created on Figma and deployed on Storybook. This Design System demo site will be developed for the WeSparkle Brand.",level_of_difficulty:"Intermediate",roles:["Designer","React Developer"]}}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},2656:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);const r="container_hhg0",o="tagList_Fwf8",l=e=>{let{goalStatement:t,projectTags:a}=e;const l=a.map((e=>n.createElement("li",{key:e},"#",e)));return n.createElement("div",{className:r},t,n.createElement("ul",{className:o},l))}},7988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>b,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(2656),l=a(4866),i=a(5162),s=a(1739);const u={toc:[{value:"Summary",id:"summary",level:2},{value:"Project Name Trivia",id:"project-name-trivia",level:2},{value:"Work Plan Overview",id:"work-plan-overview",level:2},{value:"Deliverable",id:"deliverable",level:3},{value:"Current State",id:"current-state",level:3},{value:"Team Goal",id:"team-goal",level:3},{value:"Proposal",id:"proposal",level:2},{value:"Constraints and Challenges",id:"constraints-and-challenges",level:2}]},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("br",null),(0,r.kt)("h3",null,o.headline),(0,r.kt)("p",null,o.description),(0,r.kt)("p",null,(0,r.kt)("u",null,"Level of Difficulty: ",(0,r.kt)("span",null,o.level),(0,r.kt)("br",null),"Role: ",(0,r.kt)("span",null,o.roles.join(", ")))),(0,r.kt)("br",null),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Akita the dog",src:a(6316).Z,width:"600",height:"400"}))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"project-name-trivia"},"Project Name Trivia"),(0,r.kt)("p",null,"This feature is named after the Akita dog."),(0,r.kt)("p",null,"The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for\ntheir dignity, courage, and loyalty. In their native land, they're venerated as family\nprotectors and symbols of good health, happiness, and long life."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"work-plan-overview"},"Work Plan Overview"),(0,r.kt)("h3",{id:"deliverable"},"Deliverable"),(0,r.kt)("p",null,"Develop a documentation site for Open Sprints, a collaborative workspace for digital content editors, hackathon participants (aspiring designers and developers) and experienced mentors."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"current-state"},"Current State"),(0,r.kt)("p",null,"The landing page is in pre-launch phase. It contains an event launch messaging that enables participation from volunteers (quick definition, roadmap, get involved). Outside of the landing page, Open Sprints is a community hackathon event that has not launched yet."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"team-goal"},"Team Goal"),(0,r.kt)("p",null,"Open Sprints mission is to teach early-career techies gain confidence in building within an agile-driven environment.\u2028"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Open Sprints landing page may have gaps in the experience. Ensure that the experience has a way for volunteer and mentors to sign up and so that partners also understand the overall mission and vision of both the community event and the long term goals of the org."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Ultimately, our call to action is to align the messaging to different set of target audience:"),(0,r.kt)("p",null," 1) enable application process for project mentors "),(0,r.kt)("p",null," 2) attract volunteers who will be maintainers of the site (Markdown content editors, PR Reviews, General Maintenance) "),(0,r.kt)("p",null," 3) provide a way for participants to join projects and in-person workathon. "),(0,r.kt)("h2",{id:"constraints-and-challenges"},"Constraints and Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic data or Third-party API embedding. The system should be able to string the Airtable Form into the landing page"),(0,r.kt)("li",{parentName:"ul"},"Think ahead for sustainable solutions and downstream maintenance. For example, the contributor page may have to be built manually now, but can be refined later to use Airtable gallery view embedding on a page "),(0,r.kt)("li",{parentName:"ul"},"Tech team should be able to plan the maturity path and phase what's MVP and what's beyond scope for these experiences.")))}p.isMDXComponent=!0;const d={id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},m=void 0,b={unversionedId:"projects/akita/projects-akita",id:"projects/akita/projects-akita",title:"",description:"<Banner",source:"@site/docs/projects/akita/akita.mdx",sourceDirName:"projects/akita",slug:"/projects/akita/",permalink:"/open-sprints/docs/projects/akita/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"projects-akita",title:"",sidebar_label:"Akita",sidebar_position:1,hide_table_of_contents:!0},sidebar:"projectsSideBar",previous:{title:"Projects",permalink:"/open-sprints/docs/projects/"},next:{title:"Beagle",permalink:"/open-sprints/docs/projects/beagle/"}},f={},h=[],v={toc:h},g="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{goalStatement:s.Z.Akita.goal_statement,projectTags:s.Z.Akita.project_tags,mdxType:"Banner"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"summary",label:"Summary",default:!0,mdxType:"TabItem"},(0,r.kt)(p,{headline:s.Z.Akita.headline,description:s.Z.Akita.description,level:s.Z.Akita.level_of_difficulty,roles:s.Z.Akita.roles,mdxType:"Summary"})),(0,r.kt)(i.Z,{value:"project-assets",label:"Project Assets",default:!0,mdxType:"TabItem"},"Feature Links"),(0,r.kt)(i.Z,{value:"contributors",label:"Contributors",mdxType:"TabItem"},"Figma Layouts")))}k.isMDXComponent=!0},6316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/akita-6d3201bf81cf506b768d96d30d62d03d.jpeg"}}]);