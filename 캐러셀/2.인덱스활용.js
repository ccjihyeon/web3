const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const 슬라이드갯수 = contentsWrapper.childElementCount

const nowPage = document.querySelector('.now-page');
const totelPage = document.querySelector('.totel-page');

let index = 0; 


totelPage.innerText = 슬라이더갯수;
prevButton.addEventListener('click',()=>{
  
    index--;  
    if(index < 0 ){
        index = 슬라이드갯수 - 1;
    }
    위치적용();
})

nextButton.addEventListener('click',()=>{
    
    index++;
    if(index > 슬라이드갯수 -1){
        index = 0;
    }
    위치적용();
 })
function 위치적용() {
    contentsWrapper.style.transform = `translateX(${index * -300}px)`

    nowPage.innerText = index+1;
}




