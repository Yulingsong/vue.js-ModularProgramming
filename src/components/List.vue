/**
 * Created by justinjiang on 2016/9/20.
 */
<template>
<div>
<h1>姓名：{{name}}</h1>
<h2>{{age}}</h2>
<button @click="golist">$route.router.go查看</button>
  <a v-link="{ name: 'list' }">v-link查看列表</a>
  <a v-link="{ name: 'index' }">回去主页</a>
  </div>
  </template>
  <script>
export default {//这里是官方的写法，默认导出，ES6
  data () { //ES6，等同于data:function(){}
    return {    //必须使用这样的形式，才能创建出单一的作用域
      name:"guyu",
      age:"21"
    }
  },
  methods :{
    golist () {//方法，定义路由跳转，注意这里必须使用this，不然报错
      this.$route.router.go({name:"list"});
    }
  }
}
</script>
<style></style>
<!-- 样式自行设置，或者直接看源码就好 -->
