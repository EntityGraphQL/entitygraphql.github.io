"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Schema Creation",permalink:"/docs/schema-creation/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Create a data model",id:"create-a-data-model",level:2},{value:"Create the API",id:"create-the-api",level:2},{value:"Securing the route in ASP.NET core",id:"securing-the-route-in-aspnet-core",level:2},{value:"Query your API",id:"query-your-api",level:2},{value:"Custom Controller / Manual Execution",id:"custom-controller--manual-execution",level:2},{value:"Build the GraphQL schema",id:"build-the-graphql-schema",level:3},{value:"Executing a Query",id:"executing-a-query",level:3},{value:"Configuring System.Text.Json",id:"configuring-systemtextjson",level:2},{value:"Deserialization of QueryRequest &amp; QueryVariables",id:"deserialization-of-queryrequest--queryvariables",level:2},{value:"Threading and async execution",id:"threading-and-async-execution",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"If you are working with ASP.NET then install ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/EntityGraphQL.AspNet"},"EntityGraphQL.AspNet")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/EntityGraphQL.AspNet"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/EntityGraphQL.AspNet",alt:"Nuget"}))," via Nuget. It will allow you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quickly get started with ASP.NET"),(0,r.kt)("li",{parentName:"ul"},"Integrate with ASP.NET policy authorization")),(0,r.kt)("p",null,"You can install the core ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/EntityGraphQL"},"EntityGraphQL")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/EntityGraphQL"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/EntityGraphQL",alt:"Nuget"}))," package if you do not need ASP.NET."),(0,r.kt)("h2",{id:"create-a-data-model"},"Create a data model"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: There is no dependency on Entity Framework. Queries are compiled to ",(0,r.kt)("inlineCode",{parentName:"em"},"IQueryable")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"IEnumberable")," LINQ expressions. EF is not a requirement - any ORM working with ",(0,r.kt)("inlineCode",{parentName:"em"},"LinqProvider")," or an in-memory object will work - this example uses EF.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class DemoContext : DbContext\n{\n    public DbSet<Movie> Movies { get; set; }\n    public DbSet<Person> People { get; set; }\n    public DbSet<Actor> Actors { get; set; }\n}\n\npublic class Movie\n{\n    public uint Id { get; set; }\n    public string Name { get; set; }\n    public Genre Genre { get; set; }\n    public DateTime Released { get; set; }\n    public List<Actor> Actors { get; set; }\n    public List<Writer> Writers { get; set; }\n    public Person Director { get; set; }\n    public uint? DirectorId { get; set; }\n    public double Rating { get; internal set; }\n}\n\npublic class Actor\n{\n    public uint PersonId { get; set; }\n    public Person Person { get; set; }\n    public uint MovieId { get; set; }\n    public Movie Movie { get; set; }\n}\npublic class Writer\n{\n    public uint PersonId { get; set; }\n    public Person Person { get; set; }\n    public uint MovieId { get; set; }\n    public Movie Movie { get; set; }\n}\n\npublic enum Genre\n{\n    Action,\n    Drama,\n    Comedy,\n    Horror,\n    Scifi,\n}\n\npublic class Person\n{\n    public uint Id { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n    public DateTime Dob { get; set; }\n    public List<Actor> ActorIn { get; set; }\n    public List<Writer> WriterOf { get; set; }\n    public List<Movie> DirectorOf { get; set; }\n    public DateTime? Died { get; set; }\n    public bool IsDeleted { get; set; }\n}\n")),(0,r.kt)("h2",{id:"create-the-api"},"Create the API"),(0,r.kt)("p",null,"Using what ever .NET API library you wish you can receive a query, execute it and return the data. Here is an example with ASP.NET."),(0,r.kt)("p",null,"You will need to install ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/EntityGraphQL.AspNet"},"EntityGraphQL.AspNet")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"MapGraphQL<>()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AddGraphQLSchema()"),". You can also build your own endpoint, see below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using EntityGraphQL.AspNet;\n\npublic class Startup {\n  public void ConfigureServices(IServiceCollection services)\n  {\n      // Again, just an example using EF but you do not have to\n      services.AddDbContext<DemoContext>(opt => opt.UseInMemoryDatabase("Demo"));\n      // This registers a SchemaProvider<DemoContext> and uses reflection to build the schema with default options\n      services.AddGraphQLSchema<DemoContext>();\n  }\n\n  public void Configure(IApplicationBuilder app, DemoContext db)\n  {\n      app.UseRouting();\n      app.UseEndpoints(endpoints =>\n      {\n          // defaults to /graphql endpoint\n          endpoints.MapGraphQL<DemoContext>();\n      });\n  }\n}\n')),(0,r.kt)("p",null,"This sets up a ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," end point at ",(0,r.kt)("inlineCode",{parentName:"p"},"/graphql")," where the body of the post is expected to be a GraphQL query. You can change the path with the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," argument in ",(0,r.kt)("inlineCode",{parentName:"p"},"MapGraphQL<T>()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You can authorize the route how ever you wish using ASP.NET. See the Authorization section for more details.")),(0,r.kt)("p",null,"You can also expose any endpoint over any protocol you'd like. We'll use HTTP/S for these examples."),(0,r.kt)("h2",{id:"securing-the-route-in-aspnet-core"},"Securing the route in ASP.NET core"),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"MapGraphQL()"),", the route is added with the ",(0,r.kt)("inlineCode",{parentName:"p"},"IEndpointRouteBuilder.MapPost")," method. The ",(0,r.kt)("inlineCode",{parentName:"p"},".MapPost()")," method can be chained with ",(0,r.kt)("inlineCode",{parentName:"p"},".RequireAuthorization()")," where an array of Policy Names can be passed. The policy names are ANDed together with ",(0,r.kt)("inlineCode",{parentName:"p"},".RequireAuthorization()"),"."),(0,r.kt)("p",null,"To add one or more security policies when using ",(0,r.kt)("inlineCode",{parentName:"p"},"MapGraphQL()")," you can pass an a configure function that has access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"IEndpointConventionBuilder")," from the created ",(0,r.kt)("inlineCode",{parentName:"p"},".MapPost()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'//in ConfigureServices\nservices.AddAuthentication()\nservices.AddAuthorization(options =>\n{\n    options.AddPolicy("authorized", policy => policy.RequireAuthenticatedUser();\n});\n\n\n//in Configure\napp.UseRouting();\napp.UseAuthentication();\napp.UseAuthorization();\n\napp.UseEndpoints(endpoints =>\n  {\n      // defaults to /graphql endpoint\n    endpoints.MapGraphQL<DemoContext>(configureEndpoint: (endpoint) => {\n      endpoint.RequireAuthorization("authorized");\n      // do other things with endpoint\n    });\n  });\n\n')),(0,r.kt)("h2",{id:"query-your-api"},"Query your API"),(0,r.kt)("p",null,"You can now make a request to your API via any HTTP tool/library."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST localhost:5000/graphql\n{\n  "query": "{\n    movies { id name }\n  }",\n  "variables": null\n}\n')),(0,r.kt)("p",null,"Will return the following result (depending on the data in you DB)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "movies": [\n      {\n        "id": 11,\n        "name": "Inception"\n      },\n      {\n        "id": 12,\n        "name": "Star Wars: Episode IV - A New Hope"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"Maybe you only want a specific property ",(0,r.kt)("strong",{parentName:"p"},"(request body only from now on)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  movie(id: 11) {\n    id\n    name\n  }\n}\n")),(0,r.kt)("p",null,"Will return the following result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "movie": {\n      "id": 11,\n      "name": "Inception"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you need other fields or relations, just ask"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  movies {\n    id\n    name\n    director {\n      name\n    }\n    writers {\n      name\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Will return the following result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "movies": [\n      {\n        "id": 11,\n        "name": "Inception",\n        "director": {\n          "name": "Christopher Nolan"\n        },\n        "writers": [\n          {\n            "name": "Christopher Nolan"\n          }\n        ]\n      },\n      {\n        "id": 12,\n        "name": "Star Wars: Episode IV - A New Hope",\n        "director": {\n          "name": "George Lucas"\n        },\n        "writers": [\n          {\n            "name": "George Lucas"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"custom-controller--manual-execution"},"Custom Controller / Manual Execution"),(0,r.kt)("p",null,"You can execute GraphQL queries in your own controller or outside of ASP.NET. Below gives an example."),(0,r.kt)("h3",{id:"build-the-graphql-schema"},"Build the GraphQL schema"),(0,r.kt)("p",null,"We can use the helper method ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaBuilder.FromObject<T>>()")," to build the schema from the .NET object model we defined above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var schema = SchemaBuilder.FromObject<DemoContext>();\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See the ",(0,r.kt)("a",{parentName:"em",href:"./schema-creation"},"Schema Creation")," section to learn more about ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaBuilder.FromObject<T>>()"))),(0,r.kt)("h3",{id:"executing-a-query"},"Executing a Query"),(0,r.kt)("p",null,"Here is an example of a controller that receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryRequest")," and executes the query. This logic could easily be applied to other web frameworks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Route("graphql")]\npublic class QueryController : Controller\n{\n    private readonly DemoContext _dbContext;\n    private readonly SchemaProvider<DemoContext> _schemaProvider;\n\n    public QueryController(DemoContext dbContext, SchemaProvider<DemoContext> schemaProvider)\n    {\n        this._dbContext = dbContext;\n        this._schemaProvider = schemaProvider;\n    }\n\n    [HttpPost]\n    public async Task<object> Post([FromBody]QueryRequest query)\n    {\n        var results = await _schemaProvider.ExecuteRequestAsync(query, _dbContext, HttpContext.RequestServices, null);\n        // gql compile errors show up in results.Errors\n        return results;\n    }\n}\n')),(0,r.kt)("h2",{id:"configuring-systemtextjson"},"Configuring System.Text.Json"),(0,r.kt)("p",null,"If you use your own controller/method to execute GraphQL and use ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json"),", it is best to configure it like below for best compatiablity with other tools."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddControllers()\n    .AddJsonOptions(opts =>\n    {\n        // Use enum field names instead of numbers\n        opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());\n        // EntityGraphQL internally builds types with fields\n        opts.JsonSerializerOptions.IncludeFields = true;\n        // The fields internally built already are named with fieldNamer (defaults to camelCase). This is\n        // for the properties on QueryResult (Data, Errors) to match what most tools etc expect (camelCase)\n        opts.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;\n    });\n")),(0,r.kt)("h2",{id:"deserialization-of-queryrequest--queryvariables"},"Deserialization of QueryRequest & QueryVariables"),(0,r.kt)("p",null,"If you are using you're own controller/method to execute GraphQL and deserializing a GraphQL request like below into the ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLRequest")," object. You need to be aware of how your serializer handles nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sample incoming json request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "mutation Mutate($var: ComplexInputType){ doUpdate($var) }",\n  "variables": {\n    "var": {\n      "name": "Lisa",\n      "lastName": "Simpson"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Many deserilaizers will deserialize this into the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryRequest.Variables")," object with the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonElement")," (",(0,r.kt)("inlineCode",{parentName:"p"},"System.Text.Json"),") or a ",(0,r.kt)("inlineCode",{parentName:"p"},"JObject")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"). e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var gql = JsonSerializer.Deserialize<QueryRequest>(query);\nAssert.True(gql.Variables["var"].GetType() == typeof(JsonElement));\n')),(0,r.kt)("p",null,"What we want is a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," handles System.Text.Json's ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonElement")," itself. However if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," or another library (that doesn't deserialize to nested dictionaries) you will have to provide a custom type converter."),(0,r.kt)("p",null,"See the serialization tests for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/tests/EntityGraphQL.Tests/SerializationTests.cs"},"an example with Newtonsoft.Json"),"."),(0,r.kt)("h2",{id:"threading-and-async-execution"},"Threading and async execution"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," executes each request (",(0,r.kt)("inlineCode",{parentName:"p"},"schemaProvider.ExecuteRequest(...)"),") in a single thread. First, ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," starts and awaits each top-level mutation individually, in the order it appears in the document, as ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#multiple-fields-in-mutations"},"required by GraphQL"),". After awaiting the last mutation, ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," starts each query in the order it appears in the document. Finally, it awaits all queries, the async portion of which is allowed to execute in parallel."),(0,r.kt)("p",null,"Since a GraphQL request is processed with a single thread, database contexts can be scoped services like they do for ordinary web services. Likewise, queries (and mutations) that call external web services can safely use the single-threaded ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," accessor to access ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext.RequestAborted")," to cancel the dependent request if the GraphQL request is aborted."))}c.isMDXComponent=!0}}]);