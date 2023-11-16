"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:12},o="Upgrading from 3.x to 4.x",s={unversionedId:"upgrade-4-0",id:"upgrade-4-0",title:"Upgrading from 3.x to 4.x",description:"EntityGraphQL aims to respect Semantic Versioning, meaning version 4.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x.",source:"@site/docs/upgrade-4-0.md",sourceDirName:".",slug:"/upgrade-4-0",permalink:"/docs/upgrade-4-0",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/upgrade-4-0.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Upgrading from 4.x to 5.x",permalink:"/docs/upgrade-5-0"}},l={},p=[{value:"Renamed Classes",id:"renamed-classes",level:2},{value:"<code>AddMutationsFrom</code> Argument Changes",id:"addmutationsfrom-argument-changes",level:2},{value:"<code>DateTimeOffset</code> in Default Schema",id:"datetimeoffset-in-default-schema",level:2},{value:"<code>SchemaBuilderOptions.IgnoreTypes</code> Change",id:"schemabuilderoptionsignoretypes-change",level:2},{value:"Field Extensions",id:"field-extensions",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrading-from-3x-to-4x"},"Upgrading from 3.x to 4.x"),(0,r.kt)("p",null,"EntityGraphQL aims to respect ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),", meaning version 4.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see the full changelog which includes other changes and bug fixes as well as links back to GitHub issues/MRs with more information ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/CHANGELOG.md"},"here on GitHub"),".")),(0,r.kt)("h2",{id:"renamed-classes"},"Renamed Classes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MutationArgumentsAttribute")," renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLArgumentsAttribute")," and is used with subscriptions or mutaiton method arguments. This should be a simple find and replace."),(0,r.kt)("h2",{id:"addmutationsfrom-argument-changes"},(0,r.kt)("inlineCode",{parentName:"h2"},"AddMutationsFrom")," Argument Changes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddMutationsFrom")," and friends now take an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilderMethodOptions")," object to configure how mutations are built, following the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilderOptions")," used elsewhere. The previous overrides have been removed. Important defaults for ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilderMethodOptions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"bool AutoCreateInputTypes = false; // Any input types seen will be added to the schema if true\nbool AddNonAttributedMethods = false; // GraphQLMutationAttributes are still required by default\nbool AutoCreateNewComplexTypes = true; // Return types of mutations will be added to the schema\n")),(0,r.kt)("h2",{id:"datetimeoffset-in-default-schema"},(0,r.kt)("inlineCode",{parentName:"h2"},"DateTimeOffset")," in Default Schema"),(0,r.kt)("p",null,"When you create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaProvider<T>"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeOffset")," Dotnet type is now added as a default scalar type. It is a very common used type in EF contexts and trips up new users. If you previously were adding it as a scalar type you no longer need to. Or if you'd like to add it differently (like map it to Date) you can"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddGraphQLSchema<DemoContext>(options =>\n{\n    options.PreBuildSchemaFromContext = (schema) =>\n    {\n        schema.RemoveType<DateTimeOffset>();\n        // add it how you want\n    };\n});\n")),(0,r.kt)("h2",{id:"schemabuilderoptionsignoretypes-change"},(0,r.kt)("inlineCode",{parentName:"h2"},"SchemaBuilderOptions.IgnoreTypes")," Change"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilderOptions.IgnoreTypes")," Now uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". It is a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashSet<Type>")," now to avoid confusion of which name to use (full name space or not)."),(0,r.kt)("h2",{id:"field-extensions"},"Field Extensions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ProcessExpressionSelection")," used in Field Extentions now takes ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary<IFieldKey, CompiledField>")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectionExpressions")," parameter. ",(0,r.kt)("inlineCode",{parentName:"p"},"IFieldKey")," is the field name and the schema type the field belongs too. Helps when dealing with inline fragments/union types where we may have multiple fields with the same name from different types."))}u.isMDXComponent=!0}}]);