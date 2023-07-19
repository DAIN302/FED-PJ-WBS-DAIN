// 메인페이지 JS - main.js
import { ddata, pdata } from "./data/mdata.js";

mainFn();

function mainFn() {
    // 링크 이동
    function linkMove() {
        // 서브페이지 이동 링크
        const ctmove = document.querySelector(".ctmove");
        const roomsMore = document.querySelector(".main_room_txt h4 a");

        ctmove.onclick = (e) => {
            e.preventDefault();
            location.href = "contact.html";
        };

        roomsMore.onclick = (e) => {
            e.preventDefault();
            location.href = "rooms.html?rm=rooms";
        };
    }

    linkMove();

    // 달력 닫는 함수
    const closeCalendar = (opt = 0) => {
        let calendarHeight = $(".calendar").height();
        let checkOutDateValue = $(".checkOut_date").val();
        if ((calendarHeight > 1 && checkOutDateValue !== "날짜 선택") || opt) {
            $(".calendar").removeClass("active");
        }
        // 날짜선택하고 다시 열었을때 이상하므로 코드 고칠 필요가 있음
    };

    // 날짜선택 클릭 시 달력 열리기
    $(".main_res_chk>input").click(function () {
        // console.log("달력ㅎㅇ");
        $(".calendar").addClass("active");
        $(".main_res_chk>input").val("날짜 선택");
    });

    $(document).on("click", () => closeCalendar());

    // $("div>.current").click(function(){
    //     console.log("gd");
    // })

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
    for (let x of mainSel) {
        let mainSelList = x.querySelector(".main_select_list");
        let selArrow = x.querySelector(".main_select_arrow span");
        x.onclick = () => {
            let selHeight = mainSelList.querySelector("ul").offsetHeight;

            // 옵션선택박스 열리기
            mainSelList.style.height = selHeight + "px";
            mainSelList.style.transition = "height .3s ease-out";

            // 화살표아이콘 방향변경
            selArrow.style.transform = "rotate(-180deg)";
            console.log(selHeight, mainSelList.offsetHeight);

            // 옵션선택박스 닫힘 함수
            const closeOpt = () => {
                if (mainSelList.offsetHeight > 1) {
                    mainSelList.style.height = "0";
                    selArrow.style.transform = "rotate(0)";
                }
            };

            // 한번 더 누르거나 바깥, 다른 요소 클릭 시 옵션선택박스 닫힘
            document.addEventListener("click", () => closeOpt());

            // 달력닫기
            closeCalendar(1);
        }; //// 클릭 이벤트(상단 숫자 클릭 시)

        // 옵션선택박스에서 누른 숫자 적용
        // 대상선정
        const selVal = x.querySelector(".main_select_value");
        const selOpt = mainSelList.querySelectorAll(".option");

        // 숫자 적용 함수
        const chSel = (val) => {
            selVal.innerHTML = val.innerText;
        };

        // 옵션 클릭시 숫자 적용
        selOpt.forEach((option) => {
            option.addEventListener("click", function () {
                chSel(option);
            });
        }); /// 클릭 이벤트(옵션 클릭 시)
    } ////// for of문
    // 예약선택폼 ////////////////////////

    // 3번 페이지(ROOM) li요소 넣어서 슬라이드 리스트 만들기
    // 대상 선정 -> .main_room_img 히위 ul
    const roomCont = document.querySelector(".main_room_img ul");
    const ctnum = document.querySelector(".ctnum");
    function roomImgCont() {
        let hcode = "";
        for (let i = 1; i < 6; i++) {
            hcode += `
        <li>
            <img src="./images/main/room/room${i}.jpg" alt="객실이미지" />
        </li>
        `;
        }
        roomCont.innerHTML = hcode;
    }

    roomImgCont();

    // 4번 페이지(DINING) li요소 넣어서 슬라이드 리스트 만들기
    const dCont = document.querySelector(".main_dining_img ul");
    console.log(dCont);
    function dImgList() {
        let hcode = "";
        for (let x of ddata) {
            hcode += `
        <li>
            <img src="./images/main/dining/${x}.jpg" alt="다이닝이미지" />
        </li>
        `;
        }
        dCont.innerHTML = hcode;
    }

    // 함수 호출
    dImgList();

    // 5번 페이지(ROOM PACKAGE) 요소 li 넣어서 슬라이드 리스트 만들기
    // 대상선정 -> .main_offer_cont 하위 ul
    const packCont = document.querySelector(".main_offer_cont .listbx");
    // const packContMobile = document.querySelector(".main_offer_cont .listslide_mobile>ul");
    // console.log(packContMobile);
    // 버튼
    const offerBtn = document.querySelectorAll(".main_offer_btn");
    // console.log(offerBtn[1]);

    // 함수 기능 : packCont 내부에 객체 데이터를 이용해서 리스트 넣기
    function roomPack() {
        // let mobileHcode = "";
        let hcode = "";

        hcode += "<ul>";
        for (let x in pdata) {
            let data = pdata[x];
            console.log(x);

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
                        <span class="fa-solid fa-calendar-days"></span>
                        <span>${data.stay}</span>
                    </div>
                    </div>
                </div>
            </a>
         </li>
        `;
        } // for in.
        hcode += "</ul>";

        packCont.innerHTML = hcode;
    }

    // 함수 호출
    roomPack();

    
    $(".main_offer_cont>.listbx>ul>li a").click(function (e) {
        e.preventDefault();
        console.log(77);
    });

    // 변경대상
    const packSlide = document.querySelector(".listbx>ul");
    const packSlideList = packSlide.querySelectorAll("li");
    // 슬라이드 번호
    const packSlideNum = document.querySelector(".main_offer_slidenum>.slidenum");
    // 슬라이드 번호용 변수
    let packNum = 1;
    // console.log(packSlideNum);

    // 드래그 이벤트 호출
    slideDrag(packSlide);

    // 리스트에 순번 붙이기
    packSlideList.forEach((ele, idx) => {
        ele.setAttribute("data-seq", idx);
    });


    // 5번 페이지에서 슬라이드
    function roompackSlide(seq) {
        let packSlideLists = packSlide.querySelectorAll("li");

            let sz = $(".listbx").width()/2;
        // 방향에 따른 분기
        // 오른쪽(다음) 버튼 클릭 시
        if (seq) {
            packSlide.appendChild(packSlideLists[0]);
            // 50%-> px
            console.log("dd:",sz,resultX);
            packSlide.style.left = -(sz-resultX)+"px";
            packSlide.style.transition = "none";

            // setTimeout으로 코드분리
            setTimeout(() => {
                packSlide.style.left = "-100%";
                packSlide.style.transition = "left .4s ease-out";
            }, 1);

            // 슬라이드 번호 변경
            if (packNum > packSlideLists.length - 1) packNum = 0;
            packNum++;
            packSlideNum.innerText = packNum;
        }
        // 왼쪽(이전) 버튼 클릭시
        else {
            packSlide.insertBefore(packSlideLists[packSlideLists.length - 1], packSlideLists[0]);
            packSlide.style.left = -(sz*3-resultX)+"px";
            packSlide.style.transition = "none";
            // setTimeout으로 코드분리
            setTimeout(() => {
                packSlide.style.left = "-100%";
                packSlide.style.transition = "left .4s ease-out";
            }, 1);

            // 슬라이드 번호 변경
            packNum--;
            if (packNum < 1) packNum = packSlideLists.length;
            packSlideNum.innerText = packNum;
        }
    }

    // 클릭 설정
    offerBtn.forEach((ele, idx) => {
        ele.onclick = () => {
            roompackSlide(idx);
        };
    });

// 위치 이동차이 결과 변수
let resultX=0;

    // 드래그 적용 함수
    function slideDrag(obj) {
        // 드래그 상태 변수
        let drag = false;
        // 첫번째 위치 포인트
        let firstX;
        // 마지막 위치 포인트
        let lastX = obj.offsetLeft;
        // 움직일 때의 위치포인트
        let moveX;
        

        // 함수 생성
        // 드래그 상태 true
        const dragTrue = () => (drag = true);
        // 드래그 상태 true
        const dragFalse = () => (drag = false);
        // 드래그 움직일 때 작동 함수
        const dragMove = () => {
            if (drag) {
                obj.style.transition = "none";
                // 드래그 상태에서 움직일 떄 위치값 moveX
                moveX = event.pageX || event.changedTouches[0].pageX;

                resultX = moveX - firstX;
                // 움직일때 위치값 - 처음 위치값
                // console.log(firstX, moveX, resultX);
                obj.style.left = resultX + lastX + "px";
            }
        };

        // 첫번째 위치포인트 세팅함수
        const firstPoint = () => {
            firstX = event.pageX || event.changedTouches[0].pageX;
        };

        // 마우스 내려갈때(터치시작할때 )
        obj.addEventListener("mousedown", () => {
            dragTrue();
            firstPoint();
        });
        obj.addEventListener("touchstart", () => {
            dragTrue();
            firstPoint();
        });

        // 마우스 올라갈때(터치 끝날때)
        obj.addEventListener("mouseup", () => {
            dragFalse();
            goWhere(obj);
        });
        obj.addEventListener("touchend", () => {
            dragFalse();
            goWhere(obj);
        });

        // 마우스 움직일때
        obj.addEventListener("mousemove", dragMove);
        obj.addEventListener("touchmove", dragMove);

        // 마우스 벗어날때
        obj.addEventListener("mouseleave", dragFalse);
    } // slideDrag

    // 드래그 시 이동 판별 함수
    function goWhere(obj) {
        let tgLeft = obj.offsetLeft;

        // 부모박스 기준한 left 위치값 구하기
        let tgPoint = obj.parentElement.clientWidth * 1;
        console.log(tgLeft, tgPoint);

        // 방향 판별
        // 왼쪽 이동(오른쪽 버튼)
        if (tgLeft < -tgPoint - 50) {
            roompackSlide(1);
        }
        // 오른쪽 이동(왼쪽 버튼)
        else if (tgLeft > -tgPoint + 50) {
            roompackSlide(0);
        }
        // //제자리
        else {
            obj.style.left = -tgPoint + "px";
            obj.style.transition = "left .2s ease-out";
        }
    }
} // mainFn
