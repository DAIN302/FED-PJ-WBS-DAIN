import React from "react";
import $ from "jquery";

function Sns(){
    const sns_data = [
        {
            link : "https://www.facebook.com/CRKingdomKR/",
            isrc : "./images/logo/face.svg",
            name : "페이스북"
        },
        {
            link : "https://twitter.com/CRKingdomKR",
            isrc : "./images/logo/twitter.svg",
            name : "트위터"            
        },
        {
            link : "https://www.youtube.com/channel/UCAOTbNctDD0Hg5MG0enQpMQ",
            isrc : "./images/logo/youtube.svg",
            name : "유튜브"
        },
        {
            link : "https://cafe.naver.com/crkingdom",
            isrc : "./images/logo/nacafe.svg",
            name : "네이버카페"
        },
    ]
    return ( 
        <>
           <ul>
            {
                sns_data.map((v,i)=>
                    <li key={i}>
                        <a href={v.link}>
                            <img src={v.isrc} alt={v.name} />
                        </a>
                    </li>
                )
            }
           </ul>
        </>
    )
}

export default Sns