// 카테고리 템플릿 JS
const catData = {
    catHeader : `
    <div class="product_headerwrap">
        <h2 class="ctit" v-text="$store.state.title"></h2>
        <nav class="lnb">
        <ul>
            <li v-for="(v,i) in $store.state.lnb"><a href="#">{{v}}</a></li>
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
            <li v-for="(v, i) in $store.state.perfumeData">
              <!-- 이미지 -->
              <div class="product_imgbx">
                <a href="#">
                  <figure>
                    <img v-bind:src="'./images/sub/'+$store.state.perfumeData[i].br+'/'+$store.state.perfumeData[i].image+'.jpg'" alt="향수" />
                  </figure>
                </a>
              </div>
              <!-- 설명 -->
              <div class="product_descbx">
                <!-- 브랜드 -->
                <h3 class="product_brand">{{$store.state.perfumeData[i].brand}}</h3>
                <!-- 제품명 -->
                <h4 class="product_name">
                  <a href="#">{{$store.state.perfumeData[i].namekor}}</a>
                </h4>
                <!-- 가격 -->
                <h5 class="product_price">
                  <span v-for="(a,b) in $store.state.perfumeData[i].price" v-bind:class="'vol_price'+(b+1)+' vol_price'">{{a}}<em>원</em></span>
                </h5>
                <!-- 사이즈 선택 -->
                <div class="product_radiobtn">
                  <span v-for="(a,b) in $store.state.perfumeData[i].volume" v-bind:class="'volchk'+(b+1)+' volchk'" v-on:click="chgVolume(i, $event)">
                    <em class="fa-regular fa-circle"></em>{{a}}
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