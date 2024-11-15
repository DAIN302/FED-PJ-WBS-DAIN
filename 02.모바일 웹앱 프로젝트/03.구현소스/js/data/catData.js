// 카테고리 템플릿 JS
const catData = {
    catHeader : `
    <div class="product_headerwrap">
        <h2 class="ctit" v-text="$store.state.title"></h2>
        <nav class="lnb">
        <ul>
            <li v-for="(v,i) in $store.state.lnb" v-bind:key="v">
              <a href="#" v-on:click.prevent="chgList(v)">{{v}}</a>
            </li>
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
              <li class="option" v-on:click="$store.commit('sortList', 'idx')">인기상품순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'idx')">신상품순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'compare')">높은가격순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'compare')">낮은가격순</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    `,
    catList : `
        <ol class="product_list">
            <li v-for="(v, i) in $store.state.perfumeData" v-if="v.gender===$store.state.title||v.gender==='ALL'">
              <!-- 이미지 -->
              <div class="product_imgbx">
                <a :href="'product.html?cat='+v.image.split('_')[0]">
                  <figure>
                    <img v-bind:src="'./images/sub/'+v.br+'/'+v.image+'.jpg'" alt="향수" />
                  </figure>
                </a>
                <!-- 하트 표시 -->
                <div class="product_like" title="찜하기">
                  <button class="fa-solid fa-heart"></button>
                </div>
              </div>
              <!-- 설명 -->
              <div class="product_descbx">
                <!-- 브랜드 -->
                <h3 class="product_brand">{{v.brand}}</h3>
                <!-- 제품명 -->
                <h4 class="product_name">
                  <a :href="'product.html?cat='+v.image.split('_')[0]">{{v.namekor}}</a>
                </h4>
                <!-- 가격 -->
                <h5 class="product_price">
                  <span v-for="(a,b) in v.price" v-bind:class="'vol_price'+(b+1)+' vol_price'">{{insComma(a)}}<em>원</em></span>
                </h5>
                <!-- 사이즈 선택 -->
                <div class="product_radiobtn">
                  <span v-for="(a,b) in v.volume" v-bind:class="'volchk'+(b+1)+' volchk'" v-on:click="chgVolume(i, $event)">
                    <em class="fa-regular fa-circle"></em>{{a}}
                  </span>
                </div>
                <!-- 장바구니 -->
                <div class="product_bag">
                  <button>Add To Bag</button>
                </div>
              </div>
            </li>
        </ol>
    `,
    noteCatHeader : `
    <div class="product_headerwrap">
        <div class="ctit_bgibx">
          <div class="ctit_bgi">
            <img src="./images/sub/tit_all.jpg" alt="배경이미지"> 
          </div>
        </div>
        <h2 class="ctit">{{$store.state.notetitle}}</h2>
        <nav class="lnb">
        <ul>
            <li v-for="(v,i) in $store.state.notelnb" v-bind:key="v">
              <a href="#" v-on:click.prevent="chgNoteList(v)">{{v}}</a>
            </li>
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
              <li class="option" v-on:click="$store.commit('sortList', 'idx')">인기상품순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'idx')">신상품순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'compare')">높은가격순</li>
              <li class="option" v-on:click="$store.commit('sortList', 'compare')">낮은가격순</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    `,
    noteCatList : `
        <ol class="product_list">
            <li v-for="(v, i) in $store.state.perfumeData">
              <!-- 이미지 -->
              <div class="product_imgbx">
                <a :href="'product.html?cat='+v.image.split('_')[0]">
                  <figure>
                    <img v-bind:src="'./images/sub/'+v.br+'/'+v.image+'.jpg'" alt="향수" />
                  </figure>
                </a>
                <!-- 하트 표시 -->
                <div class="product_like" title="찜하기">
                  <button class="fa-solid fa-heart"></button>
                </div>
              </div>
              <!-- 설명 -->
              <div class="product_descbx">
                <!-- 브랜드 -->
                <h3 class="product_brand">{{v.brand}}</h3>
                <!-- 제품명 -->
                <h4 class="product_name">
                  <a :href="'product.html?cat='+v.image.split('_')[0]">{{v.namekor}}</a>
                </h4>
                <!-- 가격 -->
                <h5 class="product_price">
                  <span v-for="(a,b) in v.price" v-bind:class="'vol_price'+(b+1)+' vol_price'">{{insComma(a)}}<em>원</em></span>
                </h5>
                <!-- 사이즈 선택 -->
                <div class="product_radiobtn">
                  <span v-for="(a,b) in v.volume" v-bind:class="'volchk'+(b+1)+' volchk'" v-on:click="chgVolume(i, $event)">
                    <em class="fa-regular fa-circle"></em>{{a}}
                  </span>
                </div>
                <!-- 장바구니 -->
                <div class="product_bag">
                  <button>Add To Bag</button>
                </div>
              </div>
            </li>
        </ol>
    `
}

export {catData}