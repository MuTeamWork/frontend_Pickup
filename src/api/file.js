import request from '../utils/request'
// 获取新闻列表
export function getFileList(){
    return request({
        url: "/getFileList",
        method: "get",
    })
}