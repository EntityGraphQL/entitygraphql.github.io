"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:5},i="Interfaces Types & Implements Keyword",c={unversionedId:"schema-creation/interface-types",id:"schema-creation/interface-types",title:"Interfaces Types & Implements Keyword",description:"GraphQL supports Interfaces allowing you to define a abstract base type that multiple other types might implement.",source:"@site/docs/schema-creation/interface-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/interface-types",permalink:"/docs/schema-creation/interface-types",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/interface-types.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Enum Types",permalink:"/docs/schema-creation/enum-types"},next:{title:"Input Types",permalink:"/docs/schema-creation/input-types"}},p={},o=[],l={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interfaces-types--implements-keyword"},"Interfaces Types & Implements Keyword"),(0,a.kt)("p",null,"GraphQL supports ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#interfaces"},"Interfaces")," allowing you to define a abstract base type that multiple other types might implement."),(0,a.kt)("p",null,"EntityGraphQL automatically marks abstract classes and interfaces as GraphQL interfaces; however, you can also add them manually to a schema with the AddInterface method on the SchemaProvider class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public abstract class Character {\n    public int Id { get; set; }\n    public string Name { get; set; }\n    public IEnumerable<Character> Friends { get; set; }\n    public IEnumerable<Episode> AppearsIn { get; set; }\n}\n\npublic class Human : Character {\n  public IEnumerable<Starship> starships { get; set; }\n  public int TotalCredits { get; set;}\n}\n\npublic class Droid : Character {\n    public stirng PrimaryFunction { get; set;}\n}\n\n// creating our schema\nschema.AddInterface<Character>(name: "Character", description: "represents any character in the Star Wars trilogy");\n    .AddAllFields();\n\nschema.AddType<Human>("")\n    .AddAllFields()\n    .Implements<Character>();\n\nschema.AddType<Droid>("");\n    .Implements<Character>();\n')),(0,a.kt)("p",null,"produces the GraphQL schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n\ntype Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n\ntype Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n")),(0,a.kt)("p",null,"You can query these types with inline fragments;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  characters {\n    name\n    ... on Human {\n      totalCredits\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);