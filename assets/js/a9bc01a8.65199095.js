"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[6058],{3074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(5893),i=t(1151);const a={sidebar_position:6},o="Validation",s={id:"validation",title:"Validation",description:"When you provide input - via arguments - to your queries, you may want to perform some validation on that input before proceeding to you domain logic. EntityGraphQL provides a couple of ways to validation your input.",source:"@site/docs/validation.md",sourceDirName:".",slug:"/validation",permalink:"/docs/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/validation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/docs/authorization"},next:{title:"Field Extensions",permalink:"/docs/field-extensions/"}},d={},l=[{value:"Mutation Validation",id:"mutation-validation",level:2},{value:"Query Field Validation",id:"query-field-validation",level:2},{value:"Custom Validation with Argument Validators",id:"custom-validation-with-argument-validators",level:2},{value:"Validation with Attributes",id:"validation-with-attributes",level:2},{value:"Extensions - adding custom data to errors",id:"extensions---adding-custom-data-to-errors",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"validation",children:"Validation"}),"\n",(0,r.jsx)(n.p,{children:"When you provide input - via arguments - to your queries, you may want to perform some validation on that input before proceeding to you domain logic. EntityGraphQL provides a couple of ways to validation your input."}),"\n",(0,r.jsx)(n.h2,{id:"mutation-validation",children:"Mutation Validation"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"[Required]"}),", ",(0,r.jsx)(n.code,{children:"[Range]"})," & ",(0,r.jsx)(n.code,{children:"[StringLength]"})," attributes to add validation to your mutation arguments. Example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public Expression<Func<DemoContext, Person>> AddNewPerson(DemoContext db, AddPersonArgs args)\n{\n    // Add person logic here\n    return (ctx) => ctx.People.First(p => p.Id == person.Id);\n}\n\n[MutationArguments]\npublic class AddPersonArgs\n{\n  [Required(AllowEmptyStrings = false, ErrorMessage = "Actor Name is required")]\n  public string Name { get; set; }\n  [Range(0, 900, ErrorMessage = "Age must be positive and less than 900")]\n  public int Age { get; set; }\n  [StringLength(200, ErrorMessage = "Description must be less than 200 characters")]\n  public string Description { get; set; }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If any of those validations fail, the graph QL result will have errors for each one that failed. If your model validation fails your mutation method ",(0,r.jsx)(n.em,{children:"will not be called"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Throwing an exception in your mutation will cause the the error to be reported in the GraphQL response. You can also collect multiple error messages instead of throwing an exception on the first error using the ",(0,r.jsx)(n.code,{children:"GraphQLValidator"})," service."]}),"\n",(0,r.jsxs)(n.p,{children:["This service needs to be registered in your service provider. You can always implement you own ",(0,r.jsx)(n.code,{children:"GraphQLValidator"})," by implementing the ",(0,r.jsx)(n.code,{children:"IGraphQLValidator"})," interface."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'\n// In your Startup.cs\nservices.AddGraphQLValidator(); // with EntityGraphQL.AspNet\n\n// Or with your own implementation\nservices.AddScoped<IGraphQLValidator, MyGraphQLValidator>();\n\n// your mutation\npublic class MovieMutations\n{\n  [GraphQLMutation]\n  public Expression<Func<MyDbContext, Movie>> AddActor(MyDbContext db, ActorArgs args, IGraphQLValidator validator)\n  {\n    if (string.IsNullOrEmpty(args.Name))\n      validator.AddError("Name argument is required");\n    if (args.age <= 0)\n      validator.AddError("Age argument must be positive");\n\n    if (validator.HasErrors)\n      return null;\n\n    // do your magic here. e.g. with EF or other business logic\n    var movie = db.Movies.First(m => m.Id == args.Id);\n    var actor = new Person { Name = args.Name, ... };\n    movie.Actors.Add(actor);\n    db.SaveChanges();\n    return ctx => ctx.Movies.First(m => m.Id == movie.Id);\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"query-field-validation",children:"Query Field Validation"}),"\n",(0,r.jsxs)(n.p,{children:["If a query field has arguments - like an Id to search for or a filter string etc. - you may also want to perform validation on the input. You can use the same ",(0,r.jsx)(n.code,{children:"[Required]"}),", ",(0,r.jsx)(n.code,{children:"[Range]"})," & ",(0,r.jsx)(n.code,{children:"[StringLength]"})," attributes on your argument object if you are using typed field arguments."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'schema.Query().AddField(\n    "people",\n    new PeopleArgs(),\n    (ctx, args) => ctx.People.Where(p => p.Age > args.Age),\n    "List all people. Filter by min age"\n);\n\npublic class PeopleArgs\n{\n    [Range(0, 115)]\n    public bool Age { get; set; } = 0 // default value\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"custom-validation-with-argument-validators",children:"Custom Validation with Argument Validators"}),"\n",(0,r.jsxs)(n.p,{children:["EntityGraphQL allows you to register argument validator which is a great place to perform custom validation on any arguments. If you add any errors to the ",(0,r.jsx)(n.code,{children:"ArgumentValidatorContext"})," you are passed execution of the the query will not proceed and the errors will be in the result."]}),"\n",(0,r.jsxs)(n.p,{children:["You can register validators via a class that implements ",(0,r.jsx)(n.code,{children:"IArgumentValidator"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'schema.Query().AddField("movies",\n    new MovieQueryArgs(), (ctx, args) => ctx.Movies.Where(m => m.Title.Contains(args.Title)),\n    "Get a list of Movies")\n    .AddValidator<MovieValidator>();\n\npublic class MovieValidator : IArgumentValidator\n{\n    public Task InvokeAsync(ArgumentValidatorContext context)\n    {\n        // should always be true\n        if (context.Arguments is MovieQueryArgs args)\n        {\n            if (args.Price == 150)\n                context.AddError("You can\'t use 150 for the price");\n            if (string.IsNullOrEmpty(args.Title))\n                context.AddError("Empty or null Title is an invalid search term");\n        }\n        return System.Threading.Tasks.Task.CompletedTask;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or as a delegate."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'schema.Query().AddField("movies",\n    new MovieQueryArgs(), (ctx, args) => ctx.Movies.Where(m => m.Title.Contains(args.Title)),\n    "Get a list of Movies")\n    .AddValidator(context => {\n        // should always be true\n        if (context.Arguments is MovieQueryArgs args)\n        {\n            if (args.Price == 150)\n                context.AddError("You can\'t use 150 for the price");\n            if (string.IsNullOrEmpty(args.Title))\n                context.AddError("Empty or null Title is an invalid search term");\n        }\n    });\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using anonymous type for arguments you can use the arguments as a ",(0,r.jsx)(n.code,{children:"dynamic"})," type."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'schema.Query().AddField("movies",\n    new MovieQueryArgs(), (ctx, args) => ctx.Movies.Where(m => m.Title.Contains(args.Title)),\n    "Get a list of Movies")\n    .AddValidator(context => {\n        dynamic args = context.Arguments;\n        if (args.Price == 150)\n            context.AddError("You can\'t use 150 for the price");\n        if (string.IsNullOrEmpty(args.Title))\n            context.AddError("Empty or null Title is an invalid search term");\n    });\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can add validators to mutation fields. Validators on a mutation field are called before the mutation is executed, if you add any errors to the ",(0,r.jsx)(n.code,{children:"ArgumentValidatorContext"})," the mutation will not be executed and the errors will be in the result."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'[Fact]\nvar schema = SchemaBuilder.FromObject<ValidationTestsContext>();\nschema.Mutation().Add(AddPerson)\n.AddValidator(context =>\n{\n    if (context.Arguments is PersonArgs args)\n    {\n        if (args.Name == "Luke")\n            context.AddError("Name can\'t be Luke");\n    }\n});\n\nprivate static bool AddPerson(PersonArgs args)\n{\n    // ...\n}\n\npublic class PersonArgs\n{\n    public string Name { get; set; }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"validation-with-attributes",children:"Validation with Attributes"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"ArgumentValidator"})," attribute to register validator on input arguments as well. These can be used on"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mutation methods - Will trigger validation for the arguments for the mutation"}),"\n",(0,r.jsx)(n.li,{children:"Mutation arguments class - the arguments passed to a mutation"}),"\n",(0,r.jsxs)(n.li,{children:["Typed query arguments - if you have typed query arguments with this attribute they will be validated. If you use anonymous argument types you will need to use ",(0,r.jsx)(n.code,{children:"AddValidator()"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'// On mutation arguments directly\n[MutationArguments]\n[ArgumentValidator(typeof(PersonValidator))]\npublic class PersonArgs\n{\n    public string Name { get; set; }\n}\n\n// On the mutation method\npublic class Mutations\n{\n    [GraphQLMutation]\n    [ArgumentValidator(typeof(PersonValidator))]\n    public static bool AddPerson(PersonArgs args)\n    {\n        // ...\n    }\n}\n\n// On query args\nschema.Query().AddField("movies",\n    new MovieQueryArgs(),\n    (ctx, args) => ctx.Movies.Where(m => m.Title.Contains(args.Title)),\n    "List of movies");\n\n[ArgumentValidator(typeof(MovieValidator))]\npublic class MovieQueryArgs\n{\n    public string Title { get; set; }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"extensions---adding-custom-data-to-errors",children:"Extensions - adding custom data to errors"}),"\n",(0,r.jsxs)(n.p,{children:["Errors often can be useful for end users. Other times they are for the developers. You can use the extensions field to add additional information to your errors to help you make a choice about the error. I.e. like showing it directly to the user. Extensions are defined as ",(0,r.jsx)(n.code,{children:"Dictionary<string, object>"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public class MovieMutations\n{\n  [GraphQLMutation]\n  public Expression<Func<MyDbContext, Movie>> AddActor(MyDbContext db, ActorArgs args, IGraphQLValidator validator)\n  {\n    if (string.IsNullOrEmpty(args.Name))\n      validator.AddError("Name argument is required", new Dictionary<string, object> {{"type", 1}});\n    if (args.age <= 0)\n      validator.AddError("Age argument must be positive", new Dictionary<string, object> {{"type", 1}});\n\n    if (validator.HasErrors)\n      return null;\n\n    // do your magic here. e.g. with EF or other business logic\n    //...\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result will look like this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "errors": [\n    {\n      "message": "Name argument is required",\n      "extensions": {\n        "type": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can they check the ",(0,r.jsx)(n.code,{children:"type"})," field on the error and display it to the user."]}),"\n",(0,r.jsxs)(n.p,{children:["You can also ",(0,r.jsx)(n.code,{children:"throw"})," the ",(0,r.jsx)(n.code,{children:"EntityGraphQLException"})," which also takes an extensions arguments."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(7294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);