const questions=document.querySelectorAll('.request-card');
   
// const closer=document.querySelectorAll('#closer');
console.log(questions)


questions.forEach((question)=>{
    const btn=question.querySelector('.question-btn')

    btn.addEventListener('click',()=>{

        questions.forEach((item)=>{
            if(item!==question){
                item.classList.remove('show-text')
                console.log('removed')
            }
            
        })

        question.classList.toggle('show-text')
        console.log(question)
    })
})
// closer.addEventListener('click',function(){
//     popUpcard.classList.remove('request-pop-up')
//     popUpcard.classList.add('request-pop')
//     x.innerHTML=`<i class="fa-solid fa-plus"></i>`
//     x.classList.remove('cross')
//     x.classList.add('plus')
// })