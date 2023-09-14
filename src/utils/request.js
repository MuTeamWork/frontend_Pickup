import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 3000
})

// 请求拦截
instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
// 响应拦截
instance.interceptors.response.use(res => {
    return res.data
}, err => {
    return Promise.reject(err)
})

export default instance