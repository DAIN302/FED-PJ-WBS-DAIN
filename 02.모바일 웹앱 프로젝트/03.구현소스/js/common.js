// 공통 JS
$(()=>{
    // 서브메뉴 등장 -> shop 글씨 클릭했을때만
    $(".gnb>ul>li>a").first().click(function(e){
        e.preventDefault();
        // $(".sidebar_menu").addClass("show");
        $(".sidebar_menu").animate({
            left : 0
        }, 1000, "easeOutExpo") 
    })

    // 서브메뉴
    // 1. 처음 다 숨기기
    $(".sidebar_submenu").addClass("hidden");
    // 2. 클릭이벤트 설정
    $(".sub_menu>li>h2").click(function(){
        // 2-0. 다른 h2 요소 클릭 시 다른 메뉴는 접히기
        $(".sub_menu>li>h2").not(this).removeClass("active")
        .next().slideUp(400, function(){
            $(this).addClass("hidden").show();
        });
        // 2-1. h2요소 active 클래스 존재 시(하위메뉴 접기)
        if($(this).hasClass("active")) {
            $(this).removeClass("active")
            .next().slideUp(400, function(){
                $(this).addClass("hidden").show();
            });
        }
        // 2-2. h2요소에 active 클래스 없을 시(하위메뉴 펼치기)
        else {
            $(this).addClass("active").next().removeClass("hidden").hide().slideDown(400);
        }
    })// click
})