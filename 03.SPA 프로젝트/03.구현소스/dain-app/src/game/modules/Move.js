import React, { useState, useEffect } from "react";
import $ from "jquery"

import "../css/move.css"
import ScrollIcon from "./ScrollIcon";

function BraveCookie(){
    return(
        <>
            <div className="cookie">
                <figure className="cookie_bx">
                    <img className="brave brave1" src="./images/characters/brave_run.gif" alt="뛰는쿠키" />
                    <img className="brave brave2" src="./images/characters/brave.png" alt="쿠키" />
                </figure>
                <div className="cookie_msg">
                    <p>
                    스크롤로 용감한 쿠키를 움직여주세요
                    </p>
                    {/* <ScrollIcon /> */}
                </div>
            </div>  
        </>
    )
}

function Building(){
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
            cat : "목화맛",
        },
    ]

    const showTalk = (season) => {
        const cookieTalk = $(".cookie_talk")
        const cookieBg = document.querySelector(".cookie_talkbx")
        let url = `url(./images/buildings/${season}/bg.webp)`

        cookieTalk.fadeIn(300);
        cookieBg.style.backgroundImage = url;

        $(".close_talk").click(function(){
            cookieTalk.fadeOut(300);
        })
    }
    return(
        <>
            <div className="buildings">
                {/* <div className="building1"></div> */}
                {
                    season.map((v,i)=>
                        <div className="building" key={i}>
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
                        </div>
                    )
                }
            </div>
        </>
    )
}

function Talk(props){
    return(
        <>
            <section className="cookie_talk">
                <div className="cookie_talkbx">
                    <div className="cookie_talkwrap">
                        <div className="talk_img">
                            <figure className="talk_img1">
                                <img src="./images/characters/1.png"/>
                            </figure>
                            <figure className="talk_img2">
                                <img src="./images/characters/1.png"/>
                            </figure>
                        </div>
                        <div className="talk_bx">
                            <div className="talk_name talk_name1">용감한 쿠키</div>
                            <div className="talk_name talk_name2">용감한 쿠키</div>
                            <div className="talk_wrap">여긴 어디지?</div>
                        </div>
                    </div>
                    <div className="close_talk">×</div>
                </div>
            </section>
        </>
    )
}

function Move(props){
    const [season, setSeason] = useState("spring");
    const winH = window.innerHeight;
    const hv = winH/3*1;
    
    useEffect(()=>{
        const docH = document.body.clientHeight;
        const scLimit = docH - winH;
        const retVal = (x) => x.getBoundingClientRect().top;

        const brave = document.querySelectorAll(".brave");
        const cookieMsg = document.querySelector(".cookie_msg");

        // 스크롤 시 아이콘 감춤
        const changeBrave = () => {
            brave[0].style.display = "block";
            brave[1].style.display = "none";
            cookieMsg.style.display = "none";
        }

        const cookie = document.querySelector(".cookie");
        const building = document.querySelector(".building");
        const buildings = document.querySelectorAll(".building");
        
        let buildH = building.clientHeight;
        let buildW = building.clientWidth;

        // 스크롤 시 쿠키 움직임
        const moveCookie = () => {
            let tgpos = retVal(building);
            let scTop = window.scrollY;
            let ctop = winH * scTop / scLimit;
            let cleft = (buildH / buildW) * tgpos /100
            let temp = (scTop /scLimit) * 100;
            console.log(temp);
            
            cookie.style.top = (ctop) + "px";
            if(temp < 14 || temp > 36 && temp <= 58) {
                cookie.style.transform = `rotateY(0deg)`;
                // cookie.style.left = `calc(50% + ${-cleft*2}%)`;
            }
            else if(temp >= 14 || temp > 58 && temp <= 82) {
                cookie.style.transform = `rotateY(180deg)`;
                // cookie.style.left = `calc(50% + ${cleft*2}%)`;
            }
            else if (temp > 82) {
                console.log("??")
            }


        }

        const showCookie = () => {
            let bH = -(buildH/5)
            buildings.forEach(ele=>{
                let tgpos = retVal(ele);

                let buildCookie = ele.querySelector(".building_cookie");
                let buildBtn = ele.querySelector(".building_btn");
                if(tgpos < hv && tgpos > bH) {
                    buildCookie.classList.add("on");
                    buildBtn.classList.add("on");
                } 
            })
        }

        window.addEventListener("scroll", changeBrave)
        window.addEventListener("scroll", moveCookie)
        window.addEventListener("scroll", showCookie)
    })

    return(
        <>
            <section className="kingdom_bg">
                <div className="move_bx ibx">
                    <BraveCookie />
                    <Building />  
                    <Talk />
                </div>
            </section>
        </>
    )
}

export default Move;