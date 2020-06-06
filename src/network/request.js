import axios from 'axios'

export function request(config) {
  const service = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 15000
  })

  // 请求头拦截
  service.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })
  // 请求头响应拦截
  service.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  return service(config)
}
