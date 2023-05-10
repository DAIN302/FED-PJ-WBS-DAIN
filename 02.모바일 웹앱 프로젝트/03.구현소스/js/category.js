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

        // 옵션 선택 박스 함수
        selectOpt();

        // 용량 선택 기능 함수
        volumeCheck();
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

// 용량 선택 기능 함수
function volumeCheck(){
    $(".volchk").click(function(e){
        // 체크박스 디자인 변경
        $(this).find("em").css({fontWeight:900}).parent().siblings().find("em").css({fontWeight:400});
        // 사진 및 가격 변경을 위한 텍스트 읽어오기
        let volNum = $(this).text().split("ml")[0].trim()
        // 이미지 경로 숫자 부분 읽어오기
        let temp = $(".product_imgbx img").attr("src").split("_")[1].split(".")[0]
        // 용량 클릭 시 해당하는 이미지로 변경
        $(".product_imgbx img").attr("src", $(".product_imgbx img").attr("src").replace(temp, volNum))
        // 용량 클릭 시 해당하는 가격으로 변경
        let txtNum = $(this).index();
        $(".vol_price").eq(txtNum).show().siblings().hide();
    }) // click
}

