const pluses=document.querySelectorAll('.plus');

// const closer=document.querySelectorAll('#closer');
console.log(pluses)
pluses.forEach((plus)=>{

    plus.addEventListener('click',function(){
    
    const popUpcard=document.querySelector('.request-pop');
        
    
        if(plus.className=="plus"){
            popUpcard.classList.remove('request-pop')
            popUpcard.classList.add('request-pop-up')
            plus.classList.remove('plus')
            plus.classList.add('cross')
            plus.setAttribute('id','closer');
            plus.innerHTML=`<i class="fa-solid fa-xmark"></i>`
        }
        // if(plus.className='cross'){
        //     popUpcard.classList.remove('request-pop-up')
        //     popUpcard.classList.add('request-pop')
        //     plus.innerHTML=`<i class="fa-solid fa-plus"></i>`
        //     plus.classList.remove('cross')
        //     plus.classList.add('plus')
        // }
    
    
    
        
        
    })
})
console.log('clicked',plus)

// closer.addEventListener('click',function(){
//     popUpcard.classList.remove('request-pop-up')
//     popUpcard.classList.add('request-pop')
//     x.innerHTML=`<i class="fa-solid fa-plus"></i>`
//     x.classList.remove('cross')
//     x.classList.add('plus')
// })