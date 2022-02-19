import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由

import index from '../views/index.vue'
import classify from '../views/classify.vue'
import cart from '../views/cart.vue'
import my from '../views/my.vue'
import login from '../views/login.vue'
import search from '../views/search.vue'
import check from '../views/check.vue'
import flower from '../views/flower.vue'

// 二级路由
import classlistCont1 from "../components/classify/classlistCont1"
import classlistCont2 from "../components/classify/classlistCont2"
import classlistCont3 from "../components/classify/classlistCont3"
import classmake from "../components/classify/classmake"


Vue.use(VueRouter)

const routes = [
  {
    path:'/', 
    redirect:'/index'
    },
    {
      path:'/index',
      component:index,
      meta:{
        title:'首页',
        icon:'iconfont icon-a-09-01'
      }
    
    },
    {
      path:'/classify',
      component:classify,
      redirect:'/classify/classlistCont1',
      children:[
        {
          path:'classlistCont1',
          component:classlistCont1,
          meta:{
            title:'分类',
            icon:'iconfont icon-a-09-01'
          },
        },
        {
          path:'classlistCont2',
          component:classlistCont2
        },
        {
          path:'classlistCont3',
          component:classlistCont3
        },
        {
          path:'classmake',
          component:classmake
        },
      ]
    },
    {
      path:'/cart',
      component:cart,
      meta:{
        title:'购物车',
        icon:'iconfont icon-a-09-01',
        auth:true
      }
    },
    {
      path:'/my',
      component:my,
      meta:{
        title:'个人信息',
        icon:'iconfont icon-a-09-01',
        auth:true
      }
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/check',
      component:check
    },
    {
      path:'/flower',
      component:flower
    },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("token")
  let auth = to.meta.auth
    if(auth){
      if(token){
        next()
      }else{
        next({
          path:'/login',
          //向login传参 ，告诉login登录成功后返回的路由
          query:{
            redirectUrl:to.fullPath
          }
        })
      }
    }else{
      next()
    }

  next()
})
export default router
