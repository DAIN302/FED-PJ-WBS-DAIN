// 서브페이지 타이틀 등장 액션 JS - showtit.js

window.addEventListener("DOMContentLoaded",()=> {
    console.log("ㅎㅇㅎㅇ");

    // 대상 선정
    // (1) 제목 :  .tit>h2
    const titName = document.querySelector(".tit>h2");
    // (2) 소개글 : .tit>p
    const titPara = document.querySelector(".tit>p");
    // (3) 제목 및 소개글 박스 : .tit
    const titBx = document.querySelector(".tit");

    // 글자 변수 할당
    const txtTit = titName.innerText;
    //console.log(txtTit);
    // 글자 초기화
    titName.innerText = "";
    // 코드 저장 변수 
    let tCode = "";
    // 시간 순번 변수
    let tnum = 0;
    for(let x of txtTit) {
        tCode += `<span style="transition-delay: ${tnum*0.1}s">${x}</span>`
        tnum++; 
    }
    titName.innerHTML = tCode;

    setTimeout(()=> {
        titBx.classList.add("on")
    }, 10);

}) // 로드구역