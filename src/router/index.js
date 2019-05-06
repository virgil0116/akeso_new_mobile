import Vue from 'vue'
import Router from 'vue-router'

// 异步组件
/**
 * import Home from '@/pages/home/home'
 * import City from '@/pages/city/city'
 * import Detail from '@/pages/detail/Detail'
 * component: Home
 * component: City
 * component: Detail
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doctor',
      component: () => import('@/pages/mobile/doctor')
    },
    {
      path: '/bind_success',
      name: 'bind_success',
      component: () => import('@/pages/mobile/bind_success')
    },
    {
      path: '/child_select',
      name: 'child_select',
      component: () => import('@/pages/mobile/child_select')
    },
    {
      path: '/create_child',
      name: 'create_child',
      component: () => import('@/pages/mobile/create_child')
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: () => import('@/pages/mobile/sign_in')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
