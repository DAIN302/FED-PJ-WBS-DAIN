// 메인페이지 JS

window.addEventListener("DOMContentLoaded", ()=>{
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
    }

    bannerSwiper();

    // Best
    const bestCont = new Vue({
        el : ".main_best_cont",
        data : {
            bestitems : {}
        },
        mounted : function(){
            axios.get("./js/best.json").then(x=>this.bestitems=x);
        }
    });

    // New
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

    let newSwiper = new Swiper(".newSwiper", {
        slidesPerView: 3,
        slidesPerGroup: 1, 
        spaceBetween: 100,
        speed : 3000,
        loop: true, 
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev", 
        },
        autoplay: {
            delay: 1000, 
            disableOnInteraction: false,
        },
    })


    console.log("gd")

});