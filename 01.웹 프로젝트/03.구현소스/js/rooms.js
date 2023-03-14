// 서브페이지 JS - rooms.js

window.addEventListener("DOMContentLoaded", roomsFn);

function roomsFn() {
   // console.log("rooms");    
   // 기능 : lnb 클릭 시 해당되는 카테고리의 객실 정보 뿌리기
   // All누를시에 뒤에 /로 시작하는 하위 주소 X
   // 해당 기능 gnb메뉴에서도 구현해야함

   // 대상선정
   // 서브메뉴
   const lnb =  document.querySelectorAll(".lnb a");
   const lnbList =  document.querySelectorAll(".lnb li");
   // 컨텐츠
   const rcont = document.querySelector(".rcont");

   // 기본값 세팅
   let allRoom = rdata["all"];
   // console.log(allRoom.luxury["tit"]);


    // 리스트 만들기 함수
   function rlist(rv) {
        let hcode = "<ul>";
        for(let key in rv) {
            // console.log(key);
            // 객실이름 호출
            // console.log(rv[key].tit);
            hcode += `
            <li>
                <section class="rcontwrap">
                  <!-- 이미지 부분 -->
                  <a href="#">
                    <figure>
                      <img src="./images/sub/rooms/all/${key}.jpg" alt="${key}객실">
                      <figcaption>
                        <div class="rcont_imgtxt">
                          <div class="rcont_desc">
                            ${rv[key].txt}
                          </div>
                          <div class="rcont_btn">
                            <span>더보기</span>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                  <!-- 텍스트 부분 -->
                  <div class="rcont_txt">
                    <!-- 객실 타입 -->
                    <h3>${rv[key].type}</h3>
                    <!-- 객실 이름 -->
                    <h4>${rv[key].tit}</h4>
                    <!-- 객실 요약 -->
                    <ol class="rcont_txtsub">
                      <li>
                        <span>침대타입</span>
                        <span>${rv[key].bed}</span>
                      </li>
                      <li>
                        <span>전망</span>
                        <span>${rv[key].view}</span>
                      </li>
                      <li>
                        <span>투숙인원</span>
                        <span>${rv[key].capa}</span>
                      </li>
                      <li>
                        <span>면적</span>
                        <span>${rv[key].size}</span>
                      </li>
                    </ol>
                  </div>
                </section>
              </li>
            `
        }
        hcode += "</ul>";
        rcont.innerHTML = hcode; 
   }

   

   for(let x of lnb) {
       // 클릭이벤트 설정
    x.onclick = (e) => {
        e.preventDefault();
        // rcont.innerHTML = ""; 
        let atxt = x.innerText.toLowerCase().trim();
        // console.log(atxt);
        // console.log(atxt);
        let rinfo = rdata[atxt];
        rlist(rinfo);
        // console.log(rinfo);
           
        // if(atxt==="all") {
        //     location.href = "rooms.html";
        //     rlist(allRoom);
        // } else {
            // console.log(rinfo);
            // location.href = "rooms.html?cat="+encodeURIComponent(atxt);
            
        // }

        // 클래스 초기화
        for(let y of lnbList) {
            y.classList.remove("on");
        }

        // 클릭되는 요소 클래스 넣기
        x.parentElement.classList.add("on");
    } // 클릭이벤트


   }

   rlist(allRoom);
}