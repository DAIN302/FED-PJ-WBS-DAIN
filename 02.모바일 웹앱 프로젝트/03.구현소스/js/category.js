// 메인페이지 JS

import comData from "./comData.js";
import commonFn from "./common.js";

// 상단영역 뷰템플릿
Vue.component("top-area",{
    template : comData.tarea
})

// 상단영역 뷰인스턴스
new Vue({
    el : "#top",
    data : {},
    mounted : function(){
        // 공통 함수 호출
        commonFn();

        // 부드러운 스크롤
        startSS();

        // 옵션 선택 박스 
        selectOpt();
    }
})

// 하단영역 뷰템플릿
Vue.component("info-area",{
    template : comData.barea
})

// 하단영역 뷰인스턴스
new Vue({
    el : "#info"
})

// 필터 선택 기능 함수
function selectOpt(){
    // 대상 선정
    const filterSel = document.querySelector(".filter_value button");
    const filterOpt = document.querySelector(".filter_option")

    let selHeight = filterOpt.querySelector("ul").offsetHeight;

    filterSel.onclick = () => {
        //  옵션선택박스 열리기
        filterOpt.style.height = selHeight + "px";
        filterOpt.style.transition = "height .3s ease-out";

        const closeOpt = () => {
            if (filterOpt.offsetHeight > 1) {
                filterOpt.style.height = "0";
            }
        };

        // 한번 더 누르거나 바깥, 다른 요소 클릭 시 옵션 선택박스 닫힘
        document.addEventListener("click", () => closeOpt());

        // 옵션 선택박스에서 누른 옵션 적용
        const selOpt = filterOpt.querySelectorAll(".option");

        // 옵션 적용 함수
        const chSel = (val) => {
            filterSel.innerText = val.innerText;
        };

        // 옵션 클릭 시 옵션 적용
        selOpt.forEach((option) => {
            option.addEventListener("click", function (){
             chSel(option);
            }) // click
        }) // forEach            
    } // click
} // selectOpt


