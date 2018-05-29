ClickMe.addEventListener('click',function(){
    if (popover.style.display === '') {
        popover.style.display = 'block'
    }else if(popover.style.display === 'block'){
        popover.style.display = 'none'
    }
     else if(popover.style.display === 'none') {
        popover.style.display = 'block'
    }

})

document.addEventListener('click',function(){
    popover.style.display='none'
})
container.addEventListener('click',function(e){
    e.stopPropagation()
})