"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:6},a="Event System",l={unversionedId:"other-extensibility/event-system",id:"other-extensibility/event-system",title:"Event System",description:"A couple of events has been added to fields to support other functionality which could be used in other ways, there is an intention to build these events out further in the future.",source:"@site/docs/other-extensibility/event-system.md",sourceDirName:"other-extensibility",slug:"/other-extensibility/event-system",permalink:"/docs/other-extensibility/event-system",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/other-extensibility/event-system.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Extensions",permalink:"/docs/field-extensions/custom-extensions"},next:{title:"Extension Attribute",permalink:"/docs/other-extensibility/extension-attribute"}},s={},c=[{value:"ISchemaType",id:"ischematype",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-system"},"Event System"),(0,i.kt)("p",null,"A couple of events has been added to fields to support other functionality which could be used in other ways, there is an intention to build these events out further in the future."),(0,i.kt)("h2",{id:"ischematype"},"ISchemaType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OnAddField - called before adding a field to a type, allows you to throw an exception if the field is invalid in some way"),(0,i.kt)("li",{parentName:"ul"},"OnValidate - called when validating an InputType before being passed to a mutation")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@oneOf")," ",(0,i.kt)("a",{parentName:"p",href:"../directives/schema-directives"},"Schema Directive")," uses both these events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public static class OneOfDirectiveExtensions\n{\n    public static void OneOf(this ISchemaType type)\n    {\n        type.AddDirective(new OneOfDirective());\n        type.OnAddField += (field) => { \n            if (field.ReturnType.TypeNotNullable)\n            {\n                throw new EntityQuerySchemaException($"{type.TypeDotnet.Name} is a OneOf type but all its fields are not nullable. OneOf input types require all the field to be nullable.");\n            }\n        };\n        type.OnValidate += (value) => {\n            if (value != null)\n            {\n                var singleField = value.GetType().GetProperties().Count(x => x.GetValue(value) != null);\n                \n                if (singleField != 1) // we got multiple set\n                    throw new EntityGraphQLValidationException($"Exactly one field must be specified for argument of type {type.Name}.");\n            }\n        };\n    }\n}\n')))}u.isMDXComponent=!0}}]);