import request from '@/utils/request'

export function createItem(query) {
  return request({
    url: '/api/open/doctors',
    method: 'post',
    data: query
  })
}
