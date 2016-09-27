<template>

  <div class="page">
    <div class="middle">
      <div class="containleft">
        <div class="TE_toudetailsbox">
          <div class="TE_toudetailstu"><img src="../assets/explain/a01.png"></div>
          <div class="TE_dhhaoma">158****8332</div>
        </div>

        <div class="TE_xuandetailsbox">
          <div class="TE_jiaoyizhanghu">交易账户</div>
          <a class="TE_jiaoyi" href="我的交易 成功.html">&nbsp;&nbsp;&nbsp;&nbsp;我的交易</a>
          <a class="TE_chicang" href="我的持仓 持有中.html">&nbsp;&nbsp;&nbsp;&nbsp;我的持仓</a>
          <a class="TE_y_card8angka" href="我的银行卡.html">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的银行卡</a>
          <div class="TE_zhanghuguanli">账户管理</div>
          <div class="TE_gerenxinxi">&nbsp;&nbsp;&nbsp;&nbsp;个人信息</div>
          <a class="TE_mima" href="修改密码1.html">&nbsp;&nbsp;&nbsp;&nbsp;密码修改</a>
        </div>
      </div>

        <div class="containright">
          <div class="xinxibox">
            <div class="mt_topgerenxinxi">
              <span class="mycard_red">个人信息</span>
            </div>
          </div>

          <div class="mt_hongbeijing">
            <div class="K_neirongbox">
              <form>
                <p class="K_yonghumingbox">
                  用户名： <input type="text" name="yname" placeholder="4-12个字符，可由中英文，数字组成" class="shuyonghu" v-model="info.username"/>
                  <span class="tip_name">{{username222}}</span>
                </p>
                <p class="K_younamebox">
                  姓名： <input type="text" name="xname" class="shuyouname" v-model="info.name" />
                  <span class="tip_ming" >{{error.name}}</span>
                </p>
                <p class="K_xingbiebox">
                  性别： <input type="radio" name="sex" checked="checked" class="nan"/>男
                  <input type="radio" name="sex" class="nv" />女
                </p>
                <div class="K_youdetailsbox">
                  <div class="youdetailswords">邮箱：</div>

                  <div class="youdetailsplace"></div>
                  <a href="绑定邮箱 填邮箱.html" class="bangyoudetails">绑定邮箱</a>
                </div>
                <p class="K_tishibox">绑定邮箱，账户更安全。<br>
                  点击绑定邮箱，立即绑定。</p>
                <p class="K_suozaidibox">
                  所在地： <input type="text" name="sname" class="shudizhi" v-model="info.location" />
                  <span class="tip_dress">{{error.location}}</span>
                </p>
                <p class="K_youbianbox">
                  邮编： <input type="text" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="6" name="bname" class="shuyoubian" v-model="info.zipcode" />
                  <span class="tip_you">{{error.zipcode}}</span>
                </p>
                <p>
                  <a class="tijiao" @click="submitData">提交</a>
                </p>
              </form>
            </div>

            <!--<div class="X_toumingbg">-->
              <!--<div class="X_bgtop">提示-->
                <!--<div class="X_chahao"></div>-->
              <!--</div>-->
              <!--<div class="X_bgbottom">-->
                <!--<div class="X_bccg">信息保存成功</div>-->
                <!--<div class="X_guanbi">关闭</div>-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
    </div>
  </div>

</template>


<script>
  export default {//这里是官方的写法，默认导出，ES6


    data () { //ES6，等同于data:function(){}
      return {    //必须使用这样的形式，才能创建出单一的作用域
        info:{username:'',name:'',location:'',zipcode:''},
        error:{username:'1111',name:'',location:'',zipcode:'2222'},
        username222:"1111"
      }
    },
    methods :{
      submitData:function(){
//        console.log(this.info.username);
        console.log(this.username222 + "     " + "this.username222");
        this.error.zipcode = '222222333';
      }
    }
  }
</script>

