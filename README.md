# toy-react

#### 写代码中碰到的一些知识点

##### webpack
1. 设置 devtool:'source-map' 可以浏览器直接看源码 不是编译后的

##### 插件 "@babel/plugin-transform-react-jsx
1. pragma 属性
###### 如果不设置，会默认指向React.createElement，本项目中设置的是 `pragma: 'ToyReact.createElement'`

> 8By default, babel, etc, will transform <div id="hello" /> to React.createElement("div", { id: "hello" });. pragma: h will generate instead, as h("div", { id: "hello" });.
> React.createElement, (or h for Preact) is the function to build the virtual DOM.