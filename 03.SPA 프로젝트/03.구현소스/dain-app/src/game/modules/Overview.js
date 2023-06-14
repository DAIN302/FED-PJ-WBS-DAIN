import React from "react";
import $ from "jquery"

import "../css/overview.css"

function Overview(){
    const store_data = [
        {
            isrc : "./images/logo/app-store.svg",
            link : "https://apps.apple.com/kr/app/%EC%BF%A0%ED%82%A4%EB%9F%B0-%ED%82%B9%EB%8D%A4/id1509450845",
            name : "App Store"
        },
        {
            isrc : "./images/logo/google-play.svg",
            link : "https://play.google.com/store/apps/details?id=com.devsisters.ck&hl=ko&gl=US&pli=1",
            name : "Google Play"
        },
        {
            isrc : "./images/logo/one-store.svg",
            link : "https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000751155",
            name : "One Store"
        },
        {
            isrc : "./images/logo/galaxy-store.svg",
            link : "https://galaxystore.samsung.com/detail/com.devsisters.ck?langCd=ko",
            name : "Galaxy Store"
        },
    ]

    return(
        <>
            <section className="game_overview ibx">
                <div className="overview_wrap">
                    <figure className="overview_img">
                        <img src="./images/logo/logo_img.png" alt="킹덤"/>
                    </figure>
                    <div className="overview_desc">
                        <h2>쿠키런: 킹덤</h2>
                        <h3>처음 '맛'나는 소셜 RPG</h3>
                        <p>지금까지 본 적없는 행복하고 달콤한 세계가 바로 여기에!</p>
                        <p>사랑스러운 쿠키들과 함께 떠나는 꿈같은 이야기 속으로 초대합니다!</p>
                        <ul className="store_list">
                            {
                                store_data.map((v,i)=>
                                    <li key={i}>
                                        <a href={v.link}>
                                            <img src={v.isrc} alt={v.name}/>
                                            <span>{v.name}</span>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="overview2">
                    <figure className="crown_img">
                        <img src="./images/logo/crown.svg" alt="왕관이미지"/>
                    </figure>
                    <div className="overview2_desc">
                        <p>사랑스러운 쿠키들의 다양한 매력이 가득한</p>
                        <p>새로운 쿠키 세계가 여러분을 찾아갑니다.</p>
                    </div>
                    <div className="overview2_desc2">
                        <p>쿠키런: 킹덤은 마녀의 오븐을 탈출한 쿠키들을 도와 새로운 쿠키들의 왕국을 건설하는 소셜 RPG 게임입니다.</p>
                        <p>개성 있는 다양한 쿠키들과 함께 나만의 쿠키 왕국을 건설하고, 즐거운 순간을 함께 경험해보세요.</p>
                    </div>
                    <figure className="overview2_img">
                        <img src="./images/cbg.webp" alt="배경"/>
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Overview;