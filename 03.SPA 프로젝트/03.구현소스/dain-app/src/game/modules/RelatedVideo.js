import React from "react";
import $ from "jquery"

import "../css/relatedvideo.css" 

function RelatedVideo(){
    const video_data =[
        {
            tit : "2022 올해의 쿠키👑 레전더리 스킨 출시",
            isrc : "video_thumb1.webp",
            vsrc : "https://www.youtube.com/embed/-C9CuWLfYZs"
        },
        {
            tit : "🐲 전설의 붉은 용을 맞이하라!",
            isrc : "video_thumb2.webp",
            vsrc : "https://www.youtube.com/embed/J2s4MGFx2cM"
        },
        {
            tit : "용의 협곡으로!🐉 스페셜 에피소드 업데이트 안내",
            isrc : "video_thumb3.webp",
            vsrc : "https://www.youtube.com/embed/Fv8f323mP8k"
        },
    ]

    const showVid = (src) => {
        let vbx = $(".related_vidbx");
        let ifr = $(".related_vidbx iframe")

        vbx.fadeIn(300);
        ifr.attr("src", src+"?autoplay=1")

        $(".related_vidbx .cbtn").click(function(){
            vbx.fadeOut(300);
            ifr.attr("src", "")
        })
    }

    return(
        <>
            <section className="related_video">
                <h2>RELATED VIDEOS</h2>
                <div className="related_cont">
                    <ul className="related_contlist">
                    {
                        video_data.map((v,i)=>
                            <li key={i} className="contlist">
                                <figure onClick={()=>showVid(v.vsrc)}>
                                    <img src={"./images/media/"+v.isrc} alt="동영상썸네일" />
                                    <span className="related_playicon">
                                        <svg viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.12 21.6334L6.12 1.6007C4.88 0.839455 3.31999 0.799389 2.07999 1.4805C0.799987 2.20168 0 3.52383 0 4.96619V45.0316C0 46.4739 0.799987 47.8362 2.07999 48.5173C2.67999 48.8378 3.36 48.998 4 48.998C4.72 48.998 5.48 48.7977 6.12 48.3971L38.12 28.3644C39.28 27.6432 40 26.3611 40 24.9588C40 23.5565 39.28 22.2744 38.12 21.5533V21.6334Z" fill="white"></path></svg>
                                    </span>
                                </figure>
                                <p className="contlist_tit">
                                    <svg viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.2919 3.74788C32.9001 2.27187 31.7498 1.11195 30.286 0.716839C27.6327 0 17 0 17 0C17 0 6.3673 0 3.71683 0.716839C2.25305 1.11195 1.10273 2.27187 0.710899 3.74788C0 6.42051 0 12 0 12C0 12 0 17.5795 0.710899 20.2521C1.10273 21.7281 2.25305 22.8881 3.71683 23.2832C6.3673 24 17 24 17 24C17 24 27.6327 24 30.2832 23.2832C31.747 22.8881 32.8973 21.7281 33.2891 20.2521C34 17.5795 34 12 34 12C34 12 34 6.42051 33.2891 3.74788H33.2919ZM13.5994 17.1421V6.85795L22.4325 12L13.5994 17.1421V17.1421Z" fill="#E94D39"></path>
                                    </svg>
                                    <span>
                                    {v.tit}
                                    </span>
                                </p>
                            </li>
                        )
                    }
                    </ul>
                </div>
                <div className="related_vidbx">
                    <iframe src="" allow="autoplay"></iframe>
                    <button className="cbtn">×</button>
                </div>
            </section>
        </>
    )
}

export default RelatedVideo;