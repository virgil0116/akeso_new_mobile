import request from '@/utils/request'

export function createItem(query) {
  return request({
    url: '/api/m1/archives',
    method: 'post',
    data: query
  })
}

export function fetItem(query) {
  return request({
    url: '/api/m1/archives',
    method: 'get',
    params: query
  })
}
