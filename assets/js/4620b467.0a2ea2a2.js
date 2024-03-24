"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[6495],{674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>b,default:()=>N,frontMatter:()=>g,metadata:()=>w,toc:()=>T});var s=t(5893),i=t(1151),r=(t(7294),t(512)),a=t(2802),o=t(3692),l=t(3919),c=t(5999),d=t(2503);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:n,children:t}=e;return(0,s.jsx)(o.Z,{href:n,className:(0,r.Z)("card padding--lg",h.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:i,description:a}=e;return(0,s.jsxs)(p,{href:n,children:[(0,s.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",h.cardTitle),title:i,children:[t," ",i]}),a&&(0,s.jsx)("p",{className:(0,r.Z)("text--truncate",h.cardDescription),title:a,children:a})]})}function u(e){let{item:n}=e;const t=(0,a.LM)(n);return t?(0,s.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function x(e){let{item:n}=e;const t=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(n.docId??void 0);return(0,s.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??i?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,s.jsx)(x,{item:n});case"category":return(0,s.jsx)(u,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function y(e){let{className:n}=e;const t=(0,a.jA)();return(0,s.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,s.jsx)(y,{...e});const i=(0,a.MN)(n);return(0,s.jsx)("section",{className:(0,r.Z)("row",t),children:i.map(((e,n)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(f,{item:e})},n)))})}const g={},b="Schema Creation",w={id:"schema-creation/schema-creation",title:"Schema Creation",description:"EntityGraphQL supports customizing your GraphQL schema in all the expected ways;",source:"@site/docs/schema-creation/schema-creation.md",sourceDirName:"schema-creation",slug:"/schema-creation/",permalink:"/docs/schema-creation/",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/schema-creation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Fields",permalink:"/docs/schema-creation/fields"}},A={},T=[{value:"Adding Types",id:"adding-types",level:2},{value:"Adding Fields",id:"adding-fields",level:2},{value:"Helper Methods",id:"helper-methods",level:2},{value:"Building a full schema",id:"building-a-full-schema",level:3},{value:"Adding all fields on a type",id:"adding-all-fields-on-a-type",level:3},{value:"Modifying the generated schema",id:"modifying-the-generated-schema",level:2},{value:"More details",id:"more-details",level:2}];function v(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"schema-creation",children:"Schema Creation"}),"\n",(0,s.jsx)(n.p,{children:"EntityGraphQL supports customizing your GraphQL schema in all the expected ways;"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adding/removing/modifying fields"}),"\n",(0,s.jsx)(n.li,{children:"Adding optional/required arguments to fields"}),"\n",(0,s.jsx)(n.li,{children:"Adding new types (including input types)"}),"\n",(0,s.jsx)(n.li,{children:"Adding mutations to modify data"}),"\n",(0,s.jsx)(n.li,{children:"Including data from multiple/other sources/services"}),"\n",(0,s.jsx)(n.li,{children:"Creating subscription endpoints"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a new schema we need to supply a base context type. This base type is used as the base for ",(0,s.jsx)(n.em,{children:"top-level query fields"}),". ",(0,s.jsx)(n.code,{children:"DemoContext"})," is our base query context for the schema."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"// Using EntityGraphQL.AspNet extension method to add the schema auto-populated from the base query type. Schema has types and fields built from DemoContext. See optional arguments for customizing the behavior.\nservices.AddGraphQLSchema<DemoContext>(options => {\n    options.ConfigureSchema = (schema) => {\n        // configure schema here\n    };\n});\n\n// Create a blank schema with the base query type. Schema has no types or fields yet.\nservices.AddGraphQLSchema<DemoContext>(options =>\n{\n    options.AutoBuildSchemaFromContext = false;\n    options.ConfigureSchema = (schema) => {\n        // configure schema here\n    };\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you need to create a schema outside of ASP.NET."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"// Create a schema auto-populated from the base query type. Schema has types and fields built from DemoContext. See optional arguments for customizing the behavior.\nvar schema = new SchemaBuilder.FromObject<DemoContext>();\n\n// Create a blank schema with the base query type. Schema has no types or fields yet.\nvar schema = new SchemaProvider<DemoContext>();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-types",children:"Adding Types"}),"\n",(0,s.jsx)(n.p,{children:"Now we need to add some types to our schema which we will use as return types for fields. The most common GraphQL types you will deal with are"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Object types - a type that is part of the object graph and has fields. These are the most common type you will use in your schema"}),"\n",(0,s.jsx)(n.li,{children:"Input object types - Like Object types but are strictly used for input object for field or mutation arguments. The main difference is that fields on an Input object type can not have arguments"}),"\n",(0,s.jsxs)(n.li,{children:["Scalar types - An Object type has fields that can be queried. Scalar types resolve to concrete data. GraphQL spec defines the following built in scalar types (of course you can add your own)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Int: A signed 32-bit integer."}),"\n",(0,s.jsx)(n.li,{children:"Float: A signed double-precision floating-point value."}),"\n",(0,s.jsx)(n.li,{children:"String: A UTF-8 character sequence."}),"\n",(0,s.jsx)(n.li,{children:"Boolean: true or false."}),"\n",(0,s.jsx)(n.li,{children:"ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human-readable.\nTypes are a just a name and a list of fields on that type. This lets EntityGraphQL know how to map a GraphQL type back to a .NET type."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Enumeration types - enumeration types are a special kind of scalar that is restricted to a particular set of allowed values"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information of GraphQL types visit the ",(0,s.jsx)(n.a,{href:"https://graphql.org/learn/schema/#type-system",children:"GraphQL docs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To register a type in the schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.AddType<Person>("Person", "Hold data about a person object");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will add the ",(0,s.jsx)(n.code,{children:"Person"})," type as a schema ",(0,s.jsx)(n.em,{children:"object type"})," named ",(0,s.jsx)(n.code,{children:"Person"}),". It does not have fields yet."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-fields",children:"Adding Fields"}),"\n",(0,s.jsxs)(n.p,{children:["We now need to add some fields to both the root query object and our new ",(0,s.jsx)(n.code,{children:"Person"})," Object Type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.UpdateType<Person>(personType => {\n    personType.AddField(\n        "firstName", // name in GraphQL schema\n        person => person.FirstName, // expression to resolve the field on the .NET type\n        "A person\'s first name" // description of the field\n    );\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resolve expression can be any expression you can build."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.UpdateType<Person>(personType => {\n    personType.AddField(\n        "fullName",\n        person => $"{person.FirstName} {person.LastName}",\n        "A person\'s full name"\n    );\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's add a root query field so we can query people."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.Query() // returns the root GraphQL query type\n.AddField(\n    "people",\n    ctx => ctx.People, // ctx is the core context used when creating the schema above\n    "List of people"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We now have a very simple GraphQL schema ready to use. It has a single root query field (",(0,s.jsx)(n.code,{children:"people"}),") and a single type ",(0,s.jsx)(n.code,{children:"Person"})," with 2 fields (",(0,s.jsx)(n.code,{children:"firstName"})," & ",(0,s.jsx)(n.code,{children:"fullName"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"helper-methods",children:"Helper Methods"}),"\n",(0,s.jsx)(n.p,{children:"EntityGraphQL has methods to speed up the creation of your schema. This is helpful to get up and running but be aware if you are exposing this API externally it can be easy to make breaking API changes. For example using the methods above if you end up changing the underlying .NET types you will have compilation errors which alert you of breaking API changes and you can address them. Using the methods below will automatically pick up the underlying changes of the .NET types."}),"\n",(0,s.jsx)(n.h3,{id:"building-a-full-schema",children:"Building a full schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"// Automatically add all types and fields from the base context\nvar schema = SchemaBuilder.FromObject<DemoContext>();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Optional arguments for the schema builder:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SchemaBuilderSchemaOptions"})," - options that get passed to the created schema","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".FieldNamer"})," - A ",(0,s.jsx)(n.code,{children:"Func<string, string>"})," lambda used to generate field names. The default ",(0,s.jsx)(n.code,{children:"fieldNamer"})," adopts the GraphQL standard of naming fields ",(0,s.jsx)(n.code,{children:"lowerCamelCase"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".IntrospectionEnabled"})," - Weather or not GraphQL query introspection is enabled or not for the schema. Default is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".AuthorizationService"})," - An ",(0,s.jsx)(n.code,{children:"IGqlAuthorizationService"})," to control how auth is handled. Default is ",(0,s.jsx)(n.code,{children:"RoleBasedAuthorization"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".PreBuildSchemaFromContext"})," - Called after the schema object is created but before the context is reflected into it. Use for set up of type mappings or anything that may be needed for the schema to be built correctly."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".IsDevelopment"})," - If ",(0,s.jsx)(n.code,{children:"true"})," (default), all exceptions will have their messages rendered in the 'errors' object. If ",(0,s.jsx)(n.code,{children:"false"}),", exceptions not included in ",(0,s.jsx)(n.code,{children:"AllowedExceptions"})," will have their message replaced with 'Error occurred'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".AllowedExceptions"})," - List of allowed exceptions that will be rendered in the 'errors' object when ",(0,s.jsx)(n.code,{children:"IsDevelopment"})," is ",(0,s.jsx)(n.code,{children:"false"}),". You can also mark your exceptions with ",(0,s.jsx)(n.code,{children:"AllowedExceptionAttribute"}),". These exceptions are included by default."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public List<AllowedException> AllowedExceptions { get; set; } = new List<AllowedException> {\n    new AllowedException(typeof(EntityGraphQLArgumentException)),\n    new AllowedException(typeof(EntityGraphQLException)),\n    new AllowedException(typeof(EntityGraphQLFieldException)),\n    new AllowedException(typeof(EntityGraphQLAccessException)),\n    new AllowedException(typeof(EntityGraphQLValidationException)),\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SchemaBuilderOptions"})," - options used to control how the schema builder builds the schema"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".AutoCreateFieldWithIdArguments"})," - for any fields that return a list of an Object Type that has a field called ",(0,s.jsx)(n.code,{children:"Id"}),", it will create a singular field in the schema with an ",(0,s.jsx)(n.code,{children:"id"})," argument. For example the ",(0,s.jsx)(n.code,{children:"DemoContext"})," used in Getting Started the ",(0,s.jsx)(n.code,{children:"DemoContext.People"})," will create the following GraphQL schema. Default is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"schema {\n    query: Query\n}\n\nType Query {\n    people: [Person]\n    person(id: ID!): Person\n}\n\nType Person {\n    firstName: String\n    ...\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".AutoCreateEnumTypes"})," - automatically create Enum types in the schema if found in the ",(0,s.jsx)(n.code,{children:"DemoContext"})," object graph. Default is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".AutoCreateNewComplexTypes"})," - automatically add dotnet types found in the object graph to the schema. This will also call ",(0,s.jsx)(n.code,{children:"AddAllFields()"})," on those types passing this options object to it. Default is ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".AutoCreateInterfaceTypes"})," - If true (default = false), any object type that is encountered during reflection of the object graph that has abstract or interface types (regardless of if they are referenced by other fields), those will be added to the schema as an Interface including it's fields"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".IgnoreProps"})," - List properties or field names to ignore. Default includes a list of EF properties. Default list includes"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' "Database",\n "Model",\n "ChangeTracker",\n "ContextId"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".IgnoreTypes"})," - List of type names to ignore when ",(0,s.jsx)(n.code,{children:"AutoCreateNewComplexTypes = true"}),". Default is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".OnFieldCreated"})," - callback for each field that is created by the ",(0,s.jsx)(n.code,{children:"SchemaBuilder"}),". Example usage is to apply something to all fields or all fields matching some criteria e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"// Add Sort to all list fields\nOnFieldCreated = (field) =>\n {\n     if (field.ReturnType.IsList && field.ReturnType.SchemaType.GqlType == GqlTypes.QueryObject && !field.FromType.IsInterface)\n     {\n         field.UseSort();\n     }\n }\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adding-all-fields-on-a-type",children:"Adding all fields on a type"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AddAllFields()"})," on the schema type will automatically add all the fields on that .NET type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.AddType<Person>("Person", "All about the project")\n    .AddAllFields();\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," - you can configure how ",(0,s.jsx)(n.code,{children:"AddAllFields"})," works with the properties of ",(0,s.jsx)(n.code,{children:"SchemaBuilderOptions"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.AddType<Person>("Person", "All about the project")\n    .AddAllFields(new SchemaBuilderOptions\n    {\n        AutoCreateNewComplexTypes = false, // do not add custom dotnet types found as property/field types to the schema. Only add scalar type fields\n    });\n'})}),"\n",(0,s.jsx)(n.h2,{id:"modifying-the-generated-schema",children:"Modifying the generated schema"}),"\n",(0,s.jsx)(n.p,{children:"EntityGraphQL provides method to help you modify a schema as well."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.UpdateType<Person>(personType => {\n    personType.RemoveField("firstName");\n    personType.ReplaceField(\n        "lastName",\n        p => p.LastName.ToUpper(), // new expression to resolve the lastName field\n        "New description"\n    );\n});\n\nschema.RemoveType<TType>();\nschema.RemoveType("TypeName");\n\n// Remove a type and all fields that return that type\nschema.RemoveTypeAndAllFields<Type>();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"more-details",children:"More details"}),"\n",(0,s.jsx)(n.p,{children:"See more details for each schema item in the following sections:"}),"\n",(0,s.jsx)(j,{items:(0,a.jA)().items})]})}function N(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);