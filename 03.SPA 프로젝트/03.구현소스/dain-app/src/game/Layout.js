// 레이아웃
import "./css/layout.css"
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* 1. 상단영역 */}
            <div id="top">
                <header className="top ibx">
                    <div className="top_wrap">
                        <h1 className="logo">
                            <img src="./images/logo/logo_eng.png" alt="로고"/>
                        </h1>
                        <nav className="gnb">
                            <ul>
                                <li className="mobile_menulogo">
                                    <img src="./images/logo/logo_ko.png" alt="로고" />
                                </li>
                                <li><Link to="/kd">왕국 둘러보기</Link></li>
                                <li><Link to="/gm">게임소개</Link></li>
                                <li><Link to="/ch">캐릭터소개</Link></li>
                            </ul>
                            <button className="menu_exit">×</button>
                        </nav>
                        <button className="menu_btn">
                            <img src="./images/logo/menu.svg" alt="메뉴버튼" />
                        </button>
                    </div>
                </header>
            </div>
            {/* 2. 메인영역 */}
            <div id="cont">
                <main className="cont ibx">
                    <Outlet />
                </main>
            </div>
            {/* 3. 하단영역 */}
            <div id="info">
                <footer className="info ibx">
                </footer>
            </div>
        </>
    )
}