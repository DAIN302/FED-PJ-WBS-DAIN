// 메인페이지 JS - main.js

window.addEventListener("DOMContentLoaded", mainFn);

function mainFn() {

// 예약선택폼 ////////////////////////
/*
    구현내용 : 
    ul과 li의 디자인을 select태그처럼 함
    1. 상단의 숫자를 누르면 선택 옵션박스가 나타남
       이때 아래를 향한 화살표 아이콘이 위 방향으로 변함
       대상1 : .main_select -> 클릭할 대상
       대상2 : .main_select ul -> height 값 변경
       대상3 : .main_select_arrow span -> trnasform : rotate(180deg) 적용
    2. 옵션선택박스에서 누른 숫자가 상단의 숫자에 적용
       대상 : .main_select_value, .option
*/

// 대상선정 : main_select클래스
const mainSel = document.querySelectorAll(".main_select");


// 상단의 숫자를 누르면 선택 옵션박스가 나타남 -> height 값 변경
for(let x of mainSel) {
    let mainSelList = x.querySelector(".main_select_list");
    let selArrow = x.querySelector(".main_select_arrow span");
    x.onclick = () => {
        let selHeight = mainSelList.querySelector("ul").offsetHeight;
        
        // 옵션선택박스 열리기
        mainSelList.style.height = selHeight+"px";
        mainSelList.style.transition = "height .3s ease-out";
        
        // 화살표아이콘 방향변경
        selArrow.style.transform = "rotate(-180deg)";
        console.log(selHeight, mainSelList.offsetHeight);

        // 옵션선택박스 닫힘 함수
        const closeOpt = () => {
            if(mainSelList.offsetHeight > 1) {
                mainSelList.style.height = "0";
                selArrow.style.transform = "rotate(0)";
            }
        }

        // 한번 더 누르거나 바깥, 다른 요소 클릭 시 옵션선택박스 닫힘
        document.addEventListener("click", ()=> closeOpt())
    } //// 클릭 이벤트(상단 숫자 클릭 시)

    // 옵션선택박스에서 누른 숫자 적용
    // 대상선정 
    const selVal = x.querySelector(".main_select_value");
    const selOpt = mainSelList.querySelectorAll(".option");

    // 숫자 적용 함수
    const chSel = val => {
        selVal.innerHTML = val.innerText
    }

    // 옵션 클릭시 숫자 적용
    selOpt.forEach(option => {
        option.addEventListener("click", function(){chSel(option)})
    }) /// 클릭 이벤트(옵션 클릭 시)
} ////// for of문 
// 예약선택폼 ////////////////////////

// 3번 페이지(ROOM) li요소 넣어서 슬라이드 리스트 만들기
// 대상 선정 -> .main_room_img 히위 ul
const roomCont = document.querySelector(".main_room_img ul")
const ctnum = document.querySelector(".ctnum");
function roomImgCont() {
    let hcode = "";
    for(let i=1;i < 6; i++) {
        hcode += `
        <li>
            <img src="./images/main/room/room${i}.jpg" alt="객실이미지" />
        </li>
        `
        ctnum.innerText = i;
    }
    roomCont.innerHTML = hcode;
}

roomImgCont();

// 5번 페이지(ROOM PACKAGE) 요소 li 넣어서 슬라이드 리스트 만들기
// 대상선정 -> .main_offer_cont 하위 ul
const packCont = document.querySelector(".main_offer_cont ul");
// 버튼
const offerBtn = document.querySelectorAll(".main_offer_btn");
// console.log(offerBtn[1]);

// 함수 기능 : packCont 내부에 객체 데이터를 이용해서 리스트 넣기
function roomPack() {
    let hcode = "";
    for(let x in pdata) {
        let data = pdata[x];
        console.log(x);
        hcode += `
        <li>
            <a href="#">
                <div class="main_offer_contwrap">
                    <figure>
                        <img
                            src="./images/main/offer/${data.img}"
                            alt="패키지이미지"
                        />
                    </figure>
                    <h3>${data.tit}</h3>
                    <h4>${data.subtit}</h4>
                    <div class="main_offer_prd">
                    <div class="main_offer_day">
                        <span>예약기간</span>
                        <span>${data.res}</span>
                    </div>
                    <div class="main_offer_day">
                        <span>투숙기간</span>
                        <span>${data.stay}</span>
                    </div>
                    </div>
                </div>
            </a>
         </li>
        `
        packCont.innerHTML = hcode;
    } // for in

    // 버튼 클릭시 다음 슬라이드로 넘어가기 기능
    // 다음 버튼
    offerBtn[1].onclick = () => {
        packCont.style.left = -85.5 + "vw";
        packCont.style.transition = "left .6s";
        offerBtn[1].style.display = "none";
        offerBtn[0].style.display = "inline-block";
    }
    
    offerBtn[0].onclick = () => {
        packCont.style.left = 0;
        offerBtn[0].style.display = "none";
        offerBtn[1].style.display = "inline-block";
    }

}

// 함수 호출
roomPack();


} // mainFn
