(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1799:function(module,exports){module.exports=function(hljs){var KEYWORDS="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance";return{keywords:KEYWORDS,illegal:/<\/|#/,contains:[hljs.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{className:"class",beginKeywords:"aspect",end:/[{;=]/,excludeEnd:!0,illegal:/[:;"\[\]]/,contains:[{beginKeywords:"extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"},hljs.UNDERSCORE_TITLE_MODE,{begin:/\([^\)]*/,end:/[)]+/,keywords:KEYWORDS+" get set args call",excludeEnd:!1}]},{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:!0,relevance:0,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},hljs.UNDERSCORE_TITLE_MODE]},{beginKeywords:"pointcut after before around throwing returning",end:/[)]/,excludeEnd:!1,illegal:/["\[\]]/,contains:[{begin:hljs.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,contains:[hljs.UNDERSCORE_TITLE_MODE]}]},{begin:/[:]/,returnBegin:!0,end:/[{;]/,relevance:0,excludeEnd:!1,keywords:KEYWORDS,illegal:/["\[\]]/,contains:[{begin:hljs.UNDERSCORE_IDENT_RE+"\\s*\\(",keywords:KEYWORDS+" get set args call",relevance:0},hljs.QUOTE_STRING_MODE]},{beginKeywords:"new throw",relevance:0},{className:"function",begin:/\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,returnBegin:!0,end:/[{;=]/,keywords:KEYWORDS,excludeEnd:!0,contains:[{begin:hljs.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[hljs.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,relevance:0,keywords:KEYWORDS,contains:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.C_NUMBER_MODE,hljs.C_BLOCK_COMMENT_MODE]},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},hljs.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_aspectj.47f1f1a7cb6fa140772f.bundle.js.map