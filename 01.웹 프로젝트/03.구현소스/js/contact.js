// 서브페이지 JS - contact.js

$(document).ready(function() {
    // 처음에 교통수단 박스 안보이게
    //$(".sub_cont_locadesc").hide();
    // 교통수단 클릭 시 교통수단 박스 펼치기
    $(".sub_cont_locatxt>h3").click(function(){
        //  교통수단 박스 변수
        let nextDivBx = $(this).next(".sub_cont_locadesc")
        let nextDiv = nextDivBx.find("div");
        let nextDivH = nextDiv.innerHeight();
        console.log(nextDivH);
        // 교통수단 박스에 클래스 on 존재시(메뉴 펼쳐있을 시)
        if(nextDivBx.hasClass("on")) {
            $(this).find(".fa-solid").removeClass("up");
            nextDivBx.removeClass("on");
            nextDivBx.slideUp(400);    
        }
        // 교통수단 박스에 클래스 on 없을 시(메뉴 접혀있을 시)
        else {
            // $(".sub_cont_locatxt").find(".on").removeClass("on");
            // $(".sub_cont_locatxt").find(".on").slideUp(400);
            $(this).find(".fa-solid").addClass("up");
            nextDivBx.addClass("on");
            nextDivBx.css("height", nextDivH+"px");
            nextDivBx.slideDown(400);
        }
    })
})