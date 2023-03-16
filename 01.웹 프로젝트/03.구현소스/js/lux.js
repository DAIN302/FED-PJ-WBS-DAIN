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

    // (2) 기능 : 객실이미지의 버튼을 누르면 이미지 이동
    
    // 버튼 클릭시 다음 슬라이드로 넘어가기 기능
    // 클릭대상 : .sub_cont_imgbtn button
    const rimgBtn = document.querySelectorAll(".sub_cont_imgbtn button");
    // 이동대상 : .sub_cont_imglist>ol
    const rimgList = document.querySelector(".sub_cont_imglist>ol");
    console.log(rimgList);

    rimgBtn.forEach((ele, idx)=> {
        ele.onclick = () => {
            // 다음 버튼
            if(idx) {
                rimgList.style.left = "-50%";
                rimgList.style.transition = "left .5s ease-in-out";
                ele.style.display = "none";
                rimgBtn[0].style.display = "inline-block"
            }
            // 이전 버튼
            else {
                rimgList.style.left = 0;
                ele.style.display = "none"
                rimgBtn[1].style.display = "inline-block"
                console.log(ele);
            }
        }
    })
}