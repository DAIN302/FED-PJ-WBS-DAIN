// 카테고리 템플릿 JS

const catData = {
    catHeader : `
    <div class="product_headerwrap">
        <h2 class="ctit"></h2>
        <nav class="lnb">
        <ul>
            <li><a href="#"></a></li>
        </ul>
        </nav>
        <div class="product_filter">
        <div class="filter_btn">
            <button class="fa-solid fa-sliders"></button>
        </div>
        <div class="filter_select">
            <div class="filter_value">
            <button>인기상품순</button>
            </div>
            <div class="filter_option">
            <ul>
                <li class="option">인기상품순</li>
                <li class="option">신상품순</li>
                <li class="option">높은가격순</li>
                <li class="option">낮은가격순</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    `,
    catList : `
        <ol class="product_list">
            <li>
              <!-- 이미지 -->
              <div class="product_imgbx">
                <a href="#">
                  <figure>
                    <img src="./images/sub/malone/bb_30.png" alt="향수" />
                  </figure>
                </a>
              </div>
              <!-- 설명 -->
              <div class="product_descbx">
                <!-- 브랜드 -->
                <h3 class="product_brand">JO MALONE</h3>
                <!-- 제품명 -->
                <h4 class="product_name">
                  <a href="#"> 블랙베리 앤 베이 코롱 </a>
                </h4>
                <!-- 가격 -->
                <h5 class="product_price">
                  <span class="vol_price1 vol_price">84,800<em>원</em></span>
                  <span class="vol_price2 vol_price">164,600<em>원</em></span>
                </h5>
                <!-- 사이즈 선택 -->
                <div class="product_radiobtn">
                  <span class="volchk1 volchk">
                    <em class="fa-regular fa-circle"></em>30ml
                  </span>
                  <span class="volchk2 volchk">
                    <em class="fa-regular fa-circle"></em>100ml
                  </span>
                </div>
                <!-- 하트 표시 -->
                <div class="product_like">
                  <button class="fa-solid fa-heart"></button>
                </div>
              </div>
            </li>
        </ol>
    `
}

export {catData}