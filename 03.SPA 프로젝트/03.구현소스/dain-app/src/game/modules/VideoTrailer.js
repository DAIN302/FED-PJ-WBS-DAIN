import React from "react";

import "../css/videotrailer.css"

function VideoTrailer(){
    return(
        <>
            <section className="video_trailer">
                <video id="mvid2" src="./images/media/trailer.mp4" autoPlay muted playsInlin loop/>
                <span className="video_bg"></span>
            </section>
        </>
    )
}

export default VideoTrailer;