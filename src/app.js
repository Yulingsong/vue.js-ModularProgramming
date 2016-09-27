/**
 * Created by justinjiang on 2016/9/20.
 */


import Vue from  'vue';

import VueRouter from 'vue-router';

import Routes from './routes';

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

var App = Vue.extend({});
var router = new VueRouter({});

router.map(Routes);
router.start(App, '#app');
//router.go({"path":"/"});
