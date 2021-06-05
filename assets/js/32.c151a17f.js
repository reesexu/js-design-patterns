(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{272:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"babel-插件开发入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-插件开发入门","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 插件开发入门")]),t._v(" "),s("p",[s("code",[t._v("Babel")]),t._v(" 是一个"),s("strong",[t._v("通用")]),t._v("的 "),s("code",[t._v("JavaScript")]),t._v(" 编译器，它可以将源码转换成源码，不同的具体功能由不同的插件来实现，比如 "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/plugin-transform-runtime"),s("OutboundLink")],1),t._v(" 以及 "),s("code",[t._v("UI")]),t._v(" 库中将代码转换成按需引用的 "),s("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-import"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("下面将介绍如何写一个 "),s("code",[t._v("Babel")]),t._v(" 插件，以及开发前的一些前置知识要点。")]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("Babel")]),t._v(" 是基于 "),s("code",[t._v("AST")]),t._v(" 的，所以这里推荐阅读 "),s("router-link",{attrs:{to:"/blogs/ast-and-babel.html"}},[t._v("AST 与 Babel")]),t._v("，先了解什么是 "),s("code",[t._v("AST")]),t._v(" 。")],1),t._v(" "),s("h2",{attrs:{id:"babel-基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-基本原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 基本原理")]),t._v(" "),s("p",[s("code",[t._v("Babel")]),t._v(" 本身就是一基于 "),s("code",[t._v("AST")]),t._v(" 的编译器，其工作主要分为以下 3 个阶段。")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Parse")]),t._v("（解析），将代码解析成 "),s("code",[t._v("AST")]),t._v("，解析阶段又分成以下两个阶段。\n"),s("ul",[s("li",[t._v("词法分析（Lexical Analysis）。")]),t._v(" "),s("li",[t._v("语法分析（Syntactic Analysis）。")])])]),t._v(" "),s("li",[s("code",[t._v("Transform")]),t._v("（转换），遍历、访问 "),s("code",[t._v("AST")]),t._v("，对其进行修改。")]),t._v(" "),s("li",[s("code",[t._v("Generate")]),t._v("（生成），将修改过后的 "),s("code",[t._v("AST")]),t._v(" 转换、生成代码。")])]),t._v(" "),s("h2",{attrs:{id:"babel-插件开发常用工具链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-插件开发常用工具链","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 插件开发常用工具链")]),t._v(" "),s("h3",{attrs:{id:"babel-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-parser","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-parser.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/parser"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("可以将代码转换成 "),s("code",[t._v("Babel")]),t._v(" 规范的 "),s("code",[t._v("AST")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"babel-traverse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-traverse","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-traverse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/traverse"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("用于遍历、访问和修改 "),s("code",[t._v("AST")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"babel-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-types","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/types"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("AST")]),t._v(" 可以是一个 "),s("code",[t._v("JavaScript")]),t._v(" 对象，所以判断、修改节点可以是下面这样。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Identifier'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("然而，遵循 "),s("code",[t._v("DRY")]),t._v(" 原则，自然有了 "),s("code",[t._v("@babel/types")]),t._v("，里面有许多方法能够构建、校验、转换 "),s("code",[t._v("AST")]),t._v(" 节点，帮助我们更加简便地操作 "),s("code",[t._v("AST")]),t._v("。有了它上面的代码就可以简化为下方代码。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"babel-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-generator","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-generator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/generator"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("可以将 "),s("code",[t._v("AST")]),t._v(" 转换、生成为代码。")]),t._v(" "),s("h3",{attrs:{id:"babel-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-template","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/template"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("AST")]),t._v(" 是一个比较复杂的对象，如果要手动生成这个巨大的 "),s("code",[t._v("AST")]),t._v(" 那将是一个苦力活。")]),t._v(" "),s("p",[s("code",[t._v("@babel/template")]),t._v("，能让我们通过更简单、熟悉的写代码字符串的方式来生成 "),s("code",[t._v("AST")]),t._v("，并且支持字符串模版。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" template "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/template'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" generate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/generator'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/types'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buildRequire "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n  var IMPORT_NAME = require(SOURCE);\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRequire")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMPORT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("identifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myModule'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringLiteral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"编写一个-babel-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写一个-babel-插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写一个 Babel 插件")]),t._v(" "),s("p",[t._v("下面写一个插件将代码里的 "),s("code",[t._v("console.log")]),t._v(" 调用删除。")]),t._v(" "),s("h3",{attrs:{id:"插件基本骨架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件基本骨架","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件基本骨架")]),t._v(" "),s("p",[t._v("从 "),s("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#writing-your-first-babel-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("writing-your-first-babel-plugin"),s("OutboundLink")],1),t._v(" 可知，插件可以是下方这么一个函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Identifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("函数传入了 "),s("a",{attrs:{href:"https://github.com/babel/babel/tree/master/packages/babel-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel"),s("OutboundLink")],1),t._v(" 对象，里面也包含了一些常用的对象、方法，比如可用于判断节点类型的 "),s("code",[t._v("babel.types")]),t._v("。")]),t._v(" "),s("p",[t._v("该函数会返回一个 "),s("code",[t._v("visitor")]),t._v(" 对象，该对象的属性方法，在 "),s("code",[t._v("Babel")]),t._v(" 执行时就会调用 "),s("code",[t._v("visitor")]),t._v(" 里面对应的方法，并传入当前路径信息 "),s("code",[t._v("path")]),t._v(" 和状态 "),s("code",[t._v("state")]),t._v("，"),s("code",[t._v("state")]),t._v(" 中可以拿到调用插件时的参数。")]),t._v(" "),s("p",[t._v("因为要删除 "),s("code",[t._v("console.log")]),t._v(" 的方法调用，所以我们在 "),s("code",[t._v("visitor")]),t._v(" 中指定访问调用表达式 "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-types#callexpression",target:"_blank",rel:"noopener noreferrer"}},[t._v("CallExpression"),s("OutboundLink")],1),t._v("。更多的 "),s("code",[t._v("AST")]),t._v(" 节点类型可从 "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/types"),s("OutboundLink")],1),t._v(" 中查看。")]),t._v(" "),s("p",[t._v("新建 "),s("code",[t._v("src/index.js")]),t._v("，插件基本代码骨架如下。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"测试驱动开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试驱动开发")]),t._v(" "),s("p",[t._v("接触过单元测试的同学可能能够想到可以使用 "),s("a",{attrs:{href:"https://github.com/babel/babel/tree/master/packages/babel-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/core"),s("OutboundLink")],1),t._v(" 的 "),s("code",[t._v("API")]),t._v(" 方法调用目标插件，然后对经过 "),s("code",[t._v("Babel")]),t._v(" 转换的 "),s("code",[t._v("AST")]),t._v(" 或代码输出、使用 "),s("code",[t._v("jest")]),t._v(" 等工具来完成单元测试。")]),t._v(" "),s("p",[t._v("但官方给出了更加简单的专门用于测试 "),s("code",[t._v("Babel")]),t._v(" 插件的 "),s("code",[t._v("package")]),t._v("，"),s("a",{attrs:{href:"https://github.com/kentcdodds/babel-plugin-tester",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-tester"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装依赖。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev jest @babel/core babel-plugin-tester\n")])])])]),t._v(" "),s("li",[s("p",[t._v("编写单元测试。")]),t._v(" "),s("p",[t._v("新建 "),s("code",[t._v("__tests__/index.spec.js")]),t._v("。下方 "),s("code",[t._v("case")]),t._v(" 表示期望把源码 "),s("code",[t._v("source")]),t._v(" 经过编译后转换为删了 "),s("code",[t._v("console.log")]),t._v(" 调用的代码。")]),t._v(" "),s("p",[s("code",[t._v("babel-plugin-tester")]),t._v(" 的详细用法请看 "),s("a",{attrs:{href:"https://github.com/kentcdodds/babel-plugin-tester",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kentcdodds/babel-plugin-tester"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pluginTester "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-tester'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n const a = 123;\n console.log(a)\n alert(123)\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" expect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n const a = 123;\n alert(123)\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pluginTester")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pluginName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove console'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tests"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" expect\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("添加 "),s("code",[t._v("npm script")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("配置完成后执行 "),s("code",[t._v("npm test")]),t._v(" 可以看见单元测试运行起来，并且上方的 "),s("code",[t._v("case")]),t._v(" 不通过。")]),t._v(" "),s("h3",{attrs:{id:"完善插件逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完善插件逻辑","aria-hidden":"true"}},[t._v("#")]),t._v(" 完善插件逻辑")]),t._v(" "),s("p",[t._v("下方相关代码可以从 "),s("a",{attrs:{href:"https://github.com/xuwenchao66/babel-plugin-development",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xuwenchao66/babel-plugin-development"),s("OutboundLink")],1),t._v(" 中进行查阅。")]),t._v(" "),s("p",[t._v("单元测试配置完成之后，我们开始补充插件逻辑，目标是通过单测的 "),s("code",[t._v("case")]),t._v("。")]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("AST")]),t._v(" 的节点 "),s("code",[t._v("node")]),t._v(" 就是一个对象，所以可以像访问一个对象一样访问 "),s("code",[t._v("node")]),t._v(" 的属性。")]),t._v(" "),s("p",[s("code",[t._v("AST")]),t._v(" 的属性多且复杂，那么可以在 "),s("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://astexplorer.net/"),s("OutboundLink")],1),t._v(" 上先看看所需要操作的 "),s("code",[t._v("AST")]),t._v(" 的节点大概长什么样，或者参考一些已有的插件源码，配合断点调试，这样在插件开发初期的才不会太盲目。")]),t._v(" "),s("p",[t._v("了解到了 "),s("code",[t._v("node")]),t._v(" 节点有一个 "),s("code",[t._v("callee")]),t._v(" 属性表示调用者，"),s("code",[t._v("callee.object")]),t._v(" 就是调用方法的所属对象， "),s("code",[t._v("callee.property")]),t._v(" 就是调用的属性方法。所以我们可以使用下方的条件判断来找出 "),s("code",[t._v("console.log")]),t._v(" 调用，最后通过 "),s("code",[t._v("path.remove")]),t._v(" 来将该 "),s("code",[t._v("node")]),t._v(" 删除。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" callee "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再次执行 "),s("code",[t._v("npm test")]),t._v("，单元测试通过。")]),t._v(" "),s("p",[t._v("像上面的 "),s("code",[t._v("node")]),t._v(" 类型判断，"),s("code",[t._v("Babel")]),t._v(" 也是提供了一些实用的工具来帮我我们快速开发。无论是 "),s("code",[t._v("console")]),t._v(" 还是 "),s("code",[t._v("log")]),t._v(" 都属于标识符（"),s("code",[t._v("Identifier")]),t._v("），所以可以用 "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/types"),s("OutboundLink")],1),t._v("\n的 "),s("code",[t._v("isIdentifier")]),t._v(" 方法来简化验证 "),s("code",[t._v("node")]),t._v(" 的代码。")]),t._v(" "),s("p",[t._v("代码可以调整为。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CallExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" callee "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIdentifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'log'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("本文相关的代码只是希望起到抛砖引玉的作用，简述一个插件的开发基本流程而已。")]),t._v(" "),s("p",[t._v("如果想要了解更多 "),s("code",[t._v("Babel")]),t._v(" 插件开发的相关信息，推荐阅读 "),s("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel Plugin Handbook"),s("OutboundLink")],1),t._v("，这里有更详细的介绍，包括了插件的基本实现以及最佳实践推荐。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel Plugin Handbook"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);