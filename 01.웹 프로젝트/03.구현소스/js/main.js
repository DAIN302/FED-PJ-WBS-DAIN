// 메인페이지 JS - main.js

// 예약선택폼
/*
    구현내용 : 
    ul과 li의 디자인을 select태그처럼 함
    1. 상단의 숫자를 누르면 선택 옵션박스가 나타남
       이때 아래를 향한 화살표 아이콘이 위 방향으로 변함
       대상1 : .main_select -> 클래스 on추가
       대상2 : .main_select_arrow span -> trnasform : rotate(180deg) 적용
    2. 옵션선택박스에서 누른 숫자가 상단의 숫자에 적용
       대상 : .main_select_value, .option
*/

// 대상선정 : main_select클래스
const mainSel = document.querySelectorAll(".main_select");
// 화살표아이콘
let selArrow = document.querySelectorAll(".main_select_arrow span");


// 이벤트 : main_select클래스에 클래스 on추가
for(let x of mainSel) {
    // 클릭 시 on클래스가 추가되며 옵션선택박스 열림
    x.onclick = () => {
        x.classList.add("on");
        selArrow.forEach(ele=>{
            ele.style.transform = "rotate(-180deg)";
        })
    }
}

// 대상선정 
const selVal = document.querySelectorAll(".main_select_value");
