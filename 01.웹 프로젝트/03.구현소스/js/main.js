// 메인페이지 JS - main.js

window.addEventListener("DOMContentLoaded", mainFn);

function mainFn() {

// 예약선택폼 ////////////////////////
/*
    구현내용 : 
    ul과 li의 디자인을 select태그처럼 함
    1. 상단의 숫자를 누르면 선택 옵션박스가 나타남
       이때 아래를 향한 화살표 아이콘이 위 방향으로 변함
       대상1 : .main_select -> 클릭할 대상
       대상2 : .main_select ul -> height 값 변경
       대상3 : .main_select_arrow span -> trnasform : rotate(180deg) 적용
    2. 옵션선택박스에서 누른 숫자가 상단의 숫자에 적용
       대상 : .main_select_value, .option
*/

// 대상선정 : main_select클래스
const mainSel = document.querySelectorAll(".main_select");


// 상단의 숫자를 누르면 선택 옵션박스가 나타남 -> height 값 변경
for(let x of mainSel) {
    let mainSelList = x.querySelector(".main_select_list");
    let selArrow = x.querySelector(".main_select_arrow span");
    x.onclick = () => {
        let selHeight = mainSelList.querySelector("ul").offsetHeight;
        
        // 옵션선택박스 열리기
        mainSelList.style.height = selHeight+"px";
        mainSelList.style.transition = "height .3s ease-out";
        
        // 화살표아이콘 방향변경
        selArrow.style.transform = "rotate(-180deg)";
        console.log(selHeight, mainSelList.offsetHeight);

        // 옵션선택박스 닫힘 함수
        const closeOpt = () => {
            if(mainSelList.offsetHeight > 1) {
                mainSelList.style.height = "0";
                selArrow.style.transform = "rotate(0)";
            }
        }

        // 한번 더 누르거나 바깥, 다른 요소 클릭 시 옵션선택박스 닫힘
        document.addEventListener("click", ()=> closeOpt())
    } //// 클릭 이벤트(상단 숫자 클릭 시)

    // 옵션선택박스에서 누른 숫자 적용
    // 대상선정 
    const selVal = x.querySelector(".main_select_value");
    const selOpt = mainSelList.querySelectorAll(".option");

    // 숫자 적용 함수
    const chSel = val => {
        selVal.innerHTML = val.innerText
    }

    // 옵션 클릭시 숫자 적용
    selOpt.forEach(option => {
        option.addEventListener("click", function(){chSel(option)})
    }) /// 클릭 이벤트(옵션 클릭 시)
} ////// for of문 
// 예약선택폼 ////////////////////////


} // mainFn
