import React from "react";
import $ from "jquery";
import "../css/story.css"

function Story(){
    return(
        <>
            <section className="story_sec">
                <div className="story_header">
                   <div className="story_split">STORY</div> 
                   <div className="story_split">STORY</div> 
                </div>
                <div className="story_cont">
                    <div className="story_desc"></div>
                    <div className="story_img"></div>
                    <div className="story_bgimg">
                        <figure>
                            <img src="./images/story/backCloud.webp" alt="뒷구름"/>
                        </figure>
                        <figure>
                            <img src="./images/story/frontCloud.webp" alt="앞구름"/>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Story;
