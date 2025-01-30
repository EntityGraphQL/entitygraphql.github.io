"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[8698],{6390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"schema-creation/interface-types","title":"Interfaces Types & Implements Keyword","description":"GraphQL supports Interfaces allowing you to define a abstract base type that multiple other types might implement.","source":"@site/docs/schema-creation/interface-types.md","sourceDirName":"schema-creation","slug":"/schema-creation/interface-types","permalink":"/docs/schema-creation/interface-types","draft":false,"unlisted":false,"editUrl":"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/interface-types.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Input Types","permalink":"/docs/schema-creation/input-types"},"next":{"title":"Union Types","permalink":"/docs/schema-creation/union-types"}}');var r=t(4848),s=t(8453);const i={sidebar_position:6},c="Interfaces Types & Implements Keyword",p={},o=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"interfaces-types--implements-keyword",children:"Interfaces Types & Implements Keyword"})}),"\n",(0,r.jsxs)(n.p,{children:["GraphQL supports ",(0,r.jsx)(n.a,{href:"https://graphql.org/learn/schema/#interfaces",children:"Interfaces"})," allowing you to define a abstract base type that multiple other types might implement."]}),"\n",(0,r.jsx)(n.p,{children:"EntityGraphQL automatically marks abstract classes and interfaces as GraphQL interfaces; however, you can also add them manually to a schema with the AddInterface method on the SchemaProvider class."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public abstract class Character {\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public IEnumerable<Character> Friends { get; set; }\n    public IEnumerable<Episode> AppearsIn { get; set; }\n}\n\npublic class Human : Character {\n  public IEnumerable<Starship> Starships { get; set; }\n  public int TotalCredits { get; set;}\n}\n\npublic class Droid : Character {\n    public string PrimaryFunction { get; set;}\n}\n\n// creating our schema\nschema.AddInterface<Character>(name: "Character", description: "represents any character in the Star Wars trilogy");\n    .AddAllFields();\n\nschema.AddType<Human>("")\n    .AddAllFields()\n    .Implements<Character>();\n\nschema.AddType<Droid>("");\n    .Implements<Character>();\n'})}),"\n",(0,r.jsx)(n.p,{children:"produces the GraphQL schema:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n\ntype Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n\ntype Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can query these types with inline fragments;"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"query {\n  characters {\n    name\n    ... on Human {\n      totalCredits\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);