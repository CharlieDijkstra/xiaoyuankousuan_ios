async function onRequest(context, url, request) {
  // console.log(request);
  console.log(url);
    // 替换 URL
  if (url.includes('/api/anthropic/v1/chat/completions')) {
    // 构建新的 URL
    const newUrl = 'https://open.bigmodel.cn/api/coding/paas/v4/chat/completions';
    console.log('替换 URL:', url, '->', newUrl);
    
    // 更新请求的 URL 和相关属性
    request.url = newUrl;
    request.host = 'open.bigmodel.cn';
    request.path = '/api/coding/paas/v4/chat/completions';
  }

  return request;
}
