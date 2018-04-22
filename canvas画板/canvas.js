
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


setCanvasSize()
listenMouse(canvas)

var use_eraser = false;
eraser.onclick = function () {
    use_eraser = true;
    use_paint=false;
}
var use_paint = true;
paint.onclick = function () {
    use_paint = true;
    use_eraser=false;
}

//监听鼠标事件
function listenMouse(canvas) {
    var using = false
    //按下鼠标
    canvas.onmousedown = function (e) {
        var x = e.clientX
        var y = e.clientY
        if (use_eraser) {
            using = true;
            ctx.clearRect(x - 10, y - 10, 20, 20);
        } else if (use_paint){
            using = true;
            lastpoint = { "x": x, "y": y }
        }else{
            console.log("橡皮擦画笔都为false")
        }

    }


//移动鼠标
canvas.onmousemove = function (e) {
    var x = e.clientX
    var y = e.clientY
    if (using) {
        if (use_eraser) {
            ctx.clearRect(x - 10, y - 10, 20, 20);
        } else {
            newpoint = { "x": x, "y": y }
            drawLine(lastpoint.x, lastpoint.y, newpoint.x, newpoint.y)
            lastpoint = newpoint;
        }

    }
}



//松开鼠标
canvas.onmouseup = function () {
    using = false;
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

