import React, { useState, useEffect } from "react";
import $ from "jquery"

import "../css/move.css"
import talk_data from "../data/talk";
import ScrollIcon from "./ScrollIcon";

const retVal = (x) => x.getBoundingClientRect().top;
const retValX = (x) => x.getBoundingClientRect().left;


function BraveCookie(){
    return(
        <>
            <div className="cookie">
                <figure className="cookie_bx">
                    <img className="brave brave1" src="./images/characters/brave_run.gif" alt="뛰는쿠키" />
                    <img className="brave brave2" src="./images/characters/brave.png" alt="쿠키" />
                </figure>
                <ScrollIcon />
            </div>  
        </>
    )
}

function Building(){
    const [sdt, setSdt] = useState("spring")
    const winW = window.innerWidth;
    const wv = winW/4*1;
    console.log(wv)
    const season = [
        {
            season : "spring",
            cat : "벚꽃맛",
            talk : ""
        },
        {
            season : "summer",
            cat : "샤벳상어맛",
            talk : ""
        },
        {
            season : "autumn",
            cat : "펌킨파이맛",
            talk : ""
        },
        {
            season : "winter",
            cat : "코코아맛",
            talk : ""
        },
    ]

    const stopScroll = () => {
        $("body").css({overflow : "hidden"}).on("scroll touchmove mousewheel", function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
    }

    const goScroll = () => {
        $("body").css({overflowY : "scroll"}).off("scroll touchmove mousewheel")
    }

    const showTalk = (season) => {
        const cookieBg = document.querySelector(".cookie_talkbx")
        let url = `url(./images/buildings/${season}/bg.webp)`

        $(".cookie_talk").fadeIn(300);
        cookieBg.style.backgroundImage = url;

        setSdt(season);

        // 스크롤 막기
        stopScroll()

        // 버튼 다시 보이기
        $(".talk_img").css({display : "block"}).next().css({display:"block"});
        $(".talk_yes").css({display : "inline-block"});
        $(".talk_no").css({display : "inline-block"});
        $(".talk_img1").find("img").eq(0).css({display:"block"}).next().css({display :"none"}).next().css({display : "none"});
        $(".talk_name").css({display:"block"});
        $(".close_talk").css({display:"none"});
    }

    useEffect(()=>{
        const buildingPos = document.querySelectorAll(".building_bx")
        const preTalk = document.querySelectorAll(".pretalk_btn")
        window.addEventListener("scroll", ()=>{
            buildingPos.forEach((ele, idx)=>{
                let posX = retValX(ele)
                
                if(posX < wv && posX > wv-30) {
                    stopScroll()
                    preTalk[idx].classList.add("on");
                }
                else {
                    ele.classList.remove("on");
                }
                
            })
        })
        const cookieTalk = $(".cookie_talk")
        // 닫는 버튼
        $(".close_talk").click(function(){
            cookieTalk.fadeOut(300);
            // 스크롤 기능 살리기
            goScroll() 
            $(".pretalk_btn").removeClass("on")
        })
    })

    return(
        <>
            <div className="buildings_wrap">
                <div className="buildings_tgbx">
                    <div className="buildings">
                        <ul>
                        {
                            season.map((v,i)=>
                                <li className="building" key={i}>
                                    <div className="building_bx">
                                        <div className="building_wrap">
                                            <div className="building_img">
                                                <figure className="building_build">
                                                    <img src={"./images/buildings/"+v.season+"/building.webp"} alt="건물"/>
                                                </figure>
                                                <figure className="building_cookie">
                                                    <img src={"./images/buildings/"+v.season+"/cookie.webp"} alt="캐릭터"/>
                                                </figure>
                                                <div className="building_btn">
                                                    <button onClick={()=>showTalk(v.season)}>{v.cat} 쿠키와 대화하기</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pretalk_btn">
                                        <div>
                                            <p>{v.cat} 쿠키가 말을 걸어온다. 대화할까?</p>
                                            <div className="pretalk_wrap">
                                                <button onClick={()=>showTalk(v.season)}>{v.cat} 쿠키와 대화하기</button>
                                                <button className="close_talk">대화하지 않기</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <Talk season={sdt}/>
        </>
    )
}

function Talk(props){
    const sdata = talk_data[props.season]
    let url = `url(./images/buildings/${props.season}/bg2.webp)`

    const ansYes = () => {
        $(".talk_yes").css({display : "none"}).next().css({display : "none"})
        $(".talk_img1").find("img").eq(0).css({display:"none"}).next().css({display :"none"}).next().css({display : "block"});
        $(".talk_wrap").text(sdata.yesans)
        setTimeout(() => {
            $(".talk_img").fadeOut(500).next().fadeOut(500, ()=>{
                $(".cookie_talkbx").css({backgroundImage : url})
                setTimeout(() => {
                    $(".talk_name").css({display:"none"});
                    $(".talk_bx").fadeIn(500)
                    $(".talk_wrap").text(sdata.yesans2)
                    $(".close_talk").css({display:"inline-block"})
                }, 1500);
            });
        }, 500);
    }

    const ansNo = () => {
        $(".talk_img1").find("img").eq(0).css({display:"none"}).next().css({display :"block"});
        $(".talk_no").css({display : "none"})
        $(".talk_yes").text(sdata.yes[1])
        $(".talk_wrap").text(sdata.noans)
    }

    return(
        <>
            <section className="cookie_talk">
                <div className="cookie_talkbx">
                    <div className="cookie_talkwrap">
                        <div className="talk_img">
                            <figure className="talk_img1">
                                <img src={"./images/buildings/"+props.season+"/1.png"}/>
                                <img src={"./images/buildings/"+props.season+"/2.png"}/>
                                <img src={"./images/buildings/"+props.season+"/3.png"}/>
                            </figure>
                            <figure className="talk_img2">
                                <img src="./images/characters/1.png"/>
                            </figure>
                        </div>
                        <div className="talk_bx">
                            <div className="talk_name talk_name1" style={{backgroundColor : sdata.color}}>{sdata.name}</div>
                            <div className="talk_wrap">{sdata.talk}</div>
                            <div className="talk_nextbtn">
                                <button className="talk_yes" onClick={ansYes}>{sdata.yes[0]}</button>
                                <button className="talk_no" onClick={ansNo}>{sdata.no}</button>
                                <button className="close_talk">나가기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function Move(props){
    const winH = window.innerHeight;
    const hv = winH/3*1;
    const ss = ["spring","summer","autumn","winter"]
    let snum = 0;
    
    useEffect(()=>{
        const cookie = document.querySelector(".cookie");
        const building = document.querySelector(".building");
        const buildings = document.querySelectorAll(".building");
        const kbg = document.querySelector(".kingdom_bg")
        const brave = document.querySelectorAll(".brave")
        const mouseIcon = $(".cookie .mouse-wrap")
        
        let buildW = building.clientWidth;

        // 타켓박스
        const buildingTg = document.querySelector(".buildings_tgbx")
        // 스티키박스
        const buildingSticky = document.querySelector(".buildings")

        // 가로이동박스
        const mvbx = buildingSticky.querySelector("ul")
        const moveBuildings = () => {
            let tgpos = retVal(buildingTg);

            if (tgpos <= 0 && tgpos > -6000) {
                mvbx.style.left = tgpos + "px";
                cookie.style.display = "block";
                brave[1].style.display = "none";
                brave[0].style.display = "block";
                mouseIcon.fadeOut(200);
                

                // 배경화면 바꾸기
                if(tgpos > -buildW) {
                    snum = 0;
                }
                else if(tgpos <= -buildW && tgpos > -buildW*2) {
                    snum = 1;
                }
                else if (tgpos <= -buildW*2 && tgpos > -buildW*3){
                    snum = 2;
                }
                else if (tgpos <= -buildW*3 && tgpos > -buildW*4){
                    snum = 3;
                }

                let url = `url(./images/buildings/${ss[snum]}/bg.webp)`;
                kbg.style.backgroundImage = url;

              } else if (tgpos > 0) {
                mvbx.style.left = 0;
                cookie.style.display = "block";
              } else if (tgpos <= -6000) {
                cookie.style.display = "none";
              }
        }
        
        let bW = -(buildW)

        const showCookie = () => {
            buildings.forEach(ele=>{
                let tgpos = retValX(ele);
                
                let buildCookie = ele.querySelector(".building_cookie");
                let buildBtn = ele.querySelector(".building_btn");
                if(tgpos < hv && tgpos > bW) {
                    buildCookie.classList.add("on");
                    buildBtn.classList.add("on");
                } 
            })
        }

        window.addEventListener("scroll", showCookie)
        window.addEventListener("scroll", moveBuildings)
    })

    return(
        <>
            <section className="kingdom_bg">
                <div className="move_bx ibx">
                    <BraveCookie />
                    <Building />  
                </div>
            </section>
        </>
    )
}

export default Move;