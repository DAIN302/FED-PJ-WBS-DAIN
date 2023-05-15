// 공통 기능 JS
// 상단영역 관련 함수
function commonFn(){
    // 로고 클릭 시 index.html로 이동
    $(".top .logo").click(function(e){
        e.preventDefault();
        location.href = "index.html";
    })


    // 서브메뉴 등장 -> shop 글씨 클릭했을때만
    $(".gnb>ul>li>a:first").click(function(e){
        e.preventDefault();
        let isShow = $(".sidebar_menu").hasClass("show");
        if(!isShow) {
            openMenu(".sidebar_menu");
            $(".overlay").addClass("active"); 
        }
        else {
            closeMenu(".sidebar_menu");
            $(".overlay").removeClass("active"); 
        }

        closeMenu(".icon_sidebar");
    })
    
    
    // 로그인 창 등장
    $(".icon_menu>li>a:first").click(function(e){
        e.preventDefault();
        let isShow = $(".icon_sidebar").hasClass("show");
        if(!isShow){
            openMenu(".icon_sidebar");
            $(".overlay").addClass("active") 
        }
        else {
            closeMenu(".icon_sidebar");
            $(".overlay").removeClass("active"); 
        }
        closeMenu(".sidebar_menu");
    })

    // 바깥 클릭 시 창 닫힘
    $(".overlay").click(function(e){
        closeMenu(".sidebar_menu");
        closeMenu(".icon_sidebar");
        if($(".overlay").hasClass("active")){
            $(".overlay").removeClass("active"); 
        }
    })
    
    function openMenu(ele){
        $(ele).addClass("show")
    }

    function closeMenu(ele){
        $(ele).removeClass("show")
    }

    // gnb 오버 이미지 Array
    const menuMedia = ["women_modern","women_chic","women_lovely","men_street","men_formal","men_elegant","note_citrus","note_floral","note_fruity","note_woody"];
    let sideSub = $(".sidebar_submenu li a");
    // console.log(sideSub.text())

    let temp_img = "";
    for(let i = 0; i<menuMedia.length; i++) {
        temp_img += `
        <li>
            <img src="./images/gnb/${menuMedia[i]}.jpg" alt="메뉴이미지">
        </li>
        `;
    }

    // 이미지 넣기
    $(".menu_medialist").html(temp_img);

    // 서브메뉴에 속성넣기
    let subNum = 0;
    sideSub.each((idx, ele)=>{
        subNum = idx-1
        if($(ele).text()!=="All"){
            // men 부분 번호 순번 변경
            if(idx > 4 && idx < 8) {
                subNum = idx-2
            }
            // main note 부분 순번 변경
            else if(idx > 8) {
                subNum = idx-3
            }
            $(ele).attr("data-num", subNum);
        }
    }) /// each



    function menuImgShow() {
        // gnb 이미지 처음엔 다 안보이게 설정
        let menuImg = $(".menu_media");
        // console.log(menuImg)
        menuImg.css({display : "none"}).find("li").css({display:"none"});

        // 메뉴에 마우스 오버 시 이미지 변경
        sideSub.hover(
            function(){ // 마우스 오버시
                let subTxt = $(this).text();
                let subNum = $(this).attr("data-num");
                if(subTxt!=="All") {
                    menuImg.show().find("li").eq(subNum).stop().fadeIn(100)
                }},
            function(){ // 마우스 아웃시
                menuImg.find("li").stop().fadeOut(100).parent().parent().fadeOut(100);
                
            })
    } // menuImgShow

    // 함수 호출
    menuImgShow();

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
}

// 용량 선택 기능 함수
function volumeCheck(check, img, price){
    $(check).click(function(e){
        // 체크박스 디자인 변경
        $(this).find("em").css({fontWeight:900}).parent().siblings().find("em").css({fontWeight:400});
        // 사진 및 가격 변경을 위한 텍스트 읽어오기
        let volNum = $(this).text().split("ml")[0].trim()
        // 이미지 경로 숫자 부분 읽어오기
        let temp = $(this).parent().parent().siblings(img).find("img").attr("src").split("_")[1].split(".")[0]
        // 용량 클릭 시 해당하는 이미지로 변경
        $(this).parents().siblings(img).find("img").attr("src", $(img).find("img").attr("src").replace(temp, volNum))
        // 용량 클릭 시 해당하는 가격으로 변경
        let txtNum = $(this).index();
        $(this).parents().siblings(price).find(".vol_price").eq(txtNum).show().siblings().hide();
    }) // click
} // volumeCheck

export {commonFn, volumeCheck};