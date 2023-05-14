// 카테고리 페이지 JS

import comData from "./data/comData.js";
import {commonFn, volumeCheck} from "./common.js";
import {catData} from "./data/catData.js";
import store from "./store.js";

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
    }
})

// 메인영역 뷰템플릿 
// 메인 상단
Vue.component("head-comp",{
    template : catData.catHeader,
    methods : {
        chgList(pm){
            store.commit('chgList', pm)
            console.log("dd", pm)
        }
    }
})

// 메인 향수 리스트
Vue.component("list-comp",{
    template : catData.catList,
    methods : {
        chgVolume(pm, event){
            store.commit('chgVolume', pm)
        },
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
})

// 메인영역 뷰인스턴스
new Vue({
    el : "#cont",
    data : {},
    store,
    created(){

    },
    mounted : function(){
        // 옵션 선택 박스 함수
        selectOpt();

        // 용량 선택 기능 함수
        volumeCheck(".volchk", ".product_imgbx", ".product_price")
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




