// 서브페이지 js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    // 1. 대상선정
    const chaList = document.querySelector(".mcha_list ul");
    const chaDatabx = document.querySelector(".mcha_data");
    const vidList = document.querySelector(".mvideo_cont ul");
    const vidDatabx = document.querySelector(".mvid_data");
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
                
                cbtn.addEventListener("click", ()=>closeBx(chaCont));        
            } // click
        }) // forEach
    } /// characList 힘수
    
    //닫기 기능 박스
    const closeBx = (ele) => {
        console.log("닫혀라!");
        ele.remove()
    }
    // 호출
    characList();

    // 페이지 넘기기 함수
    const pageSlide = (ele, lf) => {
        ele.style.left = lf+"%"
    }

    function videoList () {
        let hcode = "";
        // for in문으로 캐릭터 리스트 넣기
        for(let x in vdata) {
            let data = vdata[x];
            // console.log(data);
            hcode += `
            <li>
                <div class="mvideo_imgbx">
                    <img src="./subimg/video/${data.imglink}" alt="${x}">
                    <div>
                        <span>
                            <span class="fa-solid fa-play"></span>
                        </span>
                        <span>${data.videotime}</span>
                    </div>
                </div>
                <div class="mvideo_txtbx">
                    <div class="mcha_beam">
                        <span></span>
                        <span></span>
                    </div>
                    <h4>${data.titname}</h4>
                </div>
            </li>`
        } // for in
        vidList.innerHTML = hcode;

        // 버튼 클릭 시 다음 비디오 목록으로 넘어가기
        const vbtn = document.querySelectorAll(".vlist_btn");

        vbtn[0].onclick = () => {
            pageSlide(vidList, "-97");
            vbtn[0].style.display = "none";
            vbtn[1].style.display = "inline-block";
        }
        
        vbtn[1].onclick = () => {
            pageSlide(vidList, "0");
            vbtn[0].style.display = "inline-block";
            vbtn[1].style.display = "none";    
        }

        // 비디오 이미지 클릭 시 해당되는 비디오 화면에 출력
        const vidData = vidList.querySelectorAll("li");
        console.log(vidData);
        vidData.forEach((ele) =>{
            ele.onclick = () => {
               let ltxt = ele.querySelector("img").alt
               let ldata = vdata[ltxt];
               //console.log(ldata);
               vidDatabx.innerHTML = `
                <div class="mvid_dtcont">
                    <div class="mvid_contwrap">
                        <iframe src="https://secure.disney.com/embed/${ldata.videolink}?domain=www.starwars.com" allowfullscreen frameborder="0"></iframe>
                    </div>
                    <button class="cbtn">×</button>
                </div>
               `;

                // 버튼 클릭 시 동영상 박스 제거
                let vidCont = vidDatabx.querySelector(".mvid_dtcont");
                let cbtn = vidCont.querySelector(".cbtn");
                
                cbtn.addEventListener("click", ()=>closeBx(vidCont)); 
            } // click
        }) // forEach
    } /// videoList 힘수    

    videoList();
    

} // 로드함수