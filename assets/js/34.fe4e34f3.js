(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{270:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-入门实践-1-使用自定义镜像，部署自己的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-1-使用自定义镜像，部署自己的应用","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 入门实践(1): 使用自定义镜像，部署自己的应用")]),t._v(" "),e("p",[t._v("在工作、学习中社区的镜像往往不能够满足需求，为此我们会使用自定义镜像。")]),t._v(" "),e("p",[t._v("我们通常会使用 Dockerfile 文件来制作镜像，Dockerfile 是一个文本文件，用来定义该如何创建、运行一个镜像。")]),t._v(" "),e("p",[t._v("下面将介绍如何构建自定义镜像，以及将其运行在 Docker 之中。")]),t._v(" "),e("p",[t._v("下方 demo 源码可从"),e("a",{attrs:{href:"https://github.com/xuwenchao66/docker-demos",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xuwenchao66/docker-demos"),e("OutboundLink")],1),t._v("中查看、获取。")]),t._v(" "),e("h2",{attrs:{id:"实现一个简单的-nodejs-应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简单的-nodejs-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现一个简单的 nodejs 应用")]),t._v(" "),e("p",[t._v("首先执行 "),e("code",[t._v("npm init")]),t._v(" 初始化一个项目，该项目是一个 nodejs 应用，其根入口文件 index.js 代码如下。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Docker'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("当运行该脚本的时候，通过浏览器访问部署机器的 8000 端口，浏览器会返回、渲染 Hello Docker 文本。")]),t._v(" "),e("h2",{attrs:{id:"编写-dockerfile-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写 Dockerfile 文件")]),t._v(" "),e("p",[t._v("在项目根目录创建一个 Dockerfile 文件，其内容如下。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("FROM node:latest\nCOPY "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /app\nWORKDIR /app\nRUN "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\nCMD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("FROM node:latest")]),t._v("，该镜像基于 node 镜像，冒号后面的是镜像的版本号，这里表示镜像基于最新的 node 镜像。")]),t._v(" "),e("li",[e("code",[t._v("COPY . /app")]),t._v("，将当前根目录的所有文件（除开被.dockerignore 忽略的文件），都复制到镜像的 /app 目录中。")]),t._v(" "),e("li",[e("code",[t._v("WORKDIR /app")]),t._v("，工作目录为 /app ,也就是说镜像、容器默认都是在 /app 目录下执行命令的。")]),t._v(" "),e("li",[e("code",[t._v("RUN npm i")]),t._v("，RUN 用于构建镜像时执行命令，这里执行"),e("code",[t._v("npm i")]),t._v("来安装依赖。")]),t._v(" "),e("li",[e("code",[t._v('CMD ["node", "index.js"]')]),t._v("，CMD 为容器启动时执行的命令，这里启动了一个 nodejs 服务。")])]),t._v(" "),e("p",[t._v("RUN 和 CMD 都是用来执行命令，相似但有以下不同。")]),t._v(" "),e("ol",[e("li",[t._v("RUN 是在构建镜像阶段执行，执行后的产物都会打包进构建出来的 image 中，所以一般用于应用环境依赖的安装，而 CMD 是在容器启动的时候执行。")]),t._v(" "),e("li",[t._v("一个 Dockerfile 中能够有个 RUN 指令，而 CMD 只能有一个。")])]),t._v(" "),e("h2",{attrs:{id:"构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 构建镜像")]),t._v(" "),e("p",[t._v("有了 Dockerfile 之后，我们可以根据 Dockerfile 构建镜像，执行以下命令。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker build -t hello-docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("build")]),t._v("，构建镜像。")]),t._v(" "),e("li",[e("code",[t._v("-t")]),t._v("，镜像的名称，这里是 hello-docker。")]),t._v(" "),e("li",[e("code",[t._v(".")]),t._v("，命令的最后，用于告诉 Docker 应该在哪查找 Dockerfile 文件，这里用的是当前项目根目录。")])]),t._v(" "),e("p",[t._v("构建成功之后，执行"),e("code",[t._v("docker image ls")]),t._v("，可以看到一个名为 hello-docker 的镜像文件。")]),t._v(" "),e("h2",{attrs:{id:"生成、运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成、运行容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成、运行容器")]),t._v(" "),e("p",[t._v("执行下方命令，以 hello-docker 镜像生成、运行一个容器实例。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(":8000 hello-docker\n")])])]),e("ul",[e("li",[e("code",[t._v("-d")]),t._v("，后台执行。")]),t._v(" "),e("li",[e("code",[t._v("-p 8000:8000")]),t._v("，宿主机器的 8000 端口映射至容器的 8000 端口。")])]),t._v(" "),e("p",[t._v("启动成功之后，执行"),e("code",[t._v("docker container ls")]),t._v("可以看见多出了一个 status 为 up 的容器。我们访问宿主机器的 8000 端口，比如 http://192.168.0.103:8000/ ，此时可看见浏览器返回了 Hello Docker 文本，至此我们的自定义镜像、容器已经成功部署运行。")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://docs.docker.com/get-started/02_our_app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/get-started/02_our_app/"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 入门教程"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);