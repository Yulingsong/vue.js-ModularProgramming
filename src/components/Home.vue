<template>
  <div class="container">
    <app-header></app-header>
    <!--<app-main></app-main>-->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

  import AppHeader from './Header'
  import AppFooter from './Footer'
  import MainPage from './Main'
  import Router from 'vue-router'

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-main': MainPage
      },

    created: function () {
      const router = this.$router;
      router.go({path:'/home/main'});
    }
  }

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @charset "utf-8";
  /*重置*/
  img{ border:none; display:block;}
  a{ text-decoration:none;}
  *{ font-size:14px; color:#333333; font-family:"微软雅黑","宋体";}/*页面颜色有不同#363a43 首页 列表 详情*/
  input{padding:0; margin:0; border:none;}

  /*屏幕自适应*/
html,body{ margin:0; padding:0; height:100%; background-color:#f1f1f1;}
.container{ min-height:100%; height:auto !important; height:100%; position:relative;}

</style>
