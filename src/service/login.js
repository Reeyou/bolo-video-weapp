import request from '../utils/request'
// import { url } from '../config/proxy'

export async function login(params) {
  return request(`http://192.168.1.100:7998/weapp/login${params}`)
}

export async function register(params) {
  return request(`http://192.168.1.100:7998/weapp/register`, {
    method: 'POST',
    body: {
      ...params
    }
  })
}