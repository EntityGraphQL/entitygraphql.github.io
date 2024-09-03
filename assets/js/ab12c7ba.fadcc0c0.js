"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[6810],{5225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(4848),a=n(8453);const r={sidebar_position:2},o="Caching",c={id:"library-compatibility/caching",title:"Caching",description:"Several ways of caching data are available in an asp.net project. Some will be described here.",source:"@site/docs/library-compatibility/caching.md",sourceDirName:"library-compatibility",slug:"/library-compatibility/caching",permalink:"/docs/library-compatibility/caching",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/library-compatibility/caching.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Entity Framework",permalink:"/docs/library-compatibility/entity-framework"},next:{title:"NewtonSoft JSON",permalink:"/docs/library-compatibility/newtonsoft-json"}},s={},l=[{value:"Output caching",id:"output-caching",level:2},{value:"EFCore Second Leve Cache Interceptor",id:"efcore-second-leve-cache-interceptor",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"caching",children:"Caching"})}),"\n",(0,i.jsx)(t.p,{children:"Several ways of caching data are available in an asp.net project. Some will be described here."}),"\n",(0,i.jsx)(t.h2,{id:"output-caching",children:"Output caching"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/performance/caching/output",children:"Output caching"}),", available in asp.net core, can be used to cache GraphQL requests/responses."]}),"\n",(0,i.jsxs)(t.p,{children:["Register required services (",(0,i.jsx)(t.code,{children:"builder.Services.AddXyz()"}),") and set up the request pipeline (",(0,i.jsx)(t.code,{children:"app.UseXyz()"}),") appropriately."]}),"\n",(0,i.jsxs)(t.p,{children:["Typical asp.net ",(0,i.jsx)(t.code,{children:"Program.cs"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:'var builder = WebApplication.CreateBuilder(args);\n\n[...]\n\n// highlight-next-line\nbuilder.Services.AddOutputCache();\n\n[...]\n\nvar app = builder.Build();\n\n[...]\n\napp.UseOutputCache();\n\n[...]\n\napp.MapGraphQL<MyDbContext>(\n    configureEndpoint: endpointConventionBuilder =>\n        // highlight-start\n        endpointConventionBuilder.CacheOutput(outputCachePolicyBuilder =>\n        {\n            // Support HTTP POST requests, not supported by default\n            outputCachePolicyBuilder.AddPolicy<GraphQLPolicy>();\n            outputCachePolicyBuilder.VaryByValue(httpContext =>\n            {\n                httpContext.Request.EnableBuffering();\n                var initialBodyStreamPosition = httpContext.Request.Body.Position;\n\n                httpContext.Request.Body.Position = 0;\n\n                using var bodyReader = new StreamReader(httpContext.Request.Body, leaveOpen: true);\n                var bodyContent = bodyReader.ReadToEndAsync()\n                                            .Result\n                                            .Replace(" ", "");\n\n                httpContext.Request.Body.Position = initialBodyStreamPosition;\n\n                return new KeyValuePair<string, string>("requestBody", bodyContent);\n            });\n            outputCachePolicyBuilder.Expire(TimeSpan.FromSeconds(MedicalDataApiConstants.OutputCache.DefaultExpireSeconds));\n        }\n        // highlight-end\n    ));\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The code contained in the ",(0,i.jsx)(t.code,{children:"VaryByValue"})," function will be called by the asp.net pipeline, from the ",(0,i.jsx)(t.code,{children:"OutputCacheMiddleware"})," for every GraphQL request. If the same key, as the one returned by the function, is being found in the cache, its cached value will be returned. If it is not found, EntityGraphQL will execute the DB call and the returned result will be added to the cache."]}),"\n",(0,i.jsxs)(t.li,{children:["Adapt the ",(0,i.jsx)(t.code,{children:"VaryByValue"})," function to your needs. E.g. if the GraphQL query depends on the accept language, it can be added as part of the key."]}),"\n",(0,i.jsxs)(t.li,{children:["With ",(0,i.jsx)(t.code,{children:"builder.Services.AddOutputCache()"}),", in memory cache will be used. It can also be configured to use other backends e.g. ",(0,i.jsx)(t.a,{href:"https://www.nuget.org/packages/Microsoft.Extensions.Caching.StackExchangeRedis",children:"Redis"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We have to define and register our own ",(0,i.jsx)(t.code,{children:"IOutputCachePolicy"}),", because the ",(0,i.jsx)(t.a,{href:"https://github.com/dotnet/dotnet/blob/main/src/aspnetcore/src/Middleware/OutputCaching/src/Policies/DefaultPolicy.cs#L70",children:"DefaultPolicy"})," only supports caching for HTTP GET endpoints, whereas GraphQL uses HTTP POST. Note that ",(0,i.jsx)(t.a,{href:"https://github.com/dotnet/dotnet/tree/main/src/aspnetcore/src/Middleware/OutputCaching/src/Policies",children:"all implementations"})," of ",(0,i.jsx)(t.code,{children:"IOutputCachePolicy"})," are defined as ",(0,i.jsx)(t.code,{children:"internal sealed"})," and thus, can't be extended.",(0,i.jsx)("br",{}),"\nThe below ",(0,i.jsx)(t.code,{children:"GraphQLPolicy"})," is a copy/paste of ",(0,i.jsx)(t.a,{href:"https://github.com/dotnet/dotnet/blob/main/src/aspnetcore/src/Middleware/OutputCaching/src/Policies/DefaultPolicy.cs",children:"DefaultPolicy"}),", where only HTTP POST requests are supported, instead of GET."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:'using Microsoft.AspNetCore.OutputCaching;\nusing Microsoft.Extensions.Primitives;\n\nnamespace MyApi.OutputCachePolicies;\n\ninternal sealed class GraphQLPolicy : IOutputCachePolicy\n{\n    /// <inheritdoc />\n    ValueTask IOutputCachePolicy.CacheRequestAsync(OutputCacheContext context, CancellationToken cancellationToken)\n    {\n        var attemptOutputCaching = AttemptOutputCaching(context);\n        context.EnableOutputCaching = true;\n        context.AllowCacheLookup = attemptOutputCaching;\n        context.AllowCacheStorage = attemptOutputCaching;\n        context.AllowLocking = true;\n\n        // Vary by any query by default\n        context.CacheVaryByRules.QueryKeys = "*";\n\n        return ValueTask.CompletedTask;\n    }\n\n    /// <inheritdoc />\n    ValueTask IOutputCachePolicy.ServeFromCacheAsync(OutputCacheContext context, CancellationToken cancellationToken)\n    {\n        return ValueTask.CompletedTask;\n    }\n\n    /// <inheritdoc />\n    ValueTask IOutputCachePolicy.ServeResponseAsync(OutputCacheContext context, CancellationToken cancellationToken)\n    {\n        var response = context.HttpContext.Response;\n\n        // Verify existence of cookie headers\n        if (!StringValues.IsNullOrEmpty(response.Headers.SetCookie))\n        {\n            context.AllowCacheStorage = false;\n            return ValueTask.CompletedTask;\n        }\n\n        // Check response code\n        if (response.StatusCode != StatusCodes.Status200OK)\n        {\n            context.AllowCacheStorage = false;\n            return ValueTask.CompletedTask;\n        }\n\n        return ValueTask.CompletedTask;\n    }\n\n    private static bool AttemptOutputCaching(OutputCacheContext context)\n    {\n        // Check if the current request fulfills the requirements to be cached\n\n        var request = context.HttpContext.Request;\n\n        // Verify the method\n        // highlight-start\n        // Only allow POST requests to be cached (only change from DefaultPolicy)\n        if (!HttpMethods.IsPost(request.Method))\n        {\n            return false;\n        }\n        // highlight-end\n\n        // Verify existence of authorization headers\n        if (!StringValues.IsNullOrEmpty(request.Headers.Authorization) || request.HttpContext.User?.Identity?.IsAuthenticated == true)\n        {\n            return false;\n        }\n\n        return true;\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"efcore-second-leve-cache-interceptor",children:"EFCore Second Leve Cache Interceptor"}),"\n",(0,i.jsx)(t.p,{children:"EFCoreSecondLevelCacheInterceptor is a library that caches the result of EF commands and automatically invalidates cached data by watching what tables are updated via EF. This makes it a really easy way to speed up the performance of EntityGraphQL without the overhead of manual invalidation. EQL still needs to parse queries and convert them to expression trees, so there's still more cpu overhead than output caching."}),"\n",(0,i.jsx)(t.p,{children:"It supports numerous caching methods through its support of EasyCaching.Core (InMemory, Redis, Sql, Disk + more)."}),"\n",(0,i.jsxs)(t.p,{children:["For full setup instructions see their documentation on their github page (",(0,i.jsx)(t.a,{href:"https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor",children:"https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor"}),") however it can be as simple as enabling efsecondlevelcache, adding a caching provider and adding the interceptor to EFCore."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  services.AddEFSecondLevelCache(options => {\n     options.UseMemoryCacheProvider();\n  });\n\n  services.AddDbContextPool<ApplicationDbContext>((serviceProvider, optionsBuilder) => {\n     optionsBuilder\n        .UseSqlServer(...)\n        .AddInterceptors(serviceProvider.GetRequiredService<SecondLevelCacheInterceptor>()));\n  });\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);