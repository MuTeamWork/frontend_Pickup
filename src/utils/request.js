import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://10.0.0.5/api',
    // baseURL: 'http://192.168.1.115:8989',
    timeout: 3000,
    credentials: 'include',
    // withCredentials:true,
    headers: {
        // "Content-Type":"application/x-www-form-urlencoded",
        // "satoken": localStorage.getItem('token'),
    },
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
instance.interceptors.request.use((config) => {
    let satoken = localStorage.getItem('token')
    if (satoken) {
        console.log(satoken)
        config.headers['Authentication'] = satoken
    }
    return config
}, err => {
    return Promise.reject(err)
})

export default instance
