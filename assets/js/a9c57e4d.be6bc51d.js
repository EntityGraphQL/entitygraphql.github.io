"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[2353],{4508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"upgrade-4-0","title":"Upgrading from 3.x to 4.x","description":"EntityGraphQL aims to respect Semantic Versioning, meaning version 4.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x.","source":"@site/docs/upgrade-4-0.md","sourceDirName":".","slug":"/upgrade-4-0","permalink":"/docs/upgrade-4-0","draft":false,"unlisted":false,"editUrl":"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/upgrade-4-0.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Upgrading from 4.x to 5.x","permalink":"/docs/upgrade-5-0"}}');var i=t(4848),o=t(8453);const a={sidebar_position:12},r="Upgrading from 3.x to 4.x",d={},c=[{value:"Renamed Classes",id:"renamed-classes",level:2},{value:"<code>AddMutationsFrom</code> Argument Changes",id:"addmutationsfrom-argument-changes",level:2},{value:"<code>DateTimeOffset</code> in Default Schema",id:"datetimeoffset-in-default-schema",level:2},{value:"<code>SchemaBuilderOptions.IgnoreTypes</code> Change",id:"schemabuilderoptionsignoretypes-change",level:2},{value:"Field Extensions",id:"field-extensions",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"upgrading-from-3x-to-4x",children:"Upgrading from 3.x to 4.x"})}),"\n",(0,i.jsxs)(n.p,{children:["EntityGraphQL aims to respect ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),", meaning version 4.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can see the full changelog which includes other changes and bug fixes as well as links back to GitHub issues/MRs with more information ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/CHANGELOG.md",children:"here on GitHub"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"renamed-classes",children:"Renamed Classes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MutationArgumentsAttribute"})," renamed to ",(0,i.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})," and is used with subscriptions or mutation method arguments. This should be a simple find and replace."]}),"\n",(0,i.jsxs)(n.h2,{id:"addmutationsfrom-argument-changes",children:[(0,i.jsx)(n.code,{children:"AddMutationsFrom"})," Argument Changes"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AddMutationsFrom"})," and friends now take an optional ",(0,i.jsx)(n.code,{children:"SchemaBuilderMethodOptions"})," object to configure how mutations are built, following the ",(0,i.jsx)(n.code,{children:"SchemaBuilderOptions"})," used elsewhere. The previous overrides have been removed. Important defaults for ",(0,i.jsx)(n.code,{children:"SchemaBuilderMethodOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"bool AutoCreateInputTypes = false; // Any input types seen will be added to the schema if true\nbool AddNonAttributedMethods = false; // GraphQLMutationAttributes are still required by default\nbool AutoCreateNewComplexTypes = true; // Return types of mutations will be added to the schema\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"datetimeoffset-in-default-schema",children:[(0,i.jsx)(n.code,{children:"DateTimeOffset"})," in Default Schema"]}),"\n",(0,i.jsxs)(n.p,{children:["When you create a ",(0,i.jsx)(n.code,{children:"SchemaProvider<T>"}),", the ",(0,i.jsx)(n.code,{children:"DateTimeOffset"})," Dotnet type is now added as a default scalar type. It is a very common used type in EF contexts and trips up new users. If you previously were adding it as a scalar type you no longer need to. Or if you'd like to add it differently (like map it to Date) you can"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"services.AddGraphQLSchema<DemoContext>(options =>\n{\n    options.PreBuildSchemaFromContext = (schema) =>\n    {\n        schema.RemoveType<DateTimeOffset>();\n        // add it how you want\n    };\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"schemabuilderoptionsignoretypes-change",children:[(0,i.jsx)(n.code,{children:"SchemaBuilderOptions.IgnoreTypes"})," Change"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SchemaBuilderOptions.IgnoreTypes"})," Now uses ",(0,i.jsx)(n.code,{children:"Type"})," instead of ",(0,i.jsx)(n.code,{children:"string"}),". It is a ",(0,i.jsx)(n.code,{children:"HashSet<Type>"})," now to avoid confusion of which name to use (full name space or not)."]}),"\n",(0,i.jsx)(n.h2,{id:"field-extensions",children:"Field Extensions"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ProcessExpressionSelection"})," used in Field Extensions now takes ",(0,i.jsx)(n.code,{children:"Dictionary<IFieldKey, CompiledField>"})," for the ",(0,i.jsx)(n.code,{children:"selectionExpressions"})," parameter. ",(0,i.jsx)(n.code,{children:"IFieldKey"})," is the field name and the schema type the field belongs too. Helps when dealing with inline fragments/union types where we may have multiple fields with the same name from different types."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);