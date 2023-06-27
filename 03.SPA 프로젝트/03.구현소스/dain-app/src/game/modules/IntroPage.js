import React from "react";

import "../css/intropage.css"
import intro_data from "../data/intro";

function IntroPage(){
    const idata = intro_data;

    const chgSlide = (obj, num) => {
        // 전체초기화
        obj.forEach((ele)=>{
            ele.classList.remove("on");
        })

        // 해당순번 li에 클래스 넣기
        obj[num].classList.add("on");
    }
    

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
                                <button className="intro_nextbtn">다음</button>
                                <button className="intro_enterbtn">ENTER</button>
                            </div>
                        </div>
                    )
                }
                <div className="intro_skipbtn">
                    <button>SKIP INTRO</button>
                </div>
            </div>
        </>
    )
}

export default IntroPage; 