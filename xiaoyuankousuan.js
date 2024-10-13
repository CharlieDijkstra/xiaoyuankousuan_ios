const scriptName = "小猿口算pk";
console.log('this is a log')
// 检查请求 URL 是否符合匹配条件
if (/^https?:\/\/xyks\.yuanfudao\.com\/bh5\/leo-web-oral-pk\/exercise.+/.test($request.url)) {
    try {
        // 解析响应体内容
        let responseBody = $response.body;

        // 使用正则表达式替换 URL
        responseBody = responseBody.replace(/https?:\/\/leo\.fbcontent\.cn\/bh5\/leo-web-oral-pk\/exercise[^\/]+\.js/g, 'https://cdn.rawgit.com/CharlieDijkstra/xiaoyuankousuan_ios/refs/heads/main/exercise_iphone.js');

        // 返回修改后的响应体
        $response.body = responseBody;
    } catch (err) {
        // 捕获并记录错误
        $logger.error(`小猿口算请求修改出现异常：${err}`);
    }
}
