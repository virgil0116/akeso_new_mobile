import request from '@/utils/request'

export function login(query) {
  return request({
    url: '/api/m1/sessions',
    method: 'post',
    data: query
  })
}
