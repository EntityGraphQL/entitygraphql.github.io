"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[195],{3261:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(7294),o=n(6010),r=n(9960),c=n(2263),l=n(7452),i=n(7462);const s="features_t9lD";var u=n(614);const m=[{title:"1. Define your schema",description:a.createElement(a.Fragment,null,a.createElement("p",null,"EntityGraphQL was designed to get you up and running quickly. Expose your exsiting object graph (include an EF ",a.createElement("code",null,"DbContext"),") or build you own schema."),a.createElement("p",null,"EntityGraphQL can use reflection to generate your schema from your existing object graph - you can use attributes and options to control what is generated. Or you can create one from scratch only adding the types and fields you require."),a.createElement("p",null,a.createElement(r.Z,{className:"button button--secondary",to:"/docs/schema-creation"},"Learn more about schema creation"))),code:{language:"csharp",code:"public class DemoContext : DbContext\n{ \n  public DbSet<Movie> Movies { get; set; }\n  public DbSet<Actor> Actors { get; set; }\n}\n\npublic class Movie\n{\n  public int Id { get; set; }\n  public string Name { get; set; }\n  public Genre Genre { get; set; }\n}\n// all the rest..."}},{title:"2. Register and customize your schema",description:a.createElement(a.Fragment,null," ",a.createElement("p",null,"EntityGraphQL integrates easily into ASP.NET allowing you to provide the customization you need.")," ",a.createElement("p",null,"You can also use EntityGraphQL directly without ASP.NET (no dependency on EF either) or in a more custom way in your own controller. You can also define multiple schemas that provide different access or functionality.")," ",a.createElement("p",null,a.createElement(r.Z,{className:"button button--secondary",to:"/docs/schema-creation/#building-a-full-schema"},"Learn more"))," "),code:{language:"csharp",title:"Startup.cs",code:"public void ConfigureServices(IServiceCollection services)\n{\n  services.AddGraphQLSchema<DemoContext>();\n}\n\npublic void Configure(IApplicationBuilder app, DemoContext db)\n{\n  app.UseEndpoints(endpoints =>\n  {\n    endpoints.MapGraphQL<DemoContext>();\n  });\n}"}},{title:"3. Query your API",description:a.createElement(a.Fragment,null," ",a.createElement("p",null,"You're now set to query your API. Add ",a.createElement(r.Z,{to:"/docs/schema-creation/mutations"},"mutations"),", connect ",a.createElement(r.Z,{to:"/docs/schema-creation/other-data-sources"},"other data sources")," and ",a.createElement(r.Z,{to:"/docs/authorization"},"secure")," your data.")," ",a.createElement("p",null,"EntityGraphQL provides a rich set of features for you to build out your APIs as you add features.")," ",a.createElement("p",null,a.createElement(r.Z,{className:"button button--primary",to:"/docs/getting-started"},"Get started"))," "),code:{language:"graphql",code:"query MyQuery {\n  movie(id: 19) {\n    name\n    genre\n    actors {\n      id\n      name\n    }\n  }\n}"}}];function d(e){let{title:t,description:n,code:r}=e;return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,o.Z)("col col--6")},a.createElement("div",{className:"padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,n))),a.createElement("div",{className:(0,o.Z)("col col--6")},a.createElement("div",{className:"padding-horiz--md"},a.createElement(u.Z,{title:r.title,language:r.language},r.code))))}function p(){return a.createElement("section",{className:s},a.createElement("div",{className:"container"},a.createElement("div",{className:"col"},m.map(((e,t)=>a.createElement(d,(0,i.Z)({key:t},e)))))))}const E="heroBanner_qdFl",h="buttons_AeoN";function g(){const{siteConfig:e}=(0,c.Z)();return a.createElement("header",{className:(0,o.Z)("hero hero--primary",E)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:h},a.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/getting-started"},"Get Started - 5min \u23f1\ufe0f"))))}function y(){const{siteConfig:e}=(0,c.Z)();return a.createElement(l.Z,{title:`${e.title}`,description:`${e.title} - ${e.tagline}`},a.createElement(g,null),a.createElement("main",null,a.createElement(p,null)))}}}]);