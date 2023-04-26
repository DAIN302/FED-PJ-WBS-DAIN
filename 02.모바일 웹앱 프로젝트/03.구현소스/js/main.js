// 메인페이지 JS

window.addEventListener("DOMContentLoaded", ()=>{
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

            $(".swiper-wrapper").append(temp_banner);
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

    // Vue.component("best-cont", {
    //     template : `
    //         <div class="main_best_wrap">
    //           <div class="main_best_column main_best_img">
    //             <figure>
    //                 <img v-bind:src="./images/main/best/1.jpg" alt="베스트셀러" />  
    //             </figure>
    //           </div>
    //           <div class="main_best_column main_best_txt">
    //             <h3 class="best_perfume_brand">
    //             </h3>
    //             <h4 class="best_perfume_name"></h4>
    //             <p class="best_perfume_desc">
    //             </p>
    //             <div class="best_perfume_sublink">
    //               <a href="#">Shop Now</a>
    //             </div>
    //           </div>
    //         </div> 
    //     `
    // })

    // new Vue({
    //     el : ".main_best_cont",

    // })

    console.log("gd")

});