<style>
  .page{ min-width:1308px; margin:0 auto; padding-top: 40px; padding-bottom:170px;}
  .middle{ width:1110px; margin:0 auto; overflow:hidden;}
  .containleft{ float:left; }
  .containright{ float:right; width:916px; border:#dddcdc 1px solid; background-color:#FFF;}
  .TE_toudetailsbox{ width:180px; border:#dddcdc 1px solid; background-color:#FFF; margin-bottom:8px;}
  .TE_toudetailstu{ margin-left:44px; margin-top:10px;}
  .TE_dhhaoma{ font-size:16px; margin-left:40px; margin-top:10px; margin-bottom:14px;}
  .TE_xuandetailsbox{width:180px; border:#dddcdc 1px solid; background-color:#FFF;}
  .TE_jiaoyizhanghu,.TE_zhanghuguanli{ height:34px; line-height:34px; margin-left:12px; color:#a6a6a6;}
  .TE_xuandetailsbox a{ display:block; height:34px; line-height:34px; width:180px; text-align:center;}
  .TE_xuandetailsbox a:hover{ background-color:#ebedf5;}
  .TE_jiaoyi{ background:url(../assets/explain/a02.png) no-repeat 40px center;}
  .TE_chicang{ background:url(../assets/explain/a03.png) no-repeat 38px center;}
  .TE_y_card8angka{ background:url(../assets/explain/a04.png) no-repeat 39px center;}
  .TE_gerenxinxi{height:34px; line-height:34px; width:180px; text-align:center; color:#FFF; background:url(../assets/explain/a05a.png) no-repeat 40px center #ea544a;}
  .TE_mima{ background:url(../assets/explain/a06.png) no-repeat 41px center;}
  .xinxibox{ width:916px; background-color:#FFF; }

  /*.mt_topgerenxinxi{ font-size:16px; margin-top:22px;}*/
  .mt_topgerenxinxi{ width:852px; height:30px; line-height:30px; border-bottom:1px solid #e3e3e3; margin:22px 0 8px 31px; }
  .mycard_red { display: inline-block; padding-right: 10px; padding-left: 10px; height: 27px; font-size: 16px; line-height: 27px; border-bottom: 3px solid #ea544a; }

  /*.mt_huifenxian{ width:852px; height:1px; background-color:#dddcdc; margin-top:3px; position:relative; margin-bottom:12px;}*/
  .mt_hongbeijing{ position:relative; width:852px; height:420px; background-color:#f5edeb; padding-top:20px; margin-bottom:31px; margin-left:31px; }

  .K_neirongbox{ margin-left:210px;}
  .youdetailsplace,.youdetailswords,.bangyoudetails{ float:left;}
  .bangyoudetails{ display:block; color:#88abda; border-bottom:1px solid #88abda; margin-left:12px; margin-top:6px; }
  .bangyoudetails:hover{ color:#3675dd; cursor:pointer; border-bottom:1px solid #3675dd; }
  .K_youdetailsbox{ overflow:hidden;}
  .shuyonghu,.shuyouname,.shudizhi,.shuyoubian{width:280px; height:32px; border:#b8b8b8 1px solid; padding-left:10px;}
  .youdetailsplace{width:280px; height:32px; border:#b8b8b8 1px solid; padding-left:10px; background-color:#FFF;}
  .tijiao{ display:block; border-radius:4px; width:290px; height:34px; line-height:34px; text-align:center; color:#FFF; background-color:#ea544a; font-size:16px; margin-left:30px;}
  .tijiao:hover{ background-color:#fb7970; cursor:pointer;}
  .K_tishibox{ padding-left:24px; background:url(../assets/explain/a09.png) no-repeat left 4px; margin:6px;}
  .K_neirongbox input{ margin-left:8px;}
  .K_neirongbox .tijiao{ margin-left:68px; margin-top:10px}
  .K_neirongbox .nan{ margin:0 10px 0 70px;}
  .K_neirongbox .nv{ margin:0 10px 0 80px;}
  .youdetailswords{ margin-right:14px; line-height:34px;}
  .K_younamebox,.K_youdetailsbox,.K_xingbiebox,.K_youbianbox{ margin-left:14px;}
  .K_tishibox{ margin-left:70px;}
  .shuyonghu:focus{border:#457da7 1px solid; outline:medium;}
  .shuyouname:focus{border:#457da7 1px solid; outline:medium;}
  .shudizhi:focus{border:#457da7 1px solid; outline:medium;}
  .shuyoubian:focus{border:#457da7 1px solid; outline:medium;}
  .X_toumingbg{ width:262px; height:166px; position:absolute; left:295px; top:180px; background-image:url(../assets/explain/a10.png);}
  .X_bgtop{ width:252px; height:30px; background-color:#e0e9f4; margin:5px 5px 0 5px; color:#757575; line-height:30px; text-indent:15px; position:relative;}
  .X_chahao{ width:12px; height:12px; background-image:url(../assets/explain/a12.png); position:absolute; top:10px; left:225px;}
  .X_bgbottom{ width:252px; height:126px; background-color:#FFF; margin:0 5px 0 5px; position:relative;}
  .X_bccg{ font-size:20px; color:#457da7; padding-left:54px; padding-top:4px; padding-bottom:4px; background-image:url(../assets/explain/a11.png); background-repeat:no-repeat; background-position:left center; position:absolute; left:28px; top:20px;}
  .X_guanbi{ width:74px; height:26px; background-color:#e0e9f4; border-radius:2px; color:#757575; line-height:26px; text-align:center; position:relative; top:72px; left:82px;}
  .X_guanbi:hover{ cursor:pointer;}
  .tip_name,.tip_ming,.tip_dress,.tip_you{ display:inline-block; margin-left:10px; font-size:12px; color:#ea544a; padding-left:18px; background-image:url(../assets/explain/a38.png); background-repeat:no-repeat; background-position:left center;}

  .whiteblock{ width:100%; height:90px; background-color:#f1f1f1; }
  ::-webkit-input-placeholder { /* WebKit browsers */ color:#999; }
  :-moz-placeholder { /* Mowordslla Firefox 4 to 18 */ color:#999; }
  ::-moz-placeholder { /* Mowordslla Firefox 19+ */ color:#999; }
  :-ms-input-placeholder { /* Internet Explorer 10+ */ color:#999; }
</style>


