import React, { useEffect } from "react";
import $ from "jquery";
import "../css/story.css"


function Story(){
    const charater_img = [
        {
            isrc : "./images/story/yellowCookie.webp",
            name : "vanilla",
        },
        {
            isrc : "./images/story/pinkCookie.webp",
            name : "hollyberry",
        },
        {
            isrc : "./images/story/purpleCookie.webp",
            name : "cacao",
        },
        {
            isrc : "./images/story/whiteCookie.webp",
            name : "lily",
        },
        {
            isrc : "./images/story/orangeCookie.webp",
            name : "cheese",
        },
    ]

    

    
    return(
        <>
            <section className="story_sec">
                <div className="story_header">
                    <div className="story_titbx">
                        <div className="story_splitwrap">
                            <div className="story_bg"></div>
                            <div className="story_cont">
                                <div className="story_desc">
                                    <p>먼 옛날, 철과 불과 혼돈의 시대의 열기가 가라앉고 마녀들이 구워낸 피조물로 <br/>
                                        가득한 세상에 가장 빛나고 고결한 ‘소울 잼’을 지닌 다섯 쿠키의 등장은 마치 구원과도 같았습니다.
                                    </p>
                                    <p>고귀한 지혜와 강렬한 힘에 쿠키들이 모여들고<br/>
                                        영웅들은 왕이 되어 쿠키 문명은 대부흥의 시대를 맞았지만,<br/>
                                        찬란했던 시절도 잠시. 어둠을 자처하는 자의 등장으로<br/>
                                        온 땅에 혼돈의 그림자가 드리우기 시작하는데...
                                    </p>
                                    <p>이에 평화를 수호하는 다섯 쿠키들이 마침내 일어서고 쿠키들의 운명이 걸린 최후의 전쟁이 시작됩니다!</p>
                                </div>
                                <div className="story_img">
                                    {
                                        charater_img.map((v,i)=>
                                            <figure key={i} id={v.name+"_img"}>
                                                <img src={v.isrc} alt={v.name}/>
                                            </figure>
                                        )
                                    }
                                </div>
                                <div className="story_bgimg">
                                    <figure className="cloud_img" id="backCloud">
                                        <img src="./images/story/backCloud.webp" alt="뒷구름"/>
                                    </figure>
                                    <figure className="cloud_img" id="frontCloud">
                                        <img src="./images/story/frontCloud.webp" alt="앞구름"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="story_splitwrap2">
                            <div className="story_split stoty_split1">STORY</div> 
                            <div className="story_split stoty_split2">STORY</div> 
                        </div>
                    </div>
                </div>
                
            </section>
            { }
        </>
    )

}

export default Story;
