import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '@/components/Home';
import Menu from '@/components/Menu';
import Admin from '@/components/Admin';
import About from '@/components/About';
import Login from '@/components/Login';
import Register from '@/components/Register';

//二级路由
import Activity from '@/components/about/Activity';
import Contact from '@/components/about/contact';
import Delivery from '@/components/about/Delivery';
import History from '@/components/about/History';

//三级路由
import Address from '@/components/about/contact/Address';
import Person from '@/components/about/contact/Person';
import Telphone from '@/components/about/contact/Telphone';



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default:Home,
        'delivery':Delivery
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter:(to,from,next)=>{
        alert('您正在进入admin页面，请确保由此操作权限');
        var login = true;
        if(login){
          next();
        }else{
          alert('您还没登录，请先登录');
          alert('页面正在调转');
          next('./login')

        }
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      //设置默认跳转
      redirect:'/contact',
      children:[//二级路由
        {
          path:'/activity',
          name:'Activity',
          component:Activity,
        },
        {
          path:'/contact',
          name:'Contact',
          component:Contact,
          redirect:'/contact/address',
          children:[//三级路由
            {
              path:'/contact/address',
              name:'Address',
              component:Address,
            },
            {
              path:'/contact/person',
              name:'Person',
              component:Person,
            },
            {
              path:'/contact/telphone',
              name:'Telphone',
              component:Telphone,
            }
          ]
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery,
        },
        {
          path:'/history',
          name:'History',
          component:History,
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode:'history',
  scrollBehavior(to,from,saveedPosition){
    return {x:0,y:800}
  }
})
