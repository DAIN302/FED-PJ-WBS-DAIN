// 제품 상세 페이지 JS
import comData from "./data/comData.js";
import {commonFn, volumeCheck} from "./common.js";
import productData from "./data/pdData.js";
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
Vue.component("main-comp",{
    template : productData.pdData,
    methods : {
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
})
// 메인영역 뷰인스턴스
new Vue({
    el : "#cont",
    store,
    data : {},
    created : function(){
        let pm;

        if(location.href.indexOf("?")!==-1) {
            pm = location.href.split("?")[1].split("=")[1];
            if(pm){
                store.commit('chgProduct', pm)
            }
        }
    },
    mounted : function(){
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


// 스크롤 시 하위메뉴 나타나기
function scrollShow(obj) {
    // 화면높이값의 4/5구하기
    const hv = window.innerHeight/6*5;
    // 윈도우 높이값
    const winH = window.innerHeight;

    // 전체 문서 높이값
    const docH = document.body.clientHeight;
    console.log("문서전체높이", docH); 

    // 스크롤한계값
    const scLimit = docH - winH
    console.log("스크롤한계값", scLimit); 

    // 등장액션 대상 위치값 리턴함수
    const retVal = ele => ele.getBoundingClientRect().top;

    // 클래스 넣기 함수
    const showIt = x => { // x는 등장요소
        // 대상요소의 현재 스크롤 위치
        let xval = retVal(x)
        // 화면 높이값의 절반값에 왔을때 첫번째 박스 등장
        // hv변수 -> 화면 높이값의 절반값
        if(xval < hv && xval > 0) {
            x.classList.add("on");
        }
    };       

    window.addEventListener("scroll", ()=> {
    for(let x of obj) showIt(x);
    })
} // scrollShow 함수