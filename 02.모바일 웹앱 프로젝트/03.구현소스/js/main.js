// 메인페이지 JS

import comData from "./data/comData.js";
import {commonFn, infoFn} from "./common.js";
import {bData, matchData} from "./data/mainData.js";

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

        // 메인 배너 함수
        bannerSwiper();

        // 배너 링크 기본 기능 막기
        $(".main_bannerwrap .swiper-slide").find("a").click(function(e){
            e.preventDefault();
        })

        // 베스트 섹션 함수
        bestCont();

        // 신상품 섹션 함수
        newContBanner();

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


// 메인 배너 함수
function bannerSwiper() {
    const banImg = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

    for(let i = 0; i<banImg.length; i++) {
        let temp_banner = `
            <div class="swiper-slide">
                <a href="#">
                    <img src="./images/main/banner/${banImg[i]}" alt="베너이미지">
                </a>
            </div>
        `;

        $(".main_bannerwrap").append(temp_banner);
    }
    
    let banSwiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        slidesPerGroup: 1, 
        loop: true, 
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination", 
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev", 
        },
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false,
        },
    })
} // bannerSwiper

// Best
function bestCont() {
   const  bestP = document.querySelector(".main_best_cont")
   let hcode = "";
   for(let x in bData) {
    hcode += `
        <div class="main_best_wrap">
            <div class="main_best_column main_best_img">
                <figure>${bData[x].image}</figure>
            </div>
            <div class="main_best_column main_best_txt">
            <h3 class="best_perfume_brand">
                ${bData[x].brandlogo}
            </h3>
            <h4 class="best_perfume_name">${bData[x].name}</h4>
            <p class="best_perfume_desc">
            ${bData[x].desc}
            </p>
            <div class="best_perfume_sublink">
                <a href="product.html?cat=${bData[x].nm}">SHOP NOW</a>
            </div>
            </div>
        </div>  
    `
   }

   bestP.innerHTML = hcode;

   
   // 이미지 패럴렉스 효과 적용
   // 윈도우 높이값
   const winH = $(window).height();
   // 패럴렉스 수치 범위
   const setH = 100;
   // 패럴렉스 대상
   const bestImage = $(".main_best_img figure img")

   // 패럴렉스 이동 함수
   const moveImage = (elpos, ele, setH) => {
    if(elpos < winH && elpos > -200) {
        // 위치 이동값 계산
        let x = setH - (elpos * setH) / winH

        // 요소에 위치 이동 CSS 반영
        $(ele).css({
            transform : `scale(1.2) translate3d(0,${-x}px,0)`
        })
    }
   } // moveImage

   // 요소위치값 - 현재스크롤위치값
   const retVal = (elpos, scTop) => elpos - scTop;

   // 스크롤이벤트함수
   $(window).on("scroll", ()=>{
    // 현재 스크롤 위치값
    let scTop = $(window).scrollTop();

    bestImage.each((idx, ele)=>{
        moveImage(retVal($(ele).offset().top, scTop), ele, setH)
    })

   })
      
} // bestCont 

// New
function newContBanner() {
    const newCont = new Vue({
        el :".main_new_cont",
        data : {
            newitems : []
        },
        methods : {
            makeImg(val){
                return `<img src="./images/main/new/${val+1}.jpg" alt="신상품">`;
            },
        },
        mounted : function(){
            axios.get("./js/data/new.json").then(x=>this.newitems=x);
        }
    });

    // 스와이퍼
    let newSwiper = new Swiper(".newSwiper", {
        slidesPerView: 3,
        slidesPerGroup: 1, 
        spaceBetween: 100,
        loop: true, 
        loopFillGroupWithBlank: true,
        speed : 500,
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev", 
        },
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter : true,
        },
        breakpoints: {
            // when window width is >= 200px
            200: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // when window width is >= 520px
            520: {
            slidesPerView: 2,
            spaceBetween: 50,
            },
            // when window width is >= 820px
            820: {
            slidesPerView: 3,
            spaceBetween: 10,
            },
            // when window width is >= 1024px
            820: {
            slidesPerView: 3,
            spaceBetween: 100,
            },
        }
    });
} // newContBanner

function matchWheel() {
    // 이벤트 대상
    // 휠 이미지
    const wheelImg = $(".img_wheel");
    // 향수 리스트
    const perfumeList = $(".perfume_list");
    // 버튼
    let wheelBtn = $(".match_btn")
    // 휠 이미지 순번 변수
    let wheelNum = 0;
    // 퍼퓸 리스트 순번 변수
    let perfumeNum = 0;

    // 1번 이미지 처음부터 보이기
    perfumeList.eq(0).addClass("on");

    // 휠 이미지 기능 함수
    const wheelImgFn = (num) => {
        let rotateNum = -25.7143 * num
        wheelImg.css({
            transform : `rotate(${rotateNum}deg)`
        })
    }

    // 향수 리스트 변환 함수
    const perfumeShow = (num) => {
        // 전체 초기화
        perfumeList.removeClass("on");
        // 해당 순번에 클래스 넣기
        perfumeList.eq(num).addClass("on");
    }

    wheelBtn.click(function(){
        let isRight = $(this).is(".match_nextbtn");
        // 오른쪽 버튼 클릭 : 시계방향 회전
        if(isRight){
            wheelNum++
            perfumeNum++;
            if(perfumeNum > perfumeList.length-1) perfumeNum = 0;
        }
        // 왼쪽 버튼 클릭 : 반시계방향 회전
        else {
            wheelNum--;
            perfumeNum--;
            if(perfumeNum < 0) perfumeNum = perfumeList.length-1;
        }

        // 휠 기능 함수 호출
        wheelImgFn(wheelNum);
        // 리스트 변환 함수 호출
        perfumeShow(perfumeNum);
    })
} // matchWheel

Vue.component("match-comp", {
    template : `
        <li class="perfume_list">
            <div class="perfume_img">
                <figure>
                 <img v-bind:src="pimg" alt="향수이미지"/>
                </figure>
            </div>
            <div class="perfume_txt">
                <ol>
                    <li class="perfume_brand">{{pbrand}}</li>
                    <li class="perfume_name">{{pname}}</li>
                    <li class="perfume_family" v-bind:style="pfcolor">{{pfamily}}</li>
                    <li class="perfume_link">
                        <a href="#" :data-name="pnm">SHOP NOW</a>
                    </li>
                </ol>
            </div>
        </li> 
              ` ,
        props :["matchperfume"],
        data : function() {
            return {
                pimg : `./images/main/match/perfume/${this.matchperfume.img}`,
                pbrand : this.matchperfume.brand,
                pname : this.matchperfume.name,
                pfamily : this.matchperfume.family,
                pfcolor : `color : ${this.matchperfume.color}`,
                pnm : this.matchperfume.nm
            }
        },    
})

const MatchVue = new Vue({
    el : ".match_perfumelist",
    data : {
        matchdata : matchData
    },
    mounted : function(){
        // 휠 및 향수 리스트 기능 함수 호출
        matchWheel();

        // 제품 상세 페이지 링크 연결
        const perfumeLink = document.querySelectorAll(".perfume_link a")
        perfumeLink.forEach(ele=>{
            ele.onclick = (e) => {
                e.preventDefault();
                let dataName = ele.dataset.name
                console.log(dataName);
                if(dataName==="no") {
                    alert("준비중입니다.")
                }
                else {
                    location.href = `product.html?cat=`+dataName
                }

            }
        })
    }
})


