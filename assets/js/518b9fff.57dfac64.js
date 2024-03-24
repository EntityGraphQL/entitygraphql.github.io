"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[772],{4290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=t(5893),r=t(1151);const s={sidebar_position:6},i="Interfaces Types & Implements Keyword",c={id:"schema-creation/interface-types",title:"Interfaces Types & Implements Keyword",description:"GraphQL supports Interfaces allowing you to define a abstract base type that multiple other types might implement.",source:"@site/docs/schema-creation/interface-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/interface-types",permalink:"/docs/schema-creation/interface-types",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/interface-types.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Input Types",permalink:"/docs/schema-creation/input-types"},next:{title:"Union Types",permalink:"/docs/schema-creation/union-types"}},p={},o=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"interfaces-types--implements-keyword",children:"Interfaces Types & Implements Keyword"}),"\n",(0,a.jsxs)(n.p,{children:["GraphQL supports ",(0,a.jsx)(n.a,{href:"https://graphql.org/learn/schema/#interfaces",children:"Interfaces"})," allowing you to define a abstract base type that multiple other types might implement."]}),"\n",(0,a.jsx)(n.p,{children:"EntityGraphQL automatically marks abstract classes and interfaces as GraphQL interfaces; however, you can also add them manually to a schema with the AddInterface method on the SchemaProvider class."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'public abstract class Character {\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public IEnumerable<Character> Friends { get; set; }\n    public IEnumerable<Episode> AppearsIn { get; set; }\n}\n\npublic class Human : Character {\n  public IEnumerable<Starship> Starships { get; set; }\n  public int TotalCredits { get; set;}\n}\n\npublic class Droid : Character {\n    public string PrimaryFunction { get; set;}\n}\n\n// creating our schema\nschema.AddInterface<Character>(name: "Character", description: "represents any character in the Star Wars trilogy");\n    .AddAllFields();\n\nschema.AddType<Human>("")\n    .AddAllFields()\n    .Implements<Character>();\n\nschema.AddType<Droid>("");\n    .Implements<Character>();\n'})}),"\n",(0,a.jsx)(n.p,{children:"produces the GraphQL schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n\ntype Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n\ntype Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can query these types with inline fragments;"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query {\n  characters {\n    name\n    ... on Human {\n      totalCredits\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);