"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:9},o="Directives",s={unversionedId:"schema-creation/directives",id:"schema-creation/directives",title:"Directives",description:"Directives provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:",source:"@site/docs/schema-creation/directives.md",sourceDirName:"schema-creation",slug:"/schema-creation/directives",permalink:"/docs/schema-creation/directives",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/directives.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Lists and Non-Null",permalink:"/docs/schema-creation/lists-and-nonnulls"},next:{title:"Adding Other Data Sources or Services",permalink:"/docs/schema-creation/other-data-sources"}},l={},c=[{value:"Built-In Directives",id:"built-in-directives",level:2},{value:"Custom Directives",id:"custom-directives",level:2},{value:"Example",id:"example",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"directives"},"Directives"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#directives"},"Directives")," provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query Hero($episode: Episode, $withFriends: Boolean!) {\n  hero(episode: $episode) {\n    name\n    friends @include(if: $withFriends) {\n      name\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Now if you set ",(0,i.kt)("inlineCode",{parentName:"p"},"withFriends")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the variables passed with the query POST you'll get the ",(0,i.kt)("inlineCode",{parentName:"p"},"friends")," result. If you set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," you will not. Thus dynamically changing the shape of your query."),(0,i.kt)("h2",{id:"built-in-directives"},"Built-In Directives"),(0,i.kt)("p",null,"The GraphQL spec defines 2 directives that are supported out of the box in EntityGraphQL."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@include(if: Boolean)")," - Only include this field in the result if the argument is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@skip(if: Boolean)")," - Skip this field if the argument is true.")),(0,i.kt)("h2",{id:"custom-directives"},"Custom Directives"),(0,i.kt)("p",null,"Directives give you access to the GraphQL Nodes - a abstract-code representation of the query document. You can return new ",(0,i.kt)("inlineCode",{parentName:"p"},"IGraphQLNode")," with modified data to make changes before executing."),(0,i.kt)("p",null,"The main interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"IGraphQLNode? VisitNode(ExecutableDirectiveLocation location, IGraphQLNode? node, object? arguments)")," - This is called when the node in the document graph is seen. You can return ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," to remove the node from the result."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location")," will tell you the location/type of the node the directive was added to (e.g. field, fragment spread)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node")," is information about the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arguments")," are any arguments passed to the directive")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"We're keen to hear if you can or cannot implement the functionality you require with the above interface. Please open an issue describing what you are trying to implement if you have issues. You may also want to look at ",(0,i.kt)("a",{parentName:"em",href:"../field-extensions/"},"Field Extensions"),".")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is a simple directive that rewrites the expression to provide date formatting in the query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public class FormatDirective : DirectiveProcessor<FormatDirectiveArgs>\n{\n  public override string Name => "format";\n  public override string Description => "Formats DateTime scalar values";\n  public override List<ExecutableDirectiveLocation> Location => new() { ExecutableDirectiveLocation.FIELD };\n\n  public override IGraphQLNode VisitNode(ExecutableDirectiveLocation location, IGraphQLNode node, object arguments)\n  {\n    if (arguments is FormatDirectiveArgs args)\n    {\n      // only operate on scalar nodes\n      if (node is GraphQLScalarField fieldNode)\n      {\n        var expression = fieldNode.NextFieldContext;\n        if (expression.Type != typeof(DateTime) && expression.Type != typeof(DateTime?))\n          throw new EntityGraphQLException("The format directive can only be used on DateTime fields");\n\n        if (expression.Type == typeof(DateTime?))\n          expression = Expression.Property(expression, "Value"); \n        expression = Expression.Call(expression, "ToString", null, Expression.Constant(args.As));\n        return new GraphQLScalarField(fieldNode.Schema, fieldNode.Field, fieldNode.Name, expression, fieldNode.RootParameter, fieldNode.ParentNode, fieldNode.Arguments);\n      }\n    }\n    return node;\n  }\n}\n\ninternal class FormatDirectiveArgs\n{\n  [GraphQLField("as", "The format to use")]\n  public string As { get; set; }\n}\n\n// Add it to you schema\nschema.AddDirective(new FormatDirective());\n')),(0,i.kt)("p",null,"Use it like this..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gql"},'query {\n  people {\n    id\n    birthday @format(as: "dd MMM yyyy")\n  }\n}\n')))}u.isMDXComponent=!0}}]);