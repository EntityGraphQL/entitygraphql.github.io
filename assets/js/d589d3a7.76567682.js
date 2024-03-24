"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[7162],{6443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(5893),r=t(1151);const s={sidebar_position:2},o="Getting Started",a={id:"getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Schema Creation",permalink:"/docs/schema-creation/"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Create a data model",id:"create-a-data-model",level:2},{value:"Create the API",id:"create-the-api",level:2},{value:"Securing the route in ASP.NET core",id:"securing-the-route-in-aspnet-core",level:2},{value:"Query your API",id:"query-your-api",level:2},{value:"Custom Controller / Manual Execution",id:"custom-controller--manual-execution",level:2},{value:"Build the GraphQL schema",id:"build-the-graphql-schema",level:3},{value:"Executing a Query in a custom controller",id:"executing-a-query-in-a-custom-controller",level:3},{value:"Executing a Query in azure functions (isolated)",id:"executing-a-query-in-azure-functions-isolated",level:3},{value:"Configuring System.Text.Json",id:"configuring-systemtextjson",level:2},{value:"Deserialization of QueryRequest &amp; QueryVariables",id:"deserialization-of-queryrequest--queryvariables",level:2},{value:"Threading and async execution",id:"threading-and-async-execution",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["If you are working with ASP.NET then install ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL.AspNet",children:"EntityGraphQL.AspNet"})," ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL.AspNet",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/nuget/dt/EntityGraphQL.AspNet",alt:"Nuget"})})," via Nuget. It will allow you to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Quickly get started with ASP.NET"}),"\n",(0,i.jsx)(n.li,{children:"Integrate with ASP.NET policy authorization"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can install the core ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL",children:"EntityGraphQL"})," ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/nuget/dt/EntityGraphQL",alt:"Nuget"})})," package if you do not need ASP.NET."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-data-model",children:"Create a data model"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Note: There is no dependency on Entity Framework. Queries are compiled to ",(0,i.jsx)(n.code,{children:"IQueryable"})," or ",(0,i.jsx)(n.code,{children:"IEnumberable"})," LINQ expressions. EF is not a requirement - any ORM working with ",(0,i.jsx)(n.code,{children:"LinqProvider"})," or an in-memory object will work - this example uses EF."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class DemoContext : DbContext\n{\n    public DbSet<Movie> Movies { get; set; }\n    public DbSet<Person> People { get; set; }\n    public DbSet<Actor> Actors { get; set; }\n}\n\npublic class Movie\n{\n    public uint Id { get; set; }\n    public string Name { get; set; }\n    public Genre Genre { get; set; }\n    public DateTime Released { get; set; }\n    public List<Actor> Actors { get; set; }\n    public List<Writer> Writers { get; set; }\n    public Person Director { get; set; }\n    public uint? DirectorId { get; set; }\n    public double Rating { get; internal set; }\n}\n\npublic class Actor\n{\n    public uint PersonId { get; set; }\n    public Person Person { get; set; }\n    public uint MovieId { get; set; }\n    public Movie Movie { get; set; }\n}\npublic class Writer\n{\n    public uint PersonId { get; set; }\n    public Person Person { get; set; }\n    public uint MovieId { get; set; }\n    public Movie Movie { get; set; }\n}\n\npublic enum Genre\n{\n    Action,\n    Drama,\n    Comedy,\n    Horror,\n    Scifi,\n}\n\npublic class Person\n{\n    public uint Id { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n    public DateTime Dob { get; set; }\n    public List<Actor> ActorIn { get; set; }\n    public List<Writer> WriterOf { get; set; }\n    public List<Movie> DirectorOf { get; set; }\n    public DateTime? Died { get; set; }\n    public bool IsDeleted { get; set; }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-the-api",children:"Create the API"}),"\n",(0,i.jsx)(n.p,{children:"Using what ever .NET API library you wish you can receive a query, execute it and return the data. Here is an example with ASP.NET."}),"\n",(0,i.jsxs)(n.p,{children:["You will need to install ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/EntityGraphQL.AspNet",children:"EntityGraphQL.AspNet"})," to use ",(0,i.jsx)(n.code,{children:"MapGraphQL<>()"})," and ",(0,i.jsx)(n.code,{children:"AddGraphQLSchema()"}),". You can also build your own endpoint, see below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'using EntityGraphQL.AspNet;\n\npublic class Startup {\n  public void ConfigureServices(IServiceCollection services)\n  {\n      // Again, just an example using EF but you do not have to\n      services.AddDbContext<DemoContext>(opt => opt.UseInMemoryDatabase("Demo"));\n      // This registers a SchemaProvider<DemoContext> and uses reflection to build the schema with default options\n      services.AddGraphQLSchema<DemoContext>();\n  }\n\n  public void Configure(IApplicationBuilder app, DemoContext db)\n  {\n      app.UseRouting();\n      app.UseEndpoints(endpoints =>\n      {\n          // defaults to /graphql endpoint\n          endpoints.MapGraphQL<DemoContext>();\n      });\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This sets up a ",(0,i.jsx)(n.code,{children:"HTTP"})," ",(0,i.jsx)(n.code,{children:"POST"})," end point at ",(0,i.jsx)(n.code,{children:"/graphql"})," where the body of the post is expected to be a GraphQL query. You can change the path with the ",(0,i.jsx)(n.code,{children:"path"})," argument in ",(0,i.jsx)(n.code,{children:"MapGraphQL<T>()"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"You can authorize the route how ever you wish using ASP.NET. See the Authorization section for more details."})}),"\n",(0,i.jsx)(n.p,{children:"You can also expose any endpoint over any protocol you'd like. We'll use HTTP/S for these examples."}),"\n",(0,i.jsx)(n.h2,{id:"securing-the-route-in-aspnet-core",children:"Securing the route in ASP.NET core"}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"MapGraphQL()"}),", the route is added with the ",(0,i.jsx)(n.code,{children:"IEndpointRouteBuilder.MapPost"})," method. The ",(0,i.jsx)(n.code,{children:".MapPost()"})," method can be chained with ",(0,i.jsx)(n.code,{children:".RequireAuthorization()"})," where an array of Policy Names can be passed. The policy names are ANDed together with ",(0,i.jsx)(n.code,{children:".RequireAuthorization()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To add one or more security policies when using ",(0,i.jsx)(n.code,{children:"MapGraphQL()"})," you can pass an a configure function that has access to the ",(0,i.jsx)(n.code,{children:"IEndpointConventionBuilder"})," from the created ",(0,i.jsx)(n.code,{children:".MapPost()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'//in ConfigureServices\nservices.AddAuthentication()\nservices.AddAuthorization(options =>\n{\n    options.AddPolicy("authorized", policy => policy.RequireAuthenticatedUser();\n});\n\n\n//in Configure\napp.UseRouting();\napp.UseAuthentication();\napp.UseAuthorization();\n\napp.UseEndpoints(endpoints =>\n  {\n      // defaults to /graphql endpoint\n    endpoints.MapGraphQL<DemoContext>(configureEndpoint: (endpoint) => {\n      endpoint.RequireAuthorization("authorized");\n      // do other things with endpoint\n    });\n  });\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"query-your-api",children:"Query your API"}),"\n",(0,i.jsx)(n.p,{children:"You can now make a request to your API via any HTTP tool/library."}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'POST localhost:5000/graphql\n{\n  "query": "{\n    movies { id name }\n  }",\n  "variables": null\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Will return the following result (depending on the data in you DB)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "movies": [\n      {\n        "id": 11,\n        "name": "Inception"\n      },\n      {\n        "id": 12,\n        "name": "Star Wars: Episode IV - A New Hope"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Maybe you only want a specific property ",(0,i.jsx)(n.strong,{children:"(request body only from now on)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"{\n  movie(id: 11) {\n    id\n    name\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Will return the following result."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "movie": {\n      "id": 11,\n      "name": "Inception"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you need other fields or relations, just ask"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"{\n  movies {\n    id\n    name\n    director {\n      name\n    }\n    writers {\n      name\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Will return the following result."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "movies": [\n      {\n        "id": 11,\n        "name": "Inception",\n        "director": {\n          "name": "Christopher Nolan"\n        },\n        "writers": [\n          {\n            "name": "Christopher Nolan"\n          }\n        ]\n      },\n      {\n        "id": 12,\n        "name": "Star Wars: Episode IV - A New Hope",\n        "director": {\n          "name": "George Lucas"\n        },\n        "writers": [\n          {\n            "name": "George Lucas"\n          }\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"custom-controller--manual-execution",children:"Custom Controller / Manual Execution"}),"\n",(0,i.jsx)(n.p,{children:"You can execute GraphQL queries in your own controller or outside of ASP.NET. Below gives an example."}),"\n",(0,i.jsx)(n.h3,{id:"build-the-graphql-schema",children:"Build the GraphQL schema"}),"\n",(0,i.jsxs)(n.p,{children:["We can use the helper method ",(0,i.jsx)(n.code,{children:"SchemaBuilder.FromObject<T>>()"})," to build the schema from the .NET object model we defined above. Create this once at startup and register it with your services."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"var schema = SchemaBuilder.FromObject<DemoContext>();\n\nservices.AddSingleton<SchemaProvider<DemoContext>>();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["See the ",(0,i.jsx)(n.a,{href:"./schema-creation",children:"Schema Creation"})," section to learn more about ",(0,i.jsx)(n.code,{children:"SchemaBuilder.FromObject<T>>()"})]})}),"\n",(0,i.jsx)(n.h3,{id:"executing-a-query-in-a-custom-controller",children:"Executing a Query in a custom controller"}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of a controller that receives a ",(0,i.jsx)(n.code,{children:"QueryRequest"})," and executes the query. This logic could easily be applied to other web frameworks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'[Route("graphql")]\npublic class QueryController : Controller\n{\n    private readonly DemoContext _dbContext;\n    private readonly SchemaProvider<DemoContext> _schemaProvider;\n\n    public QueryController(DemoContext dbContext, SchemaProvider<DemoContext> schemaProvider)\n    {\n        this._dbContext = dbContext;\n        this._schemaProvider = schemaProvider;\n    }\n\n    [HttpPost]\n    public async Task<object> Post([FromBody]QueryRequest query)\n    {\n        var results = await _schemaProvider.ExecuteRequestWithContextAsync(query, _dbContext, HttpContext.RequestServices, null);\n        // gql compile errors show up in results.Errors\n        return results;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"executing-a-query-in-azure-functions-isolated",children:"Executing a Query in azure functions (isolated)"}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of a function that receives a ",(0,i.jsx)(n.code,{children:"HttpRequestData"}),", from its Body property ",(0,i.jsx)(n.code,{children:"QueryRequest"})," is deserialized and graphQL query is executed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'public class GraphQLFunctions\n{\n    private readonly DemoContext _dbContext;\n    public GraphQLFunctions(DemoContext dbContext)\n    {\n        _dbContext = dbContext;\n    }\n\n    [Function(nameof(GraphQL))]\n    public async Task<HttpResponseData> GraphQL([HttpTrigger(AuthorizationLevel.Function, "post", Route = "graphql")] HttpRequestData req)\n    {\n        var query = await req.GetJsonBody<QueryRequest>(); //helper method to deserialize QueryRequest from req.Body\n        var schemaProvider = SchemaBuilder.FromObject<DemoContext>();\n        var results = await schemaProvider.ExecuteRequestWithContextAsync(query, _dbContext, null, null);\n\n        var response = req.CreateResponse(HttpStatusCode.OK);\n        await response.WriteAsJsonAsync(results);\n        return response;\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-systemtextjson",children:"Configuring System.Text.Json"}),"\n",(0,i.jsxs)(n.p,{children:["If you use your own controller/method to execute GraphQL and use ",(0,i.jsx)(n.code,{children:"System.Text.Json"}),", it is best to configure it like below for best compatibility with other tools."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"services.AddControllers()\n    .AddJsonOptions(opts =>\n    {\n        // Use enum field names instead of numbers\n        opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());\n        // EntityGraphQL internally builds types with fields\n        opts.JsonSerializerOptions.IncludeFields = true;\n        // The fields internally built already are named with fieldNamer (defaults to camelCase). This is\n        // for the properties on QueryResult (Data, Errors) to match what most tools etc expect (camelCase)\n        opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deserialization-of-queryrequest--queryvariables",children:"Deserialization of QueryRequest & QueryVariables"}),"\n",(0,i.jsxs)(n.p,{children:["If you are using you're own controller/method to execute GraphQL and deserializing a GraphQL request like below into the ",(0,i.jsx)(n.code,{children:"GraphQLRequest"})," object. You need to be aware of how your serializer handles nested ",(0,i.jsx)(n.code,{children:"Dictionary<string, object>"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Sample incoming json request"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "query": "mutation Mutate($var: ComplexInputType){ doUpdate($var) }",\n  "variables": {\n    "var": {\n      "name": "Lisa",\n      "lastName": "Simpson"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Many deserializer libraries will deserialize this into the ",(0,i.jsx)(n.code,{children:"QueryRequest.Variables"})," object with the value of ",(0,i.jsx)(n.code,{children:"var"})," as a ",(0,i.jsx)(n.code,{children:"JsonElement"})," (",(0,i.jsx)(n.code,{children:"System.Text.Json"}),") or a ",(0,i.jsx)(n.code,{children:"JObject"})," (",(0,i.jsx)(n.code,{children:"Newtonsoft.Json"}),"). e.g."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'var gql = JsonSerializer.Deserialize<QueryRequest>(query);\nAssert.True(gql.Variables["var"].GetType() == typeof(JsonElement));\n'})}),"\n",(0,i.jsxs)(n.p,{children:["What we want is a nested ",(0,i.jsx)(n.code,{children:"Dictionary<string, object>"}),". ",(0,i.jsx)(n.code,{children:"EntityGraphQL"})," handles ",(0,i.jsx)(n.code,{children:"System.Text.Json"}),"'s ",(0,i.jsx)(n.code,{children:"JsonElement"})," itself. However if you are using ",(0,i.jsx)(n.code,{children:"Newtonsoft.Json"})," or another library (that doesn't deserialize to nested dictionaries) you will have to provide a custom type converter."]}),"\n",(0,i.jsxs)(n.p,{children:["See the serialization tests for ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/tests/EntityGraphQL.Tests/SerializationTests.cs",children:"an example with Newtonsoft.Json"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"threading-and-async-execution",children:"Threading and async execution"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EntityGraphQL"})," executes each request (",(0,i.jsx)(n.code,{children:"schemaProvider.ExecuteRequest(...)"}),") in a single thread. First, ",(0,i.jsx)(n.code,{children:"EntityGraphQL"})," compiles the whole GraphQL request document then selects the operation to execute. For a mutation operation all top-level mutations individually, in the order it appears in the document, as ",(0,i.jsx)(n.a,{href:"https://graphql.org/learn/queries/#multiple-fields-in-mutations",children:"required by GraphQL"}),". For a query operation, ",(0,i.jsx)(n.code,{children:"EntityGraphQL"})," starts each query in the order it appears in the document. Finally, it awaits all queries, the async portion of which is allowed to execute in parallel."]}),"\n",(0,i.jsxs)(n.p,{children:["Since a GraphQL request is processed with a single thread, database contexts can be scoped services like they do for ordinary web services. Likewise, queries (and mutations) that call external web services can safely use the single-threaded ",(0,i.jsx)(n.code,{children:"HttpContext"})," accessor to access ",(0,i.jsx)(n.code,{children:"HttpContext.RequestAborted"})," to cancel the dependent request if the GraphQL request is aborted."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);