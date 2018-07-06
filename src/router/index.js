import Vue from 'vue'
import Router from 'vue-router'
// lazyload 图片用到时 才加载 ，避免程序启动时加载时间过长 超过1.5秒
const home=()=>import ('@/pages/home')
const login = () => import('@/pages/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },{
      path:'/login',
      component:login,
      meta:{
        keepalive:true
      }
    }
  ]
})
