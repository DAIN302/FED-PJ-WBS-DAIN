import React, { useEffect, useState } from "react";
import $ from "jquery";

import "../css/intropage.css"
import intro_data from "../data/intro";

function IntroPage(){
    const idata = intro_data;
    let num = 0;

    const chgSlide = (obj, num) => {
        // 전체초기화
        obj.forEach((ele)=>{
            ele.classList.remove("on");
        })

        // 해당순번 li에 클래스 넣기
        obj[num].classList.add("on");
    }

    console.log(idata.length)

    const nextIntro = () => {
        const introWrap = document.querySelectorAll(".intro_wrap")
        const nextBtn = $(".intro_btn")
        num++
        if(num > idata.length-1) {
            $(".intro_wrap").fadeOut(300);
            $(".intro_enterbtn").fadeIn(300);
            $(".intro_skipbtn").fadeOut(300);
            return;
        }
        
        chgSlide(introWrap, num)    
    }
    
    
    useEffect(()=>{
        const introWrap = document.querySelectorAll(".intro_wrap")
        console.log(introWrap)
        chgSlide(introWrap, num)
    })

    return(
        <>
            <div className="intro_bx">
                    {
                        idata.map((v,i)=>
                            <div className="intro_wrap" key={i}>
                                <figure className="intro_image">
                                    <img src={"./images/intro/"+i+".jpg"} alt="인트로이미지"/>
                                </figure>
                                <div className="intro_desc">
                                    {
                                        v["desc"].map((x,y)=>
                                            <p key={y}>{x}</p>
                                        )
                                    }
                                </div>
                                <div className="intro_btn">
                                    <button className="intro_nextbtn" onClick={nextIntro}>다음</button>
                                </div>
                            </div>
                        )
                    }
                <div className="intro_skipbtn">
                    <button>SKIP INTRO</button>
                </div>
                <div className="intro_enterbtn">
                    <button>ENTER</button>
                </div>
            </div>
        </>
    )
}

export default IntroPage; 