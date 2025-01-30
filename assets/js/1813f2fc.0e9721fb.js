"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[1005],{2871:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"schema-creation/lists-and-nonnulls","title":"Lists and Non-Null","description":"GraphQL defines type modifiers specifically for declaring that a field is a list or cannot be null. In a schema these are [T] and !. For example, a GraphQL schema might have the following.","source":"@site/docs/schema-creation/lists-and-nonnulls.md","sourceDirName":"schema-creation","slug":"/schema-creation/lists-and-nonnulls","permalink":"/docs/schema-creation/lists-and-nonnulls","draft":false,"unlisted":false,"editUrl":"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/lists-and-nonnulls.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Union Types","permalink":"/docs/schema-creation/union-types"},"next":{"title":"Directives","permalink":"/docs/schema-creation/directives"}}');var a=s(4848),r=s(8453);const l={sidebar_position:8},i="Lists and Non-Null",o={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"lists-and-non-null",children:"Lists and Non-Null"})}),"\n",(0,a.jsxs)(n.p,{children:["GraphQL defines ",(0,a.jsx)(n.a,{href:"https://graphql.org/learn/schema/#lists-and-non-null",children:"type modifiers"})," specifically for declaring that a field is a list or cannot be ",(0,a.jsx)(n.code,{children:"null"}),". In a schema these are ",(0,a.jsx)(n.code,{children:"[T]"})," and ",(0,a.jsx)(n.code,{children:"!"}),". For example, a GraphQL schema might have the following."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum Gender {\n  Female\n  Male\n  NotSpecified\n}\n\ntype Person {\n  firstName: String!\n  lastName: String!\n  gender: Gender!\n  friends: [Person]\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"!"})," on all the fields tells API users that those fields will not be ",(0,a.jsx)(n.code,{children:"null"}),". And the ",(0,a.jsx)(n.code,{children:"[]"})," around the ",(0,a.jsx)(n.code,{children:"Person"})," type on the ",(0,a.jsx)(n.code,{children:"friends"})," field types the API users that the field returns a list of ",(0,a.jsx)(n.code,{children:"Person"})," objects."]}),"\n",(0,a.jsxs)(n.p,{children:["EntityGraphQL will automatically figure out fields that return lists based on if the resolve expression returns ",(0,a.jsx)(n.code,{children:"IEnumerable<T>"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, EntityGraphQL will mark non-nullable .NET types as non-null in thr GraphQL schema. If you need to change that, you can use ",(0,a.jsx)(n.code,{children:"field.IsNullable(bool)"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Lets say we know a person's first and last name will never be null."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'var type = schema.AddInputType<Person>("PersonInput", "New person data")\ntype.AddField("firstName", p => p.FirstName, "First name).IsNullable(false);\ntype.AddField("lastName", p => p.LastName, "Last name).IsNullable(false);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(6540);const a={},r=t.createContext(a);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);