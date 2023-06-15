import React from "react";
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
                   <div className="story_split">STORY</div> 
                   <div className="story_split">STORY</div> 
                </div>
                <div className="story_cont">
                    <div className="story_desc"></div>
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
            </section>
        </>
    )

}

export default Story;
