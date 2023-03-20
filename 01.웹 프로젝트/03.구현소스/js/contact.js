// 서브페이지 JS - contact.js

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