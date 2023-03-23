// 휠이벤트이동 JS - autoscroll.js

window.addEventListener("DOMContentLoaded", scrollFn);

function scrollFn() {

    // 휠 이벤트로 페이지 이동 컨트롤 ///////////////
    // 이벤트 연결 대상 선정
    // 휠 이벤트로 페이지 이동 컨트롤 ///////////////
    const indic = document.querySelectorAll(".main_nav a");

    // 인디케이터 메뉴 이벤트 연결
    indic.forEach((ele,idx,obj)=>{
        ele.addEventListener("click", ()=>movePg(idx,obj));
    })

    // 0. 변수설정
    // (1) 전체 페이지 변수 
    let pgnum = 0;
    // (2) 전체 페이지 수
    const pg =  document.querySelectorAll(".page");
    const pgcnt = pg.length;
    // console.log(pgcnt);
    // (3) 광스크롤 금지변수 0-허용 1-불허용
    let prot_sc = 0;

    // 1. 전체 휠 이벤트 설정 /////
    window.addEventListener("wheel", wheelFn, {passive:false})

    function wheelFn(e) {
        // console.log("ㅎㅇ");
        // 기본기능 막기
        e.preventDefault();

        // 광스크롤 막기
        if(prot_sc) return;
        prot_sc = 1;
        setTimeout(()=>prot_sc=0,600);

        // 휠 방향 알아내기
        let dir = e.wheelDelta;
        // console.log(dir);

        // 방향에 따른 페이지 번호 증가
        // 스크롤 아랫방향 : 페이지번호 증가
        if(dir<0) {
            // 페이지번호 1씩 증가
            pgnum++;
            // 한계수 : 페이지 끝번호(페이지수 - 1)
            if(pgnum>pgcnt-1) pgnum = pgcnt-1

        }
        // 스크롤 윗방향 : 페이지번호 감소
        else {
            pgnum--;
            // 한계수 : 페이지 첫번호(페이지수 - 0)
            if(pgnum<0) pgnum = 0
        }

        // console.log(pgnum);
        updatePg(indic);
    }

    // 메뉴 클릭 시 해당 위치로 이동
    function movePg(seq, obj) {
        // 기본기능막기
        event.preventDefault();
        //페이지번호 업데이트
        pgnum = seq
        // 함수호출
        updatePg(indic);
    }
    
    /// 페이지 이동 설정갑 업데이트
    function updatePg(obj) {
        // 1. 페이지 이동
        window.scrollTo(0, window.innerHeight*pgnum);

        // 메뉴초기화 (class on제거)
        for(let x of obj) {
            x.parentElement.classList.remove("on");
        }
        
        // 해당 메뉴에 클래스 넣기
        obj[pgnum].parentElement.classList.add("on");

        // 페이지 배경 애니메이션 클래스 넣기
        let pgAni = pg[pgnum].querySelector(".main_back_img");
        if(pgAni) {
            pgAni.classList.add("main_back_ani");
        }

        // 글자 등장 액션 함수
        const titBx = pg[pgnum].querySelector(".main_txt");
        // console.log(titBx);
        if(titBx) {
            showTxt(pgnum);
        } 
        chgColor(pgnum);
        console.log(pgnum);
        autoSlide(pgnum);
    }

    // 글자 등장 액션
    function showTxt(seq) {
        // 1. 대상선정 
        // (1) 텍스트박스
        const titBx = pg[seq].querySelector(".main_txt");
        // (2) 제목
        const titStage = pg[seq].querySelector(".main_txt h2");

        // 2. 글자 변수 할당
        const txtTit = titStage.innerText;
        console.log(txtTit);
        // 글자 초기화
        titStage.innerText = "";
        // 코드 저장 변수
        let tCode = "";
        let tnum = 0 // 시간순번변수
        for(let x of txtTit) {
            if(x===" ") x = "&nbsp";
            tCode += `<span style="transition-delay: ${tnum*0.1}s">${x}</span>`
            tnum++;
        }
        titStage.innerHTML = tCode;

        setTimeout(()=>{
            titBx.classList.add("on");
        },500);
    }

    // 4번페이지(다이닝)만 gnb 글씨색 다르게 하기 
    function chgColor (c) {
        // 1. 대상선정
        // (1) 상단
        const top = document.querySelector(".top");
        // (2) 인디케이터 
        const ind = document.querySelector(".main_nav");
        // (3) 컨택트 아이콘
        const ctmove = document.querySelector(".ctmove");

        // 2. 클래스 넣기
        if(c===3) {
            top.classList.add("on");
            ind.classList.add("on"); 
            ctmove.classList.add("on");
            dtimeBar[0].classList.add("on");
        }
        else {
            top.classList.remove("on");
            ind.classList.remove("on");
            ctmove.classList.remove("on");
            dtimeBar[0].classList.remove("on");
        }
    } // chgColor 함수


    // 3,4번 페이지 슬라이드 적용(페이드 배너/자동넘김)
    // 슬라이드 번호 변수
    let snum = 0;
    let snum2 = 0;

    const ctnum = document.querySelector(".ctnum");
    // 이벤트 대상
    const roomBtn = document.querySelectorAll(".main_room_btn button"); 
    const diningBtn = document.querySelectorAll(".main_dining_name li>span");
    // 변경 대상 1 : 슬라이드 리스트
    const roomList = document.querySelectorAll(".main_room_img ul>li");
    const diningList = document.querySelectorAll(".main_dining_img ul>li");
    // 변경 대상 2 : 타임바
    const rtimeBar = document.querySelector(".main_room_time .main_timebar");
    const dtimeBar = document.querySelectorAll(".main_dining_name li");


    // 슬라이드 개수 변수
    let scnt = roomList.length
    // 초기값
    roomList[0].classList.add("on");
    diningList[0].classList.add("on");


    // 광클금지변수 : 0 - 허용, 1 - 불허용
    let prot = 0;

    // 객실 슬라이드 변경 함수
    const rgoSlide = (seq) => {
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
            // 슬라이드 번호 증가
        }
        // 1-2. 왼쪽버튼 클릭시 : seq===0
        else {
            snum--;
            // 슬라이드 번호 감소
        }

        // 2. 한계값 체크 : 
        // 처음이전-> 끝, 끝다음 ->처음
        if(snum===-1) snum = scnt - 1;
        else if(snum === scnt) snum = 0;

        ctnum.innerText = snum+1;

        // 3. 이동 : 해당순번 슬라이드 li에 클래스 "on" 넣기
        // 변경대상 : roomList 변수
        chgSlide(roomList, snum);
    };// rgoSlide 함수


    // 다이닝 슬라이드 변경 함수(자동넘기기 위한 함수)
    const dgoSlide = () => {
        // 광클금지 설정하기 //////
        if (prot) return;
        prot = 1; // 잠금!
        setTimeout(() => {
            prot = 0; // 해제!
        }, 400); /// 0.4초후 해제! ///

        // 슬라이드 번호 증가
        snum2++;
        console.log(snum2);

        // 2. 한계값 체크 : 끝다음 ->처음   
        if(snum2 === scnt) snum2 = 0;

        // 3. 이동 : 해당순번 슬라이드 li에 클래스 "on" 넣기
        // 변경대상 : diningList 변수
        chgSlide(diningList, snum2);

        // 4. 연결 : 해당순번 텍스트 li에 클래스 "on" 넣기
        // 변경대상 :  dtimeBar 변수
        // 전체초기화
        chgSlide(dtimeBar, snum2);
    };// dgoSlide 함수

    // 3번 페이지 버튼에 이벤트 설정
    roomBtn.forEach((ele, idx)=>{
        ele.onclick = () =>{
            clearAuto();
            rtimeBar.classList.remove("on");
            rgoSlide(idx);
            // 슬라이드 넘어가면 애니메이션 초기화
            setTimeout(()=>{
                rtimeBar.classList.add("on");
            },0)
        } // click
    }) // forEach

     // 4번 페이지 다이닝 이름 클릭 시 해당되는 다이닝 이미지 보여주기
     diningBtn.forEach((ele, idx)=> {
        ele.onclick = () => {
            clearAuto();
            // 다이닝 이름 순번 === 슬라이드 순번
            snum2 = idx;
            // 해당 순번 슬라이드 li에 클래스 넣기
            chgSlide(diningList, snum2);
            // 전체 다이닝 이름 초기화
            chgSlide(dtimeBar, snum2);
            // clearAuto()
        } // click
    }) /// forEach


    // 3, 4번 페이지 페이드 배너 함수 만들기
    function chgSlide(obj, ssnum) {
        // 전체초기화
        obj.forEach((ele)=>{
            ele.classList.remove("on");
        })

        // 해당순번 li에 클래스 넣기
        obj[ssnum].classList.add("on");
    } // chgSlide

    // 인터벌 함수 지우기 위한 변수
    let autoI;
    // 타임아웃 함수 지우기 위한 변수
    let autoT;

    function autoSlide(c) {
       // 3번 페이지 왔을 때 자동 넘김 작동 
       if(c===2) {
            console.log("3번");
            rtimeBar.classList.add("on");
            // 인터발함수로 슬라이드 함수 호출
            autoI = setInterval(()=>{
                rgoSlide(1)
            }, 5000);
        } //if
        // 4번 페이지 왔을 때 자동 넘김 작동
        else if (c===3) {
            console.log("4번")    
            // 인터발함수로 슬라이드 함수 호출
            autoI = setInterval(()=>{
                dgoSlide()
            }, 5000);
        }
        else {
            initSlide();
        }
    }/////// autoSlide 함수  
    

    function clearAuto() {
        console.log("인터발 ㅂㅂ");
        // 1. 인터발 지우기
        clearInterval(autoI);

        // 2. 타임아웃 지우기
        clearTimeout(autoT);

        // . 잠시 후 다시 작동하도록 타임아웃으로 인터발함수 호출
        autoT = setTimeout(()=>autoSlide(pgnum), 0);
    } // clearauto ///////////


    // 문제1 : 3/4번 페이지 슬라이드 다른 곳으로 슬라이드 했다가 다시 돌아오면
    // 자동넘김 시간이 빨라짐 
    // 원인?? updatePg 함수에서 autoSlide 함수를 호출하는데 이때문에 페이지에 다시 돌아올때마다
    // 인터벌이 겹쳐서 그런것 같음 
    // 4번 페이지는 바로 빨라지지 않고 다른 식당 이름 클릭하면 슬라이드 넘김이 빨라짐


    // 슬라이드 진행 초기화 함수
    function initSlide() {
        // 1. 인터발 지우기
        clearInterval(autoI);
    } // initSlide 

       

    

}