import request from '@/utils/request'

export function createItem(query) {
  return request({
    url: '/api/m1/visual_function_tests',
    method: 'post',
    data: query
  })
}

export function fetItem(query) {
  return request({
    url: '/api/m1/visual_function_tests',
    method: 'get',
    params: query
  })
}
