// 링크 시스템 JS - linksys.js

window.addEventListener("DOMContentLoaded", linkFn);

function linkFn(){
    // console.log("링크");
    // 대상 
    // 로고 링크
    const logoLink = document.querySelector(".logo a")
    // gnb 링크
    const menuLink = document.querySelectorAll(".menu_top>li>a");
    // 서브메뉴 링크
    const subMenuLink = document.querySelectorAll(".menu_sub>li>a");
    // 객실 서브메뉴 링크
    const subRoomLink = document.querySelectorAll(".menu_sub>li>ol>li>a");

    
    // 모바일용 링크 
    // 홈이동
    const mobileHome = document.querySelector(".gnb_mobile_topbx>ul>li>button")
    // 예약 및 연락페이지 이동
    const mobileBottom = document.querySelectorAll(".gnb_mobile_bottombx>ul>li>a");
    // 서브메뉴
    const mobileSubMenu = document.querySelectorAll(".mobile_menu_sub>li>a");
    // 객실서브메뉴
    const mobielRoomLink = document.querySelectorAll(".mobile_menu_sub>li>ol>li>a")

    
    // 예약 버튼 링크
    const resLink = document.querySelector(".res a");
    // 하단 로고 링크
    const blogoLink = document.querySelector(".blogo a")
    // 히딘 sns 링크
    const bsnsLink = document.querySelectorAll(".bsns a");
    

    // console.log(subRoomLink);

    // 링크 이동함수 
    function movePage(ele, loca) {
        ele.onclick = (e) => {
            e.preventDefault();    
            location.href = `${loca}.html`;
        }
    }

    //////////////// 상단 공통
    // 로고 클릭 시 홈으로 이동
    movePage(logoLink, "index");

    // gnb 메뉴 링크
    for(let x of menuLink) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();

            if(atxt==="rooms") {
                location.href = `${atxt}.html?rm=rooms`
            }
            else {
                alert("공사중입니다.");
            }
        }
    }

    // 서브메뉴 링크
    for(let x of subMenuLink) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();
           // console.log(atxt);
            if(atxt==="contact") {
                location.href = `${atxt}.html`;
            } else if(atxt==="room"||atxt==="suite"||atxt==="residence") {
                location.href = `rooms.html?rm=`+atxt;
            } else {
                alert("공사중입니다.")
            }
        }
    }

    // 서브메뉴 - 객실 링크
    for(let x of subRoomLink) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();
            atxt = atxt.replace(" ", "");

            let url;
            switch(atxt) {
                case"luxury":url = atxt; break;
                case"magnifique":url = atxt; break;
                case"luxurylake":url = atxt; break;
                case"clubluxury":url = atxt; break;
                case"magnifiquefamily":url = atxt; break;
                default: url = "esc";
            }

            if(url==="esc") {
                alert("공사중입니다.")
            } else {
                location.href = "room.html?cat="+encodeURIComponent(url);
            }
        }
    }
    
    // 예약버튼 링크 이동
    movePage(resLink, "reservation");

    //////////////모바일
    // 홈으로 이동
    movePage(mobileHome, "index");

    // 예약페이지 및 컨택트 페이지 이동
    for(let x of mobileBottom) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();
            location.href = `${atxt}.html`;
        }
    }

    //서브페이지 이동
    for(let x of mobileSubMenu) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();
            if(atxt==="contact") {
                location.href = `${atxt}.html`;
            } else if(atxt==="all"||atxt==="room"||atxt==="suite"||atxt==="residence") {
                location.href = `rooms.html?rm=`+atxt;
            } else {
                alert("공사중입니다.")
            }
        }
    }
    // 서브메뉴 - 객실 링크
    for(let x of mobielRoomLink) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText.toLowerCase().trim();
            atxt = atxt.replace(" ", "");

            let url;
            switch(atxt) {
                case"luxury":url = atxt; break;
                case"magnifique":url = atxt; break;
                case"luxurylake":url = atxt; break;
                case"clubluxury":url = atxt; break;
                case"magnifiquefamily":url = atxt; break;
                default: url = "esc";
            }

            if(url==="esc") {
                alert("공사중입니다.")
            } else {
                location.href = "room.html?cat="+encodeURIComponent(url);
            }
        }
    }

    ///////////// 하단 공통
    // 하단 로고 링크 이동
    movePage(blogoLink, "index");
    
    // sns링크 이동 세팅
    for(let x of bsnsLink) {
        x.onclick = (e) => {
            e.preventDefault();
            let atxt = x.innerText;
            console.log(atxt)

            let url;

            switch(atxt) {
                case"페이스북 바로가기":url = "https://www.facebook.com/SofitelSeoul"; break;
                case"유튜브 바로가기":url = "https://www.youtube.com/user/SofitelLuxuryHotels"; break;
                case"인스타그램 바로가기":url = "https://www.instagram.com/sofitelseoul/"; break;
            }

            window.open().location.href = url;
        }
    }

}