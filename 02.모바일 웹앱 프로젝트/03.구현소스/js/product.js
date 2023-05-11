// 제품 상세 페이지 JS

import comData from "./data/comData.js";
import {commonFn, volumeCheck} from "./common.js";

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

        // 용량 선택 기능 함수
        let detailVol = $(".detail_radiobtn").find(".volchk")
        let detailPrice = $(".detail_price")
        volumeCheck(detailVol, ".detail_descimg", detailPrice)
        
        let recVol = $(".recommands_radiobtn").find(".volchk")
        volumeCheck(recVol, ".recommands_imgbx", ".recommands_price")
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