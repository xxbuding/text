import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;

import "@/assets/css/iconfont.css"

Vue.config.productionTip = false

import "@/assets/css/reset.css"
import "@/assets/js/flexible.js"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
