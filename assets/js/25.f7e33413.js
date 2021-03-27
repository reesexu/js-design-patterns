(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{213:function(t,a,s){t.exports=s.p+"assets/img/webpack.cadf2109.png"},288:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-入门","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 入门")]),t._v(" "),e("p",[t._v("下方实践代码可从"),e("a",{attrs:{href:"https://github.com/xuwenchao66/webpack-practice",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xuwenchao66/webpack-practice"),e("OutboundLink")],1),t._v("查阅。")]),t._v(" "),e("h2",{attrs:{id:"webpack-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 是什么")]),t._v(" "),e("p",[t._v("打开 webpack 官网"),e("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webpack.js.org/"),e("OutboundLink")],1),t._v("，首先引入眼帘的就是下方的 banner。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(213),alt:"webpack.png"}})]),t._v(" "),e("p",[t._v("这张图很形象的描述了什么是 webpack，图的右方有我们常见的文件如 js、png、sass 等，MODULES WITH DEPENDENCIES 字样，在 webpack 中所有文件皆为模块，而且模块之间有清晰的依赖关系，\n这些带有依赖关系的模块文件经过 webpack 处理之后就会生成对应 STATIC ASSETS（静态资源）。")]),t._v(" "),e("p",[t._v("简单来说 webpack 就是一个静态资源打包器。")]),t._v(" "),e("h2",{attrs:{id:"webpack-核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-核心概念","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 核心概念")]),t._v(" "),e("h3",{attrs:{id:"entry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://webpack.js.org/concepts/#entry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entry"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("入口模块，用于告诉 webpack 哪个模块、文件用来开始构建其内部"),e("a",{attrs:{href:"https://webpack.js.org/concepts/dependency-graph/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dependency graph"),e("OutboundLink")],1),t._v("（依赖图），webpack 会找出该模块有哪些直接、间接的依赖。")]),t._v(" "),e("h3",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://webpack.js.org/concepts/#output",target:"_blank",rel:"noopener noreferrer"}},[t._v("Output"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("output 告诉 webpack 应该把其构建生成的 bundles 输出在哪，以及如何命名这些文件。")]),t._v(" "),e("h3",{attrs:{id:"loaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loaders","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://webpack.js.org/concepts/#loaders",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loaders"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("webpack 默认只能识别 JavaScript 以及 JSON 文件，loaders 让 webpack 能够处理其它类型的文件，将它们转化为 webpack 可识别的模块。比如要处理 css 文件，就要添加对应的 css-loader。")]),t._v(" "),e("h3",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://webpack.js.org/concepts/#plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugins"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("插件能够扩展 webpack 的能力，执行更多不同的任务，比如构建优化、注入环境变量等。")]),t._v(" "),e("h2",{attrs:{id:"webpack-入门使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-入门使用","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 入门使用")]),t._v(" "),e("h3",{attrs:{id:"项目初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目初始化")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("npm init")]),t._v("初始化一个 npm 项目，因为 webpack 的默认 entry 为 "),e("code",[t._v("/src/index.js")]),t._v("，所以新建 "),e("code",[t._v("src")]),t._v(" 目录，在该目录新建 "),e("code",[t._v("index.js")]),t._v(" 作为入口模块，文件内容如下。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello webpack.'")]),t._v("\n")])])]),e("h3",{attrs:{id:"安装-webpack-相关依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-webpack-相关依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 webpack 相关依赖")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack webpack-cli --save-dev\n")])])]),e("h3",{attrs:{id:"添加-npm-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-npm-scripts","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 npm scripts")]),t._v(" "),e("p",[t._v("为了方便管理、使用，将构建命令添加至 "),e("code",[t._v("npm scripts")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("此时执行"),e("code",[t._v("npm run build")]),t._v("，构建成功，并且目录中多出了"),e("code",[t._v("./dist/main.js")]),t._v("文件，这是 webpack 的默认 "),e("code",[t._v("output")]),t._v(" 值，"),e("code",[t._v("main.js")]),t._v(" 就是构建出来的 bundle。")]),t._v(" "),e("h3",{attrs:{id:"使用配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用配置文件")]),t._v(" "),e("p",[t._v("webpack cli 可以支持传递参数，但是真实项目中的构建配置往往更加复杂，所以 webpack 也支持使用更加高效、易读的配置文件。")]),t._v(" "),e("p",[t._v("为了让本系列博客的代码更好地进行分类，所以将此次实践的代码都改为放在 "),e("code",[t._v("basic")]),t._v(" 目录中，修改 "),e("code",[t._v("src")]),t._v(" 文件夹名为 "),e("code",[t._v("basic")]),t._v("。")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("basic")]),t._v(" 目录中新建 webpack 配置文件 "),e("code",[t._v("webpack.config.js")]),t._v("，配置内容如下。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./basic/index.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic/dist'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("entry：指定入口文件为"),e("code",[t._v("./basic/index.js")]),t._v("。")]),t._v(" "),e("li",[t._v("output.filename：输出的 bundle 文件名。")]),t._v(" "),e("li",[t._v("output.path：输出 bundle 的目录的绝对路径。")])]),t._v(" "),e("p",[t._v("这时候修改 "),e("code",[t._v("npm scripts")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config basic/webpack.config.js"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("ul",[e("li",[t._v("--config：用于指定 webpack 读取的配置文件。")])]),t._v(" "),e("p",[t._v("再次执行"),e("code",[t._v("npm run build")]),t._v("，构建成功，配置文件生效，在 "),e("code",[t._v("./basic/dist")]),t._v(" 目录中生成构建生成的 bundle 文件 "),e("code",[t._v("main.js")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://webpack.js.org/concepts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack concepts"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://webpack.js.org/guides/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack getting started"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);