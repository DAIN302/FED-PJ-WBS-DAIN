import React, { useState, useEffect } from "react";
import $ from "jquery"

import "../css/move.css"
import ScrollIcon from "./ScrollIcon";
import talk_data from "../data/talk";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function BraveCookie(){
    return(
        <>
            <div className="cookie">
                <figure className="cookie_bx">
                    <img className="brave brave1" src="./images/characters/brave_run.gif" alt="뛰는쿠키" />
                </figure>
            </div>  
        </>
    )
}

function Building(){
    const [sdt, setSdt] = useState("spring")
    const season = [
        {
            season : "spring",
            cat : "벚꽃맛",
        },
        {
            season : "summer",
            cat : "샤벳상어맛",
        },
        {
            season : "autumn",
            cat : "펌킨파이맛",
        },
        {
            season : "winter",
            cat : "코코아맛",
        },
    ]

    const showTalk = (season) => {
        const cookieTalk = $(".cookie_talk")
        const cookieBg = document.querySelector(".cookie_talkbx")
        let url = `url(./images/buildings/${season}/bg.webp)`

        cookieTalk.fadeIn(300);
        cookieBg.style.backgroundImage = url;

        setSdt(season);

        // 임시 - 닫는 버튼
        $(".close_talk").click(function(){
            cookieTalk.fadeOut(300);
        })
    }

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

    const ansYes = () => {
        
    }

    const ansNo = () => {

    }

    return(
        <>
            <section className="cookie_talk">
                <div className="cookie_talkbx">
                    <div className="cookie_talkwrap">
                        <div className="talk_img">
                            <figure className="talk_img1">
                                <img src={"./images/buildings/"+props.season+"/1.png"}/>
                            </figure>
                            <figure className="talk_img2">
                                <img src="./images/characters/1.png"/>
                            </figure>
                        </div>
                        <div className="talk_bx">
                            <div className="talk_name talk_name1" style={{backgroundColor : sdata.color}}>{sdata.name}</div>
                            <div className="talk_name talk_name2">용감한 쿠키</div>
                            <div className="talk_wrap">{sdata.talk}</div>
                            <div className="talk_nextbtn">
                                <button className="talk_yes" onClick={ansYes}>{sdata.yes}</button>
                                <button className="talk_no" onClick={ansNo}>{sdata.no}</button>
                            </div>
                        </div>
                    </div>
                    <div className="close_talk">×</div>
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
        const retVal = (x) => x.getBoundingClientRect().top;
        const retValX = (x) => x.getBoundingClientRect().left;

        const cookie = document.querySelector(".cookie");
        const building = document.querySelector(".building");
        const buildings = document.querySelectorAll(".building");
        const kbg = document.querySelector(".kingdom_bg")
        
        let buildW = building.clientWidth;

        console.log(buildW)
        // 타켓박스
        const buildingTg = document.querySelector(".buildings_tgbx")
        // 스티키박스
        const buildingSticky = document.querySelector(".buildings")

        // 가로이동박스
        const mvbx = buildingSticky.querySelector("ul")
        const moveBuildings = () => {
            let tgpos = retVal(buildingTg);
            console.log(tgpos);

            if (tgpos <= 0 && tgpos > -6000) {
                mvbx.style.left = tgpos + "px";
                cookie.style.display = "block";

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
                console.log("ㅂㅇㅂㅇ")
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