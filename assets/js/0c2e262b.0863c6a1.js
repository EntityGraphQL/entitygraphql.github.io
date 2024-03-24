"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[8134],{4440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(5893),s=n(1151);const o={sidebar_position:6},l="Event System",r={id:"other-extensibility/event-system",title:"Event System",description:"A couple of events has been added to fields to support other functionality which could be used in other ways, there is an intention to build these events out further in the future.",source:"@site/docs/other-extensibility/event-system.md",sourceDirName:"other-extensibility",slug:"/other-extensibility/event-system",permalink:"/docs/other-extensibility/event-system",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/other-extensibility/event-system.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Extensions",permalink:"/docs/field-extensions/custom-extensions"},next:{title:"Extension Attribute",permalink:"/docs/other-extensibility/extension-attribute"}},a={},c=[{value:"ISchemaType",id:"ischematype",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"event-system",children:"Event System"}),"\n",(0,i.jsx)(t.p,{children:"A couple of events has been added to fields to support other functionality which could be used in other ways, there is an intention to build these events out further in the future."}),"\n",(0,i.jsx)(t.h2,{id:"ischematype",children:"ISchemaType"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"OnAddField - called before adding a field to a type, allows you to throw an exception if the field is invalid in some way"}),"\n",(0,i.jsx)(t.li,{children:"OnValidate - called when validating an InputType before being passed to a mutation"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@oneOf"})," ",(0,i.jsx)(t.a,{href:"../directives/schema-directives",children:"Schema Directive"})," uses both these events"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:'public static class OneOfDirectiveExtensions\n{\n    public static void OneOf(this ISchemaType type)\n    {\n        type.AddDirective(new OneOfDirective());\n        type.OnAddField += (field) => {\n            if (field.ReturnType.TypeNotNullable)\n            {\n                throw new EntityQuerySchemaException($"{type.TypeDotnet.Name} is a OneOf type but all its fields are not nullable. OneOf input types require all the field to be nullable.");\n            }\n        };\n        type.OnValidate += (value) => {\n            if (value != null)\n            {\n                var singleField = value.GetType().GetProperties().Count(x => x.GetValue(value) != null);\n\n                if (singleField != 1) // we got multiple set\n                    throw new EntityGraphQLValidationException($"Exactly one field must be specified for argument of type {type.Name}.");\n            }\n        };\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(7294);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);