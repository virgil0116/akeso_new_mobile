// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import fastClick from 'fastclick'
// import VConsole from 'vconsole/dist/vconsole.min.js'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
// const vConsole = new VConsole()
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
