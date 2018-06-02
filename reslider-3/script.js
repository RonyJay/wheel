var children = $('.meun>li')
for (let i =0;i<children.length;i++) {
	$(children[i]).on('click',function(e){
		var index=$(e.currentTarget).index();
		var distance = index * -920
        $('.slider').css({
            transform: 'translateX(' + distance + 'px)'
        })
	children.eq(index).addClass("active").siblings('.active').removeClass("active");
})
}

//自动播放
var n = 0
var size=children.length
children.eq(n%size).trigger('click')
var timerId=setInterval(()=>{
	n=n+1
	children.eq(n%size).trigger('click').addClass("active").siblings('.active').removeClass("active");
},3000)
