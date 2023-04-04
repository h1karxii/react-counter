import axios from 'axios'
import qs from 'qs'
import { API_ROOT, API_TIMEOUT } from './constants'

const request = ({
  method = 'get',
  endpoint,
  query = {},
  data = {},
  fullUrl = '',
  contentType = 'application/json',
}) => {
  const url = fullUrl || `${endpoint}`

  return axios({
    method,
    url,
    params: query,
    data,
    timeout: API_TIMEOUT,
    headers: {
      'content-type': contentType,
    },
  })
}

// export const modelListApi = () =>
//   request({
//     endpoint: '/login',
//   })

// export const loginApi = (username, password) =>
//   request({
//     method: 'post',
//     endpoint: '/login',
//     data: qs.stringify({
//       username,
//       password,
//     }),
//     contentType: 'application/x-www-form-urlencoded',
//   })
