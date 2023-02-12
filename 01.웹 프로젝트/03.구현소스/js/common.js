// 공통 js

/*
    구현내용 : .menu_top의 직계 li.sm에 마우스 오버시 header에 top_on 클래스가 추가되며
    a요소 전체 색상 변경 및 로고 이미지변경
*/

// 1. 대상선정
// 1-1. 이벤트대상 : menu_top의 li
const menuList = document.querySelectorAll(".menu_top li");

// 1-2. 변경대상 : .top -> .top에 top_on 추가
const topHeader = document.querySelector(".top");

// console.log(menuList);


// 2. 마우스 오버 이벤트 설정

for(x of menuList) {
    x.onmouseover = addClassTop;
    x.onmouseout = removeClassTop;
}
// menuList.onmouseover = addClassTop;

function addClassTop() {
    // console.log("메롱");
    topHeader.classList.add("top_on");
};

function removeClassTop() {
    topHeader.classList.remove("top_on");
}


