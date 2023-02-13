import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LoginUser.vue'
import { getChildrenPath } from "@/router/indexUtil";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',  //主窗口（登录页面）
    name: 'home',
    component: HomeView
  },


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var userid = localStorage.getItem("UserInfo");
  if (to.name !== 'home' && userid == null) {
    next({ name: 'home' })
  }
  else {
    next()
    userid = JSON.parse(userid).Id
    getChildrenPath(userid)
  }


})


export default router
