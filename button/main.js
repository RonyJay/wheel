b.onclick=function(){
    b.querySelector('.circle').classList.add('active')
}

b.querySelector('.circle').addEventListener('transitionend',function(){
    console.log('end')
    b.querySelector('.circle').classList.remove('active')
})

