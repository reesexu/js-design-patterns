(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{269:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker-入门实践-0-使用公共镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门实践-0-使用公共镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 入门实践(0): 使用公共镜像")]),t._v(" "),r("p",[t._v("在简单了解 Docker 之后，跟学习任何语言一样，都必须先来一个 Hello world 进一步加深、巩固自己的理解。\n下面使用官方公共镜像来快速将我们的第一个容器运行起来。")]),t._v(" "),r("h2",{attrs:{id:"获取镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取镜像")]),t._v(" "),r("p",[t._v("镜像的存在是启动容器的前提，所以我们先要获取一个镜像，为此执行如下命令。")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("docker image pull docker/getting-started\n")])])]),r("p",[t._v("成功之后执行 "),r("code",[t._v("docker images")]),t._v(" 查看当前镜像，可以发现多了一个叫做 docker/getting-started 的镜像。")]),t._v(" "),r("h2",{attrs:{id:"运行容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行容器")]),t._v(" "),r("p",[t._v("执行 run 命令，启动 getting-started 镜像，生成一个容器。")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("docker run -d -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 docker/getting-started\n")])])]),r("ul",[r("li",[r("code",[t._v("-d")]),t._v(" 让容器在后台运行。")]),t._v(" "),r("li",[r("code",[t._v("-p 10086:80")]),t._v(" 让宿主机器的 10086 端口映射至容器的 80 端口。")]),t._v(" "),r("li",[r("code",[t._v("docker/getting-started")]),t._v(" 需要使用的镜像名，如该镜像在本地中不存在则会自动从远程镜像仓库中获取，所以"),r("code",[t._v("image pull")]),t._v("操作是可省略的。")])]),t._v(" "),r("p",[t._v("执行过后，继续执行"),r("code",[t._v("docker container ls")]),t._v("查看当前容器信息、状态，可以发现多了一个 status 为 up（启动）状态的容器，说明容器启动成功了。")]),t._v(" "),r("p",[t._v("因为 docker/getting-started 默认在容器中暴露了 80 供以访问，而且我们对其进行了端口映射， 所以我们通过宿主机器的 ip 加上映射的端口号，比如在浏览器中访问 http://192.168.0.103:10086/ ，就可以看到由 docker/getting-started 容器提供的一个 web 页面。")]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.docker.com/get-started/"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 入门教程"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);