
// 전체페이지
const contentsWrapper = document.querySelector('.contents-wrapper');
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector('.prev');

let sliderPosition = 0;
// 다음버튼
nextbutton.addEventListener('click',()=>{
    sliderPosition = sliderPosition - 300

    위치적용();
}
)
// 이전버튼
prevbutton.addEventListener('click',()=>{
    sliderPosition = sliderPosition + 300

    위치적용();
})
function 위치적용() {
    
    contentsWrapper.style.transform = `translateX(${sliderPosition}px)`
}
