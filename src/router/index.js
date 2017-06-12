import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login/Login'
import MenuManagement from '@/components/System/Menu_Management'
import AddMenu from '@/components/System/Add_Menu'
import RoleManagement from '@/components/System/Role_Management'
import SetAuthority from '@/components/System/Set_Authority'
import PrisonManagement from '@/components/System/Prison_Management'
import AddPrison from '@/components/System/Add_Prison'
import AddRole from '@/components/System/Add_Role'
import UserManagement from '@/components/System/User_Management'
import EditUser from '@/components/System/Edit_User'
import AddUser from '@/components/System/Add_User'
import BalanceStatistics from '@/components/Family/Balance_Statistics'
import RegistrationStatistics from '@/components/Family/Registration_Statistics'
import LoginStatistics from '@/components/Family/Login_Statistics'
import OrderManagement from '@/components/Order/Order_Management'
import CriminalData from '@/components/Data/Criminal_Data'
import CommodityData from '@/components/Data/Commodity_Data'


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
      component:MenuManagement,
      children:[{
        path:'/menu_management/add_menu',
        component:AddMenu
      }]
    },
    // {
    //   path:'/add_menu',
    //   component:AddMenu
    // },
    {
      path:'/role_management',
      component:RoleManagement,
      children:[{
        path:'/role_management/set_authority',
        component:SetAuthority
      },{
        path:'/role_management/add_role',
        component:AddRole
      }]
    },
    {
      path:'/prison_management',
      component:PrisonManagement,
      children:[{
        path:'/prison_management/add_prison',
        component:AddPrison
      }]
    },
    {
      path:'/user_management',
      component:UserManagement,
      children:[{
        path:'/user_management/edit_user',
        component:EditUser
      },
        {
          path:'/user_management/add_user',
          component:AddUser
        }]
    },
    {
      path:'/balance_statistics',
      component:BalanceStatistics
    },
    {
      path:'/registration_statistics',
      component:RegistrationStatistics
    },
    {
      path:'/login_statistics',
      component:LoginStatistics
    },
    {
      path:'/order_management',
      component:OrderManagement
    },
    {
      path:'/criminal_data',
      component:CriminalData
    },
    {
      path:'/commodity_data',
      component:CommodityData
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
