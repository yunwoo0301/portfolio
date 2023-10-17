// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver을 사용해서 모든 섹션들을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템들을 활성화 시킨다.
// 보여지는 섹션 : 
// - 다수의 섹션이 동시에 보여진다면, 가장 첫 번째 섹션을 선택
// - 마지막 contact 섹션이 보여진다면, 가장 마지막 섹션을 선택

const sectionIds = [ // 섹션 아이템 배열 생성
    '#home', 
    '#about', 
    '#skills', 
    '#work', 
    '#contact'
]; 
const sections = sectionIds.map((id) => document.querySelector(id)); // 앞서 선언된 섹션 아이템 배열들 중 id를 기준으로 호출해 새로운 sections 배열 생성.
const navItems = sectionIds.map((id) => 
    document.querySelector(`[href="${id}"]`));

// console.log(sectionIds);
// console.log(sections);
// console.log(navItems);

const visibleSections = sectionIds.map(() => false); // 기본적인 요소 안보이도록 비노출

const options = {};
const observer = new IntersectionObserver(observercallback, options);
sections.forEach(section => observer.observe(section));

function observercallback(entries) {
    let selectlastOne;// 마지막 index를 만드는 flag 변수
    entries.forEach(entry => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectlastOne = index === sectionIds.length - 1 && // 현재 보여지는 구간이 제일 마지막 index라면
        entry.isIntersecting && // 마지막 entry가 현재 보여지고 있고
        entry.intersectingRatio >= 0.99;
    });
    console.log('무조건 라스트 섹션!!', selectlastOne);
    console.log(visibleSections);
    // console.log(entry.target.id);
    // console.log(index);
    // console.log(entry.target);
    // console.log(entry.isIntersecting);
    // console.log(entry.intersectionRatio);

    const navIndex = selectlastOne 
    ? sectionIds.length - 1 
    : findFirstIntersecting(visibleSections);
    console.log(sectionIds[navIndex]);
}

function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0
}