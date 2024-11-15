// 서브페이지 JS - rooms.js
import { rdata } from "./data/rdata.js";

roomsFn();

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
   
// 파라미터값
let pm = location.href;

// 시스템을 통한 접근만 허용!
if(pm.indexOf("?")===-1) location.href="index.html";

// 값잘라오기
pm = pm.split("?")[1].split("=")[1];
console.log("값:",pm);

let rinfo = rdata[pm];

  // 최초셋팅
if(pm==="rooms") 
rlist(allRoom);
else{
  rlist(rinfo);
  $(".lnb a:contains("+pm.toUpperCase()+")").parent().addClass("on")
  .siblings().removeClass("on");
  // console.log("888",$(".lnb a:contains("+pm.toUpperCase()+")"));
}


  console.log(rinfo);

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
                  </a>
                </section>
              </li>
            `
        }
        hcode += "</ul>";
        rcont.innerHTML = hcode; 
   } // 리스트 만들기 함수

   

   for(let x of lnb) {
       // 클릭이벤트 설정
    x.onclick = (e) => {
        e.preventDefault();
        // rcont.innerHTML = ""; 
        let atxt = x.innerText.toLowerCase().trim();
        let rinfo = rdata[atxt];
        rlist(rinfo);
        // console.log(rinfo);
           
        // 클래스 초기화
        for(let y of lnbList) {
            y.classList.remove("on");
        }

        // 클릭되는 요소 클래스 넣기
        x.parentElement.classList.add("on");

        rcontList = document.querySelectorAll(".rcont>ul>li");
        // 처음 두게는 처음부터 보이게 하기
        rcontList[0].classList.add("on");
        rcontList[1].classList.add("on");
        scrollShow(rcontList);

        moveSubRooms();
    } // 클릭이벤트
   } // for of

   // 초기 세팅
  //  rlist(allRoom);


   // 스크롤 시 하위메뉴 나타나기
   let rcontList = document.querySelectorAll(".rcont>ul>li");
   // console.log(rcontList);
   scrollShow(rcontList);

   
   // 처음 두게는 처음부터 보이게 하기
   rcontList[0].classList.add("on");
   rcontList[1].classList.add("on");
   
   // 스크롤 시 하위메뉴 나타나기
   function scrollShow(obj) {
      // 화면높이값의 4/5구하기
      const hv = window.innerHeight/6*5;
      // 윈도우 높이값
      const winH = window.innerHeight;
  
      // 전체 문서 높이값
      const docH = document.body.clientHeight;
  
      // 스크롤한계값
      const scLimit = docH - winH
  
      // 등장액션 대상 위치값 리턴함수
      const retVal = ele => ele.getBoundingClientRect().top;

      // 클래스 넣기 함수
      const showIt = x => { // x는 등장요소
          // 대상요소의 현재 스크롤 위치
          let xval = retVal(x)
          // 화면 높이값의 절반값에 왔을때 첫번째 박스 등장
          // hv변수 -> 화면 높이값의 절반값
          if(xval < hv && xval > 0) {
              x.classList.add("on");
          }
      };       

      window.addEventListener("scroll", ()=> {
      for(let x of obj) showIt(x);
      })
   } // scrollShow 함수


   // room 페이지와 링크 연결
   function moveSubRooms() {
      const roomListLink = document.querySelectorAll(".rcontwrap>a");
      console.log(roomListLink);
      roomListLink.forEach((ele)=>{
        ele.onclick = (e) =>{
          e.preventDefault();
          let atxt = ele.querySelector(".rcont_txt>h4").innerText.toLowerCase().trim();
          atxt = atxt.replace(" ", "");
          // console.log(atxt);
          let url;
          switch(atxt) {
              case"luxury":url = atxt; break;
              case"magnifique":url = atxt; break;
              case"luxurylake":url = atxt; break;
              case"clubluxury":url = atxt; break;
              case"magnifiquefamily":url = atxt; break;
              default: url = "esc";
          }

          if(url==="esc") {
              alert("공사중입니다.")
          } else {
              location.href = "room.html?cat="+encodeURIComponent(url);
          }
        }
      })
    }

    // 함수 호출
    moveSubRooms();


} // 로드 함수