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

export const constantRouterMap = [
  {
    path: '/doctor',
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
  },
  {
    path: '/agency_list',
    name: 'angency_list',
    meta: {
      keepAlive: false // 不需要被缓存
    },
    component: () => import('@/pages/reservation_agency/agency_list')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('@/pages/reservation_agency/location')
  },
  {
    path: '/appointment',
    name: 'appointment',
    meta: {
      keepAlive: false // 不需要被缓存
    },
    component: () => import('@/pages/reservation_agency/appointment')
  },
  {
    path: '/successful_reservation',
    name: 'successful_reservation',
    component: () => import('@/pages/reservation_agency/successful_reservation')
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: 'm',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
