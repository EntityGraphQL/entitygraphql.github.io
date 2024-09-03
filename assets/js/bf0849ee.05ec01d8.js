"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[5480],{5665:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=t(4848),s=t(8453);const r={sidebar_position:3},i="Scalar Types",c={id:"schema-creation/scalar-types",title:"Scalar Types",description:"We learnt previously that the GraphQL spec defines the following built in scalar types.",source:"@site/docs/schema-creation/scalar-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/scalar-types",permalink:"/docs/schema-creation/scalar-types",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/scalar-types.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Mutations",permalink:"/docs/schema-creation/mutations"},next:{title:"Enum Types",permalink:"/docs/schema-creation/enum-types"}},l={},o=[];function d(e){const a={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"scalar-types",children:"Scalar Types"})}),"\n",(0,n.jsxs)(a.p,{children:["We learnt previously that the ",(0,n.jsx)(a.a,{href:"https://graphql.org/learn/schema/#scalar-types",children:"GraphQL spec"})," defines the following built in scalar types."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Int"}),": A signed 32\u2010bit integer."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Float"}),": A signed double-precision floating-point value."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"String"}),": A UTF\u20108 character sequence."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"Boolean"}),": true or false."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"ID"}),": The ID scalar type represents a unique identifier. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human\u2010readable."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"We of course can add our own. Scalar types help you describe the data in you schema. Unlike Object types they don't have fields you can query, they result in data. Ultimately you are likely serializing the data to JSON for transport."}),"\n",(0,n.jsxs)(a.p,{children:["Adding a scalar type tells EntityGraphQL that the object should just be returned. i.e. there is no selection available on it. A good example is ",(0,n.jsx)(a.code,{children:"DateTime"}),". We just want to return the ",(0,n.jsx)(a.code,{children:"DateTime"})," value. Not have it as an Object type where you could select certain properties from it (Although you could set that up)."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cs",children:'schema.AddScalarType<DateTime>("DateTime", "Represents a date and time.");\n'})}),"\n",(0,n.jsx)(a.p,{children:"EntityGraphQL by default will set up the follow scalar types on schema creation."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cs",children:'AddScalarType<int>("Int", "Int scalar");\nAddScalarType<double>("Float", "Float scalar");\nAddScalarType<bool>("Boolean", "Boolean scalar");\nAddScalarType<string>("String", "String scalar");\nAddScalarType<Guid>("ID", "ID scalar");\nAddScalarType<char>("Char", "Char scalar");\n\nAddScalarType<DateTime>("Date", "Date with time scalar");\nAddScalarType<DateTimeOffset>("DateTimeOffset", "DateTimeOffset scalar");\nAddScalarType<DateOnly>("DateOnly", "Date value only scalar");\nAddScalarType<TimeOnly>("TimeOnly", "Time value only scalar");\n'})}),"\n",(0,n.jsx)(a.p,{children:"It is best to have scalar types added to the schema before adding other fields that reference them. Otherwise EntityGraphQL doesn't know about the scalar types. You can add you're own or make changes to the default when registering your schema."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cs",children:'services.AddGraphQLSchema<TContext>(options => {\n  options.PreBuildSchemaFromContext = schema =>\n  {\n      // remove and/or add scalar types or mappings here. e.g.\n      schema.RemoveType<DateTime>();\n      schema.AddScalarType<KeyValuePair<string, string>>("StringKeyValuePair", "Represents a pair of strings");\n  };\n})\n'})}),"\n",(0,n.jsxs)(a.p,{children:["You can also tell EntityGraphQL to auto-map a dotnet type to a schema type with ",(0,n.jsx)(a.code,{children:"AddTypeMapping<TFromType>(string gqlType)"}),". For example"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cs",children:'schema.AddTypeMapping<short>("Int");\n'})}),"\n",(0,n.jsxs)(a.p,{children:["By default EntityGraphQL maps these types to GraphQL types (Note ",(0,n.jsx)(a.code,{children:"int"}),", ",(0,n.jsx)(a.code,{children:"bool"}),", etc are not here as they are added as scalar types in the schema above)."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cs",children:"sbyte   ->  Int\nshort   ->  Int\nushort  ->  Int\nlong    ->  Int\nulong   ->  Int\nbyte    ->  Int\nuint    ->  Int\nfloat   ->  Float\ndecimal ->  Float\nbyte[]  ->  String\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>c});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);