// 서브페이지 JS - contact.js

$(document).ready(function() {
    // 1. 처음에 다 숨기기
    $(".sub_cont_locadesc").addClass("hidden");
    // 2. 클릭이벤트 설정
    $(".sub_cont_locatxt>h3").click(function(){
        // 2-0. 다른 h3 요소 클릭 시 다른 메뉴는 접히기
        $(".sub_cont_locatxt>h3").not(this).removeClass("active")
        .next().slideUp(400, function(){
            $(this).addClass("hidden").show();
        });
        // 2-1. h3요소 active 클래스 존재 시(하위메뉴 접기)
        if($(this).hasClass("active")) {
            $(this).removeClass("active")
            .next().slideUp(400, function(){
                $(this).addClass("hidden").show();
            });
        }
        // 2-2. h3요소에 active 클래스 없을 시(하위메뉴 펼치기)
        else {
            $(this).addClass("active").next().removeClass("hidden").hide().slideDown(400);
        }
        
    })// click
    // 부대시설 연락처 리스트 만들기 함수
    // 대상선정 : .sub_cont_addinfo
    const addInfo = $(".sub_cont_addinfo");
    console.log(addInfo);
    function flist() {
        let hcode = "";
        for(let x in fdata) {
            // console.log(fdata[x]);
            let fv = fdata[x]
            // console.log(fv)
            hcode += `
                <li>
                    <h3>${x}</h3>
                    <ul class="sub_cont_addcont">
            `
            for(let y in fv) {
                console.log(y);
                hcode +=`
                            <li>
                                <h4>${fv[y].name}</h4>
                                <ol>
                                    <li>
                                        <span class="fa-solid fa-location-dot"></span>
                                        <span>${fv[y].loca}</span>
                                    </li>
                                    <li>
                                        <span class="fa-solid fa-phone"></span>
                                        <span>${fv[y].tel}</span>
                                    </li>
                                    <li>
                                        <span class="fa-solid fa-envelope"></span>
                                        <span>${fv[y].mail}</span>
                                    </li>
                                 </ol>
                            </li>
                        `
            } // for in
            hcode += `</ul></li>`
        } // for in
        addInfo.html(hcode);
    }// flist 함수

    // 함수호출
    flist();
}) // 로드함수