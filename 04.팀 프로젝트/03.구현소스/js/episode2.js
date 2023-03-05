// 서브페이지 js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    // 1. 대상선정
    const chaList = document.querySelector(".mcha_list ul");
    const chaDatabx = document.querySelector(".mcha_data");
    // 2. 함수생성 : ul에 데이터 세팅

    /*
        함수이름 : characList
        기능 
        1. 캐릭터 리스트에 cdata에 있는 캐릭터 객체 정보 담기
        2. 캐릭터 리스트 클릭 시 해당되는 캐릭터의 정보 박스 열기
    */
    function characList () {
        let hcode = "";
        // for in문으로 캐릭터 리스트 넣기
        for(let x in cdata) {
            let data = cdata[x];
            // console.log(data);
            hcode += `
            <li>
                <div class="mcha_wrap">
                    <div>
                        <img src="./subimg/character/${data.imglink}" alt="${x}">
                    </div>
                    <div class="mcha_beam">
                        <span></span>
                        <span></span>
                    </div>
                    <h4>${data.name}</h4>
                    </div>
                    </li>`
        } // for in
        chaList.innerHTML = hcode;
        const chaData = chaList.querySelectorAll("li");
        chaData.forEach((ele)=>{
            // console.log(ldata.name);
            ele.onclick = () => {
                let ltxt = ele.querySelector("img").alt
                let ldata = cdata[ltxt];
                chaDatabx.innerHTML = `
                <div class="mcha_cont">
                        <div class="mcha_contwrap">
                            <div class="mcha_cont_img">
                                <img src="./subimg/character/${ldata.imglink}" alt="${ldata}">
                            </div>
                            <div class="mcha_cont_txt">
                                <h4>${ldata.name}</h4>
                                <div class="mcha_beam">
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>${ldata.desc}</p>
                            </div>
                        </div>
                        <button class="cbtn">×</button>
                    </div>
                `;
                // console.log(cbtn);
                 
                // 버튼 클릭 시 캐릭터 소개 박스 제거
                let chaCont = chaDatabx.querySelector(".mcha_cont");
                let cbtn = chaCont.querySelector(".cbtn");
                const closeChabx = () => {
                    console.log("닫혀라!");
                    chaCont.remove()
                }
                
                cbtn.addEventListener("click", closeChabx);        
            } // click
        }) // forEach

    } /// characList 힘수
    
    // 호출
    characList();
    

} // 로드함수