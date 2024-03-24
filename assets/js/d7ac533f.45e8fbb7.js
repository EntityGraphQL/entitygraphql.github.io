"use strict";(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[7025],{1058:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(5893),t=i(1151);const l={sidebar_position:1},r="Filtering",c={id:"field-extensions/filtering",title:"Filtering",description:"To quickly add filtering capabilities to your collection fields use the UseFilter() field extension.",source:"@site/docs/field-extensions/filtering.md",sourceDirName:"field-extensions",slug:"/field-extensions/filtering",permalink:"/docs/field-extensions/filtering",draft:!1,unlisted:!1,editUrl:"https://github.com/EntityGraphQL/EntityGraphQL/tree/master/docs/docs/field-extensions/filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Field Extensions",permalink:"/docs/field-extensions/"},next:{title:"Sorting",permalink:"/docs/field-extensions/sorting"}},o={},d=[];function h(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"filtering",children:"Filtering"}),"\n",(0,s.jsxs)(n.p,{children:["To quickly add filtering capabilities to your collection fields use the ",(0,s.jsx)(n.code,{children:"UseFilter()"})," field extension."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:'schema.ReplaceField("people",\n    ctx => ctx.People,\n    "Return a list of people. Optional filtered")\n    .UseFilter();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you are using the ",(0,s.jsx)(n.code,{children:"SchemaBuilder.FromObject"})," you can use the ",(0,s.jsx)(n.code,{children:"UseFilterAttribute"})," on your collection properties."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public class DemoContext : DbContext\n{\n    [UseFilter]\n    public DbSet<Movie> Movies { get; set; }\n    [UseFilter]\n    public DbSet<Person> People { get; set; }\n    [UseFilter]\n    public DbSet<Actor> Actors { get; set; }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This field extension can only be used on a field that has a ",(0,s.jsx)(n.code,{children:"Resolve"})," expression that is assignable to ",(0,s.jsx)(n.code,{children:"IEnumerable"})," - I.e. collections. The extension adds an argument called ",(0,s.jsx)(n.code,{children:"filter: String"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: When using with the paging or sort extensions ensure you call ",(0,s.jsx)(n.code,{children:"UseFilter"})," before both others. If you are using the attribute, then ensure the Filter attribute comes before the other attributes."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"filter"})," argument takes a string that will be compiled to an expression and inserted into a ",(0,s.jsx)(n.code,{children:"Where()"})," call. The expression is compiled against your schema and the context is the type of elements in the collection."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, given ",(0,s.jsx)(n.code,{children:"ctx => ctx.People"})," returns a ",(0,s.jsx)(n.code,{children:"IEnumerable<Person>"})," and ",(0,s.jsx)(n.code,{children:"Person"})," is defined as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cs",children:"public class Person\n{\n    public uint Id { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n    public DateTime Dob { get; set; }\n    public List<Actor> ActorIn { get; set; }\n    public List<Writer> WriterOf { get; set; }\n    public List<Movie> DirectorOf { get; set; }\n    public DateTime? Died { get; set; }\n    public bool IsDeleted { get; set; }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can write some filter expressions like so:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'{\n  people(filter: "id == 12 || id == 10") {\n    firstName\n  }\n}\n\n{\n  deletedPeople: people(filter: "isDeleted == true") {\n    firstName\n  }\n}\n\n{\n  people(filter: "dob > \\"2010-08-11T00:00:00\\" && isDeleted == false") {\n    firstName\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The expression language supports the following constants:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Booleans - ",(0,s.jsx)(n.code,{children:"true"})," & ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:["Integers - e.g. ",(0,s.jsx)(n.code,{children:"2"}),", ",(0,s.jsx)(n.code,{children:"-8"})]}),"\n",(0,s.jsxs)(n.li,{children:["Floats - e.g. ",(0,s.jsx)(n.code,{children:"0.2"}),", ",(0,s.jsx)(n.code,{children:"-8.3"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"null"})}),"\n",(0,s.jsxs)(n.li,{children:["Strings - ",(0,s.jsx)(n.code,{children:'"within double quotes"'}),"; when representing a date, use an ISO 8601 format such as ",(0,s.jsx)(n.code,{children:'"2022-07-31T20:00:00"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The expression language supports the following operators:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-"})," - Subtraction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"+"})," - Addition"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*"})," - Multiply"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/"})," - Divide"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"%"})," - Mod"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"^"})," - Power"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"=="})," - Equals"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"!="})," - Not Equals"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<="})," - Less than or equal to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:">="})," - Greater than or equal to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<"})," - Less than"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:">"})," - Greater than"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"or"})," or ",(0,s.jsx)(n.code,{children:"||"})," - Or"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"and"})," or ",(0,s.jsx)(n.code,{children:"&&"})," - And"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The expression language supports the following methods, these are called against fields within the filter context:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.any(filter)"})," - Return ",(0,s.jsx)(n.code,{children:"true"})," if any of the items in the list match the filter. The filter within ",(0,s.jsx)(n.code,{children:"any"})," is on the context of the list item type. Otherwise ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  # In C# - people.Where(p => p.ActorIn.Any(a => a.Name == "Star Wars"))\n  people(filter: "actorIn.any(name == \\"Star Wars\\")") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.count(filter?)"})," - Return the count of a list. Optionally counting items that match a filter"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  # No filter - all people that acted in 3 movies\n  people(filter: "actorIn.count() == 3") { ... }\n\n\n  # Count only those that match the filter - all people that acted in any movie starting with "Star"\n  people(filter: "actorIn.count(name.startsWith(\\"Star\\")) > 0") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.first(filter?)"})," - Return the first item from a list. Optionally by a filter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.last(filter?)"})," - Return the last item from a list. Optionally by a filter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.take(int)"})," - Return the first ",(0,s.jsx)(n.code,{children:"x"})," items"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.skip(int)"})," - Return the items after ",(0,s.jsx)(n.code,{children:"x"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.orderBy(field)"})," - Order the list by a given field"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.orderByDesc(field)"})," - Order the list in reverse by a given field"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"List.where(filter)"}),", or ",(0,s.jsx)(n.code,{children:"List.filter(filter)"})," - Filter the list"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string.contains(string)"})," - Return ",(0,s.jsx)(n.code,{children:"true"})," if the specified string occurs in this string instance"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  people(filter: "firstName.contains(\\"o\\")") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string.startsWith(string)"})," - Return ",(0,s.jsx)(n.code,{children:"true"})," if the beginning of this string instance matches the specified string"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  people(filter: "firstName.startsWith(\\"b\\")") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string.endsWith(string)"})," - Return ",(0,s.jsx)(n.code,{children:"true"})," if the end of this string instance matches the specified string"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  people(filter: "firstName.endsWith(\\"b\\")") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string.toLower()"})," - Return the string converted to lowercase"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  people(filter: "firstName.toLower() == \\"bob\\"") { ... }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string.toUpper()"})," - Return the string converted to uppercase"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-gql",children:'{\n  people(filter: "firstName.toUpper() == \\"BOB\\"") { ... }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The expression language supports ternary and conditional:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"__ ? __ : __"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"if __ then __ else __"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);