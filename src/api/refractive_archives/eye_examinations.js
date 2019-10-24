import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/m1/eye_examinations',
    method: 'get',
    params: query
  })
}

export function createItem(query) {
  return request({
    url: '/api/m1/eye_examinations',
    method: 'post',
    data: query
  })
}
