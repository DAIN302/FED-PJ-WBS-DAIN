// 레이아웃
import "./css/layout.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import $ from "jquery"

import Sns from "./modules/Sns"
import ScrollTop from "./common/ScrollTop";
import Loading from "./modules/Loading";
import { useEffect, useState } from "react";
import IntroPage from "./modules/IntroPage";

const Layout = () => {
    const showGnb = () => {
        const gnbWrap = document.querySelector(".gnb_wrap")
        const gnbMenu = document.querySelector(".gnb_list").offsetHeight;
        
        gnbWrap.style.height = gnbMenu + "px";
        gnbWrap.style.transition = "height .3s ease-in-out"

        const closeMenu = () => {
            if(gnbWrap.offsetHeight > 1) {
                gnbWrap.style.height = "0";
            }
        }

        document.addEventListener("click", closeMenu);
    }    

    const [intropage, setIntropage] = useState(true);
    
    useEffect(()=>{
        const skipBtn = $(".intro_skipbtn button")

        let cookData = localStorage.getItem("cookierun")
        skipBtn.click(function(){
            localStorage.setItem("cookierun", 1)
            cookData = localStorage.getItem("cookierun")
            cookData == 1?setIntropage(false):setIntropage(true)
        })
        
        cookData == 1?setIntropage(false):setIntropage(true)
    }, [])


    // const [loading, setLoading] = useState(true);

    // setTimeout(() => {
    //     setLoading(false);
    // }, 3000);


    return (
        <>
            <ScrollTop />
            {intropage ? <IntroPage />: null}
            {/* {loading ? <Loading /> : null } */}
            {/* 1. 상단영역 */}
            <div id="top">
                <header className="top ibx">
                    <div className="top_wrap">
                        <h1 className="logo">
                            <Link to="/gm">
                                <img src="./images/logo/logo_eng.png" alt="로고"/>
                            </Link>
                        </h1>
                        <nav className="gnb">
                            <div className="gnb_wrap">
                                <ul className="gnb_list">
                                    <li><Link to="/gm">게임소개</Link></li>
                                    <li><Link to="/ch">캐릭터소개</Link></li>
                                    <li><Link to="/kd">쿠키 만나기</Link></li>
                                </ul>
                            </div>
                            <button className="menu_exit">×</button>
                        </nav>
                        <button className="menu_btn" onClick={showGnb}>
                            <img src="./images/logo/menu.svg" alt="메뉴버튼" />
                        </button>
                    </div>
                </header>
            </div>
            {/* 2. 메인영역 */}
            <div id="cont">
                <main className="cont">
                    <Outlet />
                </main>
            </div>
            {/* 3. 하단영역 */}
            <div id="info">
                <footer className="info ibx">
                <div className="bsns">
                    <Sns />
                </div>
                <div className="blink">
                    <ul>
                        <li>
                            <a href="#">이용약관</a>
                        </li>
                        <li>
                            <a href="#">
                                <b>개인정보처리방침</b>
                            </a>
                        </li>
                        <li>
                            <a href="#">고객센터</a>
                        </li>
                    </ul>
                </div>
                <address className="binfo">
                    <p>서울특별시 강남구 도산대로 327</p>
                    <p>전화: 02-2148-0750 팩스: 02-2148-0629</p>
                    <p>CookieRun® © 2023 Devsisters Corp. All Rights Reserved.</p>
                </address>
                <div className="blogo">
                    <svg viewBox="0 0 448 58" fill="#FFF" stroke="#FFF"><path d="M0 1.4h22.5c17.1 0 31.1 12.1 31.1 27.5 0 15.5-14.1 27.5-31.1 27.5H0v-55zm15.9 43h3.6c9.5 0 17.6-4.7 17.6-15.4 0-9.9-7.2-15.4-17.4-15.4H16v30.8zM73.6 13.6v9.2h18v12.1h-18v9.5h18.9v12.1H57.7V1.4h34.8v12.2zM124.7 34.9l14.9-33.5h17.2l-26.1 55.1h-12.3L92.7 1.4H110zM191.1 15.6c-2.9-2.2-6.6-3.6-10.5-3.6-2.9 0-6.8 1.5-6.8 4.6 0 3.2 4.3 4.5 7.1 5.3L185 23c8.5 2.3 15.1 6.1 15.1 15 0 5.5-1.5 11.1-6.3 14.8-4.8 3.6-11.2 5.2-17.4 5.2-7.7 0-15.2-2.3-21.5-6.3l6.8-11.6c4 3.2 8.7 5.7 14.1 5.7 3.7 0 7.7-1.7 7.7-5.5 0-4-6.3-5.4-9.7-6.3-10-2.6-16.6-4.9-16.6-15.5 0-11.2 8.9-18.5 21.1-18.5 6.2 0 13.7 1.8 19.1 4.5l-6.3 11.1zM204.3 1.4h15.9v55.1h-15.9zM260.9 15.6c-2.9-2.2-6.7-3.6-10.5-3.6-2.9 0-6.8 1.5-6.8 4.6 0 3.2 4.3 4.5 7.1 5.3l4.1 1.1c8.5 2.3 15.1 6.1 15.1 15 0 5.5-1.5 11.1-6.3 14.8-4.8 3.6-11.2 5.2-17.3 5.2-7.7 0-15.2-2.3-21.5-6.3l6.8-11.6c4 3.2 8.7 5.7 14.1 5.7 3.7 0 7.7-1.7 7.7-5.5 0-4-6.2-5.4-9.6-6.3-10-2.6-16.5-4.9-16.5-15.5C227 7.3 235.8 0 248.1 0c6.2 0 13.7 1.8 19.1 4.5l-6.3 11.1zM298.3 56.5h-15.8V13.6h-13.2V1.4h42.2v12.2h-13.2zM329.9 13.6v9.2h17.9v12.1h-17.9v9.5h18.9v12.1H314V1.4h34.8v12.2zM406.2 56.5h-19.8l-15-21.2h-.1v21.2h-15.9V1.4h23.8c12.1 0 21.3 5.2 21.3 17 0 7.6-4.7 14.2-13.4 15.6l19.1 22.5zm-34.9-30.3h1.5c5.2 0 11-.9 11-6.9s-5.8-6.9-11-6.9h-1.5v13.8z"></path><path d="M439.2 15.6c-2.9-2.2-6.6-3.6-10.5-3.6-2.9 0-6.8 1.5-6.8 4.6 0 3.2 4.3 4.5 7 5.3L433 23c8.5 2.3 15.1 6.1 15.1 15 0 5.5-1.4 11.1-6.3 14.8-4.8 3.6-11.2 5.2-17.3 5.2-7.7 0-15.2-2.3-21.5-6.3l6.8-11.6c4 3.2 8.7 5.7 14.1 5.7 3.7 0 7.7-1.7 7.7-5.5 0-4-6.2-5.4-9.6-6.3-10-2.6-16.6-4.9-16.6-15.5 0-11.2 8.8-18.5 21.1-18.5 6.2 0 13.7 1.8 19.1 4.5l-6.4 11.1z"></path></svg>
                </div>
                </footer>
            </div>
        </>
    )
}

export default Layout;