"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="Union Types",s={unversionedId:"schema-creation/union-types",id:"schema-creation/union-types",title:"Union Types",description:"Union Types are very similar to interfaces, but they don't get to specify any common fields between the types.",source:"@site/docs/schema-creation/union-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/union-types",permalink:"/docs/schema-creation/union-types",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/union-types.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Interfaces Types & Implements Keyword",permalink:"/docs/schema-creation/interface-and-union-types"},next:{title:"Lists and Non-Null",permalink:"/docs/schema-creation/lists-and-nonnulls"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union-types"},"Union Types"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#union-types"},"Union Types")," are very similar to interfaces, but they don't get to specify any common fields between the types."),(0,a.kt)("p",null,"Any abstract class or interface automatically added by the SchemaBuilder that contains no properties is added as a union instead of an interface (interfaces require at least one field)."),(0,a.kt)("p",null,"You can register union types manually using the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddUnion")," method on SchemaProvider, then register potential types on the union type using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaField.AddPossibleType")," method. This differs from interfaces in that you register the child classes on the parent instead of the parent on the children."),(0,a.kt)("p",null,"As C# does not support anything like union types they are implemented used blank 'marker interfaces'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public interface ICharacter { }\npublic class Human : ICharacter {\n    ...\n}\npublic class Droid : ICharacter {\n    ...\n}\n// creating our schema\nvar union = schema.AddUnion<ICharacter>(name: "Character", description: "represents any character in the Star Wars trilogy");\n\nschema.Type<ICharacter>.AddPotentialType<Human>();\nschema.Type<ICharacter>.AddPotentialType<Droid>();\n')))}u.isMDXComponent=!0}}]);