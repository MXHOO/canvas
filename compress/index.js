const input = document.getElementById('input')
const before = document.getElementById('before')
const after = document.getElementById('after')

const self = this
input.addEventListener('change', function() {
  const file = this.files[0]
  console.log('之前的大小', file.size)
  getBase64(file).then(data => {
    before.setAttribute('src', data)
    compress(file).then(result => {
      after.setAttribute('src', result)
    })
  }).catch(err=> {
    console.log(err)
  }) 
})

// 文件转base64
function getBase64(file) {
  return new Promise((reslove, reject) => {
    const reader = new FileReader()
    let result = ''
    // 将图片转为base64编码
    reader.readAsDataURL(file)
    reader.onload = function(){
      result = reader.result
    }
    reader.onerror= function(error){
      reject(error)
    }
    reader.onloadend = function() {
      reslove(result)
    }
  })
}

function compress(file) {
  return new Promise((reslove, reject) => {
    let afterResult = ''
    const img = new Image()
    getBase64(file).then(data => {
      img.src = data
    }).catch(error => console.log(error))
    img.onload = function() {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = this.width
      canvas.height = this.height
      /*
    drawImage(img, sx, sy, swidth, sheight, x, y, width, height):在画布上绘制图像或视频, img为必填参数, 其他都为非必填
    参数：img: 要绘制的图片或视频
          sx: 开始裁剪的x坐标
          sy: 开始裁剪的y坐标
          swidth: 被裁剪图像的宽度
          sheight: 被裁减图像的高度
          x: 在画布上放置的x坐标
          y: 在画布上放置的y坐标
          width：要使用的图像的宽度（扩展/缩小）
          height：要使用的图像的宽度 （扩展/缩小）
    */
     context.drawImage(before, 0, 0)
      /* toDataURL(type, quailty): 返回一个包含图片展示的url
         参数: type: 图片格式，默认为image/png
               quailty: 当type为图片时，可以从 0 到 1 的区间内选择图片的质量
     */
      afterResult = canvas.toDataURL(file.type, 0.5)
      reslove(afterResult)
    }
    img.onerror = function(err) {
      reject(err)
    }
  }) 
 
}