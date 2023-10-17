/*window.document.querySelector();*/
// document.querySelector('.header'); : 문자열 형태로 선택자를 넣고 해당 클래스를 찾도록 설정 

const header = document.querySelector('.header'); /* header : 반환받을 요소, 문자열로 CSS 선택자 지정 */
const headerHeight = header.offsetHeight; /*  함수를 호출해서 헤더의 높이값을 요청 */
document.addEventListener('scroll', () => { /* addEventListener : 스크롤이 발생했을 때 일어나는 함수를 호출해줌 */
    
// Header에 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) { 
        header.classList.add('header--dark'); /* 헤더 요소의 classList에 header--dark 클래스를 추가함 */
    } else {
        header.classList.remove('header-dark'); /* 크기가 작다면 해당 header--dark 클래스를 제거함 */
    }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함.
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> { // scroll 이벤트 발생 시 해당 함수 호출
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤 시 투명하게 처리함 
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) { /* 웹스크롤이 홈 높이의 절반 정도 보다 크다면 */
        arrowUp.style.opacity = 1; /* 화살표 버튼 노출되도록 */
    } else {
        arrowUp.style.opacity = 0; /* 화살표 버튼 노출되지 않도록 */
    }
})