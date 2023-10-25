

const contentsWrapper = document.querySelector('.contents-wrapper');
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector('.prev');

let sliderPosition = 0;

nextbutton.addEventListener('click',()=>{
    sliderPosition = sliderPosition - 300

    위치적용();
}
)

prevbutton.addEventListener('click',()=>{
    sliderPosition = sliderPosition + 300

    위치적용();
})
function 위치적용() {
    
    contentsWrapper.style.transform = `translateX(${sliderPosition}px)`
}
