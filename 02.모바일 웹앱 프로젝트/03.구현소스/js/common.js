// 공통 JS
function commonFn(){
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

    let temp_img = "";
    for(let i = 0; i<menuMedia.length; i++) {
        temp_img += `
        <li>
            <img src="./images/gnb/${menuMedia[i]}.jpg" alt="메뉴이미지">
        </li>
        `;
    }

    $(".menu_medialist").html(temp_img);

    function menuImgShow() {
        // gnb 이미지 다 안보이게 설정
        let menuImg = $(".menu_medialist li");
        console.log(menuImg)
        menuImg.css({display : "none"});

        // 메뉴에 마우스 오버 시 이미지 변경
        let sideSub = $(".sidebar_submenu li a");
        
        sideSub.hover(function(){
            let subTxt = $(this).text();
            let subNum = $(this);
            console.log(subNum);
            if(subTxt!=="All") {
                menuImg.eq(subNum).stop().fadeIn(300)
            }
        },
        function(){
            menuImg.stop().fadeOut(300)
        })
    }

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

export default commonFn;