// 공통 js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {

/*
    구현내용 : .menu_top의 직계 li.sm에 마우스 오버시 header에 top_on 클래스가 추가되며
    a요소 전체 색상 변경 및 로고 이미지변경
*/

// 1. 대상선정
// 1-1. 이벤트대상 : menu_top의 li
const menuList = document.querySelectorAll(".menu_top li");

// 1-2. 변경대상 : .top -> .top에 top_on 추가
const topHeader = document.querySelector(".top");

// console.log(menuList);


// 2. 마우스 오버 이벤트 설정

for(let x of menuList) {
    // 1. 마우스 오버된 li에 클래스 "on" 넣기
    x.onmouseover = addClassTop;

    // 2. 마우스 아웃된 li에 클래스 "on" 제거
    x.onmouseout = removeClassTop;
}

function addClassTop() {
    // console.log("메롱");
    topHeader.classList.add("top_on");
};

function removeClassTop() {
    topHeader.classList.remove("top_on");
}



// 햄버거 버튼 클릭 시 모바일 메뉴 등장
$(".ham").click(function() {
    $(".gnb_mobliebx").addClass("active");
    $("body").css({overflow : "hidden"}).on("scroll touchmove mousewheel", function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    })

})

// x버튼 클릭 시 모바일 메뉴 제거
$(".close_menu").click(function() {
    $(".gnb_mobliebx").removeClass("active");
    $("body").css({overflowY : "scroll"}).off("scroll touchmove mousewheel")
})


// 모바일 메뉴 아코디언
// 1. 처음 다 숨기기
$(".mobile_menu_sub").addClass("hidden");
    // 2. 클릭이벤트 설정
    $(".gnb_mobile_menu>ul>li>h3").click(function(){
        // 2-0. 다른 h3 요소 클릭 시 다른 메뉴는 접히기
        $(".gnb_mobile_menu>ul>li>h3").not(this).removeClass("active")
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

} // 로드함수

