<template>
  <div class="page">
    <div class="bannerbox">
      <div class="banner"></div>
    </div>

    <div class="statisticsbox">
      <div class="raisebox">
        <div class="raiseicon"></div>
        <div class="Raisemoney">￥{{statistics.amount}}<span>元</span></div>
        <div class="r_cumulative">累计已完成募集金额</div>
      </div>
      <div class="investmentbox">
        <div class="investmenticon"></div>
        <div class="Investmentmoney">￥{{statistics.earn}}<span>元</span></div>
        <div class="i_cumulative">累计为投资者赚取收益</div>
      </div>
      <div class="peoplenamebox">
        <div class="peoplenameicon"></div>
        <div class="peoplename">{{statistics.peoplenum}}<span>人</span></div>
        <div class="p_cumulative">累计已完成投资人数</div>
      </div>
      <div class="counterbox">
        <div class="Countericon"></div>
        <div class="Counterrate">{{statistics.honour}}<span>%</span></div>
        <div class="c_cumulative">到期本息兑付率</div>
      </div>
    </div>

    <div class="contentbigbox">
      <div class="contentleft">
        <div class="financialproducts">理财产品</div>
        <div class="arrangeleft">


          <ul>
            <li class="box" v-for="item in items">
              <div class="saleleft">
                <div class="ticketname1">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>银行承兑汇票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;募集成功当日起息</span></div>
                <div class="ticketcontent">
                  <div class="yield">
                    <div class="shouyiwords">预期年化收益率</div>
                    <div class="yieldname">{{item.rate}}<span>%</span></div>
                  </div>
                  <div class="financingmoney">
                    <div class="rongwords">融资金额</div>
                    <div class="financingname">{{item.amount}}<span>元</span></div>
                  </div>
                  <div class="timelimit">
                    <div class="timelimitwords">期限</div>
                    <div class="timelimitname">{{item.limitTime}}<span>天</span></div>
                  </div>
                </div>
              </div>
              <div class="saleright1">
                <div class="saletime1">开售：&nbsp;{{item.startTime}}&nbsp;&nbsp;&nbsp;{{item.startHour}}</div>
                <div class="saleicon1"></div>
              </div>
            </li>
          </ul>
            <a class="checkmone" href="产品列表（未登录）.html">查看更多理财产品</a>
          </div>
        </div>
      </div>

      <div class="contentright">
        <div class="noticeboard">
          <div class="dynamic">
            <div class="company">公司动态</div>
            <a class="mone" href="关于我们（公司动态）（已登录）.html">更多></a>
          </div>
          <div class="news">
            <a class="dt1" v-link="{'name':'about'}">银行卡消费积分活动开始了。</a>
            <a class="dt2" v-link="{'name':'home'}">新一期票据即将开售1111</a>
            <a class="dt3" v-link="{'name':'hello'}">新一期票据即将开售222</a>
            <a class="dt4" v-link="{'name':'infoModify'}">新一期票据即将开售333</a>
            <a class="dt5" @click="gogo()" >新一期票据即将开售444</a>
          </div>
        </div>
        <div class="noticeboard1">
          <div class="dynamic">
            <div class="question">常见问题</div>
            <a class="mone" href="帮助中心（名词解释）（已登录）.html">更多></a>
          </div>
          <div class="news">
            <a class="dt1" href="帮助中心（名词解释）（已登录）.html">银行卡消费积分活动开始了。</a>
            <a class="dt2" href="帮助中心（名词解释）（已登录）.html">新一期票据即将开售，稳赚保盈，利率高...</a>
            <a class="dt3" href="帮助中心（名词解释）（已登录）.html">新一期票据即将开售，稳赚保盈，利率高...</a>
            <a class="dt4" href="帮助中心（名词解释）（已登录）.html">新一期票据即将开售，稳赚保盈，利率高...</a>
            <a class="dt5" href="帮助中心（名词解释）（已登录）.html">新一期票据即将开售，稳赚保盈，利率高...</a>
          </div>
        </div>
      </div>
    </div>
  <!--</div>-->
