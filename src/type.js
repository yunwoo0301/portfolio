'use strict';


new TypeIt('.home__title', { // TypeIt 이라는 새로운 클래스를 이용해서 무한정 반복
    loop: true,
    speed: 80,
    loopDelay: 1000,
    deleteSpeed: null,
})  
.delete()
.go();
ScrollOut(); // 스크롤 아웃 함수 호출


