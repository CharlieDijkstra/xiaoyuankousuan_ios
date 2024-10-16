# xiaoyuankousuan_ios
小猿口算pk ios脚本 超简单实现，不需要电脑！
## 2024.10.15 最新版无法提交答案问题成功解决
## 2024.10.16 解决小火箭无法使用问题
## 过去使用过的请更换下面方法中的新链接
##  ~~不要更新app！！~~
##  ~~2024.10.15 06：40 低版本可用，但答题过程会白板，更新后的app无法提交答案~~
- 答题过程任意输入都算对。
## 前置条件：拥有loon、圈x或小火箭等代理工具
## 方法一：使用重写/复写，以Loon为例，(圈x和loon支持)
复写类型：response-body-replace-regex

用以匹配的URL：
```
^https?:\/\/xyks\.yuanfudao\.com\/bh5\/leo-web-oral-pk\/exercise.+
```
用以匹配的Body：
```
https?:\/\/leo\.fbcontent\.cn\/bh5\/leo-web-oral-pk\/exercise[^\/]+\.js
```
替换(新版小猿口算)：
```
https://cdn.jsdelivr.net/gh/CharlieDijkstra/xiaoyuankousuan_ios@refs/heads/main/15.js
```
- 若无效，请检查证书是否信任，mitm和复写是否打开

## 方法二：shadowrocket使用模块
- 需要开启http解密和信任证书
- 模块地址：
```
https://raw.githubusercontent.com/CharlieDijkstra/xiaoyuankousuan_ios/refs/heads/main/xyks.sgmodule
```
## 方法一配置截图
 ![屏幕截图](https://github.com/CharlieDijkstra/xiaoyuankousuan_ios/blob/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BEloon.jpg?raw=true)

## 参考 [Ulua3809](https://github.com/ulua3809)、[cr4n5](https://github.com/cr4n5/XiaoYuanKouSuan)和[xiaoyuankousuan](https://github.com/wyp010428/xiaoyuankousuan) 
