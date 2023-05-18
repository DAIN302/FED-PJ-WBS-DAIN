// 카테고리 페이지 JS

import comData from "./data/comData.js";
import {commonFn, lnbColorChg, infoFn} from "./common.js";
import {catData} from "./data/catData.js";
import store from "./store.js";

// 상단영역 뷰템플릿
Vue.component("top-area",{
    template : comData.tarea,
    methods : {
       
    }
})

// 상단영역 뷰인스턴스
new Vue({
    el : "#top",
    store,
    data : {},
    created : function(){
        let pm;

        if(location.href.indexOf("?")!==-1) {
            pm = location.href.split("?")[1].split("=")[1];
            if(pm){
                store.commit('chgMenu', pm)
            }
        }
    },
    mounted : function(){
        // 공통 함수 호출
        commonFn();

        // 부드러운 스크롤
        // startSS();
    }
})


// 메인영역 뷰템플릿 
// 메인 상단
Vue.component("notehead-comp",{
    template : catData.noteCatHeader,
    methods : {
        chgNoteList(pm){
            store.commit('chgNoteList', pm)
            // 리스트 변경 시 선택된 것 초기화
            // 용량 체크 부분 초기화
            $(".volchk1").find("em").css({fontWeight:900}).parent().siblings().find("em").css({fontWeight:400});
            // 가격 초기화
            $(".vol_price1").show().siblings().hide();
            // 이미지 초기화
            $(()=>{
                let imgBx = $(".product_imgbx")
                imgBx.each((idx,ele)=>{
                    let temp = $(ele).find("img").attr("src").split("_")[1].split(".")[0]
                    let volume = $(ele).next().find(".volchk1").text().split("ml")[0].trim();
                    $(ele).find("img").attr("src", $(ele).find("img").attr("src").replace(temp, volume))
                })
            })
            // 선택한 노트에 맞는 상단 배경이미지 변경
            let pml = pm.toLowerCase()
            let lnbImgName = $(".ctit_bgi").find("img").attr("src").split("_")[1].split(".")[0];
            console.log(lnbImgName);
            $(".ctit_bgi").find("img").attr("src", $(".ctit_bgi").find("img").attr("src").replace(lnbImgName, pml))

            // 필터 텍스트 초기화
            $(".filter_value").find("button").text("인기상품순")
        }
    }
})

// 메인 향수 리스트
Vue.component("notelist-comp",{
    template : catData.noteCatList,
    methods : {
        chgVolume(pm, event){
            store.commit('chgVolume', pm)
            // 클릭 시 용량 체크 부분 변경
            $(event.currentTarget).find("em").css({fontWeight:900}).parent().siblings().find("em").css({fontWeight:400});
            let txtNum = $(event.currentTarget).index();
            // 클릭 시 가격 변경
            $(event.currentTarget).parents().siblings(".product_price").
            find(".vol_price").eq(txtNum).show().siblings().hide();
            // 클릭 시 이미지 변경
            let imgVol = $(event.currentTarget).text().split("ml")[0].trim()
            let img = $(event.currentTarget).parent().parent().siblings(".product_imgbx").find("img")
            let rootImg = img.attr("src").split("_")[1].split(".")[0]
            img.attr("src", img.attr("src").replace(rootImg, imgVol))
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

        lnbColorChg();

    }
})

// 하단영역 뷰템플릿
Vue.component("info-area",{
    template : comData.barea
})

// 하단영역 뷰인스턴스
new Vue({
    el : "#info",
    data : {},
    mounted : function(){
        // 하단영역 공통 JS
        infoFn()
    }
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




