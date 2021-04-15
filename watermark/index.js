window.onload = function() {
  watermark()
}

function watermark() {
  const url = createImage('测试数据')
  const watermark = document.getElementById('watermark')
  watermark.style.background = 'url(' + url + ') repeat top left'
}

function createImage(text){
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

