"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[6425],{5912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const o={sidebar_position:4},r="Custom Extensions",a={id:"field-extensions/custom-extensions",title:"Custom Extensions",description:"Field extensions let you move common patterns or use cases into an extension method to easily apply the logic across many fields. To implement an extension you implement the IFieldExtension interface and create an extension method. You can have your extension applied via an Attribute in SchemaBuilder by having your attribute extend FieldExtensionAttribute.",source:"@site/docs/field-extensions/custom-extensions.md",sourceDirName:"field-extensions",slug:"/field-extensions/custom-extensions",permalink:"/docs/field-extensions/custom-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/field-extensions/custom-extensions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Paging",permalink:"/docs/field-extensions/paging"},next:{title:"Event System",permalink:"/docs/other-extensibility/event-system"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"custom-extensions",children:"Custom Extensions"}),"\n",(0,i.jsxs)(n.p,{children:["Field extensions let you move common patterns or use cases into an extension method to easily apply the logic across many fields. To implement an extension you implement the ",(0,i.jsx)(n.code,{children:"IFieldExtension"})," interface and create an extension method. You can have your extension applied via an ",(0,i.jsx)(n.code,{children:"Attribute"})," in ",(0,i.jsx)(n.code,{children:"SchemaBuilder"})," by having your attribute extend ",(0,i.jsx)(n.code,{children:"FieldExtensionAttribute"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an extension method to add a format argument to a field."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'public static class UseFormatExtension\n{\n    public static Field UseFormat(this Field field)\n    {\n        if (field.Resolve.Type != typeof(string))\n            throw new ArgumentException($"UseFormat must only be called on a field that returns a string");\n\n        // register extension on field\n        field.AddExtension(new FormatStringExtension());\n        return field;\n    }\n\n    public class UseFormatAttribute : FieldExtensionAttribute\n    {\n        public override void ApplyExtension(Field field)\n        {\n            field.UseFormat(DefaultPageSize, MaxPageSize);\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"FormatStringExtension"})," needs to implement ",(0,i.jsx)(n.code,{children:"IFieldExtension"})," or extend ",(0,i.jsx)(n.code,{children:"BaseFieldExtension"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'public class FormatStringExtension : IFieldExtension\n{\n    // Configure the field. Do as much as we can here as it is only called once on registered.\n    public void Configure(ISchemaProvider schema, IField field)\n    {\n\n    }\n\n    // This is called on compilation of a query if the query references this field\n    // Good opportunity to check arguments\n    // Most often you can update the expression here and return your new one\n    public Expression GetExpression(Field field, Expression expression, ParameterExpression? argExpression, dynamic? arguments, Expression context, IGraphQLNode? parentNode, bool servicesPass, ParameterReplacer parameterReplacer)\n    {\n        if (arguments.last == null && arguments.first == null)\n            throw new ArgumentException($"Please provide at least the first or last argument");\n\n        // build the expression that calls your format logic/method\n        var call = Expression.Cal(...);\n        return call;\n    }\n\n    public Expression ProcessScalarExpression(Expression expression, ParameterReplacer parameterReplacer)\n    {\n        // Only called for scalar fields (result in data, not a selection)\n        // called at the final stage just before being used in the final expression for execution\n        // Often no need to do anything here\n        return expression;\n    }\n\n    public (Expression baseExpression, Dictionary<IFieldKey, CompiledField> selectionExpressions, ParameterExpression selectContextParam) ProcessExpressionSelection(GraphQLFieldType fieldType, Expression baseExpression, Dictionary<IFieldKey, CompiledField> selectionExpressions, ParameterExpression? selectContextParam, bool servicesPass, ParameterReplacer parameterReplacer)\n    {\n        // Called for object projection and collection fields. Giving you an opportunity to modify\n        // the selection expression or the selection base expression.\n        // ConnectionEdgeNodeExtension provides a good example of this from UseConnectionPaging\n        return (baseExpression, selectionExpressions, selectContextParam);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/Filter/FilterExpressionExtension.cs",children:(0,i.jsx)(n.code,{children:"FilterExpressionExtension"})})," for a simple example. ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/Sorting/SortExtension.cs",children:(0,i.jsx)(n.code,{children:"SortExtension"})})," for a sightly more complex one. Or ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/ConnectionPaging/ConnectionPagingExtension.cs",children:(0,i.jsx)(n.code,{children:"ConnectionPagingExtension.cs"})})," for an example that changes the shape of the field (from a collection to a Connection object)."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If your field extension changes the shape of the original graph (like the 2 paging extensions) you will need to implement ",(0,i.jsx)(n.code,{children:"GetListExpressionForBulkResolve"})," to support bulk resolvers on fields within your extension. See ",(0,i.jsx)(n.a,{href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/ConnectionPaging/ConnectionEdgeExtension.cs",children:(0,i.jsx)(n.code,{children:"ConnectionPagingEdgeExtension"})})," for an example."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);