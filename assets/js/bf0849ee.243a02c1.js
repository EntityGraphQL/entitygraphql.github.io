"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,y=u["".concat(i,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},o="Scalar Types",s={unversionedId:"schema-creation/scalar-types",id:"schema-creation/scalar-types",title:"Scalar Types",description:"We learnt previously that the GraphQL spec defines the following built in scalar types.",source:"@site/docs/schema-creation/scalar-types.md",sourceDirName:"schema-creation",slug:"/schema-creation/scalar-types",permalink:"/docs/schema-creation/scalar-types",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/scalar-types.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Mutations",permalink:"/docs/schema-creation/mutations"},next:{title:"Enum Types",permalink:"/docs/schema-creation/enum-types"}},i={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scalar-types"},"Scalar Types"),(0,r.kt)("p",null,"We learnt previously that the ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#scalar-types"},"GraphQL spec")," defines the following built in scalar types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Int: A signed 32\u2010bit integer."),(0,r.kt)("li",{parentName:"ul"},"Float: A signed double-precision floating-point value."),(0,r.kt)("li",{parentName:"ul"},"String: A UTF\u20108 character sequence."),(0,r.kt)("li",{parentName:"ul"},"Boolean: true or false."),(0,r.kt)("li",{parentName:"ul"},"ID: The ID scalar type represents a unique identifier. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human\u2010readable.")),(0,r.kt)("p",null,"We of course can add our own. Scalar types help you describe the data in you schema. Unlike Object types they don't have fields you can query, they result in data. Ultimately you are likely serializing the data to JSON for transport."),(0,r.kt)("p",null,"Adding a scalar type tells EntityGraphQL that the object should just be returned. i.e. there is no selection available on it. A good example is ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),". We just want to return the ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," value. Not have it as an Object type where you could select certain properties from it (Although you could set that up)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.AddScalarType<DateTime>("DateTime", "Represents a date and time.");\n')),(0,r.kt)("p",null,"EntityGraphQL by default will set up the follow scalar types on schema creation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'new SchemaType<int>(this, "Int", "Int scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<double>(this, "Float", "Float scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<bool>(this, "Boolean", "Boolean scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<string>(this, "String", "String scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<Guid>(this, "ID", "ID scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<char>(this, "Char", "Char scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<DateTime>(this, "Date", "Date with time scalar", null, GqlTypeEnum.Scalar);\nnew SchemaType<DateTimeOffset>(this, "DateTimeOffset", "DateTimeOffset scalar", null, GqlTypeEnum.Scalar)\n')),(0,r.kt)("p",null,"It is best to have scalar types added to the schema before adding other fields that reference them. Otherwise EntityGraphQL doesn't know about the scalar types. You can add you're own or make changes to the default when registering your schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'services.AddGraphQLSchema<TContext>(options => {\n  options.PreBuildSchemaFromContext = schema =>\n  {\n      // remove and/or add scalar types or mappings here. e.g.\n      schema.RemoveType<DateTime>();\n      schema.AddScalarType<KeyValuePair<string, string>>("StringKeyValuePair", "Represents a pair of strings");\n  };\n})\n')),(0,r.kt)("p",null,"You can also tell EntityGraphQL to auto-map a dotnet type to a schema type with ",(0,r.kt)("inlineCode",{parentName:"p"},"AddTypeMapping<TFromType>(string gqlType)"),". For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.AddTypeMapping<short>("Int");\n')),(0,r.kt)("p",null,"By default EntityGraphQL maps these types to GraphQL types (Note ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", etc are not here as they are added as scalar types in the schema above)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"sbyte   ->  Int\nshort   ->  Int\nushort  ->  Int\nlong    ->  Int\nulong   ->  Int\nbyte    ->  Int\nuint    ->  Int\nfloat   ->  Float\ndecimal ->  Float\nbyte[]  ->  String\n")))}m.isMDXComponent=!0}}]);