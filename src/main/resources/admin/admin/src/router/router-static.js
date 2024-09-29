import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangke from '@/views/modules/fangke/list'
    import jiashu from '@/views/modules/jiashu/list'
    import jiashuyijian from '@/views/modules/jiashuyijian/list'
    import meishi from '@/views/modules/meishi/list'
    import news from '@/views/modules/news/list'
    import qinshi from '@/views/modules/qinshi/list'
    import shigu from '@/views/modules/shigu/list'
    import tijian from '@/views/modules/tijian/list'
    import waichu from '@/views/modules/waichu/list'
    import xuqiudai from '@/views/modules/xuqiudai/list'
    import yaowu from '@/views/modules/yaowu/list'
    import yinshixihao from '@/views/modules/yinshixihao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBaojing from '@/views/modules/dictionaryBaojing/list'
    import dictionaryFangke from '@/views/modules/dictionaryFangke/list'
    import dictionaryJiankang from '@/views/modules/dictionaryJiankang/list'
    import dictionaryJiashu from '@/views/modules/dictionaryJiashu/list'
    import dictionaryJiashuyijian from '@/views/modules/dictionaryJiashuyijian/list'
    import dictionaryMeishi from '@/views/modules/dictionaryMeishi/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQinshi from '@/views/modules/dictionaryQinshi/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShigu from '@/views/modules/dictionaryShigu/list'
    import dictionaryTijian from '@/views/modules/dictionaryTijian/list'
    import dictionaryWaichu from '@/views/modules/dictionaryWaichu/list'
    import dictionaryXuqiudai from '@/views/modules/dictionaryXuqiudai/list'
    import dictionaryYanzheng from '@/views/modules/dictionaryYanzheng/list'
    import dictionaryYaowu from '@/views/modules/dictionaryYaowu/list'
    import dictionaryYinshixihao from '@/views/modules/dictionaryYinshixihao/list'
    import qinshifenpeiAdd from '@/views/modules/qinshifenpei/add-or-update'
    import xuqiudaiAdd from '@/views/modules/xuqiudai/add-or-update'
    import qinshifenpei from '@/views/modules/qinshifenpei/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBaojing',
        name: '健康报警',
        component: dictionaryBaojing
    }
    ,{
        path: '/dictionaryFangke',
        name: '来访目的',
        component: dictionaryFangke
    }
    ,{
        path: '/dictionaryJiankang',
        name: '健康状态',
        component: dictionaryJiankang
    },
	,{
	    path: '/xuqiudaiAdd',
	    name: '添加到需求袋',
	    component: xuqiudaiAdd
	}
    ,{
        path: '/qinshifenpeiAdd',
        name: '寝室分配',
        component: qinshifenpeiAdd
    }
	,{
	    path: '/qinshifenpei',
	    name: '寝室分配信息',
	    component: qinshifenpei
	}
    ,{
        path: '/dictionaryJiashu',
        name: '家属身份',
        component: dictionaryJiashu
    }
    ,{
        path: '/dictionaryJiashuyijian',
        name: '类型',
        component: dictionaryJiashuyijian
    }
    ,{
        path: '/dictionaryMeishi',
        name: '食物类型',
        component: dictionaryMeishi
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQinshi',
        name: '寝室类型',
        component: dictionaryQinshi
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShigu',
        name: '事故类型',
        component: dictionaryShigu
    }
    ,{
        path: '/dictionaryTijian',
        name: '体检项目',
        component: dictionaryTijian
    }
    ,{
        path: '/dictionaryWaichu',
        name: '外出目的',
        component: dictionaryWaichu
    }
    ,{
        path: '/dictionaryXuqiudai',
        name: '需求状态',
        component: dictionaryXuqiudai
    }
    ,{
        path: '/dictionaryYanzheng',
        name: '严重程度',
        component: dictionaryYanzheng
    }
    ,{
        path: '/dictionaryYaowu',
        name: '药物类型',
        component: dictionaryYaowu
    }
    ,{
        path: '/dictionaryYinshixihao',
        name: '食物类型',
        component: dictionaryYinshixihao
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/fangke',
        name: '访客信息',
        component: fangke
      }
    ,{
        path: '/jiashu',
        name: '家属',
        component: jiashu
      }
    ,{
        path: '/jiashuyijian',
        name: '家属意见',
        component: jiashuyijian
      }
    ,{
        path: '/meishi',
        name: '食物',
        component: meishi
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/qinshi',
        name: '寝室信息',
        component: qinshi
      }
    ,{
        path: '/shigu',
        name: '老人事故信息',
        component: shigu
      }
    ,{
        path: '/tijian',
        name: '体检',
        component: tijian
      }
    ,{
        path: '/waichu',
        name: '老人外出信息',
        component: waichu
      }
    ,{
        path: '/xuqiudai',
        name: '需求袋',
        component: xuqiudai
      }
    ,{
        path: '/yaowu',
        name: '药物',
        component: yaowu
      }
    ,{
        path: '/yinshixihao',
        name: '饮食喜好',
        component: yinshixihao
      }
    ,{
        path: '/yonghu',
        name: '老人',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
