import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LoginUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  //主窗口（登录页面）
    name: 'home',
    component: HomeView
  },
  {
    path: '/ConTian', //布局容器（登录显示完页面）
    name: 'ConTian',
    component: () => import('../views/ConTian.vue'),
    children: [
      //#region 客户管理
      {
        path: '/CustomerEntry', // 客户信息录入
        name: 'CustomerEntry',
        component: () => import('../views/Customer/CustomerEntry.vue')
      },
      {
        path: '/CustomerInfo',// 客户信息列表
        name: 'CustomerInfo',
        component: () => import('../views/Customer/CustomerInfo.vue')
      },
      {
        path: '/PersonCharge',// 联系人信息列表
        name: 'PersonCharge',
        component: () => import('../views/Customer/PersonCharge.vue')
      },
      //#endregion



      //#region 合同管理
      {
        path: '/ContractAdd', // 合同信息录入
        name: 'ContractAdd',
        component: () => import('../views/Contract/ContractAdd')
      },
      {
        path: '/ContractList', // 合同信息
        name: 'ContractList',
        component: () => import('../views/Contract/ContractList.vue')
      },


      //#endregion

      //#region 系统管理
      {
        path: '/DictItem', // 字典表
        name: 'DictItem',
        component: () => import('../views/system/DictItem')
      },
      {
        path: '/DeptMarage', // 字典表
        name: 'DeptMarage',
        component: () => import('../views/system/DeptMarage.vue')
      },

      //#endregion


      //#region RBAC
      {
        path: '/PermissionsView', //权限操作
        name: 'PermissionsView',
        component: () => import('../views/Rbac/PermissionsView.vue')
      },
      {
        path: '/RoleShow', //角色操作
        name: 'RoleShow',
        component: () => import('../views/Rbac/RoleShow.vue')
      }
      ,
      {
        path: '/UserShow', //人员操作
        name: 'UserShow',
        component: () => import('../views/Rbac/UserShow.vue')
      },
      //#endregion

      //#region 设备管理
      {
        path: '/watercost', //水表
        name: 'watercost',
        component: () => import('../views/DeviceManagement/WaterCost.vue')
      },
      //#endregion
    ]
  },


]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  var userid = localStorage.getItem("UserInfo");

  if (to.name !== 'home' && userid == null) { next({ name: 'home' }) }
  else {
    next()
  }

})


export default router
