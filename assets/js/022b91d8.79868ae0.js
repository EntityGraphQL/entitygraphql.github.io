"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[9311],{7962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(4848),i=n(8453);const s={sidebar_position:11},o="Upgrading from 4.x to 5.x",d={id:"upgrade-5-0",title:"Upgrading from 4.x to 5.x",description:"EntityGraphQL respects Semantic Versioning, meaning version 5.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x.",source:"@site/docs/upgrade-5-0.md",sourceDirName:".",slug:"/upgrade-5-0",permalink:"/docs/upgrade-5-0",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/upgrade-5-0.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Tool integration",permalink:"/docs/integration"},next:{title:"Upgrading from 3.x to 4.x",permalink:"/docs/upgrade-4-0"}},c={},a=[{value:"<code>SchemaProvider.ExecuteRequest</code> change",id:"schemaproviderexecuterequest-change",level:2},{value:"Changes to Method Argument Reflection",id:"changes-to-method-argument-reflection",level:2},{value:"<code>IExposableException</code> removed",id:"iexposableexception-removed",level:2},{value:"<code>IDirectiveProcessor</code> updated",id:"idirectiveprocessor-updated",level:2},{value:"<code>SchemaBuilderMethodOptions</code> removed",id:"schemabuildermethodoptions-removed",level:2},{value:"Register <code>GraphQLValidator</code>",id:"register-graphqlvalidator",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"upgrading-from-4x-to-5x",children:"Upgrading from 4.x to 5.x"})}),"\n",(0,r.jsxs)(t.p,{children:["EntityGraphQL respects ",(0,r.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning"}),", meaning version 5.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can see the full changelog which includes other changes and bug fixes as well as links back to GitHub issues/MRs with more information ",(0,r.jsx)(t.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/CHANGELOG.md",children:"here on GitHub"}),"."]})}),"\n",(0,r.jsxs)(t.h2,{id:"schemaproviderexecuterequest-change",children:[(0,r.jsx)(t.code,{children:"SchemaProvider.ExecuteRequest"})," change"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SchemaProvider.ExecuteRequest"})," & ",(0,r.jsx)(t.code,{children:"SchemaProvider.ExecuteRequestAsync"})," no longer take an instance of the schema context. The context will be fetched from the provided ",(0,r.jsx)(t.code,{children:"ServiceProvider"})," meaning the lifetime rules are adhered to - e.g. ",(0,r.jsx)(t.code,{children:"ServiceLifetime.Transient"})," is now correctly used. This is the preferred way to execute a query."]}),"\n",(0,r.jsxs)(t.p,{children:["If you wish to maintain the 4.x execution you can use",(0,r.jsx)(t.code,{children:"ExecuteRequestWithContext"})," & ",(0,r.jsx)(t.code,{children:"ExecuteRequestWithContextAsync"})," which operate in the same way as 4.x - the instance of the schema context passed in will be used for all references to that type."]}),"\n",(0,r.jsx)(t.h2,{id:"changes-to-method-argument-reflection",children:"Changes to Method Argument Reflection"}),"\n",(0,r.jsxs)(t.p,{children:["Previously if ",(0,r.jsx)(t.code,{children:"AutoCreateInputTypes"})," was enabled we didn't know if a parameter should be a GraphQL argument or an injected service unless you used ",(0,r.jsx)(t.code,{children:"[GraphQLArguments]"}),". But this meant you couldn't have complex types as parameters in the method and have them reflected in the schema (",(0,r.jsx)(t.code,{children:"[GraphQLArguments]"})," flattens the properties in the schema as arguments). This has been refactored to be predictable."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AutoCreateInputTypes"})," now defaults to ",(0,r.jsx)(t.code,{children:"true"})," and you will have to add some attributes to your parameters or classes."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"[GraphQLInputType]"})," will include the parameter as an argument and use the type as an input type. ",(0,r.jsx)(t.code,{children:"[GraphQLArguments]"})," will flatten the properties of that parameter type into many arguments in the schema."]}),"\n",(0,r.jsx)(t.p,{children:"When looking for a methods parameters, EntityGraphQL will"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"First all scalar / non-complex types will be added as arguments in the schema."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"If parameter type or enum type is already in the schema it will be added at an argument."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Any argument or type with ",(0,r.jsx)(t.code,{children:"GraphQLInputTypeAttribute"})," will be added to the schema as an ",(0,r.jsx)(t.code,{children:"InputType"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Any argument or type with ",(0,r.jsx)(t.code,{children:"GraphQLArgumentsAttribute"})," found will have the types properties added as schema arguments."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If no attributes are found it will assume they are services and not add them to the schema. ",(0,r.jsx)(t.em,{children:"I.e. Label your arguments with the attributes or add them to the schema beforehand."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"AutoCreateInputTypes"})," now only controls if the type of the argument should be added to the schema."]}),"\n",(0,r.jsxs)(t.h2,{id:"iexposableexception-removed",children:[(0,r.jsx)(t.code,{children:"IExposableException"})," removed"]}),"\n",(0,r.jsxs)(t.p,{children:["Interface ",(0,r.jsx)(t.code,{children:"IExposableException"})," has been removed. Use the existing ",(0,r.jsx)(t.code,{children:"SchemaBuilderSchemaOptions.AllowedExceptions"})," property to define which exceptions are rendered into the results. Or mark your exceptions with the ",(0,r.jsx)(t.code,{children:"AllowedExceptionAttribute"})," to have exception details in the results when ",(0,r.jsx)(t.code,{children:"SchemaBuilderSchemaOptions.IsDevelopment"})," is ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"idirectiveprocessor-updated",children:[(0,r.jsx)(t.code,{children:"IDirectiveProcessor"})," updated"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IDirectiveProcessor.On"})," renamed to ",(0,r.jsx)(t.code,{children:"IDirectiveProcessor.Location"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IDirectiveProcessor.ProcessField()"})," removed, use ",(0,r.jsx)(t.code,{children:"IDirectiveProcessor.VisitNode"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IDirectiveProcessor.ProcessExpression()"})," Has been removed. You can build a new ",(0,r.jsx)(t.code,{children:"IGraphQLNode"})," in ",(0,r.jsx)(t.code,{children:"VisitNode"})," to make changes to the graph"]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"schemabuildermethodoptions-removed",children:[(0,r.jsx)(t.code,{children:"SchemaBuilderMethodOptions"})," removed"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"AutoCreateInputTypes"})," has been moved to ",(0,r.jsx)(t.code,{children:"SchemaBuilderOptions"})," and is now defaulted to ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"AddNonAttributedMethods"})," has been move to ",(0,r.jsx)(t.code,{children:"SchemaBuilderOptions.AddNonAttributedMethodsInControllers"})]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"register-graphqlvalidator",children:["Register ",(0,r.jsx)(t.code,{children:"GraphQLValidator"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"GraphQLValidator"})," is no longer magically added to your method fields (mutations/subscriptions). If you wish to use it please register it in your services. There is a new helper method in EntityGraphQL.AspNet ",(0,r.jsx)(t.code,{children:"AddGraphQLValidator()"}),". This means you can implement and register your own implementation."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);