// 서브페이지 JS - res.js

$(document).ready(function() {
    
    // 객실 및 인원선택
    
    // 변경 대상 
    // (1) .sub_cont_numcntbx 하위요소
    const resNum = x => $(".sub_cont_numcntbx").children(x);
    // (2) .sub_cont_roomsel 
    const roomsel = $(".sub_cont_roomsel");
    
    // 이벤트 대상
    // (1) 버튼
    const btndown = $(".btndown"); 
    const btnup = $(".btnup");

    // 숫자 변수
    let cnt = 0;

    // 숫자 적용 변수

    let adultCounts = [];
    let childCounts = [];

    adultCounts[0] = 2;

    // 어린이 인원 0일 시 표시 X
    resNum(".sub_cont_ccnt").css({
        display : "none"
    })

    function roomCount() {
        // 마이너스 버튼 클릭 시 인원 감소
        btndown.click(function() {
            let buttonIndex = $(this).parent().parent().parent().attr("data-roomnum");

            let isAdult = $(this).parent().attr("data-target") === "adult";

            let miNum = $(this).next().find("em");
            cnt = miNum.text();
            if(cnt!==0) {
                cnt--;
                if(cnt < 0) return;
            }
            miNum.text(cnt).parent().siblings("input").attr("value", cnt); 

            // 어른 숫자 반영
            
            // resNum(".sub_cont_acnt").find("em").text(parseInt(acnt1)+parseInt(acnt2)+parseInt(acnt3));

            // 어른 숫자 반영
            if(isAdult) adultCounts[buttonIndex - 1] = cnt;
            // 어린이 숫자 반영
            else childCounts[buttonIndex - 1] = cnt;

            let totalAdultNumber = GetTotalAdultNumber();
            let totalChildNumber = GetTotalChildNumber();
            resNum(".sub_cont_acnt").find("em").text(totalAdultNumber);
            resNum(".sub_cont_ccnt").find("em").text(totalChildNumber);
            if(totalChildNumber < 1){
                resNum(".sub_cont_ccnt").css({
                    display : "none"
                });
            }
        })
    
        // 플러스 버튼 클릭 시 인원 증가
        btnup.click(function(){
            let buttonIndex = $(this).parent().parent().parent().attr("data-roomnum");

            let isAdult = $(this).parent().attr("data-target") === "adult";

            let plusNum = $(this).prev().find("em");
            cnt = plusNum.text();
            cnt++;
            if(cnt > 6) return;
            plusNum.text(cnt).parent().siblings("input").attr("value", cnt); 

            // 어른 숫자 반영
            if(isAdult) adultCounts[buttonIndex - 1] = cnt;
            // 어린이 숫자 반영
            else childCounts[buttonIndex - 1] = cnt;

            let totalAdultNumber = GetTotalAdultNumber();
            let totalChildNumber = GetTotalChildNumber();
            resNum(".sub_cont_acnt").find("em").text(totalAdultNumber);
            resNum(".sub_cont_ccnt").find("em").text(totalChildNumber);
            if(totalChildNumber > 0){
                resNum(".sub_cont_ccnt").css({
                    display : "inline-block"
                });
            }
        })
        
    } // roomCount


    // 호출 
    roomCount();

    function GetTotalAdultNumber(){
        let totalNumber = 0;
        adultCounts.forEach(number => {
            totalNumber += number;
        });

        return totalNumber;
    } 

    function GetTotalChildNumber(){
        let totalNumber = 0;
        childCounts.forEach(number => {
            totalNumber += number;
        });

        return totalNumber;
    }
 }) // load /////
