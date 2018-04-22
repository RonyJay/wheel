
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


setCanvasSize()
listenMouse(canvas)


//监听鼠标事件
function listenMouse(canvas) {
    var draw_flag = false
    //按下鼠标
    canvas.onmousedown = function (e) {
        var x = e.clientX
        var y = e.clientY
        draw_flag = true;
        lastpoint = { "x": x, "y": y }
    }
    //移动鼠标
    canvas.onmousemove = function (e) {
        if (draw_flag) {
            var x = e.clientX
            var y = e.clientY
            newpoint = { "x": x, "y": y }
            drawLine(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
            lastpoint = newpoint;
        } else {

        }
    }
    //松开鼠标
    canvas.onmouseup = function (up) {
        draw_flag = false;
    }
}
//画线
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(x1, y1)
    ctx.lineWidth = 5
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}
//设置画布大小
function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth - 10
    canvas.height = pageHeight - 10
}
