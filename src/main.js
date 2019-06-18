// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import fastClick from 'fastclick'
import VConsole from 'vconsole/dist/vconsole.min.js'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
if (!ver) { // 非IOS系统
  // 引入fastclick 做相关处理
  fastClick.attach(document.body)
} else {
  if (parseInt(ver[1]) < 11) {
  // 引入fastclick 做相关处理
    fastClick.attach(document.body)
  }
}
Vue.use(VueAwesomeSwiper)
const vConsole = new VConsole()
const str = navigator.userAgent.toLowerCase()
const ver = str.match(/cpu iphone os (.*?) like mac os/)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vConsole,
  components: { App },
  template: '<App/>'
})
