"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Fields",o={unversionedId:"schema-creation/fields",id:"schema-creation/fields",title:"Fields",description:"GraphQL supports arguments on query fields. We saw this already with the SchemaBuilder.FromObject() helper method. It created a field with an id argument to select a single item by id. Of course you can create fields with your own arguments to expand the functionality of you GraphQL APi.",source:"@site/docs/schema-creation/fields.md",sourceDirName:"schema-creation",slug:"/schema-creation/fields",permalink:"/docs/schema-creation/fields",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/fields.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Schema Creation",permalink:"/docs/schema-creation/"},next:{title:"Mutations",permalink:"/docs/schema-creation/mutations"}},s={},p=[{value:"Adding a field with an argument",id:"adding-a-field-with-an-argument",level:2},{value:"Required arguments",id:"required-arguments",level:3},{value:"Optional arguments",id:"optional-arguments",level:3},{value:"Default values",id:"default-values",level:3},{value:"Using methods as fields",id:"using-methods-as-fields",level:2},{value:"Note about method execution with EF",id:"note-about-method-execution-with-ef",level:3},{value:"Lazy Loading",id:"lazy-loading",level:4},{value:"EntityFrameworkCore.Projectables Library",id:"entityframeworkcoreprojectables-library",level:4},{value:"Helper methods",id:"helper-methods",level:2},{value:"WhereWhen()",id:"wherewhen",level:3},{value:"Take(int?)",id:"takeint",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fields"},"Fields"),(0,r.kt)("p",null,"GraphQL supports ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#arguments"},"arguments")," on query fields. We saw this already with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilder.FromObject()")," helper method. It created a field with an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," argument to select a single item by id. Of course you can create fields with your own arguments to expand the functionality of you GraphQL APi."),(0,r.kt)("h2",{id:"adding-a-field-with-an-argument"},"Adding a field with an argument"),(0,r.kt)("p",null,"Arguments are defined using an anonymous object type when defining the field. Let's build the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," example ourselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'// empty schema\nvar schema = new SchemaProvider<DemoContext>();\nschema.AddType<Person>("Person", "Information about a person);\n\n// add our root-level query field with an argument\nschema.Query().AddField(\n    "person",\n    new {\n        id = ArgumentHelper.Required<int>()\n    },\n    (ctx, args) => ctx.People.FirstOrDefault(p => p.Id == args.id),\n    "Fetch person by ID"\n);\n')),(0,r.kt)("p",null,"Let's break this down."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each property of the anonymous object will be an argument on the GraphQL field. In this case we have 1 argument named ",(0,r.kt)("inlineCode",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ArgumentHelper.Required<T>()")," lets EntityGraphQL know that the argument is required and will error if it is not supplied in the query"),(0,r.kt)("li",{parentName:"ul"},"The field resolve expression now has 2 parameters, the original context and the anonymous object type which at execution time will contain the argument values"),(0,r.kt)("li",{parentName:"ul"},"We use the ",(0,r.kt)("inlineCode",{parentName:"li"},"args.id")," to filter the list of people to a single person that will be returned")),(0,r.kt)("p",null,"It is worth noting that the GraphQL name of the argument will be that of the property on the anonymous type. In GraphQL arguments typically start with lower case hence we use ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," as the argument name in the anonymous object you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," in queries (GraphQL is case sensitive)."),(0,r.kt)("h3",{id:"required-arguments"},"Required arguments"),(0,r.kt)("p",null,"As you see above to make an argument required use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgumentHelper.Required<T>()")," method."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../validation"},"Validation")," for further information."),(0,r.kt)("h3",{id:"optional-arguments"},"Optional arguments"),(0,r.kt)("p",null,"If you want the argument to be optional just set the field to a typed ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.Query().AddField(\n    "people",\n    new {\n        firstName = (string)null\n    },\n    (ctx, args) => !string.IsNullOrEmpty(args.firstName) ? ctx.People.Where(p => p.FirstName == args.firstName) : ctx.People,\n    "List of people optionally filtered by a first name"\n);\n')),(0,r.kt)("p",null,"If the argument is not supplied with a value in the query ",(0,r.kt)("inlineCode",{parentName:"p"},"args.firstName")," will be null. We can use that to optionally filter the data."),(0,r.kt)("h3",{id:"default-values"},"Default values"),(0,r.kt)("p",null,"In GraphQL field arguments can have default values. In EntityGraphQL you just set the default value in the anonymous object create. If fact that is what we did above with ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.Query().AddField(\n    "people",\n    new {\n        deleted = false // default value\n    },\n    (ctx, args) => ctx.People.Where(p => p.IsDeleted == args.deleted),\n    "List all active people. Optional list all deleted people"\n);\n')),(0,r.kt)("h2",{id:"using-methods-as-fields"},"Using methods as fields"),(0,r.kt)("p",null,"EntityGraphQL can map methods on your classes to query fields using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLFieldAttribute"),". When using ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilder")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaType.AddAllFields()")," EntityGraphQL will add any methods that have the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLFieldAttribute")," as a field on that type. The parameters of the method will become the GraphQL field arguments. Mapping method parameters to GraphQL arguments follow the same rules as mutations and subscription methods."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"[GraphQLInputType]")," on a parameter will include the parameter as an argument and use the type as an input type. ",(0,r.kt)("inlineCode",{parentName:"p"},"[GraphQLArguments]")," will flatten the properties of that parameter type into many arguments in the schema."),(0,r.kt)("p",null,"When looking for a methods parameters, EntityGraphQL will"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First all scalar / non-complex types will be added as arguments in the schema.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If parameter type or enum type is already in the schema it will be added at an argument.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any argument or type with ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLInputTypeAttribute")," will be added to the schema as an ",(0,r.kt)("inlineCode",{parentName:"p"},"InputType"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any argument or type with ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLArgumentsAttribute")," found will have the types properties added as schema arguments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If no attributes are found it will assume they are services and not add them to the schema. ",(0,r.kt)("em",{parentName:"p"},"I.e. Label your parameters with the attributes or add the type to the schema beforehand.")))),(0,r.kt)("h3",{id:"note-about-method-execution-with-ef"},"Note about method execution with EF"),(0,r.kt)("p",null,"Let's look at an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class DemoContext : DbContext\n{\n    [Description("Collection of Movies")]\n    public DbSet<Movie> Movies { get; set; }\n    [Description("Collection of Peoples")]\n    public DbSet<Person> People { get; set; }\n    [Description("Collection of Actors")]\n    public DbSet<Actor> Actors { get; set; }\n}\n\npublic class Movie\n{\n    public uint Id { get; set; }\n    public string Name { get; set; }\n\n    // other fields hidden\n\n    public virtual DateTime Released { get; set; }\n    public virtual List<Actor> Actors { get; set; }\n    public virtual Person Director { get; set; }\n\n// highlight-next-line\n    [GraphQLField]\n    public uint DirectorAgeAtRelease => (uint)((Released - Director.Dob).Days / 365);\n}\n\nvar schema = new SchemaProvider<DemoContext>();\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DirectorAgeAtRelease")," will become a field ",(0,r.kt)("inlineCode",{parentName:"p"},"directorAgeAtRelease")," on the GraphQL type ",(0,r.kt)("inlineCode",{parentName:"p"},"Movie")," with no arguments. If you query this field like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gql"},"{\n  movies {\n    name\n    directorAgeAtRelease\n  }\n}\n")),(0,r.kt)("p",null,"It will generate the follow expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"(ctx) => ctx.Movies.Select(m => new {\n    name = m.Name,\n    directorAgeAtRelease = m.DirectorAgeAtRelease()\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you are using EF, it does not know how to translate your method and will try to execute this method after fetching data.")," This issue is the method relies on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Director")," property on ",(0,r.kt)("inlineCode",{parentName:"p"},"Movie")," which EF doesn't know and did not fetch so you will not get the expected result. There are a few solutions to this."),(0,r.kt)("h4",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("p",null,"One solution is ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Proxies/"},"Microsoft.EntityFrameworkCore.Proxies")," to lazy load the properties, which comes with its own tradeoffs. If you install the Nuget package and follow the instructions for using lazy loading proxies these methods will work."),(0,r.kt)("h4",{id:"entityframeworkcoreprojectables-library"},"EntityFrameworkCore.Projectables Library"),(0,r.kt)("p",null,"Another solution is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koenbeuk/EntityFrameworkCore.Projectables"},"EntityFrameworkCore.Projectables")," (Or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClaveConsulting/Expressionify"},"Expressionify"),") which uses source generators to generate an EF compatible expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"// configure projectables\nservices.AddDbContext<DemoContext>(opt =>\n// highlight-next-line\n    opt.UseProjectables()\n);\n\n// add the attributes to your methods\n[GraphQLField]\n// highlight-next-line\n[Projectable]\npublic uint DirectorAgeAtRelease => (uint)((Released - Director.Dob).Days / 365);\n")),(0,r.kt)("p",null,"Now the expression will be translated into expression that EF will handle. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koenbeuk/EntityFrameworkCore.Projectables"},"EntityFrameworkCore.Projectables")," documention for more information. Or your perferred library."),(0,r.kt)("p",null,"These libraries require the methods by expression - For example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koenbeuk/EntityFrameworkCore.Projectables"},"EntityFrameworkCore.Projectables")," will not work for a method like below, ",(0,r.kt)("em",{parentName:"p"},"whereas lazy loading will"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[GraphQLField]\n[Projectable] // will fail as it can't generate an expression - does work with lazy loading\npublic uint[] AgesOfActorsAtRelease()\n{\n    var ages = new List<uint>();\n    foreach (var actor in Actors)\n    {\n        ages.Add((uint)((Released - actor.Person.Dob).Days / 365));\n    }\n    return ages.ToArray();\n}\n")),(0,r.kt)("h2",{id:"helper-methods"},"Helper methods"),(0,r.kt)("h3",{id:"wherewhen"},"WhereWhen()"),(0,r.kt)("p",null,"The conditional statement we saw above - ",(0,r.kt)("inlineCode",{parentName:"p"},"!string.IsNullOrEmpty(args.firstName) ? ctx.People.Where(p => p.FirstName == args.firstName) : ctx.People")," - can start to get messy when you have multiple optional arguments. It is common to have multiple arguments on fields that return a list of items to filter for different uses. To aid this EntityGraphQL has a helper method ",(0,r.kt)("inlineCode",{parentName:"p"},"WhereWhen()")," that only applies a ",(0,r.kt)("inlineCode",{parentName:"p"},"Where()")," method if a given statement returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.Query().AddField(\n    "people",\n    new {\n        // multiple optional arguments\n        firstName = (string)null,\n        lastName = (string)null\n    },\n    (ctx, args) => ctx.People\n        .WhereWhen(p => p.FistName == args.firstName, !string.IsNullOrEmpty(args.firstName))\n        .WhereWhen(p => p.LastName == args.lastName, !string.IsNullOrEmpty(args.lastName)),\n    "List of people optionally filtered by a first and/or last name"\n);\n')),(0,r.kt)("h3",{id:"takeint"},"Take(int?)"),(0,r.kt)("p",null,"Only apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"Take()")," method if the argument has a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'schema.Query().AddField("Field", new { limit = (int?)null }, (db, p) => db.Entity.Take(p.limit), "description");\n')))}d.isMDXComponent=!0}}]);