# xiaoyuankousuan_ios
小猿口算pk ios脚本 超简单实现，不需要电脑！
## 2024.10.12 17：00 可用
- 答题过程与[xiaoyuankousuan](https://github.com/wyp010428/xiaoyuankousuan)一致，答题过程任意输入都算对。
## 前置条件：拥有loon或圈x等代理工具
- 参考 [Ulua3809](https://github.com/ulua3809)、[cr4n5](https://github.com/cr4n5/XiaoYuanKouSuan)和[xiaoyuankousuan](https://github.com/wyp010428/xiaoyuankousuan) 
## 步骤：以Loon为例，其他软件类似
复写类型：response-body-replace-regex

用以匹配的URL：
```
^https?:\/\/xyks\.yuanfudao\.com\/bh5\/leo-web-oral-pk\/exercise.+
```
用以匹配的Body：
```
https?:\/\/leo\.fbcontent\.cn\/bh5\/leo-web-oral-pk\/exercise[^\/]+\.js
```
替换：
```
https://cdn.jsdelivr.net/gh/CharlieDijkstra/xiaoyuankousuan_ios@refs/heads/main/exercise_new.js
```
![屏幕截图](https://github.com/CharlieDijkstra/xiaoyuankousuan_ios/blob/main/loon.jpg?raw=true)
