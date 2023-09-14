import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/0314575b179f8f13583244db97453df4/pic',
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
