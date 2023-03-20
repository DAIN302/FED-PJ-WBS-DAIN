// 서브페이지 JS - contact.js

const fdata = {
    fait : {
        name : "Fait Maison",
        loca : "서울시 송파구 잠실로 209 (4층)",
        tel : "02-2092-6100",
        fax : "02-2092-6100",
        mail : "HB220-FB7@SOFITEL.COM"
    },
    mio : {
        name : "MIO",
        loca : "서울시 송파구 잠실로 209 (3층)",
        tel : "02-2092-6102",
        fax : "02-2092-6102",
        mail : "HB220-FB10@SOFITEL.COM"
    },
    jardin : {
        name : "Jardin D'Hiver",
        loca : "서울시 송파구 잠실로 209 (6층)",
        tel : "02-2092-6106",
        fax : "02-2092-6106",
        mail : "HB220-FB8@SOFITEL.COM"
    },
    espace : {
        name : "L'Espace",
        loca : "서울시 송파구 잠실로 209 (6층)",
        tel : "02-2092-6104",
        fax : "02-2092-6104",
        mail : "HB220-FB9@SOFITEL.COM"
    },
    latitude : {
        name : "Latitude32",
        loca : "서울시 송파구 잠실로 209 (32층)",
        tel : "02-2092-6108",
        fax : "02-2092-6108",
        mail : "HB220-FB11@SOFITEL.COM"
    },
}; 

$(document).ready(function() {
    // 1. 처음에 다 숨기기
    $(".sub_cont_locadesc").addClass("hidden");
    $(".sub_cont_locatxt>h3").click(function(){
        // 2-0. 다른 h3 요소 클릭 시 다른 메뉴는 접히기
        $(".sub_cont_locatxt>h3").not(this).removeClass("active")
        .next().slideUp(400, function(){
            $(this).addClass("hidden").show();
        });
        // 2-1. h3요소 active 클래스 존재 시(하위메뉴 접기)
        if($(this).hasClass("active")) {
            $(this).removeClass("active")
            .next().slideUp(400, function(){
                $(this).addClass("hidden").show();
            });
        }
        // 2-2. h3요소에 active 클래스 없을 시(하위메뉴 펼치기)
        else {
            $(this).addClass("active").next().removeClass("hidden").hide().slideDown(400);
        }
        
    })// click
}) // 로드함수