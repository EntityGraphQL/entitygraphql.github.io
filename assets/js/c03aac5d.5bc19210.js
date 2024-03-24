"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[1039],{9153:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(5893),r=t(1151);const i={sidebar_position:10},o="Adding Other Data Sources or Services",c={id:"schema-creation/other-data-sources",title:"Adding Other Data Sources or Services",description:"EntityGraphQL lets you add fields that resolve (fetch) data from sources other than the core query context you created your schema with. This is powerful as it let's you create a single API that brings together multiple data sources into an object graph.",source:"@site/docs/schema-creation/other-data-sources.md",sourceDirName:"schema-creation",slug:"/schema-creation/other-data-sources",permalink:"/docs/schema-creation/other-data-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/other-data-sources.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Directives",permalink:"/docs/schema-creation/directives"},next:{title:"Subscriptions",permalink:"/docs/schema-creation/subscriptions"}},a={},l=[{value:"<code>Resolve&lt;TService&gt;()</code> Fields",id:"resolvetservice-fields",level:2},{value:"Services With Non-Scalar Types",id:"services-with-non-scalar-types",level:2},{value:"Connecting Back to the Core Context",id:"connecting-back-to-the-core-context",level:2},{value:"Complex Service Types",id:"complex-service-types",level:2},{value:"Bulk data loading",id:"bulk-data-loading",level:2},{value:"Limitation using services with <code>[GraphQLField]</code> method fields",id:"limitation-using-services-with-graphqlfield-method-fields",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"adding-other-data-sources-or-services",children:"Adding Other Data Sources or Services"}),"\n",(0,n.jsx)(s.p,{children:"EntityGraphQL lets you add fields that resolve (fetch) data from sources other than the core query context you created your schema with. This is powerful as it let's you create a single API that brings together multiple data sources into an object graph."}),"\n",(0,n.jsxs)(s.h2,{id:"resolvetservice-fields",children:[(0,n.jsx)(s.code,{children:"Resolve<TService>()"})," Fields"]}),"\n",(0,n.jsxs)(s.p,{children:["To use other services in a field we use the ",(0,n.jsx)(s.code,{children:"Resolve<TService>()"})," method on the field. EntityGraphQL uses the ",(0,n.jsx)(s.code,{children:"IServiceProvider"})," you pass on execution to resolve the services."]}),"\n",(0,n.jsxs)(s.p,{children:["Let's use a service in our ",(0,n.jsx)(s.code,{children:"Person"})," type example."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'// Where you create your schema\nschema.UpdateType<Person>(personType => {\n    personType.AddField("age", "Person\'s age")\n        .Resolve<IAgeService>((person, srv) => srv.GetAge(person.Dob));\n});\n\n// Startup.cs\nservices.AddSingleton<IAgeService, AgeService>();\n\n// AgeService.cs\npublic class AgeService\n{\n    public int GetAge(DateTime dob)\n    {\n        return (now - dob).TotalYears;\n    }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Now when someone requests the ",(0,n.jsx)(s.code,{children:"age"})," field on a person the result will be resolved by executing the service ",(0,n.jsx)(s.code,{children:"srv.GetAge(person.Dob)"}),". Of course you could calculate the age directly in the field's resolve expression without a service, this is just a demonstration on how to use other services."]}),"\n",(0,n.jsx)(s.h2,{id:"services-with-non-scalar-types",children:"Services With Non-Scalar Types"}),"\n",(0,n.jsx)(s.p,{children:"A service can return any type. If it is a complex type you will need to add it to the schema."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'schema.Query().AddField("users", "Get list of users")\n    .Resolve<IUserService>(\n        // ctx is the core context we created the schema with. For this field we don\'t use it\n        (ctx, srv) => srv.GetUsers()\n    );\n\nschema.AddType<User>("User", "User information")\n    .AddAllFields();\n\npublic class UserService : IUserService\n{\n    public List<User> GetUsers() { ... }\n}\n\npublic class User\n{\n    public int Id { get; set; }\n    public string Email { get; set; }\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"connecting-back-to-the-core-context",children:"Connecting Back to the Core Context"}),"\n",(0,n.jsxs)(s.p,{children:["With the User example above you might want to add fields to the ",(0,n.jsx)(s.code,{children:"User"})," type that brings in data back from the core context. This let's you create a rich object graph for querying."]}),"\n",(0,n.jsxs)(s.p,{children:["When joining non-core context types back to the core context you need to use ",(0,n.jsx)(s.code,{children:"Resolve()"})," again."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'schema.UpdateType<User>(userType => {\n    userType.AddField("tasks", "List of projects assigned to the user")\n        .Resolve<DemoContext>(\n            (user, db) => db.Projects.Where(project => project.AssignedToId == user.Id)\n        );\n});\n'})}),"\n",(0,n.jsx)(s.p,{children:"Now we get query the user and their projects at the same time."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"query {\n  users {\n    name\n    projects {\n      name\n      summary\n    }\n  }\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"complex-service-types",children:"Complex Service Types"}),"\n",(0,n.jsx)(s.p,{children:"If the type you want to define in the schema has data resolved from multiple different methods in your service you can create a service type class."}),"\n",(0,n.jsxs)(s.p,{children:["Let's say we want a root-level ",(0,n.jsx)(s.code,{children:"metrics"})," field where each sub-field uses a service to load the value. If someone only queries 1 of the fields you don't want all of them to resolve/execute. To achieve this we can do the following."]}),"\n",(0,n.jsxs)(s.p,{children:["Define a ",(0,n.jsx)(s.code,{children:"Metrics"})," class that uses a service to provide the functionality."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"public class Metrics\n{\n    private IMetricService m;\n    public Metrics(IMetricService m)\n    {\n        this.m = m;\n    }\n    public int TotalWebhooks => m.TotalWebhooks();\n    public int TotalApiKeys => m.TotalApiKeys();\n    public int TotalUsers => m.TotalUsers();\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"No we can add the types & fields to GraphQL."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'// add the type\nvar metricsType = adminSchema.AddType<Metrics>("Metrics", "Contains summary metrics")\n    .AddAllFields();\n\n// add the root-level field\nadminSchema.Query().AddField("metrics", "Return summary metrics")\n    .Resolve<IMetricService>(\n        (db, m) => new Metrics(m)\n    );\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Now we can query"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"{\n  metrics {\n    totalWebhooks\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To demonstrate that only the ",(0,n.jsx)(s.code,{children:"m.TotalWebhooks()"})," method is called, here is what is produced as the .NET expression."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"(MyDbContext db, IMetricService m) => {\n    var context = new Metric(m);\n    return new\n    {\n        totalWebhooks = context.TotalWebhooks,\n    }\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"You'll see none of the other fields are in the expression and therefore the methods will not execute."}),"\n",(0,n.jsx)(s.h2,{id:"bulk-data-loading",children:"Bulk data loading"}),"\n",(0,n.jsx)(s.p,{children:"You'll notice that a service may be used to resolve a field (that field may return a complex object), what happens if that field in on a type that is in a list result? For example let's assume our user data comes from an external service"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'schema.UpdateType<Project>(type => {\n    type.AddField("createdBy", "Get the user details of user that created this project")\n    .Resolve<IUserService>((project, srv) => srv.GetUserById(project.CreatedById));\n});\n'})}),"\n",(0,n.jsx)(s.p,{children:"If we query all projects"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-gql",children:"{\n  projects {\n    name\n    id\n    createdBy {\n      name\n    }\n  }\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"EntityGraphQL will create an expression similar to this."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"(queryContext, userService) => queryContext.Projects.Select(project => {\n    name = project.Name,\n    id = project.Id,\n    createdBy = new {\n        name = userService.GetUserById(project.CreatedById).Name\n    }\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Note this is just to demonstrate concepts, EntityGraphQL will wrap the call to ",(0,n.jsx)(s.code,{children:"userService.GetUserById(project.Id)"})," to avoid multiple calls if you select other fields on the ",(0,n.jsx)(s.code,{children:"createdBy"})," field. However it will be called for each ",(0,n.jsx)(s.code,{children:"Project"})," result. If there are 1,000 projects, ",(0,n.jsx)(s.code,{children:"GetUserById"})," will be called 1,000 times with the ID for that project."]}),"\n",(0,n.jsxs)(s.p,{children:["Depending on what ",(0,n.jsx)(s.code,{children:"GetUserById"})," does this may not be an issue. You can also build your services to include a short-timed cache for results to speed things up. However, you may want to actually load all the user data for all projects at once. To do this you can use ",(0,n.jsx)(s.code,{children:"ResolveBulk"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'schema.UpdateType<Project>(type =>\n{\n    type.AddField("createdBy", "Get the user details of user that created this project")\n      // normal service to fetch the User object for creator of the Project type\n      .Resolve<UserService>((proj, users) => users.GetUserById(proj.CreatedById))\n      // Bulk service used to fetch many User objects\n      .ResolveBulk<UserService, int, User>(proj => proj.CreatedById, (ids, srv) => srv.GetAllUsers(ids));\n});\n'})}),"\n",(0,n.jsx)(s.p,{children:"Now the following queries will trigger one or the other service call"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-gql",children:"{\n  # ResolveBulk\n  projects {\n    # project fields\n    name\n    id\n    # service field - resolved with ResolveBulk expression for all Projects loaded\n    createdBy {\n      name\n    }\n  }\n\n  # Resolve\n  project(id: 78) {\n    # project fields\n    name\n    id\n    # service field - resolved with Resolve service expression for the single project loaded\n    createdBy {\n      name\n    }\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Instead of calling ",(0,n.jsx)(s.code,{children:"users.GetUserById()"})," for each project to resolve ",(0,n.jsx)(s.code,{children:"createdBy { name }"}),", EntityGraphQL will build a list of keys using the ",(0,n.jsx)(s.code,{children:"proj => proj.CreatedById"})," expression from the list of projects and then call the ",(0,n.jsx)(s.code,{children:"(ids, srv) => srv.GetAllUsers(ids)"})," expression once for the whole list of projects in the results."]}),"\n",(0,n.jsx)(s.p,{children:"The bulk loader method signature needs to match the following"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"public IDictionary<TKey, TResult> MethodName(IEnumerable<TKey> data) {}\n\n// Example of this above\npublic IDictionary<int, User> GetAllUsers(IEnumerable<int> data) {}\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"IEnumerable<T>"})," that is passed into you bulk data loader is ",(0,n.jsx)(s.em,{children:"not"})," a unique list. Depending on where in the graph the field is selected it may end up with duplicate items. It is up to your implementation to handle that, if it is a simple ",(0,n.jsx)(s.code,{children:"int"})," etc. you can just call ",(0,n.jsx)(s.code,{children:".Distinct()"})," on it. As it returns an ",(0,n.jsx)(s.code,{children:"IDictionary<,>"})," you'll get a runtime duplicate key error if you do not handle it."]})}),"\n",(0,n.jsxs)(s.p,{children:["The method returns a ",(0,n.jsx)(s.code,{children:"IDictionary<>"})," where the key is the same type as the key selector in ",(0,n.jsx)(s.code,{children:"ResolveBulk"})," (",(0,n.jsx)(s.code,{children:"proj => proj.CreatedById"})," above) and the value is the return type of the field (",(0,n.jsx)(s.code,{children:"User"})," in the above example)."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ResolveBulk"})," signature is ",(0,n.jsx)(s.code,{children:"ResolveBulk<TService, TKey, TResult>(ctx => keySelector, (ids, service) => dataLoader)"})," where ",(0,n.jsx)(s.code,{children:"TService"})," is the service that will be injected and used to load the data. ",(0,n.jsx)(s.code,{children:"keySelector"})," is an expression that is used to select the IDs/keys from each project object. ",(0,n.jsx)(s.code,{children:"dataLoader"})," is an expression that will be passed a list of those selected IDs/keys and should return an ",(0,n.jsx)(s.code,{children:"IDictionary<TKey, TResult>"})," that maps each result to a key."]}),"\n",(0,n.jsx)(s.p,{children:"It might help to conceptually see what this is doing in code."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"// before we bulk load service data\nvar data = ctx.Projects.Select(p => new {\n  name = p.Name,\n  id = p.Id\n  p.CreatedById\n});\n\n// We now select the keys using the keySelector from ResolveBulk\nvar projectUserKeys = data.Projects.SelectMany(p => p.CreatedById);\n\n// call service bulk loader\nvar projectUsers = userService.GetAllUsers(projectUserKeys);\n\n// Now we can select out the query fields\nvar result = data.Select(p => new {\n  p.name,\n  p.id\n  user = new {\n    name = projectUsers[p.CreatedById].Name,\n    // ... any other fields\n  }\n});\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"limitation-using-services-with-graphqlfield-method-fields",children:["Limitation using services with ",(0,n.jsx)(s.code,{children:"[GraphQLField]"})," method fields"]}),"\n",(0,n.jsxs)(s.p,{children:["Because EntityGraphQL handles service fields by executing an expression without those fields and ",(0,n.jsx)(s.em,{children:"rewriting"})," the expressions to work with the resulting type - see ",(0,n.jsx)(s.a,{href:"../library-compatibility/entity-framework",children:"How EntityGraphQL handles services"})," section for more details - you cannot use services with a method as EntityGraphQL cannot rewrite and data may be missing."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"public class Movie\n{\n    public int Id { get; set; }\n    // ...\n\n    [GraphQLField]\n    public uint[] AgesOfActorsAtRelease(IAgeCalculator calc)\n    {\n        List<uint> ages = calc.CalculateAges(Released, Actors);\n        return ages\n    }\n}\n\npublic class AgeCalculator : IAgeCalculator\n{\n    public List<uint> CalculateAges(DateTime released, IEnumerable<Actor>)\n    {\n        var ages = new List<uint>();\n        foreach (var actor in actors)\n        {\n            ages.Add((uint)((released - actor.Person.Dob).Days / 365));\n        }\n        return ages.ToArray();\n    }\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"With a query:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"{\n  movies {\n    title\n    released\n    agesOfActorsAtRelease\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In the above example ",(0,n.jsx)(s.code,{children:"AgesOfActorsAtRelease"})," is a method on type ",(0,n.jsx)(s.code,{children:"Movie"}),". ",(0,n.jsx)(s.a,{href:"../library-compatibility/entity-framework",children:"When EntityGraphQL executes service fields"})," it first builds and executes executes the following (which is safe for EF)."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:"(DemoContext ctx) = > ctx.Movies.Select(m => new {\n    title = m.Title,\n    released = m.Released\n}).ToList();\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The resulting type is no longer ",(0,n.jsx)(s.code,{children:"Movie"})," and we can no longer find the ",(0,n.jsx)(s.code,{children:"AgesOfActorsAtRelease"})," method. Please use the API on ",(0,n.jsx)(s.code,{children:"Field"})," as above:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-cs",children:'schema.UpdateType<Movie>(type => {\n    type.AddField("agesOfActorsAtRelease", "All the actors ages")\n        .Resolve<IAgeCalculator>((movie, srv) => srv.CalculateAges(movie.Released, movie.Actors));\n});\n'})}),"\n",(0,n.jsxs)(s.p,{children:["As ",(0,n.jsx)(s.code,{children:"(movie, srv) => srv.CalculateAges(movie.Released, movie.Actors)"})," is an expression, EntityGraphQL can rewrite it to work with the first execution result. It also can visit the expression tree to know that ",(0,n.jsx)(s.code,{children:"Released"})," and ",(0,n.jsx)(s.code,{children:"Actors"})," needs to be selected in that first execution."]}),"\n",(0,n.jsxs)(s.p,{children:["If you use ",(0,n.jsx)(s.code,{children:"ExecutionOptions.ExecuteServiceFieldsSeparately = false"})," you will need to make sure all data is available / handle possible ",(0,n.jsx)(s.code,{children:"null"}),"s."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var n=t(7294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);