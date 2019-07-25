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
  },
  {
    path: '/refractive_archives',
    name: 'refractive_archives',
    component: () => import('@/pages/refractive_archives/login')
  },
  {
    path: '/search_child',
    name: 'search_child',
    component: () => import('@/pages/refractive_archives/search_child')
  },
  {
    path: '/children',
    name: 'children',
    component: () => import('@/pages/refractive_archives/children')
  },
  {
    path: '/child_details',
    name: 'child_details',
    component: () => import('@/pages/refractive_archives/child_details')
  },
  {
    path: '/optometry',
    name: 'optometry',
    component: () => import('@/pages/refractive_archives/optometry')
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('@/pages/refractive_archives/classification')
  },
  {
    path: '/list_optician',
    name: 'list_optician',
    component: () => import('@/pages/refractive_archives/list_optician')
  },
  {
    path: '/list_vision',
    name: 'list_vision',
    component: () => import('@/pages/refractive_archives/list_vision')
  },
  {
    path: '/list_old_mirror',
    name: 'list_old_mirror',
    component: () => import('@/pages/refractive_archives/list_old_mirror')
  },
  {
    path: '/list_computer',
    name: 'list_computer',
    component: () => import('@/pages/refractive_archives/list_computer')
  },
  {
    path: '/list_hitomi',
    name: 'list_hitomi',
    component: () => import('@/pages/refractive_archives/list_hitomi')
  },
  {
    path: '/list_mydriasis',
    name: 'list_mydriasis',
    component: () => import('@/pages/refractive_archives/list_mydriasis')
  },
  {
    path: '/list_reverberation',
    name: 'list_reverberation',
    component: () => import('@/pages/refractive_archives/list_reverberation')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/pages/refractive_archives/review')
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: 'm',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
