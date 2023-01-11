import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LoginUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ConTian',
    name: 'ConTian',
    component: () => import('../views/ConTian.vue'),
    children: [
      {
        path: '/CustomerEntry',
        name: 'CustomerEntry',
        component: () => import('../views/CustomerEntry.vue')
      },
      {
        path: '/PermissionsView',
        name: 'PermissionsView',
        component: () => import('../views/Rbac/PermissionsView.vue')
      }
      ,
      {
        path: '/RoleShow',
        name: 'RoleShow',
        component: () => import('../views/Rbac/RoleShow.vue')
      }
      ,
      {
        path: '/UserShow',
        name: 'UserShow',
        component: () => import('../views/Rbac/UserShow.vue')
      }
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
