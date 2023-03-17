// 서브페이지 공통 JS - subcommon.js

window.addEventListener("DOMContentLoaded", subFn);

function subFn() {
    // 기능 : 첫페이지에서 스크롤 시 상단 메뉴 색상 변화
    // 대상선정 
    const top = document.querySelector(".top");
    function chgTop() {
        window.addEventListener("scroll", ()=>{
            let scTop = document.querySelector('html').scrollTop;
            // console.log(scTop);
            if(scTop > 0) { 
                top.classList.add("slim");
            }
            else {
                top.classList.remove("slim");
            }
        })
    }
    chgTop();


    // 위로가기 버튼 클릭 시 맨 위로 이동
    const goTop = document.querySelector(".gotop span");
    console.log(goTop);
    goTop.onclick = () => window.scrollTo(0,0);
} // 로드 함수