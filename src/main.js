import Vue from 'vue'
import App from './App.vue'
import router from './router'


import baseconfig from '../.vscode/Config/baseConfig'
//axios配置
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(baseconfig);

//element-ui配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//（ElementUI 与bootstrap有冲突不能同时使用）
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
