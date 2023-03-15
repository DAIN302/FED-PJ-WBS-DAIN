// 서브페이지 JS - lux.js

window.addEventListener("DOMContentLoaded", luxFn);

function luxFn() {
    // console.log("gg");
    // (1) 기능 : 첫페이지의 아래 화살표 버튼 클릭 시 다음페이지로 이동
    // 대상선정 
    // 클릭 대상 : .sub_cont_btn span
    const cbtn = document.querySelector(".sub_cont_btn span");
    cbtn.onclick = () => {
        window.scrollTo(0, window.innerHeight*1);
    }
    
    
    // (2) 기능 : 첫페이지에서 스크롤 시 상단 메뉴 색상 변화
    // 대상선정 
    const top = document.querySelector(".top");
    function chgTop() {
        window.addEventListener("scroll", ()=>{
            let scTop = document.querySelector('html').scrollTop;
            console.log(scTop);
            if(scTop > 0) { 
                top.classList.add("on");
            }
            else {
                top.classList.remove("on");
            }
        })
    }
    chgTop();
}