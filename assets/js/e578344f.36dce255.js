"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,x=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(x,s(s({ref:n},c),{},{components:t})):r.createElement(x,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:4},s="Custom Extensions",a={unversionedId:"field-extensions/custom-extensions",id:"field-extensions/custom-extensions",title:"Custom Extensions",description:"Field extensions let you move common patterns or use cases into an extension method to easily apply the logic across many fields. To implement an extension you implement the IFieldExtension interface and create an extension method. You can have your extension applied via an Attribute in SchemaBuilder by having your attribute extend FieldExtensionAttribute.",source:"@site/docs/field-extensions/custom-extensions.md",sourceDirName:"field-extensions",slug:"/field-extensions/custom-extensions",permalink:"/docs/field-extensions/custom-extensions",draft:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/field-extensions/custom-extensions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Paging",permalink:"/docs/field-extensions/paging"},next:{title:"Entity Framework",permalink:"/docs/entity-framework"}},l={},p=[],c={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-extensions"},"Custom Extensions"),(0,i.kt)("p",null,"Field extensions let you move common patterns or use cases into an extension method to easily apply the logic across many fields. To implement an extension you implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"IFieldExtension")," interface and create an extension method. You can have your extension applied via an ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaBuilder")," by having your attribute extend ",(0,i.kt)("inlineCode",{parentName:"p"},"FieldExtensionAttribute"),"."),(0,i.kt)("p",null,"Here is an extension method to add a format argument to a field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public static class UseFormatExtension\n{\n    public static Field UseFormat(this Field field)\n    {\n        if (field.Resolve.Type != typeof(string))\n            throw new ArgumentException($"UseFormat must only be called on a field that returns a string");\n\n        // register extension on field\n        field.AddExtension(new FormatStringExtension());\n        return field;\n    }\n\n    public class UseFormatAttribute : FieldExtensionAttribute\n    {\n        public override void ApplyExtension(Field field)\n        {\n            field.UseFormat(DefaultPageSize, MaxPageSize);\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FormatStringExtension")," needs to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"IFieldExtension")," or extend ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseFieldExtension"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'public class FormatStringExtension : IFieldExtension\n{\n    // Configure the field. Do as much as we can here as it is only called once on registered.\n    public void Configure(ISchemaProvider schema, IField field)\n    {\n\n    }\n\n    // This is called on compilation of a query if the query references this field\n    // Good opportunity to check arguments\n    // Most often you can update the expression here and return your new one\n    public Expression GetExpression(Field field, Expression expression, ParameterExpression? argExpression, dynamic? arguments, Expression context, IGraphQLNode? parentNode, bool servicesPass, ParameterReplacer parameterReplacer)\n    {\n        if (arguments.last == null && arguments.first == null)\n            throw new ArgumentException($"Please provide at least the first or last argument");\n\n        // build the expression that calls your format logic/method\n        var call = Expression.Cal(...);\n        return call;\n    }\n\n    public Expression ProcessScalarExpression(Expression expression, ParameterReplacer parameterReplacer)\n    {\n        // Only called for scalar fields (result in data, not a selection)\n        // called at the final stage just before being used in the final expression for execution\n        // Often no need to do anything here\n        return expression;\n    }\n\n    public (Expression baseExpression, Dictionary<string, CompiledField> selectionExpressions, ParameterExpression selectContextParam) ProcessExpressionSelection(GraphQLFieldType fieldType, Expression baseExpression, Dictionary<string, CompiledField> selectionExpressions, ParameterExpression? selectContextParam, bool servicesPass, ParameterReplacer parameterReplacer)\n    {\n        // Called for object projection and collection fields. Giving you an opportunity to modify\n        // the selection expression or the selection base expression.\n        // ConnectionEdgeNodeExtension provides a good example of this from UseConnectionPaging\n        return (baseExpression, selectionExpressions, selectContextParam);\n    }\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/Filter/FilterExpressionExtension.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterExpressionExtension"))," for a simple example. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/Sorting/SortExtension.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"SortExtension"))," for a sightly more complex one. Or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EntityGraphQL/EntityGraphQL/blob/master/src/EntityGraphQL/Schema/FieldExtensions/ConnectionPaging/ConnectionPagingExtension.cs"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionPagingExtension.cs"))," for an example that changes the shape of the field (from a collection to a Connection object)."))}d.isMDXComponent=!0}}]);