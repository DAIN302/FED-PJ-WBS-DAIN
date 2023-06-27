import React from "react";
import $ from "jquery"

import "../css/videointro.css"

function VideoIntro(){
    return(
        <>
            <section className="video_intro">
                <video id="mvid" src="./images/media/kingdom.mp4" autoPlay muted playsInline loop/>
                <span className="video_cont"></span>
            </section>
        </>
    )
}

export default VideoIntro;