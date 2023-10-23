import request from '../utils/request'
// 获取新闻列表
export function getFileList(){
    return request({
        url: "/getFileList",
        method: "get",
    })
}

export function getOption(){
    return request({
        url: "/getOption",
        method: "get",
    })
}

export function updateUserInfo(data) {
    return request({
        method: "post",
        url:"/updateUserInfo",
        data:data,
    })
}
