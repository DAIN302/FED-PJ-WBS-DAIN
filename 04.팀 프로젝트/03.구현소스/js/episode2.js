// 서브페이지 js

window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
    // 1. 대상선정
    // 캐릭터박스
    const chaList = document.querySelector(".mcha_list ul");
    const chaDatabx = document.querySelector(".mcha_data");
    // 비디오박스
    const vidList = document.querySelector(".mvideo_cont ul");
    const vidDatabx = document.querySelector(".mvid_data");
    // 갤러리박스
    const gallStBx = document.querySelector(".gall_story ul");
    const gallBhBx = document.querySelector(".gall_behind ul");
    // 2. 함수생성 : ul에 데이터 세팅

    /*
        함수이름 : characList
        기능 
        1. 캐릭터 리스트에 cdata에 있는 캐릭터 객체 정보 담기
        2. 캐릭터 리스트 클릭 시 해당되는 캐릭터의 정보 박스 열기
        3. 열린 캐릭터 정보 박스의 닫기 버튼 누르면 박스 없어짐
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
    /*
        함수이름 : videoList
        기능 
        1. 비디오에 vdata에 있는 비디오 객체 정보 담기
        2. 비디오 리스트 클릭 시 해당되는 비디오 박스 열기
        3. 열린 비디오 박스의 닫기 버튼 누르면 박스 없어짐
    */
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

    /*
        함수이름 : gallList
        기능 
        1. 갤러리 이미지 박스에 이미지 출력
        2. 갤러리 텍스트 박스에 gdata에 있는 배열 정보 출력
        3. 이미지 순서에 해당하는 번호 출력(ex. 1 of 25)
        4. 이전 혹은 다음 버튼 클릭 시 페이드 효과로 다음 이미지 출력
    */
   // console.log(gdata.story[0]);
   // console.log(gdata.story.length);
   function gallList(ele, cls, lik) {
    let gnum = 0;
    const gbtn = cls.parentElement.querySelectorAll(".glist_btn");
    // 이미지출력
    const gimgBx = cls.querySelector(".gall_imgbx");
    const gtxtBx = cls.querySelector(".gall_txtbx p");
    const gcntbx = cls.querySelectorAll(".gall_cnt span"); 
    
    // 컨텐츠 넣기 함수
    const gCont = (val) => {
        gimgBx.innerHTML = `<img src="./subimg/gallery/${lik}/${val+1}.jpeg" alt="${lik}">`;
        gtxtBx.innerText = `${ele[val]}`;
        gcntbx[0].innerText = val+1;
    }

    // 초기값 세팅
    if(gnum===0) {
        gCont(0);
        gcntbx[1].innerText = ele.length;
    }

    // 이미지 및 텍스트 넘어가기 함수
    const goImg = (seq) => {
        if(seq) {
            console.log("다음!",gnum);
            gnum++
            if(gnum>ele.length-1) {
                gnum = 0;
            }
            gCont(gnum);
        }
        else {
            console.log("이전!",gnum);
            gnum--
            if(gnum<0) {
                gnum = ele.length-1;
            }
            gCont(gnum);
        }
    }
    
    gbtn.forEach((bb, idx)=>{
        bb.onclick = () =>{
            // console.log("gd", idx);
            goImg(idx);
        }
    })
    

    // let hcode = "";
    //     for(let i = 0; i < ele.length; i++) {
    //         hcode += `
    //         <li>
    //             <div class="gall_wrap">
    //                 <div class="gall_imgbx">
    //                     <img src="./subimg/gallery/${lik}/${i+1}.jpeg" alt="${lik}">
    //                 </div>
    //                 <div class="gall_txtbx">
    //                     <div class="gall_cnt">
    //                         <span>${i+1}</span>
    //                           of  
    //                         <span>${ele.length}</span>
    //                     </div>
    //                     <div class="mcha_beam">
    //                         <span></span>
    //                         <span></span>
    //                     </div>
    //                     <p>${ele[i]}</p>
    //                 </div>
    //             </div>
    //         </li>  
    //         `;
    //     }
    //     cls.innerHTML = hcode;
   }
   gallList(gdata.story, gallStBx, "story");
   gallList(gdata.behind, gallBhBx, "behind");
    

} // 로드함수