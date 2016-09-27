//import Vue from 'vue'
//import App from './App'
//
///* eslint-disable no-new */
//new Vue({
//  el: 'body',
//  components: { App }
//})

// 引入vue以及vue-router
import Vue from "vue";
import VueRouter from "vue-router";

import Routes from './routes';


Vue.use(VueRouter);

//开启debug模式
Vue.config.debug = true;
// new Vue(app);//这是上一篇用到的，新建一个vue实例，现在使用vue-router就不需要了。

Vue.config.devtools = true;

// 路由器需要一个根组件。
var App = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter();
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map(Routes);//定义路由映射
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  '*':"/home/main"//重定向任意未匹配路径到/index
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');
