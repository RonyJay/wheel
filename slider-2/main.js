/**
 * 通过JS去控制不同的Css状态
 */

$('.image>img:nth-child(1)').addClass('now')
 $('.image>img:nth-child(2)').addClass('enter')
 $('.image>img:nth-child(3)').addClass('enter')
let n=1
 setInterval(() => {
    $(`.image>img:nth-child(${x(n)})`).addClass('leave').removeClass('now').one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.image>img:nth-child(${x(n+1)}`).addClass('now').removeClass('enter')
    n++;
 }, 3000);


 function x(n){
     if (n>3) {
         n=n%3
         if(n===0){
             n=3
         }
     }
     return n;
 }


//  setTimeout(() => {
//     $('.image>img:nth-child(1)').addClass('leave').removeClass('now').one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.image>img:nth-child(2)').addClass('now').removeClass('enter')
//  }, 3000);

//  setTimeout(() => {
//     $('.image>img:nth-child(2)').addClass('leave').removeClass('now').one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.image>img:nth-child(3)').addClass('now').removeClass('enter')
//  }, 6000);

//  setTimeout(() => {
//     $('.image>img:nth-child(3)').addClass('leave').removeClass('now').one('transitionend',(e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('enter')
//     })
//     $('.image>img:nth-child(1)').addClass('now').removeClass('enter')
//  }, 9000);
 