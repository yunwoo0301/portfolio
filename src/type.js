'use strict';


new TypeIt('.home__title', { // TypeIt 이라는 새로운 클래스를 이용해서 무한정 반복
    loop: true,
    speed: 80,
    loopDelay: 1000,
    deleteSpeed: null,
})  
.delete()
.go();

