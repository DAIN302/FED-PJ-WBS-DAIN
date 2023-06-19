import React from "react";
import $ from "jquery"

import "../css/videotrailer.css"

function VideoTrailer(){
    const showTrailer = () => {
        let vbx = $(".trailer_box")
        let ifr = $(".trailer_box iframe");
        const src = "https://www.youtube.com/embed/3gguVLkgs9U?autoplay=1"

        vbx.fadeIn(300);
        ifr.attr("src", src)

        $(".trailer_box .cbtn").click(function(){
            vbx.fadeOut(300);
            ifr.attr("src", "")
        })

    }

    return(
        <>
            <section className="video_trailer">
                <video id="mvid2" src="./images/media/trailer.mp4" autoPlay muted playsInline loop/>
                <span className="video_bg"></span>
                <div className="video_btn">
                    <h3>쿠키들의 모험이 여러분을 기다리고 있어요!</h3>
                    <button onClick={showTrailer}>VIEW TRAILER</button>
                </div>
                <div className="trailer_box">
                    {/* 아이프레임 */}
                    <iframe src="" allow="autoplay"></iframe>
                    {/* 닫기버튼 */}
                    <button className="cbtn">×</button>
                </div>
            </section>
        </>
    )
}

export default VideoTrailer;