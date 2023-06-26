import React from "react";

import "../css/loading.css"

function Loading(){
    return(
        <>
            <div className="loading">
                <figure className="loading_img">
                    <img src="./images/loading.webp" alt="로딩중이미지"/>
                    <figcaption>잠시만 기다려주세요</figcaption>
                </figure>
            </div>
        </>
    )
}

export default Loading; 