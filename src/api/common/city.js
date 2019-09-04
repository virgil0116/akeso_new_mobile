import request from '@/utils/request'

export function fetchChinaData(query) {
  return request({
    url: '/api/open/city_maps',
    method: 'get',
    params: query
  })
}
