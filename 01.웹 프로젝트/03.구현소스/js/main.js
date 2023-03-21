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
    }
    roomCont.innerHTML = hcode;
}

roomImgCont();

// 슬라이드 번호 변수
let snum = 0;
// 이벤트 대상
const roomBtn = document.querySelectorAll(".main_room_btn button"); 
// 변경 대상 1 : 슬라이드 리스트
const roomList = roomCont.querySelectorAll("li");
// 변경 대상 2 : 타임바
const rtimeBar = document.querySelector(".main_room_time .main_timebar");
console.log(rtimeBar);

// 슬라이드 개수 변수
let scnt = roomList.length
// 초기값
roomList[0].classList.add("on");
rtimeBar.classList.add("on");


// 광클금지변수 : 0 - 허용, 1 - 불허용
let prot = 0;

// 슬라이드 변경 함수
const goSlide = (seq) => {
    console.log("슬고", seq);
    // 광클금지 설정하기 //////
    if (prot) return;
    prot = 1; // 잠금!
    setTimeout(() => {
        prot = 0; // 해제!
    }, 400); /// 0.4초후 해제! ///
    


    // 1. 방향에 따른 분기
    // 1-1. 오른쪽버튼 클릭시 : seq===1
    if(seq) {
        snum++;
        console.log("난 오", snum);
        // 슬라이드 번호 증가
    }
    // 1-2. 왼쪽버튼 클릭시 : seq===0
    else {
        snum--;
        console.log("난 왼", snum);
        // 슬라이드 번호 감소
    }


    // 2. 한계값 체크 : 
    // 처음이전-> 끝, 끝다음 ->처음
    if(snum===-1) snum = scnt - 1;
    else if(snum === scnt) snum = 0;

    ctnum.innerText = snum+1;


    // 3. 이동 : 해당순번 슬라이드 li에 클래스 "on" 넣기
    // 변경대상 : slide 변수
    // 전체초기화
    chgSlide(roomList);

    // 4. 블릿연결 : 해당순번 텍스트 li에 클래스 "on" 넣기
    // 변경대상 : 변수
    // 전체초기화
    // chgSlide(indic);


};// goSlide 함수

// 버튼에 이벤트 설정
roomBtn.forEach((ele, idx)=>{
    ele.onclick = () =>{
        clearAuto();
        // 슬라이드 넘어가면 애니메이션 초기화
        rtimeBar.classList.remove("on");
        goSlide(idx);
        setTimeout(()=>{
            rtimeBar.classList.add("on");
        },0)
        
        
    }
})


// 3, 4번 페이지 페이드 배너 함수 만들기
function chgSlide(obj) {
    // 전체초기화
    obj.forEach((ele)=>{
        ele.classList.remove("on");
    })

    // 해당순번 li에 클래스 넣기
    obj[snum].classList.add("on");
}

// 인터벌 함수 지우기 위한 변수
let autoI;
// 타임아웃 함수 지우기 위한 변수
let autoT;

function autoSlide() {
    console.log("인터발ㅎㅇ");
    // 인터발함수로 슬라이드 함수 호출
    autoI = setInterval(()=>{
        goSlide(1)
    }, 5000);
}/////// autoSlide 함수

// 자동넘김 최초호출
autoSlide();

function clearAuto() {
    console.log("인터발 ㅂㅂ");
    // 1. 인터발 지우기
    clearInterval(autoI);

    // 2. 타임아웃도 지우지 않으면 쌓여서 타임아웃 쓰나미 실행이 발생
    clearTimeout(autoT);

    // . 잠시 후 다시 작동하도록 타임아웃으로 인터발함수 호출
    // 5초후(인터발은 3초후, 토탈 8초후 작동시작)
    autoT = setTimeout(autoSlide, 0);
}


// 5번 페이지(ROOM PACKAGE) 요소 li 넣어서 슬라이드 리스트 만들기
// 대상선정 -> .main_offer_cont 하위 ul
const packCont = document.querySelector(".main_offer_cont .listslide");
// 버튼
const offerBtn = document.querySelectorAll(".main_offer_btn");
// console.log(offerBtn[1]);

// 함수 기능 : packCont 내부에 객체 데이터를 이용해서 리스트 넣기
function roomPack() {
    let hcode = "";

    // 임시순번변수
    let temp = 0;
    
    for(let x in pdata) {
        let data = pdata[x];
        console.log(x);

        if(temp===0||temp===3)hcode += "<ul>";
        
        hcode += `
        <li>
            <a href="#">
                <div class="main_offer_contwrap">
                    <figure>
                        <img
                            src="./images/main/offer/${data.img}"
                            alt="패키지이미지"/>
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
        `;

        
        if(temp===2||temp===5)hcode += "</ul>";

        // temp증감
        temp++;

    } // for in
    
    packCont.innerHTML = hcode;
    // 버튼 클릭시 다음 슬라이드로 넘어가기 기능
    // 다음 버튼
    offerBtn[1].onclick = () => {
        packCont.style.left = "-100%";
        packCont.style.transition = "left .2s";
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
