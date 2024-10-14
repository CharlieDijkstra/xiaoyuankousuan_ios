const scriptName = "小猿口算pk_auto";


let responseBody = $response.body;

const urlPattern = /<script defer src="(https:\/\/leo\.fbcontent\.cn\/bh5\/leo-web-oral-pk\/exercise_[^"]+\.js)" crossorigin="anonymous"><\/script>/;
const match = responseBody.match(urlPattern);

if (match && match[1]) {
  const scriptUrl = match[1];

  let xhr = new XMLHttpRequest();
  xhr.open("GET", scriptUrl, false);  // 使用同步请求确保先获取内容
  xhr.send();

  if (xhr.status === 200) {
    let modifiedScript = xhr.responseText.replace(/cs\((t)\)/g, 'cs($1)||true');
    let newScriptTag = `<script>${modifiedScript}</script>`;
    responseBody = responseBody.replace(urlPattern, newScriptTag);
  }
}


$response.body = responseBody;

$done($response);
