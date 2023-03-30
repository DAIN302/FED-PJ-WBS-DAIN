// 링크 시스템 JS - linksys.js

window.addEventListener("DOMContentLoaded", linkFn);

function linkFn(){
    // console.log("링크");
    // 대상 
    // 로고 링크
    const logoLink = document.querySelector(".logo a")
    // gnb 링크
    // const gnb  = document.querySelectorAll(".gnb a");
    // 예약 링크
    const resLink = document.querySelector(".res a");
    // 하단 로고 링크
    const blogoLink = document.querySelector(".blogo a")

    const bsnsLink = document.querySelectorAll(".bsns a");

    // 로고 클릭 시 홈으로 이동
    logoLink.onclick = (e) => {
        e.preventDefault();

        // 홈으로 이동
        location.href = "index.html";
    }

    blogoLink.onclick = (e) => {
        e.preventDefault();
        location.href = "index.html";
    }

    // 예약버튼 클릭 시 홈으로 이동
    resLink.onclick = (e) => {
        e.preventDefault();
        location.href = "reservation.html";
    }

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