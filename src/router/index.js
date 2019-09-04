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
    path: '/doctor_regist',
    name: 'doctor_regist',
    component: () => import('@/pages/doctors/regist')
  },
  {
    path: '/regist_success',
    name: 'regist_success',
    component: () => import('@/pages/doctors/success')
  },
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
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
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
  },
  {
    path: '/eye_examination',
    name: 'eye_examination',
    component: () => import('@/pages/refractive_archives/eye_examination')
  },
  {
    path: '/eye_objective_Int_pressure',
    name: 'eye_objective_Int_pressure',
    component: () => import('@/pages/refractive_archives/eye_objective_Int_pressure')
  },
  {
    path: '/eye_objective_Bio_parameters',
    name: 'eye_objective_Bio_parameters',
    component: () => import('@/pages/refractive_archives/eye_objective_Bio_parameters')
  },
  {
    path: '/eye_objective_tear',
    name: 'eye_objective_tear',
    component: () => import('@/pages/refractive_archives/eye_objective_tear')
  },
  {
    path: '/visual',
    name: 'visual',
    component: () => import('@/pages/refractive_archives/visual')
  },
  {
    path: '/visual_five_list',
    name: 'visual_five_list',
    component: () => import('@/pages/refractive_archives/visual_five_list')
  },
  {
    path: '/visual_remote',
    name: 'visual_remote',
    component: () => import('@/pages/refractive_archives/visual_remote')
  },
  {
    path: '/visual_little_remote',
    name: 'visual_little_remote',
    component: () => import('@/pages/refractive_archives/visual_little_remote')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/pages/agreements/privacy')
  },
  {
    path: '/protocols',
    name: 'protocols',
    component: () => import('@/pages/agreements/protocols')
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: 'm',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
