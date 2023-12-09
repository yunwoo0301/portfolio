# portfolio
 글로벌 CSS 변수 + Vanilla JS 를 활용한 개인 포트폴리오 웹사이트

</br>

## 📖 개요
간단한 자기소개 및 기술 스택을 통한 프로젝트 개발 정보가 담긴 포트폴리오 형식의 나만의 웹사이트

</br>

## 배포 주소
- 배포 사이트 : 깃허브
- Web URL : https://yunwoo0301.github.io/portfolio/

</br>

## 🗓️ 개발 기간
- 개발 : 2023.10.16 ~ 2023.10.19

</br>

## 🎀 프로젝트 주요 기능
- PC, 모바일에 최적화된 반응형 미디어 쿼리 적용
- 스크롤을 통한 현재 보여지는 섹션별 액션 네비바 기능
- 화살표 아이콘을 통한 상단 화면 이동 기능 
- 프로젝트 작업별 사용된 스킬 비율 그래프화
- 타이핑 및 섹션별 스크롤 아웃 애니메이션을 통한 파트 강조 

</br>

## 📍 설계 주안점
- 시맨틱 태그를 통한 웹사이트 구조 잡기
- BEM 개념을 기반으로 CSS 글로벌 변수를 활용한 스타일 코드 재사용성 및 섹션별 디자인 통일성
- Intersection Observer 기능을 활용한 UI/UX 디자인
- CSS Grid, Flex를 통한 반응형 스타일링
- Github를 활용한 웹사이트 배포

</br>

## 👒 구현 기능

### 👚 웹 페이지
- 프로필 이미지 및 TypeIt 라이브러리를 활용한 타이틀 강조 효과
  
 ![home](https://github.com/yunwoo0301/portfolio/assets/121915009/84b033d1-7978-42d1-91ea-9e9321c3aac0)

</br>

- Intersection Observer API로 섹션별 네비 활성화

```

const sections = sectionIds.map((id) => document.querySelector(id)); // 앞서 선언된 섹션 아이템 배열들 중 id를 기준으로 호출해 새로운 sections 배열 생성.
const navItems = sectionIds.map((id) => // 섹션아이템 배열을 순회하여 navItems를 모두 가져옴 
    document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false); // visibleSections : 노출 or 비노출 배열 생성 
let activeNavItem = navItems[0];

const observer = new IntersectionObserver(observercallback, options);
sections.forEach((section) => observer.observe(section));

function selectNavItem(index) {
    const navItem = navItems[index];
    if (!navItem) return;
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}

```

![nav_bar](https://github.com/yunwoo0301/portfolio/assets/121915009/74e68f85-8d81-4df1-8122-3c76f2cbc3c1)

</br>

- 프로젝트 작업별 사용된 스킬 비율 그래프화
  
![skills_bar](https://github.com/yunwoo0301/portfolio/assets/121915009/fa488776-0470-491a-bde0-19c8ca6e3f8e)

</br>

- 특정 구간 스크롤 시 화살표 아이콘 노출 & 비노출 효과 강조

```

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1; 
    } else {
        arrowUp.style.opacity = 0;
    }
})

```

![arrow](https://github.com/yunwoo0301/portfolio/assets/121915009/8cf96fd9-f097-4570-a27c-3384e69679bf)


</br>

### 👡 모바일 페이지
- PC, 모바일에 최적화된 반응형 미디어 쿼리 적용
  
![mobile](https://github.com/yunwoo0301/portfolio/assets/121915009/02280d94-2e97-4b51-b05d-314361710feb)

</br>

## :hammer_and_wrench: 개발 환경 및 기술 스택
- IDE : VS Code
- Language : HTML5, CSS3, Javascript ES6
- Library : TypeIt
- etc : GitHub
