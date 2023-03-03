// 서브페이지 js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    // 1. 대상선정
    const chaList = document.querySelector(".mcha_list ul");
    // 2. 함수생성 : ul에 데이터 세팅
    function characList () {
        let hcode = "";
        for(let x in cdata) {
            let data = cdata[x];
            console.log(data);
        }
    }

    // 임시호출
    characList();

} // 로드함수