// $(p1).on('click',function(){
//     $(".image").css({
//         transform:'translateX(0)'
//     })
// })
// $(p2).on('click',function(){
//     $(".image").css({
//         transform:'translateX(-600px)'
//     })
// })
// $(p3).on('click',function(){
//     $(".image").css({
//         transform:'translateX(-1200px)'
//     })
// })

var buttons = $('.buttons>button')
for (let i = 0; i < buttons.length; i++) {
    $(buttons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var distance = index * -600
        $('.image').css({
            transform: 'translateX(' + distance + 'px)'
        })
        buttons.eq(index).addClass("red").siblings('.red').removeClass("red")
    })
   
}
//自动播放
var n = 0;
var size = buttons.length;
buttons.eq(n % size).trigger('click')
var timerId = setInterval(() => {
    n = n + 1
    buttons.eq(n % size).trigger('click').addClass("red").siblings('.red').removeClass("red")
}, 1000)

//鼠标进去暂停
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
//鼠标离开继续
$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        n = n + 1
        buttons.eq(n % size).trigger('click').addClass("red").siblings('.red').removeClass("red")
    }, 1000)

})
