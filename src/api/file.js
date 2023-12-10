import request from '../utils/request'
// 获取新闻列表
export function getFileList(){
    return request({
        url: "/file/getFileList",
        method: "get",
    })
}

export function getOption(){
    return request({
        url: "/user/getOption",
        method: "get",
    })
}

export function updateUserInfo(data) {
    return request({
        method: "post",
        url:"/user/updateUserInfo",
        data:data,
    })
}

export function Login(data) {
    return request({
        method: "post",
        url:"user/doLogin",
        data:data,
    })
}
export function ValidateToken(data) {
    return request({
        method: "get",
        url:"/user/getRole",
        // data:data,
    })
}
export function Register(data) {
    return request({
        method: "post",
        url:"/user/register",
        data:data,
    })
}

export function delPicture(data) {
    return request({
        method: "post",
        url:"/file/fileDelete",
        data:data,
    })
}
