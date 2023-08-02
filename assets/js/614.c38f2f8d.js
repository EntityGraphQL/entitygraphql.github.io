(self.webpackChunkentity_graphql_docs=self.webpackChunkentity_graphql_docs||[]).push([[614],{614:(e,t,n)=>{"use strict";n.d(t,{Z:()=>K});var o=n(7462),r=n(7294),s=n(2389),c=n(6010),a=n(2949),l=n(6668);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(5281),p=n(7594),d=n.n(p);const m=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function h(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:s}=t;if(s&&g.test(s)){const e=s.match(g).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(f),t)}}(o,r),a=n.split("\n"),l=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}(i());return r.createElement(t,(0,o.Z)({},n,{style:s,className:(0,c.Z)(n.className,b,u.k.common.codeBlock)}))}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return r.createElement(k,{as:"pre",tabIndex:0,className:(0,c.Z)(v.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:v.codeBlockLines},t))}var N=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,o]=(0,r.useState)(),s=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=B);const o=(0,N.zX)(t),s=(0,N.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,s),()=>t.disconnect()}),[e,o,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(7410).Z,theme:w};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}var _=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=T({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=T({},n,{backgroundColor:null}),r};function O(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const Z=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,s=T({},O(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(s.style=c.plain),void 0!==r&&(s.style=void 0!==s.style?T({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),j(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return s[n[0]];var c=o?{display:"inline-block"}:{},a=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[c].concat(a))}})),j(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,s=e.token,c=T({},O(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?T({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),j(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var s=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,s=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],s=0,c=0,a=[],l=[a];c>-1;){for(;(s=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][s];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=S(u,p.type),p.alias&&(u=S(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(_),m=d.length;a.push({types:u,content:d[0]});for(var g=1;g<m;g++)x(a),l.push(a=[]),a.push({types:u,content:d[g]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return x(a),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),P="codeLine_lJS_",A="codeLineNumber_Tfdd",$="codeLineContent_feaV";function z(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,c.Z)(n,s&&P)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,s?r.createElement(r.Fragment,null,r.createElement("span",{className:A}),r.createElement("span",{className:$},u)):u,r.createElement("br",null))}var D=n(5999);function H(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function M(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const V={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function W(e){let{code:t,className:n}=e;const[o,s]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const s=document.getSelection(),c=s.rangeCount>0&&s.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(s.removeAllRanges(),s.addRange(c)),r&&r.focus()}(t),s(!0),a.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,V.copyButton,o&&V.copyButtonCopied),onClick:l},r.createElement("span",{className:V.copyButtonIcons,"aria-hidden":"true"},r.createElement(H,{className:V.copyButtonIcon}),r.createElement(M,{className:V.copyButtonSuccessIcon})))}function R(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const q="wordWrapButtonIcon_Bwma",F="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&F),"aria-label":s,title:s},r.createElement(R,{className:q,"aria-hidden":"true"}))}function J(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:d,magicComments:g}}=(0,l.L)(),f=p??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??d,y=i(),b=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),s=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),a=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");o(n)}),[s]);return C(s,a),(0,r.useEffect)((()=>{a()}),[e,a]),(0,r.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:c}}(),E=function(e){var t;return(null==e||null==(t=e.match(m))?void 0:t.groups.title)??""}(s)||a,{lineClassNames:N,code:B}=h(t,{metastring:s,language:f,magicComments:g}),w=u??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(s);return r.createElement(k,{as:"div",className:(0,c.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},E&&r.createElement("div",{className:v.codeBlockTitle},E),r.createElement("div",{className:v.codeBlockContent},r.createElement(Z,(0,o.Z)({},L,{theme:y,code:B,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return r.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,c.Z)(t,v.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.Z)(v.codeBlockLines,w&&v.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(z,{key:t,line:e,getLineProps:o,getTokenProps:s,classNames:N[t],showLineNumbers:w})))))})),r.createElement("div",{className:v.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&r.createElement(G,{className:v.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),r.createElement(W,{className:v.codeButton,code:B}))))}function K(e){let{children:t,...n}=e;const c=(0,s.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?J:E;return r.createElement(l,(0,o.Z)({key:String(c)},n),a)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);