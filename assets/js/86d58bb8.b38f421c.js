"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[6120],{192:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=n(5893),r=n(1151);const s={sidebar_position:9},o="Directives",a={id:"schema-creation/directives",title:"Directives",description:"Directives provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:",source:"@site/docs/schema-creation/directives.md",sourceDirName:"schema-creation",slug:"/schema-creation/directives",permalink:"/docs/schema-creation/directives",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/schema-creation/directives.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Lists and Non-Null",permalink:"/docs/schema-creation/lists-and-nonnulls"},next:{title:"Adding Other Data Sources or Services",permalink:"/docs/schema-creation/other-data-sources"}},c={},d=[{value:"Built-In Directives",id:"built-in-directives",level:2},{value:"Custom Directives",id:"custom-directives",level:2},{value:"Example",id:"example",level:3}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"directives",children:"Directives"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://graphql.org/learn/queries/#directives",children:"Directives"})," provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"query Hero($episode: Episode, $withFriends: Boolean!) {\n  hero(episode: $episode) {\n    name\n    friends @include(if: $withFriends) {\n      name\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Now if you set ",(0,t.jsx)(i.code,{children:"withFriends"})," to ",(0,t.jsx)(i.code,{children:"true"})," in the variables passed with the query POST you'll get the ",(0,t.jsx)(i.code,{children:"friends"})," result. If you set it to ",(0,t.jsx)(i.code,{children:"false"})," you will not. Thus dynamically changing the shape of your query."]}),"\n",(0,t.jsx)(i.h2,{id:"built-in-directives",children:"Built-In Directives"}),"\n",(0,t.jsx)(i.p,{children:"The GraphQL spec defines 2 directives that are supported out of the box in EntityGraphQL."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"@include(if: Boolean)"})," - Only include this field in the result if the argument is true."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"@skip(if: Boolean)"})," - Skip this field if the argument is true."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"custom-directives",children:"Custom Directives"}),"\n",(0,t.jsxs)(i.p,{children:["Directives give you access to the GraphQL Nodes - a abstract-code representation of the query document. You can return new ",(0,t.jsx)(i.code,{children:"IGraphQLNode"})," with modified data to make changes before executing."]}),"\n",(0,t.jsxs)(i.p,{children:["The main interface is ",(0,t.jsx)(i.code,{children:"IGraphQLNode? VisitNode(ExecutableDirectiveLocation location, IGraphQLNode? node, object? arguments)"})," - This is called when the node in the document graph is seen. You can return ",(0,t.jsx)(i.code,{children:"null"})," to remove the node from the result."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"location"})," will tell you the location/type of the node the directive was added to (e.g. field, fragment spread)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"node"})," is information about the node."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"arguments"})," are any arguments passed to the directive"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["We're keen to hear if you can or cannot implement the functionality you require with the above interface. Please open an issue describing what you are trying to implement if you have issues. You may also want to look at ",(0,t.jsx)(i.a,{href:"../field-extensions/",children:"Field Extensions"}),"."]})}),"\n",(0,t.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.p,{children:"Here is a simple directive that rewrites the expression to provide date formatting in the query."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cs",children:'public class FormatDirective : DirectiveProcessor<FormatDirectiveArgs>\n{\n  public override string Name => "format";\n  public override string Description => "Formats DateTime scalar values";\n  public override List<ExecutableDirectiveLocation> Location => new() { ExecutableDirectiveLocation.FIELD };\n\n  public override IGraphQLNode VisitNode(ExecutableDirectiveLocation location, IGraphQLNode node, object arguments)\n  {\n    if (arguments is FormatDirectiveArgs args)\n    {\n      // only operate on scalar nodes\n      if (node is GraphQLScalarField fieldNode)\n      {\n        var expression = fieldNode.NextFieldContext;\n        if (expression.Type != typeof(DateTime) && expression.Type != typeof(DateTime?))\n          throw new EntityGraphQLException("The format directive can only be used on DateTime fields");\n\n        if (expression.Type == typeof(DateTime?))\n          expression = Expression.Property(expression, "Value"); \n        expression = Expression.Call(expression, "ToString", null, Expression.Constant(args.As));\n        return new GraphQLScalarField(fieldNode.Schema, fieldNode.Field, fieldNode.Name, expression, fieldNode.RootParameter, fieldNode.ParentNode, fieldNode.Arguments);\n      }\n    }\n    return node;\n  }\n}\n\ninternal class FormatDirectiveArgs\n{\n  [GraphQLField("as", "The format to use")]\n  public string As { get; set; }\n}\n\n// Add it to you schema\nschema.AddDirective(new FormatDirective());\n'})}),"\n",(0,t.jsx)(i.p,{children:"Use it like this..."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-gql",children:'query {\n  people {\n    id\n    birthday @format(as: "dd MMM yyyy")\n  }\n}\n'})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>o});var t=n(7294);const r={},s=t.createContext(r);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);