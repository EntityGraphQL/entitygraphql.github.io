"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[9671],{7876:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=n(5893),r=n(1151);const i={sidebar_position:1},s="Introduction",a={id:"intro",title:"Introduction",description:"EntityGraphQL is a .NET library that allows you to easily build a GraphQL API on top of your data model with the extensibility to easily bring multiple data sources together in the single GraphQL schema.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/getting-started"}},c={},h=[];function d(t){const e={a:"a",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(e.p,{children:["EntityGraphQL is a .NET library that allows you to easily build a ",(0,o.jsx)(e.a,{href:"https://graphql.org/learn/",children:"GraphQL API"})," on top of your data model with the extensibility to easily bring multiple data sources together in the single GraphQL schema."]}),"\n",(0,o.jsxs)(e.p,{children:["EntityGraphQL builds a GraphQL schema that maps to .NET objects. It provides the functionality to parse a GraphQL query document and execute that against your mapped objects. These objects can be an Entity Framework ",(0,o.jsx)(e.code,{children:"DbContext"})," or any other .NET object, it doesn't matter."]}),"\n",(0,o.jsxs)(e.p,{children:["A core feature of EntityGraphQL ",(0,o.jsx)(e.em,{children:"with"})," Entity Framework (although EF is not a requirement) is that it builds selections of only the fields requested in the GraphQL query which means Entity Framework is not returning all columns from a table. This is done with the ",(0,o.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/",children:"LINQ"})," projection operator ",(0,o.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/projection-operations#select",children:(0,o.jsx)(e.code,{children:"Select()"})})," hence it works across any object tree."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.nuget.org/packages/EntityGraphQL.AspNet",children:"EntityGraphQL.AspNet"})," will get you easily set up with ASP.NET. However the core ",(0,o.jsx)(e.a,{href:"https://www.nuget.org/packages/EntityGraphQL",children:"EntityGraphQL"})," package has no ASP.NET dependency."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Please explore, give feedback and join the development."})})]})}function l(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);