import request from '../utils/request'
import { url } from '../config/proxy'

export async function login(params) {
  return request(`${url}/weapp/login`, {
    method: 'POST',
    body: {
      ...params
    }
  })
}

export async function register(params) {
  return request(`${url}/weapp/register`, {
    method: 'POST',
    body: {
      ...params
    }
  })
}