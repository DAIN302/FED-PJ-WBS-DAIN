// 서브페이지 JS - lux.js
import { rsdata, roomsData } from "./data/rdata.js";

// 넘어온 url 받기
let pm = location.href;
// 시스템을 통한 접근만 허용!
if(pm.indexOf("?")===-1) location.href="index.html";
pm = pm.split("?")[1].split("=")[1];
// pm값 특수문자 복원
pm = decodeURIComponent(pm);
console.log(pm);


window.addEventListener("DOMContentLoaded", roomFn);

function roomFn() {
    const subRoomData = roomsData[pm];

    // 넘어온 객체 데이터로 내용 넣기
    $(".sub_cont_tit h3").text(subRoomData[0]).next().text(subRoomData[1])
    .next().text(subRoomData[2]);
    $(".sub_back_img").html(`<img src="./images/sub/${pm}/1.jpg" alt="객실배경">`)

    for(let i = 3; i<subRoomData.length; i++) {
        $(".sub_cont_detail>ul>li").eq(i-3).find("span").eq(1).text(subRoomData[i])
    }

    for(let i=0; i<2 ;i++) {
        $(".sub_cont_imglist>ol>li").eq(i).html(`<img src="./images/sub/${pm}/${i+1}.jpg" alt="객실이미지" />`)
    }
    
    
    // console.log("gg");
    // (1) 기능 : 첫페이지의 아래 화살표 버튼 클릭 시 다음페이지로 이동
    // 대상선정 
    // 클릭 대상 : .sub_cont_btn span
    const cbtn = document.querySelector(".sub_cont_btn span");
    cbtn.onclick = () => {
        window.scrollTo(0, window.innerHeight*1);
    } // click

    // (2) 기능 : 객실이미지의 버튼을 누르면 이미지 이동
    
    // 버튼 클릭시 다음 슬라이드로 넘어가기 기능
    // 클릭대상 : .sub_cont_imgbtn button
    const rimgBtn = document.querySelectorAll(".sub_cont_imgbtn button");
    // 이동대상 : .sub_cont_imglist>ol
    const rimgList = document.querySelector(".sub_cont_imglist>ol");
    console.log(rimgList);
    function imgSlide() {
        rimgBtn.forEach((ele, idx)=> {
            ele.onclick = () => {
                // 다음 버튼
                if(idx) {
                    rimgList.style.left = "-50%";
                    rimgList.style.transition = "left .5s ease-in-out";
                    ele.style.display = "none";
                    rimgBtn[0].style.display = "inline-block"
                }
                // 이전 버튼
                else {
                    rimgList.style.left = 0;
                    ele.style.display = "none"
                    rimgBtn[1].style.display = "inline-block"
                    console.log(ele);
                }
            } // click
        })// forEach
    }
    // 함수호출
    imgSlide();

    const ameCont = document.querySelectorAll(".sub_cont_ament");
    scrollShow(ameCont);

    // (3) 기능 : 객체 데이터로 서비스 부분에 데이터 넣고, 스크롤 이벤트(스크롤 시 목록 나타나기)   
    // 대상
    // 데이터 넣을 대상 : .sub_cont_sercont
    const serCont = document.querySelector(".sub_cont_sercont");
    serList(serCont)

    function serList(obj) {
        console.log(obj);
        let hcode = "<ol>";
        for(let key in rsdata) {
            console.log(key);
            hcode += `
            <li>
                <figure class="sub_cont_serimg">
                 <img src="./images/sub/service/${key}.jpg" alt="이미지">
                </figure>
                <article class="sub_cont_sertxt">
                    <h3>${rsdata[key].sname}</h3>
                    <p>${rsdata[key].sdesc}</p>
                    <ul>
                        <li>
                            <span>위치</span>
                            <span>${rsdata[key].sloca}</span>
                        </li>
                        <li>
                            <span>시간</span>
                            <span>${rsdata[key].stime}</span>
                        </li>
                        <li>
                            <span>문의</span>
                            <span>${rsdata[key].sinq}</span>
                        </li>                         
                    </ul>
                    <small>${rsdata[key].setc}</small>
                </article>
            </li> 
            `
        } // for in문
        hcode += "</ol>"
        obj.innerHTML = hcode;

        const serContList = serCont.querySelectorAll("ol>li");
        console.log(serContList);

        scrollShow(serContList);

    } // serList 함수

    function scrollShow(a) {
        // 화면높이값의 4/5구하기
        const hv = window.innerHeight/5*4;
        // 윈도우 높이값
        const winH = window.innerHeight;
    
        // 전체 문서 높이값
        const docH = document.body.clientHeight;
        console.log("문서전체높이", docH); 
    
        // 스크롤한계값
        const scLimit = docH - winH
        console.log("스크롤한계값", scLimit); 
    
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
        for(let x of a) showIt(x);
        })
     } // scrollShow 함수


     // 예약페이지 이동
     const moveRes = document.querySelector(".sub_cont_res>a")
     // 객실 목록 페이지로 이동
     const moveRooms = document.querySelector(".sub_cont_listbtn>a")

     // 링크 이동 함수
     function moveLink(btn, link) {
        btn.onclick = (e) => {
            e.preventDefault();
            location.href = `${link}.html`;
            if(link==="rooms") {
                location.href = `${link}.html?rm=rooms`
            }
        }
     }

     moveLink(moveRes, "reservation")
     moveLink(moveRooms, "rooms")
}