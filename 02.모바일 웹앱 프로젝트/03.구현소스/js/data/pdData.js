// 프로덕트 템플릿
const productData = {
    pdData : `
        <div class="product_wrap">
          <section class="product_detail">
            <div class="detail_imgbx">
              <img :src="'./images/sub/product/'+$store.state.br+'/'+$store.state.image.split('_')[0]+'/1.jpg'" alt="향수이미지">
            </div>
            <div class="detail_descbx">
              <div class="product_link">
                <a href="javascript:history.back();" class="fa-solid fa-arrow-left" title="이전 페이지로"></a>
              </div>
              <div class="detail_descimg">    
                <img :src="'./images/sub/'+$store.state.br+'/'+$store.state.image+'.jpg'" alt="향수병이미지">
                <div class="detail_like" title="찜하기">
                <button class="fa-regular fa-heart"></button>
              </div>
              </div>
              <div class="detail_radiobx">
                <div class="detail_radiobtn">                    
                  <span v-for="(a,b) in $store.state.volume" :class="'volchk'+(b+1)+' volchk'">
                    <em class="fa-regular fa-circle"></em>{{a}}
                  </span>
                </div>
              </div>
              <div class="detail_brand">{{$store.state.brand}}</div>
              <div class="detail_name">
                <span class="name_kor">{{$store.state.namekor}}</span>
                <span class="name_eng">{{$store.state.nameeng}}</span>
              </div>
              <div class="detail_price">
                <span v-for="(a,b) in $store.state.price" :class="'vol_price'+(b+1)+' vol_price'">{{insComma(a)}}<em>원</em></span>
              </div>
              <div class="detail_shopbtnbx">
                <button class="shop_bag">Add To Bag</button>
                <button class="shop_buy">Buy Now</button>
              </div>
              <div class="detail_descbtn">
                <button class="desc_desc">Description</button>
                <button class="desc_note">Fragrance Notes</button>
                <button class="desc_story">Scent Story</button>
              </div>
              <div class="detail_desc">
                <div class="desc_wrap">
                  <div class="desc_svg">
                    <svg viewBox="0 0 14 10" class="svg-icon svg-fill">
                      <path pid="0" d="M12.453 9.88v-4.2h-1.44c-.053-.853.134-1.56.56-2.12C12 3 12.707 2.547 13.693 2.2l-.48-1.4c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.64zm-7.96 0v-4.2h-1.48c-.053-.853.134-1.56.56-2.12C4 3 4.707 2.547 5.693 2.2L5.213.8c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.68z" fill="#000"></path>
                    </svg>
                  </div>
                  <div class="desc_p">
                    <p v-for="(a,b) in $store.state.desc">{{a}}</p>
                  </div>
                  <div class="desc_svg">
                    <svg viewBox="0 0 14 10" class="svg-icon svg-fill svg-right">
                      <path pid="0" d="M12.453 9.88v-4.2h-1.44c-.053-.853.134-1.56.56-2.12C12 3 12.707 2.547 13.693 2.2l-.48-1.4c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.64zm-7.96 0v-4.2h-1.48c-.053-.853.134-1.56.56-2.12C4 3 4.707 2.547 5.693 2.2L5.213.8c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.68z" fill="#000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="product_fragrance">
            <div class="fragrance_descbx">
              <h3 class="product_title">FRAGRANCE NOTES</h3>
              <div class="note_imgbx">
                <figure v-for="(a,b) in $store.state.notes" class="notes_img">
                  <img :src="'./images/sub/'+a+'.jpg'" alt="향수노트">
                  <figcaption>{{a.toUpperCase()}}</figcaption>
                </figure>
              </div>
              <div class="note_wrap">
                <div class="notes">
                  <h4 class="top_note">TOP</h4>
                  <p class="note_desc">{{$store.state.note["top"]}}</p>
                </div>
                <div class="notes">
                  <h4 class="middle_note">MIDDLE</h4>
                  <p class="note_desc">{{$store.state.note["middle"]}}</p>
                </div>
                <div class="notes">
                  <h4 class="base_note">BASE</h4>
                  <p class="note_desc">{{$store.state.note["base"]}}</p>
                </div>
              </div>
            </div>
            <div class="fragrance_imgbx">
            <img :src="'./images/sub/product/'+$store.state.br+'/'+$store.state.image.split('_')[0]+'/2.jpg'" alt="향수이미지">
            </div>
          </section>
          <section class="product_story">
            <h3 class="product_title">SCENT STORY</h3>
            <div class="story_wrap">
              <div class="story_svg">
                <svg viewBox="0 0 14 10" class="svg-icon svg-fill">
                  <path pid="0" d="M12.453 9.88v-4.2h-1.44c-.053-.853.134-1.56.56-2.12C12 3 12.707 2.547 13.693 2.2l-.48-1.4c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.64zm-7.96 0v-4.2h-1.48c-.053-.853.134-1.56.56-2.12C4 3 4.707 2.547 5.693 2.2L5.213.8c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.68z" fill="#000"></path>
                </svg>
              </div>
              <div class="story_p">
                <p v-for="(a,b) in $store.state.story" class="story_desc">{{a}}</p>
              </div>
              <div class="story_svg">
                <svg viewBox="0 0 14 10" class="svg-icon svg-fill svg-right">
                  <path pid="0" d="M12.453 9.88v-4.2h-1.44c-.053-.853.134-1.56.56-2.12C12 3 12.707 2.547 13.693 2.2l-.48-1.4c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.64zm-7.96 0v-4.2h-1.48c-.053-.853.134-1.56.56-2.12C4 3 4.707 2.547 5.693 2.2L5.213.8c-1.546.347-2.666.947-3.36 1.8-.693.853-1.04 2.08-1.04 3.68v3.6h3.68z" fill="#000"></path>
                </svg>
              </div>
            </div>
          </section>
          <section class="product_recommands">
            <h3 class="product_title">RECOMMANDS</h3>
            <div class="recommands_list">
              <ul>
                <li>
                  <!-- 이미지 -->
                  <div class="recommands_imgbx">
                    <a href="#">
                      <figure>
                        <img src="./images/sub/malone/bb_30.jpg" alt="향수" />
                      </figure>
                    </a>
                    <!-- 하트 표시 -->
                    <div class="recommands_like">
                      <button class="fa-solid fa-heart"></button>
                    </div>
                  </div>
                  <!-- 설명 -->
                  <div class="recommands_descbx">
                    <!-- 브랜드 -->
                    <h3 class="recommands_brand">JO MALONE</h3>
                    <!-- 제품명 -->
                    <h4 class="recommands_name">
                      <a href="#"> 블랙베리 앤 베이 코롱 </a>
                    </h4>
                    <!-- 가격 -->
                    <h5 class="recommands_price">
                      <span class="vol_price1 vol_price">84,800<em>원</em></span>
                      <span class="vol_price2 vol_price">164,600<em>원</em></span>
                    </h5>
                    <!-- 사이즈 선택 -->
                    <div class="recommands_radiobtn">
                      <span class="volchk1 volchk">
                        <em class="fa-regular fa-circle"></em>30ml
                      </span>
                      <span class="volchk2 volchk">
                        <em class="fa-regular fa-circle"></em>100ml
                      </span>
                    </div>
                    <!-- 장바구니 -->
                    <div class="product_bag">
                      <button>Add To Bag</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
    `,
}

export default productData;