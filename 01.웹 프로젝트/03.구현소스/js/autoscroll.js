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
    const pgcnt = document.querySelectorAll(".page").length;
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

    /// 페이지 이동 설정갑 업데이트
    function updatePg(obj) {
        // console.log("ㅎㅇㅎㅇ");
        // 1. 페이지 이동
        window.scrollTo(0, window.innerHeight*pgnum);

        // 메뉴초기화 (class on제거)
        for(let x of obj) {
            x.parentElement.classList.remove("on");
        }
        
        // 해당 메뉴에 클래스 넣기
        obj[pgnum].parentElement.classList.add("on");
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

}