</template>



<script>
  export default {//这里是官方的写法，默认导出，ES6

    data () { //ES6，等同于data:function(){}
      return {    //必须使用这样的形式，才能创建出单一的作用域
        statistics:{},
        items:{},
      }
    },
    methods :{
      loadData:function(){
        this.statistics = {
          amount:'87,396,848.00',
            earn:'7,864,828.10',
            peoplenum:'6,482,810',
            honour:'100'
        }
      },

      gogo: function () {
        const router = this.$router;
        const current = this.$route;
        router.go({path:'/home/infoModify'});
      },

      loadlistdata: function () {
//        console.log(11);
        var data = {
          "date": "20160923",
          "dataList": [
            {
              "name": "票易赚1111111111",
              "amount": "1000000000",
              "id": 1,
              "rate": "5.7",
              "limitTime": "100",
              "startTime":"04-27",
              "startHour":" 9:30"
            },
            {
              "name": "票易赚222222222",
              "amount": "2000000000",
              "id": 2,
              "rate": "5.8",
              "limitTime": "90",
              "startTime":"04-28",
              "startHour": "9:30"
            },
            {
              "name": "票易赚3333333333",
              "amount": "3000000000",
              "id": 2,
              "rate": "2.8",
              "limitTime": "30",
              "startTime":"05-28",
              "startHour": "3:30"
            },
            {
              "name": "票易赚444444444",
              "amount": "4000000000",
              "id": 2,
              "rate": "4.8",
              "limitTime": "20",
              "startTime":"02-28",
              "startHour": "2:30"
            }
          ]
        };

        this.items = data.dataList;
//        console.log(this.items + "      " + "items");
      }
    },
    created: function () {
      this.loadData();
      this.loadlistdata();
    }
  }
</script>



