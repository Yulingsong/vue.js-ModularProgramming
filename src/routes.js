/**
 * Created by justinjiang on 2016/9/20.
 */

import About from 'components/About';
import Home from 'components/Home';
import Hello from 'components/Hello.vue';
import InfoModify from 'components/InfoModify';
import Main from 'components/Main'


export default {
  '/about':{//访问地址
    name:'about',//定义路由的名字。方便使用。
    component:About,//引用的组件名称，对应上面使用`import`导入的组件
    //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
  },
  '/home': {
    name:'home',
    component: Home,
    subRoutes:{
      '/main': {
        name:'main',
        component: Main
      },
      '/infoModify': {
        name:'infoModify',
        component: InfoModify,
      }
    }
  },
  '/hello': {
    name:'hello',
    component: Hello
  },

}

