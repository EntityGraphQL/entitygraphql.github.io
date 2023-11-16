"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},s="Enum Types",c={unversionedId:"schema-creation/enum-types",id:"schema-creation/enum-types",title:"Enum Types",description:"Enum types are just like you'd expect. It let's API consumers know that a field can be only 1 of a set of values.",source:"@site/docs/schema-creation/enum-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/enum-types",permalink:"/docs/schema-creation/enum-types",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/enum-types.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Scalar Types",permalink:"/docs/schema-creation/scalar-types"},next:{title:"Input Types",permalink:"/docs/schema-creation/input-types"}},p={},i=[],l={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enum-types"},"Enum Types"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#enumeration-types"},"Enum types")," are just like you'd expect. It let's API consumers know that a field can be only 1 of a set of values."),(0,a.kt)("p",null,"With our ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," example we could add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Gender")," enum."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'[JsonConverter(typeof(StringEnumConverter))]\npublic enum Gender {\n    Female,\n    Male,\n    NotSpecified\n}\n\n// building our schema\nschema.AddEnum("Gender", typeof(Gender), "A persons Gender");\n')),(0,a.kt)("p",null,"The GraphQL schema produced from this helps document and describe the data model to API users. Example GraphQL schema below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum Gender {\n  Female\n  Male\n  NotSpecified\n}\n\ntype Person {\n  firstName: String\n  lastName: String\n  gender: Gender\n}\n")))}m.isMDXComponent=!0}}]);