"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[590],{2214:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"authorization","title":"Authorization","description":"You should secure the route where you app/client posts request to in any ASP.NET supports. Given GraphQL works with a schema you likely want to provide authorization within the schema. EntityGraphQL provides support for checking claims on a ClaimsPrincipal object.","source":"@site/docs/authorization.md","sourceDirName":".","slug":"/authorization","permalink":"/docs/authorization","draft":false,"unlisted":false,"editUrl":"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/authorization.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Using NewtonSoft JSON","permalink":"/docs/serialization-naming/newtonsoft-json"},"next":{"title":"Validation","permalink":"/docs/validation"}}');var o=t(4848),n=t(8453);const s={sidebar_position:5},a="Authorization",c={},d=[{value:"Passing in the User",id:"passing-in-the-user",level:2},{value:"Adding Authorization on Roles or Policies",id:"adding-authorization-on-roles-or-policies",level:2},{value:"Mutations",id:"mutations",level:2},{value:"Queries",id:"queries",level:2},{value:"Authorization without ASP.Net",id:"authorization-without-aspnet",level:2}];function l(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"authorization",children:"Authorization"})}),"\n",(0,o.jsxs)(i.p,{children:["You should secure the route where you app/client posts request to in any ASP.NET supports. Given GraphQL works with a schema you likely want to provide authorization within the schema. EntityGraphQL provides support for checking claims on a ",(0,o.jsx)(i.code,{children:"ClaimsPrincipal"})," object."]}),"\n",(0,o.jsx)(i.h2,{id:"passing-in-the-user",children:"Passing in the User"}),"\n",(0,o.jsxs)(i.p,{children:["First pass in the ",(0,o.jsx)(i.code,{children:"ClaimsPrincipal"})," to the query call"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.em,{children:["Note if you are using the ",(0,o.jsx)(i.code,{children:"AddGraphQLSchema()"})," extension in ",(0,o.jsx)(i.code,{children:"EntityGraphQL.AspNet"})," this is already handled for you."]})}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cs",children:"// Assuming you're in a ASP.NET controller\n// this.User is the current ClaimsPrincipal\nvar results = await schemaProvider.ExecuteRequestAsync(query, dbContext, this.HttpContext.RequestServices, this.User);\n"})}),"\n",(0,o.jsx)(i.h2,{id:"adding-authorization-on-roles-or-policies",children:"Adding Authorization on Roles or Policies"}),"\n",(0,o.jsxs)(i.p,{children:["You can add authorization requirements throughout your schema even using the ",(0,o.jsx)(i.code,{children:"AuthorizeAttribute"})," or when building/modifying your schema."]}),"\n",(0,o.jsxs)(i.p,{children:["_Note: if you provide multiple ",(0,o.jsx)(i.code,{children:"[AuthorizeAttribute]"})," attributes on a single field/mutation they are treated as ",(0,o.jsx)(i.code,{children:"AND"})," meaning all are required. If you provide a single ",(0,o.jsx)(i.code,{children:"[AuthorizeAttribute]"})," attribute with multiple roles/policies in a comma-separated string they are treated as ",(0,o.jsx)(i.code,{children:"OR"})," i.e. having any of those listed will authorize access."]}),"\n",(0,o.jsx)(i.h2,{id:"mutations",children:"Mutations"}),"\n",(0,o.jsxs)(i.p,{children:["Mark you mutation methods with the ",(0,o.jsx)(i.code,{children:'[Authorize(Roles = "role-name")]'})," attribute."]}),"\n",(0,o.jsxs)(i.p,{children:["Policy authorization with ",(0,o.jsx)(i.code,{children:'[Authorize(Policy = "policy-name")]'})," is also supported when using ",(0,o.jsx)(i.code,{children:"EntityGraphQL.AspNet"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cs",children:'public class MovieMutations\n{\n  [GraphQLMutation]\n  [Authorize(Roles = "movie-editor")]\n  public Movie AddActor(MyDbContext db, ActorArgs args)\n  {\n    // ...\n  }\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["If a ",(0,o.jsx)(i.code,{children:"ClaimsPrincipal"})," is provided with the query call it will be required to be Authorized and have a Role of ",(0,o.jsx)(i.code,{children:"movie-editor"})," to call this mutation."]}),"\n",(0,o.jsx)(i.h2,{id:"queries",children:"Queries"}),"\n",(0,o.jsxs)(i.p,{children:["If you are using the ",(0,o.jsx)(i.code,{children:"SchemaBuilder.FromObject<TContext>()"})," you can use the ",(0,o.jsx)(i.code,{children:'[Authorize(Roles = "role-name")]'})," attribute again throughout the objects."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cs",children:'public class MyDbContext : DbContext {\n  protected override void OnModelCreating(ModelBuilder builder) {\n    // Set up your relations\n  }\n\n  // require either claim\n  [Authorize(Roles = "property-role,admin-property-role")]\n  public DbSet<Property> Properties { get; set; }\n  public DbSet<PropertyType> PropertyTypes { get; set; }\n  public DbSet<Location> Locations { get; set; }\n}\n\npublic class Property {\n  public uint Id { get; set; }\n  public string Name { get; set; }\n  public PropertyType Type { get; set; }\n  // require both claims\n  [Authorize(Roles = "property-admin")]\n  [Authorize(Roles = "super-admin")]\n  public Location Location { get; set; }\n}\n\n// ....\n'})}),"\n",(0,o.jsx)(i.p,{children:"You can secure whole types with the attribute too."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cs",children:'[Authorize(Roles = "property-user")]\npublic class Property {\n  public uint Id { get; set; }\n  public string Name { get; set; }\n  public PropertyType Type { get; set; }\n  public Location Location { get; set; }\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["If a ",(0,o.jsx)(i.code,{children:"ClaimsPrincipal"})," is provided with the ",(0,o.jsx)(i.code,{children:"ExecuteRequest"})," call it will be required to be Authorized and have the Role ",(0,o.jsx)(i.code,{children:"property-role"})," to query the root-level ",(0,o.jsx)(i.code,{children:"properties"})," field and the role ",(0,o.jsx)(i.code,{children:"property-admin"})," to query the ",(0,o.jsx)(i.code,{children:"Property"})," field ",(0,o.jsx)(i.code,{children:"location"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"Authorization can be provided in the API for add/replacing fields on the schema object."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cs",children:'schemaProvider.AddField("myField", (db) => db.MyEntities, "Description").RequiresAllRoles("admin");\nschemaProvider.AddField("myField", (db) => db.MyEntities, "Description").RequiresAnyRole("admin", "super-admin");\n\nschemaProvider.AddType<Property>("properties", (db) => db.Properties, "Description").RequiresAllRoles("property-user");\nschemaProvider.AddType<Property>("properties", (db) => db.Properties, "Description").RequiresAnyRole("property-user", "property-admin");\n'})}),"\n",(0,o.jsxs)(i.p,{children:["Note when using ",(0,o.jsx)(i.code,{children:"AddField()"})," and ",(0,o.jsx)(i.code,{children:"AddType()"})," these functions will automatically search for ",(0,o.jsx)(i.code,{children:"[Authorize()]"})," attributes on the fields and types."]}),"\n",(0,o.jsx)(i.h2,{id:"authorization-without-aspnet",children:"Authorization without ASP.Net"}),"\n",(0,o.jsxs)(i.p,{children:["You can use the ",(0,o.jsx)(i.code,{children:"GraphQLAuthorizeAttribute"})," with role claims to provide authorization without the ASP.Net dependency."]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var r=t(6540);const o={},n=r.createContext(o);function s(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);