<style>
  .page{ min-width:1308px; margin:0 auto; padding-bottom:170px;}
  .bannerbox{ width:100%; height:320px; position:relative; overflow:hidden;}
  .banner{ width:2500px; height:320px; position:absolute; left:50%; margin-left:-1250px; background:url(../assets/icons/a01.png) no-repeat;}
  .Raisemoney,.Investmentmoney,.peoplename,.Counterrate{ font-size:20px;}

  .statisticsbox{
    overflow:hidden;
    margin:auto;
    height: 200px;
    padding-top: 40px;
    padding-left: 95px;
    margin-bottom:40px;
    background-color: #ffffff;
  }

  .raisebox,.investmentbox,.peoplenamebox,.counterbox{ float:left;}
  .raisebox,.investmentbox,.peoplenamebox{margin-right:100px;}
  .raisebox{ padding-left:128px;}
  .raiseicon{ width:74px; height:74px; background:url(../assets/icons/a02.png) no-repeat; margin-left:45px;}
  .investmenticon{ width:74px; height:74px; background:url(../assets/icons/a03.png) no-repeat; margin-left:40px;}
  .peoplenameicon{ width:74px; height:74px; background:url(../assets/icons/a04.png) no-repeat; margin-left:15px;}
  .Countericon{ width:74px; height:74px; background:url(../assets/icons/a05.png) no-repeat; margin-left:8px;}
  .r_cumulative{ margin-left:20px;}
  .i_cumulative{ margin-left:9px;}
  .p_cumulative{ margin-left:-7px;}
  .Counterrate{ margin-left:24px;}
  .Raisemoney,.Investmentmoney,.peoplename,.Counterrate{ margin-top:20px;}
  .r_cumulative,.i_cumulative,.p_cumulative,.c_cumulative{ margin-top:2px;}
  .contentbigbox{  margin:0 auto; overflow:hidden;}

  .arrangeleft{
    background-color:#FFF;
    border:#e2e2e2 1px solid;
    padding-bottom:60px;
    margin: 0 auto;
  }

  .contentright{ float:right;}

  .box{
    list-style:none;
    width:1000px;
    border-bottom:#e2e2e2 1px solid;
    overflow:hidden;
    margin-top:20px;
    margin-left: 100px;
  }

  .saleleft{ float:left; margin-left:20px;}
  .saleright1{ float:right; margin-right:25px;}
  .ticketname1{ font-size:18px; padding-left:35px; margin-bottom:15px; background:url(../assets/icons/a06.png) no-repeat left center;}
  .ticketcontent{ overflow:hidden; padding-left:35px; margin-bottom:20px;}
  .yield,.financingmoney{ float:left; margin-right:75px;}
  .timelimit{ float:left;}
  .yield{ width:104px;}
  .financingmoney{ width:134px;}
  .timelimit{ width:50px;}
  .yieldname{ color:#ea544a; font-size:30px; margin-top:2px;}
  .yieldname span{color:#ea544a;}
  .financingname,.timelimitname{ font-size:18px; margin-top:14px;}

  .saletime1{
    display:inline-block;
    color:#a8a7a7;
    position: relative;
    right: 90px;
    top: 18px;
  }

  .saleicon1{
    display:inline-block;
    width:134px;
    height:32px;
    background-image:url(../assets/icons/a08.png);
    position: relative;
    top: 23px;
  }

  .ticketname2{
    font-size:18px;
    padding-left:35px;
    margin-bottom:15px;
    background:url(../assets/icons/a07.png) no-repeat left center;
  }

  .saleicon2{
    display:inline-block;
    width:134px;
    height:32px;
    background-image:url(../assets/icons/a09.png);
  }

  .saleicon2:hover{ background-image:url(../assets/icons/a09a.png);}
  .saleicon2:hover{ background-image:url(../assets/icons/a09a.png);}

  .slidingblock{
    display:inline-block;
    width:134px;
    height:6px;
    border-radius:3px;
    margin-bottom:9px;
    background: no-repeat -50px 0 #c9c9c9;
  }

  .saletime2{
    color:#a8a7a7;
    margin-bottom:4px;
    margin-left:29px;
  }

  .saleright2{

    float:right;
    margin-top:20px;
    margin-right:25px;
  }

  .checkmone{
    display:block;
    width:260px;
    height:32px;
    font-size:16px;
    border:#474e5d 1px solid;
    line-height:32px;
    text-align:center;
    border-radius:4px;
    margin-top:33px;
    margin-left:520px;
  }

  .checkmone:hover{ cursor:pointer; border:#FFF 1px solid; background-color:#ef948e; color:#FFF;}

  .financialproducts,.notice{
    font-size:28px;
    margin-bottom:10px;
    margin-left: 600px;
  }

  .noticeboard{
    float: left;
    padding-bottom:45px;
    margin-top:30px;
    margin-right: 260px;
  }

  .noticeboard1{
    float: right;
    padding-bottom:45px;
    margin-top:30px;
    margin-right: 120px;
  }


  .company{ float:left; font-size:18px; padding-left:28px;  margin-bottom:4px; background:url(../assets/icons/a12.png) no-repeat left center;}
  .dt1,.dt2,.dt3,.dt4,.dt5{
    display:block;
    margin: 18px 0 4px 26px;
    padding-left:18px;
    background:url(../assets/icons/a14.png) no-repeat left center;
    border-bottom: #e2e2e2 solid 1px ;
    padding-bottom: 6px;
  }

  .mone{
    float:right;
    margin-top:3px;
    color:#999999;
  }

  .dynamic{
    width:400px;
    border-bottom:#e2e2e2 1px solid;
    margin-left:22px;
    margin-top:18px;
    overflow:hidden;
  }

  .news a:hover{ color:#ea544a;}
  .question{float:left; font-size:18px; padding-left:33px;  margin-bottom:4px; background:url(../assets/icons/a13.png) no-repeat left center;}


</style>

