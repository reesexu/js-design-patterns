(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{266:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"babel-入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-入门","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 入门")]),t._v(" "),a("p",[t._v("前端开发中经常能看到 Babel 这字样，比如@babel/polyfill，@babel/preset-env。")]),t._v(" "),a("p",[t._v("我们有能不知道为什么需要 Babel，很多时候在构建工具加上某个 Babel 插件只是因为“网上搜到要加这个代码才能正常运行”。")]),t._v(" "),a("p",[t._v("下面根据自己对官方文档以及开发过程中的实践、理解，来解释什么是 Babel，及与其相关的常用工具链，为什么需要它们。")]),t._v(" "),a("h2",{attrs:{id:"什么是-babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-babel","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 Babel")]),t._v(" "),a("p",[t._v("打开 Babel 的官网就能看到那显眼的 slogan，"),a("strong",[t._v("Babel is a JavaScript compiler")]),t._v("，一句话总结 Babel 就是一个 JavaScript 编译器。")]),t._v(" "),a("p",[t._v("Babel 是一个的工具链，主要用于将 ECMAScript 2015+的 JavaScript 代码转换成能够运行在现在或者更古老的浏览器、环境等的兼容版本代码。")]),t._v(" "),a("p",[t._v("从官方文档中可知 Babel 主要能做以下几个事情：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("转换语法。")])]),t._v(" "),a("li",[a("p",[t._v("Polyfill 实现目标环境中缺少的功能 (通过 @babel/polyfill)。")])]),t._v(" "),a("li",[a("p",[t._v("源代码转换 (codemods)。")])])]),t._v(" "),a("p",[t._v("比如下方 ES2015 的箭头函数，在低版本 IE 执行的话是会错的，因为无法识别、解析 ES6 的语法糖，比如箭头函数。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("为了能够使用现代 JavaScript 的语法，同时又要保证在低版本浏览器中兼容运行，可以使用 Babel 将箭头函数编译成所有浏览器都能识别的 function。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"babel-中的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-中的基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 中的基本概念")]),t._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),a("p",[t._v("Babel 只是一个编译器，它就像一个纯函数"),a("code",[t._v("const babel = code => code;")]),t._v("一样，不做任何事情，解析然后生成一样的代码。所以你需要添加、使用插件 plugins 来做其它事情。")]),t._v(" "),a("p",[t._v("比如想要将箭头函数转换成 function，就可以使用官方的"),a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/plugin-transform-arrow-functions"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("可从"),a("a",{attrs:{href:"https://babeljs.io/docs/en/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://babeljs.io/docs/en/plugins"),a("OutboundLink")],1),t._v("了解插件的更多细节。")]),t._v(" "),a("h3",{attrs:{id:"presets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presets","aria-hidden":"true"}},[t._v("#")]),t._v(" presets")]),t._v(" "),a("p",[t._v("从上面可知 Babel 的具体功能都由 plugins 来实现，那么如果要编译一个应用，我们岂不得添加一堆插件、参数配置？")]),t._v(" "),a("p",[t._v("为了解决这个问题，presets（预置）出现了。presets 可以理解为是 plugins 、部分配置的集合，有了 presets 就可以不用再单独配置一个个 plugin、参数了，直接使用已经组合、配置好的 presets 即可。")]),t._v(" "),a("h2",{attrs:{id:"常用工具链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具链","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具链")]),t._v(" "),a("h3",{attrs:{id:"babel-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill","aria-hidden":"true"}},[t._v("#")]),t._v(" @babel/polyfill")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-polyfill"),a("OutboundLink")],1),t._v("包含了"),a("a",{attrs:{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("core-js"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://github.com/facebook/regenerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("regenerator runtime"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("core-js，现代 JavaScript 标准库，提供了 ES6+ 的 promises，symbols，collections、iterators ，typed arrays 等全局变量、实例方法等填充库。")]),t._v(" "),a("p",[t._v("regenerator runtime 运行时库，能够将 generators、yield、async 等编译转换成拥有相同功能的 ES5 兼容代码。")]),t._v(" "),a("p",[t._v("这意味着，通过 babel-polyfill 你能够使用新的内建函数，比如 Promise，静态方法 Array.from 或者 Object.assign，实例方法 Array.prototype.includes 和 generator 函数（generators、yield、async 等的实现）。这些 polyfill 和原生 prototype 上的方法一样被添加到了全局作用域中。")]),t._v(" "),a("p",[t._v("所以，Babel（语法编译）+ polyfill（api 垫片），才能够完整的模拟一套"),a("strong",[t._v("完整的")]),t._v("ES2015+ 环境。")]),t._v(" "),a("p",[t._v("注意，在 Babel 7.4.0 中，@babel/polyfill 已经被弃用了，取而代之的是 core-js/stable 和 regenerator-runtime/runtime")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-js/stable'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'regenerator-runtime/runtime'")]),t._v("\n")])])]),a("h3",{attrs:{id:"babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env","aria-hidden":"true"}},[t._v("#")]),t._v(" @babel/preset-env")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/preset-env"),a("OutboundLink")],1),t._v("是一个预置集合，它能够"),a("strong",[t._v("自动")]),t._v("进行语法转换、甚至添加 polyfill，而无需进行复杂的配置、管理。")]),t._v(" "),a("p",[t._v("常见配置如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("useBuiltIns 参数决定 @babel/preset-env 如何处理 polyfills。")]),t._v(" "),a("p",[t._v('该参数值可以是"usage"，"entry"，false 其中之一，默认是 false。')]),t._v(" "),a("p",[t._v("useBuiltIns: 'entry'，会把应用入口的引入 polyfills 语句替换为按需引用语句，比如：")]),t._v(" "),a("p",[t._v("输入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-js'")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-js/modules/es.string.pad-start'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-js/modules/es.string.pad-end'")]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns: 'usage'")]),t._v("，无需手动引入"),a("code",[t._v("polyfill")]),t._v("，会按需引入使用到的 api，比如：")]),t._v(" "),a("p",[t._v("输入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'core-js/modules/es.promise'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns: false")]),t._v("，不会自动引入"),a("code",[t._v("polyfill")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"babel-runtime-babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime-babel-plugin-transform-runtime","aria-hidden":"true"}},[t._v("#")]),t._v(" @babel/runtime & @babel/plugin-transform-runtime")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-runtime.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/runtime"),a("OutboundLink")],1),t._v("包含了 Babel 模块运行时帮助函数以及 regenerator-runtime。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/plugin-transform-runtime"),a("OutboundLink")],1),t._v("这是一个能够复用 Babel 注入的帮助函数的插件，通过它能够节省代码大小。这里的"),a("strong",[t._v("transform-runtime")]),t._v("就指的是 @babel/runtime，所以使用 @babel/plugin-transform-runtime 之前也必须安装 @babel/runtime。")]),t._v(" "),a("p",[t._v("看完官方简单的介绍应该还有点模糊，下面用官方的例子再来解释下。")]),t._v(" "),a("p",[t._v("比如下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过 babel 编译后变成：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cannot call a class as a function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里我们可以看到编译出来了一个全局的帮助函数"),a("code",[t._v("_classCallCheck")]),t._v("，这个在应用中是没问题，但如果在工具库使用就会产生以下问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("污染了全局变量。")])]),t._v(" "),a("li",[a("p",[t._v("假如工具库 A 和工具库 B 中都编译出了"),a("code",[t._v("_classCallCheck")]),t._v("就会产生了冗余重复的代码，增加了文件体积。")])])]),t._v(" "),a("p",[t._v("如果我们使用了 transform-runtime 之后编译成如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _classCallCheck2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/runtime/helpers/classCallCheck'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _classCallCheck3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_interopRequireDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_classCallCheck2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_interopRequireDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__esModule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _classCallCheck3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里我们可以看到"),a("code",[t._v("_classCallCheck")]),t._v("作为依赖引入了，而不是直接编译进入代码，transform-runtime 就是提供了这么一个沙盒环境，避免了污染全局变量、重复的 babel 帮助函数代码等问题。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);