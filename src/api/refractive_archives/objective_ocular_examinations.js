import request from '@/utils/request'

export function createItem(query) {
  return request({
    url: '/api/m1/objective_ocular_examinations',
    method: 'post',
    data: query
  })
}

export function fetItem(query) {
  return request({
    url: '/api/m1/objective_ocular_examinations',
    method: 'get',
    params: query
  })
}
