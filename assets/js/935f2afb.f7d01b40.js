"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"category","label":"Schema creation","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Fields","href":"/docs/schema-creation/fields","docId":"schema-creation/fields"},{"type":"link","label":"Mutations","href":"/docs/schema-creation/mutations","docId":"schema-creation/mutations"},{"type":"link","label":"Scalar Types","href":"/docs/schema-creation/scalar-types","docId":"schema-creation/scalar-types"},{"type":"link","label":"Enum Types","href":"/docs/schema-creation/enum-types","docId":"schema-creation/enum-types"},{"type":"link","label":"Input Types","href":"/docs/schema-creation/input-types","docId":"schema-creation/input-types"},{"type":"link","label":"Interfaces Types & Implements Keyword","href":"/docs/schema-creation/interface-and-union-types","docId":"schema-creation/interface-and-union-types"},{"type":"link","label":"Union Types","href":"/docs/schema-creation/union-types","docId":"schema-creation/union-types"},{"type":"link","label":"Lists and Non-Null","href":"/docs/schema-creation/lists-and-nonnulls","docId":"schema-creation/lists-and-nonnulls"},{"type":"link","label":"Directives","href":"/docs/schema-creation/directives","docId":"schema-creation/directives"},{"type":"link","label":"Adding Other Data Sources","href":"/docs/schema-creation/other-data-sources","docId":"schema-creation/other-data-sources"},{"type":"link","label":"Subscriptions","href":"/docs/schema-creation/subscriptions","docId":"schema-creation/subscriptions"}],"href":"/docs/schema-creation/"},{"type":"category","label":"Directives","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Operation Directives","href":"/docs/directives/operation-directives","docId":"directives/operation-directives"},{"type":"link","label":"Schema Directives","href":"/docs/directives/schema-directives","docId":"directives/schema-directives"}]},{"type":"category","label":"Serialization & Field Naming","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using NewtonSoft JSON","href":"/docs/serialization-naming/newtonsoft-json","docId":"serialization-naming/newtonsoft-json"}],"href":"/docs/serialization-naming/"},{"type":"link","label":"Authorization","href":"/docs/authorization","docId":"authorization"},{"type":"link","label":"Validation","href":"/docs/validation","docId":"validation"},{"type":"category","label":"Field extensions","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Filtering","href":"/docs/field-extensions/filtering","docId":"field-extensions/filtering"},{"type":"link","label":"Sorting","href":"/docs/field-extensions/sorting","docId":"field-extensions/sorting"},{"type":"link","label":"Paging","href":"/docs/field-extensions/paging","docId":"field-extensions/paging"},{"type":"link","label":"Custom Extensions","href":"/docs/field-extensions/custom-extensions","docId":"field-extensions/custom-extensions"}],"href":"/docs/field-extensions/"},{"type":"category","label":"Other Extensibility","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Event System","href":"/docs/other-extensibility/event-system","docId":"other-extensibility/event-system"},{"type":"link","label":"Extension Attribute","href":"/docs/other-extensibility/extension-attribute","docId":"other-extensibility/extension-attribute"}]},{"type":"link","label":"Entity Framework","href":"/docs/entity-framework","docId":"entity-framework"},{"type":"link","label":"Tool integration","href":"/docs/integration","docId":"integration"},{"type":"link","label":"Upgrading from 3.x to 4.x","href":"/docs/upgrade-4-0","docId":"upgrade-4-0"}]},"docs":{"authorization":{"id":"authorization","title":"Authorization","description":"You should secure the route where you app/client posts request to in any ASP.NET supports. Given GraphQL works with a schema you likely want to provide authorization within the schema. EntityGraphQL provides support for checking claims on a ClaimsPrincipal object.","sidebar":"tutorialSidebar"},"directives/operation-directives":{"id":"directives/operation-directives","title":"Operation Directives","description":"Operation Directives provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:","sidebar":"tutorialSidebar"},"directives/schema-directives":{"id":"directives/schema-directives","title":"Schema Directives","description":"Schema Directives are used to decorate the schema to provide more information to clients, EntityGraphQL can also use this information to update the introspection model or provide extra functionality such as validation.","sidebar":"tutorialSidebar"},"entity-framework":{"id":"entity-framework","title":"Entity Framework","description":"EntityGraphQL is built to work extremely well with EntityFramework. To see how let\'s first look at what EntityGraphQL does with GraphQL queries.","sidebar":"tutorialSidebar"},"field-extensions/custom-extensions":{"id":"field-extensions/custom-extensions","title":"Custom Extensions","description":"Field extensions let you move common patterns or use cases into an extension method to easily apply the logic across many fields. To implement an extension you implement the IFieldExtension interface and create an extension method. You can have your extension applied via an Attribute in SchemaBuilder by having your attribute extend FieldExtensionAttribute.","sidebar":"tutorialSidebar"},"field-extensions/field-extensions":{"id":"field-extensions/field-extensions","title":"Field Extensions","description":"EntityGraphQL provides field extension methods for modifying you field expressions with common use cases, such as paging collections.","sidebar":"tutorialSidebar"},"field-extensions/filtering":{"id":"field-extensions/filtering","title":"Filtering","description":"To quickly add filtering capabilities to your collection fields use the UseFilter() field extension.","sidebar":"tutorialSidebar"},"field-extensions/paging":{"id":"field-extensions/paging","title":"Paging","description":"Paging can be handled in any way you can build your field expressions. It all depends on your requirements and how you want your API to work.","sidebar":"tutorialSidebar"},"field-extensions/sorting":{"id":"field-extensions/sorting","title":"Sorting","description":"Being able to sort or order you collections as you query them can be very powerful, especially when paired with paging. To easily add sorting functionality to your collection fields use the UseSort() field extension.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"EntityGraphQL 4.0.0 is currently in beta. Although it is very stable and being used in production there may be further changes. See the upgrade guide here.","sidebar":"tutorialSidebar"},"integration":{"id":"integration","title":"Tool integration","description":"Being GraphQL there are many tools that integrate well with EntityGraphQL.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"EntityGraphQL is a .NET library that allows you to easily build a GraphQL API on top of your data model with the extensibility to easily bring multiple data sources together in the single GraphQL schema.","sidebar":"tutorialSidebar"},"other-extensibility/event-system":{"id":"other-extensibility/event-system","title":"Event System","description":"A couple of events has been added to fields to support other functionality which could be used in other ways, there is an intention to build these events out further in the future.","sidebar":"tutorialSidebar"},"other-extensibility/extension-attribute":{"id":"other-extensibility/extension-attribute","title":"Extension Attribute","description":"Field Extensions and Schema Directives use the [ExtensionAttribute] or IExtensionAttributeHandler interface to apply extensions to IFieldsand ISchemaTypes.","sidebar":"tutorialSidebar"},"schema-creation/directives":{"id":"schema-creation/directives","title":"Directives","description":"Directives provide a way to dynamically change the structure and shape of our queries using variables. An example from the GraphQL website:","sidebar":"tutorialSidebar"},"schema-creation/enum-types":{"id":"schema-creation/enum-types","title":"Enum Types","description":"Enum types are just like you\'d expect. It let\'s API consumers know that a field can be only 1 of a set of values.","sidebar":"tutorialSidebar"},"schema-creation/fields":{"id":"schema-creation/fields","title":"Fields","description":"GraphQL supports arguments on query fields. We saw this already with the SchemaBuilder.FromObject() helper method. It created a field with an id argument to select a single item by id. Of course you can create fields with your own arguments to expand the functionality of you GraphQL APi.","sidebar":"tutorialSidebar"},"schema-creation/input-types":{"id":"schema-creation/input-types","title":"Input Types","description":"We\'ve seen passing scalar values, like enums, numbers or strings, as arguments into a field. Input types allow us to define complex types that can be used as an argument. This is particularly valuable in the case of mutations, where you might want to pass in a whole object to be created.","sidebar":"tutorialSidebar"},"schema-creation/interface-and-union-types":{"id":"schema-creation/interface-and-union-types","title":"Interfaces Types & Implements Keyword","description":"GraphQL supports Interfaces allowing you to define a abstract base type that multiple other types might implement.","sidebar":"tutorialSidebar"},"schema-creation/lists-and-nonnulls":{"id":"schema-creation/lists-and-nonnulls","title":"Lists and Non-Null","description":"GraphQL defines type modifiers specifically for declaring that a field is a list or cannot be null. In a schema these are [T] and !. For example, a GraphQL schema might have the following.","sidebar":"tutorialSidebar"},"schema-creation/mutations":{"id":"schema-creation/mutations","title":"Mutations","description":"GraphQLs mutations allow you to make modifications to your data.","sidebar":"tutorialSidebar"},"schema-creation/other-data-sources":{"id":"schema-creation/other-data-sources","title":"Adding Other Data Sources","description":"EntityGraphQL lets you add fields that resolve data from other sources other than the core context you created your schema with. This is powerful as it let\'s you create a single API that brings together multiple data sources into an object graph.","sidebar":"tutorialSidebar"},"schema-creation/scalar-types":{"id":"schema-creation/scalar-types","title":"Scalar Types","description":"We learnt previously that the GraphQL spec defines the following built in scalar types.","sidebar":"tutorialSidebar"},"schema-creation/schema-creation":{"id":"schema-creation/schema-creation","title":"Schema Creation","description":"EntityGraphQL supports customizing your GraphQL schema in all the expected ways;","sidebar":"tutorialSidebar"},"schema-creation/subscriptions":{"id":"schema-creation/subscriptions","title":"Subscriptions","description":"GraphQL subscriptions outline an agreed way for services to define events & clients to subscribe to events with the familar GraphQL queries.","sidebar":"tutorialSidebar"},"schema-creation/union-types":{"id":"schema-creation/union-types","title":"Union Types","description":"Union Types are very similar to interfaces, but they don\'t get to specify any common fields between the types.","sidebar":"tutorialSidebar"},"serialization-naming/newtonsoft-json":{"id":"serialization-naming/newtonsoft-json","title":"Using NewtonSoft JSON","description":"To avoid version conflicts with Newtonsoft.Json, EntityGraphQL has no reference to it and hence doesn\'t know what to do if it hits a Jtoken or JObject.","sidebar":"tutorialSidebar"},"serialization-naming/serialization-naming":{"id":"serialization-naming/serialization-naming","title":"Serialization & Field Naming","description":"GraphQL is case-sensitive. Currently EntityGraphQL will automatically turn field and argument names from UpperCase to camelCase when you use the helper methods to create a schema with the default options. This means your C# code matches what C# code typically looks like and your GraphQL matches the GraphQL norm too.","sidebar":"tutorialSidebar"},"upgrade-4-0":{"id":"upgrade-4-0","title":"Upgrading from 3.x to 4.x","description":"EntityGraphQL aims to respect Semantic Versioning, meaning version 4.0.0 contains breaking changes. Below highlights those changes and the impact to those coming from version 3.x.","sidebar":"tutorialSidebar"},"validation":{"id":"validation","title":"Validation","description":"When you privide input - via arguments - to your queries, you may want to perform some validation on that input before proceeding to you domain logic. EntityGraphQL provides a couple of ways to validation your input.","sidebar":"tutorialSidebar"}}}')}}]);