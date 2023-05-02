// 메인페이지 JS

import bData from "./bestData.js";
import matchData from "./matchData.js";

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

bannerSwiper();

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
                <a href="#">Shop Now</a>
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
   const setH = 200;
   // 패럴렉스 대상
   const bestImage = $(".main_best_img figure img")

   // 패럴렉스 이동 함수
   const moveImage = (elpos, ele, setH) => {
    if(elpos < winH && elpos > -200) {
        // 위치 이동값 계산
        let x = setH - (elpos * setH) / winH

        // 요소에 위치 이동 CSS 반영
        $(ele).css({
            transform : `scale(1.2) translateY(${-x}px)`
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

bestCont();

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
            axios.get("./js/new.json").then(x=>this.newitems=x);
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
    });
} // newContBanner

newContBanner();

function matchWheel() {
    // 이벤트 대상
    const wheelImg = $(".img_wheel");
    // 버튼
    let wheelBtn = $(".match_btn")
    let wheelNum = 0;

    // 휠 이미지 기능 함수
    const wheelImgFn = (num) => {
        let rotateNum = -25.7143 * num
        wheelImg.css({
            transform : `rotate(${rotateNum}deg)`
        })
    }

    wheelBtn.click(function(){
        let isRight = $(this).is(".match_nextbtn");
        // 오른쪽 버튼 클릭 : 시계방향 회전
        if(isRight){
            wheelNum++
        }
        // 왼쪽 버튼 클릭 : 반시계방향 회전
        else {
            wheelNum--;
        }
        wheelImgFn(wheelNum);
    })
}

matchWheel();

// 객체 생성자 함수
function MatchList(family, img, brand, name) {
    this.family = family; 
    this.img = img; 
    this.brand = brand; 
    this.name = name; 
}
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
                    <li class="perfume_family">{{pfamily}}</li>
                    <li class="perfume_link">
                        <a href="#">SHOP NOW</a>
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
                pfamily : this.matchperfume.family
            }
        },    
})

const MatchVue = new Vue({
    el : ".match_perfumelist",
    data : {
        matchdata : matchData
    },
    methods : {

    },
    created : function(){

    },
    mounted : function(){

    }
})

function perfumeShow() {
    
}


console.log("gd")

