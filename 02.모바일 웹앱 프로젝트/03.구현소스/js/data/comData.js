const comData = {
    tarea: `
    <header class="top">
        <!-- gnb -->
        <div class="top_wrap">
        <nav class="gnb">
            <ul>
            <li>
                <a href="#">SHOP</a>
            </li>
            <li>
                <a href="#">CURATION</a>
            </li>
            <li>
                <a href="#">SCENT'S</a>
            </li>
            <li>
                <a href="#">OUR STORY</a>
            </li>
            </ul>
        </nav>
        </div>
        <!-- 로고 -->
        <div class="top_wrap">
        <h1 class="logo">
            <a href="#">
            <img src="./images/logo/logo.svg" alt="로고" />
            </a>
        </h1>
        </div>
        <!-- 사이드메뉴 -->
        <div class="top_wrap">
        <ul class="icon_menu">
            <li>
            <a href="#" title="로그인">
                <span class="fa-regular fa-user"><span class="ir">로그인</span></span>
            </a>
            </li>
            <li>
            <a href="#" title="찜목록">
                <span class="fa-regular fa-heart"><span class="ir">찜목록</span></span>
            </a>
            </li>
            <li>
            <a href="#" title="장바구니">
                <span class="fa-solid fa-bag-shopping"><span class="ir">장바구니</span></span>
            </a>
            </li>
            <li>
            <a href="#" title="검색">
                <span class="fa-solid fa-magnifying-glass"><span class="ir">검색</span></span>
            </a>
            </li>
        </ul>
        </div>
        <div class="side_menu">
        <div class="overlay"></div>
        <!-- 사이드바 메뉴 -->
        <aside class="sidebar_menu">
            <ul class="sub_menu">
            <li><a href="#">BEST</a></li>
            <li><a href="#">NEW</a></li>
            <li>
                <h2>
                <span>WOMEN</span>
                <span class="fa-solid fa-chevron-down"></span>
                </h2>
                <ol class="sidebar_submenu">
                <li><a href="category.html?=women">All</a></li>
                <li><a href="category.html?=women">Modern</a></li>
                <li><a href="category.html?=women">Chic</a></li>
                <li><a href="category.html?=women">Lovely</a></li>
                </ol>
            </li>
            <li>
                <h2>
                <span>MEN</span>
                <span class="fa-solid fa-chevron-down"></span>
                </h2>
                <ol class="sidebar_submenu">
                <li><a href="category.html?=men">All</a></li>
                <li><a href="category.html?=men">Street</a></li>
                <li><a href="category.html?=men">Formal</a></li>
                <li><a href="category.html?=men">Elegant</a></li>
                </ol>
            </li>
            <li>
                <h2>
                <span>MAIN NOTE</span>
                <span class="fa-solid fa-chevron-down"></span>
                </h2>
                <ol class="sidebar_submenu">
                <li><a href="#">All</a></li>
                <li><a href="#">Citrus</a></li>
                <li><a href="#">Floral</a></li>
                <li><a href="#">Fruity</a></li>
                <li><a href="#">Woody</a></li>
                </ol>
            </li>
            </ul>
        </aside>
        <!-- 마우스 오버시 나오는 이미지 목록 -->
        <aside class="menu_media">
            <ul class="menu_medialist">
            </ul>
        </aside>
        <!-- 로그인 -->
        <aside class="icon_sidebar">
            <div class="login_box"> 
            <h2>Log In</h2>
            <form action="index.html" method="post" id="login-form">
                <div class="login_inputbx">
                <input type="text" id="username" required placeholder="아이디"/>
                </div>
                <div class="login_inputbx">
                <input type="password" id="pw" required placeholder="비밀번호"/>
                </div>
                <div class="login_addbx">
                <span class="login_saveid">
                    <input type="checkbox" id="chkbx" name="chkbx">
                    <label for="chkbx" class="fa-regular fa-circle-check"></label>
                    <label for="chkbx">아이디저장</label>
                </span>   
                <span class="login_findid">
                    <a href="#">ID/PW 찾기</a>
                </span>             
                </div>
                <input class="login_btn" type="submit" value="로그인" />
                <ul class="login_sns">
                <li>
                    <a href="#">
                    <img src="./images/icon/icon_sns_kakaotalk.svg" alt="카카오톡로그인">
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="./images/icon/icon_sns_naver.png" alt="네이버로그인">
                    </a>
                </li>
                </ul>
                <a href="#"class="login_btn sign_up">회원가입</a>
                <a href="#"class="find_order">비회원 주문조회</a>
            </form>
            </div>
        </aside>
        </div>
    </header> 
    `,
    barea : `
        <footer class="info">
        <div class="blogo">
        <figure>
            <a href="#">
            <img src="./images/logo/info_logo.svg" alt="">
            </a>
        </figure>
        </div>
        <div class="btext">
        <h2>PERFUMEGRAPHY PROCESS</h2>
        <p>
            국가기관에 정식 등록된 공식 수입사, 퍼퓸그라피의 모든 제품은 국문 라벨이 부착된 100% 정품임을 보증합니다.
        </p>
        </div>

        <div class="blink_wrap">
        <div class="blink">
            <ul>
            <li>
                <a href="#">회사소개</a>
            </li>
            <li>
                <a href="#">이용약관</a>
            </li>
            <li>
                <a href="#">개인정보처리방침</a>
            </li>
            <li>
                <a href="#">이용안내</a>
            </li>
            </ul>
        </div>
        <div class="blink_bar"></div>
        <div class="bsns">
            <ul>
            <li>
                <a href="#">
                <img src="./images/logo/insta.png" alt="인스타그램">
                </a>
            </li>
            <li>
                <a href="#">
                <img src="./images/logo/facebook.png" alt="페이스북">
                </a>
            </li>
            </ul>
        </div>
        </div>
        <div class="binfo">
        <address>
            <ul>
            <li><span>상호명</span>주식회사 퍼퓸그라피</li>
            <li><span>대표자</span>홍은표</li>
            <li><span>통신판매업신고번호</span>제 2019-서울종로-0106호</li>
            <li><span>고객센터</span>070-7424-1253</li>
            <li><span>주소</span>03086 서울특별시 종로구 대학로 10길 15-15(동숭동) 해안빌딩 2층 퍼퓸그라피</li>
            </ul>
        </address>
        <p>Copyright © 퍼퓸그라피. All rights reserved.</p>
        </div>
    </footer>
    `
};

export default comData;
