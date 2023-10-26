const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const nowPage = document.querySelector('.now-page');
const totelPage = document.querySelector('.totel-page');

let index = 0; 
// childElementCount에는 html요소가 가진 자식의 갯수가 들어있다.
const 슬라이드갯수 = contentsWrapper.childElementCount

// 이전버튼
prevButton.addEventListener('click',()=>{
  
    index--;  
    if(index < 0 ){
        index = 슬라이드갯수 - 1;
    }
    위치적용();
})
// 다음버튼
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
//  index 0 : 값 0
//  inadex 1 : 값 -300
//  index 2 : 값 -600
//  위 규칙을 식으로 나타내면 index * -300 이다 
totelPage.innerText = 슬라이더갯수;


