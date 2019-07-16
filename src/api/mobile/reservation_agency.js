import request from '@/utils/request'

export function merchants(query) {
  return request({
    url: '/api/open/merchants',
    method: 'GET',
    data: query
  })
}

export function appoints(query) {
  return request({
    url: '/api/open/appoints',
    method: 'POST',
    data: query
  })
}

export function sendCode(query) {
  return request({
    url: '/api/v5/codes/send_appointment_code',
    method: 'GET',
    params: query
  })
}
