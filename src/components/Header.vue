<template>
  <div class="header">
    <div class="topbox"><!--顶部-->
      <div class="top">
        <div class="topleft">
          <div class="consultation">咨询热线：0000-000000</div>
          <div class="weixin"></div>
          <div class="weibo"></div>
        </div>
        <div class="topright">
          <a class="signin" href="#">登录</a>
          <a class="registered" href="#">注册</a>
          <a class="topjiaoyi" href="#">我的交易</a>
          <a class="topzhanghu" href="#">我的账户</a>
          <a class="topbangzhu" href="#">帮助中心</a>
          <a class="topwomen" v-link="{path:'/about' }">关于我们</a>
        </div>
      </div>
    </div>
    <div class="navbox"><!--导航-->
      <div class="nav">
        <div class="logo">logo</div>
        <a class="homepage" href="#">首页</a>
        <a class="ticketbill" href="#">票据理财</a>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .header{ padding-bottom:0;}
  /*顶部*/
  .topbox{ background-color:#f1f5f5; min-width:1308px; border-bottom:#e4eaea solid 1px; height:35px;}
  .top{ margin:0 auto; overflow:hidden; width:1110px;}/*宽页面不同*/
  .topleft{ float:left; margin-top:8px;}
  .topright{ float:right; margin-top:10px;}
  .consultation,.weixin,.weibo{ float:left;}
  .consultation{padding-left:16px; color:#9d9494; background:url(../assets/same/a01.png) no-repeat left center; margin-right:26px;}
  .weixin{ width:21px; height:21px; background:url(../assets/same/a02.png) no-repeat left center; margin-right:13px;}
  .weibo{width:21px; height:21px; background:url(../assets/same/a03.png) no-repeat left center;}
  .topright a{ font-size:14px; color:#9d9494; width:75px; display:block; float:left; text-align:center; height:16px; line-height:16px;}
  .topright .registered{ width:51px;}
  .topright a:hover{ color:#ea544a; cursor: pointer;}
  .registered,.topjiaoyi,.topzhanghu,.topbangzhu{ border-right:1px solid #cdcdcd;}
  /*导航*/
  .navbox{ height:86px; background-color:#FFF;}/*首页，产品列表无背景图片*/
  .nav{ margin:0 auto; overflow:hidden; width:1110px;}/*宽页面不同*/
  .logo,.homepage,.ticketbill{ float:left;}
  .logo{ width:203px; height:54px; border:#9d9494 solid 2px; line-height:54px; text-align:center; font-size:22px; margin-top:12px; margin-right:135px;}
  .homepage,.ticketbill{ width:90px; height:36px; border-radius:4px; line-height:36px; text-align:center; font-size:16px; margin-right:8px; margin-top:26px;}
  .homepage:hover{ background-color:#ea544a; color:#FFF;}
  .ticketbill:hover{background-color:#ea544a; color:#FFF;}
</style>
