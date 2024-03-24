"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[8642],{6283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(5893),r=t(1151);const a={sidebar_position:2},i="Mutations",o={id:"schema-creation/mutations",title:"Mutations",description:"GraphQLs mutations allow you to make modifications to your data.",source:"@site/docs/schema-creation/mutations.md",sourceDirName:"schema-creation",slug:"/schema-creation/mutations",permalink:"/docs/schema-creation/mutations",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/mutations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fields",permalink:"/docs/schema-creation/fields"},next:{title:"Scalar Types",permalink:"/docs/schema-creation/scalar-types"}},d={},l=[{value:"Adding a mutation controller",id:"adding-a-mutation-controller",level:2},{value:"AddMutationsFrom method arguments",id:"addmutationsfrom-method-arguments",level:2},{value:"Adding a Mutations as a Delegate",id:"adding-a-mutations-as-a-delegate",level:2},{value:"Mutation arguments",id:"mutation-arguments",level:2},{value:"Dependencies Injection &amp; Services",id:"dependencies-injection--services",level:3},{value:"Service vs. Schema Argument",id:"service-vs-schema-argument",level:3},{value:"Example: No attributes",id:"example-no-attributes",level:4},{value:"Example: <code>GraphQLArgumentsAttribute</code>",id:"example-graphqlargumentsattribute",level:4},{value:"Example: <code>GraphQLInputTypeAttribute</code>",id:"example-graphqlinputtypeattribute",level:4},{value:"Why Use <code>Expression</code> Return Type",id:"why-use-expression-return-type",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mutations",children:"Mutations"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://graphql.org/learn/queries/#mutations",children:"GraphQLs mutations"})," allow you to make modifications to your data."]}),"\n",(0,s.jsx)(n.p,{children:"In EntityGraphQL mutations are just .NET methods in a class called a mutation controller."}),"\n",(0,s.jsx)(n.h2,{id:"adding-a-mutation-controller",children:"Adding a mutation controller"}),"\n",(0,s.jsxs)(n.p,{children:["Define related mutations as methods in a class, and apply the ",(0,s.jsx)(n.code,{children:"[GraphQLMutation]"})," attribute to each method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'public class PeopleMutations\n{\n    [GraphQLMutation("Add a new person to the system")]\n    public Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, string firstName, string lastName)\n    {\n        var person = new Person\n        {\n            FirstName = firstName,\n            LastName = lastName,\n        };\n        db.People.Add(person);\n        db.SaveChanges();\n\n        return (ctx) => ctx.People.First(p => p.Id == person.Id);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can add the mutation controller to a schema in the following ways:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Register a mutation controller"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"schema.AddMutationsFrom<PeopleMutations>();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["EntityGraphQL adds the ",(0,s.jsx)(n.code,{children:"PeopleMutations"})," mutation controller and all its mutation methods (those with ",(0,s.jsx)(n.code,{children:"[GraphQLMutation]"})," applied) to the schema."]}),"\n",(0,s.jsxs)(n.p,{children:["For each mutation request, EntityGraphQL creates a new instance of ",(0,s.jsx)(n.code,{children:"PeopleMutations"}),". The constructor and mutation methods accept services passed through ",(0,s.jsx)(n.a,{href:"#dependencies-injection--services",children:"dependency injection"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Register all mutation controllers implementing or deriving from a type"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"schema.AddMutationsFrom<IPersonnelMutations>();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the type parameter to ",(0,s.jsx)(n.code,{children:"AddMutationsFrom"})," is an interface or base class, EntityGraphQL also adds as mutation controllers all types (in the same assembly) that implement the interface or derive from the base class. In example above, all classes that implement ",(0,s.jsx)(n.code,{children:"IPersonnelMutations"})," would be added to the schema."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Now we can add people!"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  addNewPerson(firstName: "Bill", lastName: "Murray") {\n    id\n    fullName\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Above we use our mutation to add a person and select their ",(0,s.jsx)(n.code,{children:"fullName"})," and ",(0,s.jsx)(n.code,{children:"id"})," in the result."]}),"\n",(0,s.jsx)(n.h2,{id:"addmutationsfrom-method-arguments",children:"AddMutationsFrom method arguments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"  void AddMutationsFrom<TType>(SchemaBuilderOptions? options =  null) where TType : class;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SchemaBuilderOptions.AutoCreateInputTypes"}),"\nIf true (default = false) and an object type is encountered during reflection of the mutation parameters it will be added to the schema as an InputObject type."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"AutoCreateInputTypes"})," is true, to inject a service, pass it to the constructor of the mutation controller and store it in a field. EntityGraphQL can't detect services passed as method parameters because ",(0,s.jsx)(n.code,{children:"ServiceProvider"})," is not supplied at schema creation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SchemaBuilderOptions.AddNonAttributedMethodsInControllers"}),"\nIf true (default = false), EntityGraphQL will add any method in the mutation class as a mutation without needing the ",(0,s.jsx)(n.code,{children:"[GraphQLMutation]"})," attribute. Methods must be ",(0,s.jsx)(n.strong,{children:"Public"})," and ",(0,s.jsx)(n.strong,{children:"not inherited"})," but can be either ",(0,s.jsx)(n.strong,{children:"static"})," or ",(0,s.jsx)(n.strong,{children:"instance"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SchemaBuilderOptions"})," inherits from ",(0,s.jsx)(n.code,{children:"SchemaBuilderOptions"})," and those options are passed to the ",(0,s.jsx)(n.code,{children:"SchemaBuilder"})," methods. An important one for mutations is"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SchemaBuilderOptions.AutoCreateNewComplexTypes"}),"\nIf true (default = true) any complex class types that a mutation returns is added to the schema as a query type if it is not already there."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-a-mutations-as-a-delegate",children:"Adding a Mutations as a Delegate"}),"\n",(0,s.jsx)(n.p,{children:"You can also add individual mutation methods to the mutation type as delegates or inline methods."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'class PeopleMutations\n{\n    public class void Configure(ISchemaProvider<DemoContext> schema)\n    {\n        schema.Mutation().Add("peopleMutations", "Add a new person to the system", AddNewPerson);\n\n        schema.Mutation().Add("peopleMutations", "Do something else", (OtherArgs args) => {\n            // ... mutate logic here\n        });\n    }\n\n    public Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, string firstName, string lastName)\n    {\n        var person = new Person\n        {\n            FirstName = firstName,\n            LastName = lastName,\n        };\n        db.People.Add(person);\n        db.SaveChanges();\n\n        return (ctx) => ctx.People.First(p => p.Id == person.Id);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"mutation-arguments",children:"Mutation arguments"}),"\n",(0,s.jsxs)(n.p,{children:["Above we have 3 arguments in our mutation. The ",(0,s.jsx)(n.code,{children:"DemoContext"})," is injected using the context instance we were passed to execute the query."]}),"\n",(0,s.jsx)(n.p,{children:"The other 2 parameters EntityGraphQL does not know where they come from so will consider them arguments in the mutation field that are to be supplied."}),"\n",(0,s.jsx)(n.p,{children:"For example the above mutation generates the follow in the GraphQL schema."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  addNewPerson(firstName: String, lastName: String): Person!\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Any mutation argument that EntityGraphQL can not resolve will be added to the schema as an argument on that mutation."}),"\n",(0,s.jsx)(n.h3,{id:"dependencies-injection--services",children:"Dependencies Injection & Services"}),"\n",(0,s.jsxs)(n.p,{children:["You likely want to access some services in your mutations. EntityGraphQL supports dependency injection. When you execute a query make sure you pass in an ",(0,s.jsx)(n.code,{children:"IServiceProvider"}),". Here is an example with ASP.NET."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: If you use ",(0,s.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL.AspNet",children:"EntityGraphQL.AspNet"})," the registered ",(0,s.jsx)(n.code,{children:"IServiceProvider"})," is provided."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"var results = _schemaProvider.ExecuteRequest(query, demoContext, HttpContext.RequestServices, null);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["EntityGraphQL will use that ",(0,s.jsx)(n.code,{children:"IServiceProvider"})," to resolve any services when calling your mutation method. All you need to do is make sure the service is registered and include it as a parameter of the mutation controller constructor or a mutation method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'// in Startup.cs\nservices.AddSingleton<IDemoService, DemoService>();\n\n// your mutation method\n[GraphQLMutation("Add a new person to the system.")]\npublic Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, AddPersonArgs args, IDemoService demoService)\n{\n    // do something cool with demoService\n\n    return (db) => db.People.First(p => p.Id == person.Id);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Dependencies can also be defined at the class level, which is convenient when used by multiple mutations or in a helper method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"class PeopleMutations(IDemoService demoService)\n{\n    private readonly IDemoService demoService;\n\n    public PeopleMutations(IDemoService demoService)\n    {\n        this.demoService = demoService;\n    }\n\n    public Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, string firstName, string lastName)\n    {\n        // Use ServiceHelper\n    }\n\n    public Expression<Func<DemoContext, Person>> SetPersonJob(DemoContext db, string job)\n    {\n        // Use ServiceHelper\n    }\n\n    void ServiceHelper(Person person)\n    {\n        // Use demoService\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Later we'll learn how to access services within query fields of the schema."}),"\n",(0,s.jsx)(n.h3,{id:"service-vs-schema-argument",children:"Service vs. Schema Argument"}),"\n",(0,s.jsx)(n.p,{children:"Given the example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public Expression<Func<DemoContext, Person>> AddPerson(DemoContext db, AddPersonArgs args, string token, IDemoService demoService) {}\n\npublic class AddPersonArgs\n{\n  public String FirstName { get; set; }\n  public String LastName { get; set; }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"EntityGraphQL needs to build a schema for output and introspection. We do not know the services registered until we execute a query. Therefore EntityGraphQL provides a few options for you to help define your schema."}),"\n",(0,s.jsxs)(n.p,{children:["We know ",(0,s.jsx)(n.code,{children:"DemoContext"})," is the root query context of the schema so that will not be included as an argument in the schema. Between the other 2 we need to tell EntityGraphQL."]}),"\n",(0,s.jsx)(n.p,{children:"When looking for a methods parameters, EntityGraphQL will"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First all scalar / non-complex types will be added as arguments in the schema."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If parameter type or enum type is already in the schema it will be added at an argument."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Any argument or type with ",(0,s.jsx)(n.code,{children:"GraphQLInputTypeAttribute"})," or ",(0,s.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})," found will be added as schema arguments."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If no attributes are found it will assume they are services and not add them to the schema. ",(0,s.jsx)(n.em,{children:"I.e. Label your arguments with the attributes or add them to the schema beforehand."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These rules are also used for subscription methods and query field methods defined with ",(0,s.jsx)(n.code,{children:"GraphQLFieldAttribute"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"example-no-attributes",children:"Example: No attributes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public Expression<Func<DemoContext, Person>> AddPerson(DemoContext db, AddPersonArgs args, string token, IDemoService demoService) {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will incorrectly try to make a schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  addPerson(args: AddPersonArgs, token: String, demoService: IDemoService)\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is not what we want and will likely fail on creation unless you also set the other types."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note this is fine if you have no DI services in your mutation methods."})}),"\n",(0,s.jsxs)(n.h4,{id:"example-graphqlargumentsattribute",children:["Example: ",(0,s.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})]}),"\n",(0,s.jsxs)(n.p,{children:["Note the ",(0,s.jsx)(n.code,{children:"s"})," in Arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public Expression<Func<DemoContext, Person>> AddPerson(DemoContext db, [GraphQLArguments] AddPersonArgs args, string token, IDemoService demoService) {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will correctly make the below schema as we know what is in the schema and what is not."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  addPerson(\n    firstName: String\n    lastName: String\n    token: String\n  )\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})," puts all of the properties from that class as top level arguments in the GraphQL schema."]}),"\n",(0,s.jsxs)(n.h4,{id:"example-graphqlinputtypeattribute",children:["Example: ",(0,s.jsx)(n.code,{children:"GraphQLInputTypeAttribute"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public Expression<Func<DemoContext, Person>> AddPerson(DemoContext db, [GraphQLArgument] AddPersonArgs args, string token, IDemoService demoService) {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will correctly make the below schema as we know what is in the schema and what is not."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  addPerson(\n    args: AddPersonArgs\n    token: String\n  )\n}\n\n# ...\ninput type AddPersonArgs {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GraphQLInputTypeAttribute"})," puts all that class as top level argument in the GraphQL schema. If ",(0,s.jsx)(n.code,{children:"AutoCreateNewComplexTypes"})," is true (default) ",(0,s.jsx)(n.code,{children:"AddPersonArgs"})," will be added as an input type. Otherwise you will need to add this yourself."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GraphQLInputTypeAttribute"})," and ",(0,s.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})," can also be defined on the class instead of inline on the method parameters. They give you options to encapsulate arguments by grouping them and reusing them while letting you define how they appear in the schema."]}),"\n",(0,s.jsx)(n.p,{children:"Depending on the complexity of your mutation and the design of your schema will determine which method best suits you. You may end up with many method arguments to build the mutation field schema arguments. Consider a mutation that creates an object and lets you pass all the properties in."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'[GraphQLMutation("Add a new person to the system.")]\npublic Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db,\n    string firstName,\n    string lastName,\n    string middleName,\n    DateTime dob,\n    int parent1Id,\n    int parent2Id,\n    string[] favFood,\n    // ... it could go on)\n{\n    // ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You may also have mutations where you want to have the same or similar arguments. EntityGraphQL lets you use a MutationArguments class. If a parameter in the method has the ",(0,s.jsx)(n.code,{children:"GraphQLArgumentsAttribute"})," that type will be expanded. The above could be changed to the following."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'[GraphQLMutation("Add a new person to the system.")]\npublic Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, AddPersonArgs args)\n{\n    // use args.*\n}\n\n[GraphQLArguments] // or [GraphQLArgument] if you want the AddPersonArgs as an input type\npublic class AddPersonArgs\n{\n    public String FirstName { get; set; }\n    public String LastName { get; set; }\n    public String MiddleName { get; set; }\n    public DateTime Dob { get; set; }\n    public int Parent1Id { get; set; }\n    public int Parent2Id { get; set; }\n    public String[] FavFood { get; set; }\n    // ... it could go on\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"GraphQLArgument classes provide some flexibility in using inheritance etc for common mutation fields. Both still generate the same mutation field in the GraphQL schema."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  addNewPerson(\n    firstName: String\n    lastName: String\n    middleName: String\n    dob: String\n    parent1Id: Int\n    parent2Id: Int\n    favFood: [String]\n  ): Person!\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"why-use-expression-return-type",children:["Why Use ",(0,s.jsx)(n.code,{children:"Expression"})," Return Type"]}),"\n",(0,s.jsxs)(n.p,{children:["Note the return signature above and the result we return is an ",(0,s.jsx)(n.code,{children:"Expression<Func<>>"})," that selects the person we just modified."]}),"\n",(0,s.jsx)(n.p,{children:"Just like in queries, if the mutation field returns an object type, you can ask for nested fields. This can be useful for fetching the new state of an object after an update."}),"\n",(0,s.jsxs)(n.p,{children:["One API user may ask for the ",(0,s.jsx)(n.code,{children:"id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  addNewPerson(firstName: "Bill", lastName: "Murray") {\n    id\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And another might want more"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  addNewPerson(firstName: "Bill", lastName: "Murray") {\n    id\n    firstName\n    fullName\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"As you don't know which fields an API user will request, you therefore don't know what data to load into memory and return in that object. As EntityGraphQL will execute the field selection against the returned object."}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"Expression<Func<>>"})," as a return type allows EntityGraphQL to build an expression across the whole schema graph. An example of the expression result built for the above mutation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'(DemoContext ctx) => ctx.People\n    .Where(p => p.Id == <id_from_variable>)\n    .Select(p => new {\n        id = p.Id,\n        firstName = p.FirstName,\n        fullName = $"{p.FirstName} {p.LastName}"\n    })\n    .First()\n'})}),"\n",(0,s.jsx)(n.p,{children:"This means we have access to the full schema graph from the core context of the schema and if you are using an ORM like Entity Framework it will load the requested data for you."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);