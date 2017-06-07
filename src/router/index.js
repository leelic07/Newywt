import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login/Login'
import MenuManagement from '@/components/System/Menu_Management'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/menu_management',
      component:MenuManagement
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
