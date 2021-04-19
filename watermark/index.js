window.onload = function() {
  new Watermark().init()
}
const defaultConfig = {
  width: 100,
  height: 200,
  degree: 30*Math.PI/180,
  style: {
    
  }
}
class Watermark {
  constructor(options = {}, container = null) {
    this.config = {...defaultConfig, ...options}
    this.container = container ? container : document.body
  }

  init() {
    const configKey = Object.keys(this.config)
    console.log('configKey', configKey)
  }

  // 水印的创建
  createImage(text){
    const canvas = document.createElement('canvas')
    const ctx= canvas.getContext('2d')
    canvas.height = 50
    canvas.width = 100
    ctx.font = '20px'
    ctx.fillStyle = "rgba(100,100,100,0.1)"
    ctx.fillText(text, 20, 20)
    ctx.rotate(30*Math.PI/180)
    return canvas.toDataURL('image/png')
  }

  // 将水印挂载到容器上
  watermark() {
    const url = createImage('测试数据')
    const watermark = document.getElementById('watermark')
    watermark.style.background = 'url(' + url + ') repeat top left'
  }
}





