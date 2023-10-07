## 前端第一版
初始化：
```
npm install
```
原神(没有 启动！
```
vite
```


现在就两个页面

上传
![image](https://github.com/MuTeamWork/frontend_Pickup/assets/91261153/6ec08ff6-5013-4def-8cba-986cc03874d5)
图片展示
![image](https://github.com/MuTeamWork/frontend_Pickup/assets/91261153/a4f5d349-ec8d-45c8-91b2-3131df1a628d)
登录都还没写，懒得写能用就行


mock地址:'https://www.fastmock.site/mock/0314575b179f8f13583244db97453df4/pic'


呃呃呃

 code = 200 为成功

###  获取图片
/getFileList

```json
{
  "code": "200",
  "data": [
    {
      "id": "1",
      "file_url": "www.cover.webp"
    },
    {
      "id": "2",
      "file_url": "www.cover.webp"
    }
  ]
}
```

###  上传图片
/fileUpload
```json
{
  "msg": "success",
  "data": {
    "imageName": "link.bmp",
    "fileThumbnailPath": "http://localhost:8989/thu/0851e855-20e8-42ef-ab1e-abe04ff46dca.jpg",
    "fileImagePath": "http://localhost:8989/image/ab122be5-ed6e-45f3-9af8-9327a39bfadc.bmp"
  },
  "status": 200
}
```
