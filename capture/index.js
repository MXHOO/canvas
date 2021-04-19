// 判断兼容性
function getMedia() {
  if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
      'audio':{ echoCancellation: false },
      'video':{ 'facingMode': "user" } // 调用前置摄像头，调用后置：facingMode: { exact: "environment" }
    }).then(success => {
      console.log(success)
    }).catch(error => {
      console.log(error)
    })
  } else if (navigator.webkitGetUserMedia) {
    //webkit核心浏览器
    navigator.webkitGetUserMedia(constraints, success, error)
  } else if (navigator.mozGetUserMedia) {
    //firfox浏览器
    navigator.mozGetUserMedia(constraints, success, error)
  } else if (navigator.getUserMedia) {
    //旧版API
    navigator.getUserMedia(constraints, success, error)
  }
}
