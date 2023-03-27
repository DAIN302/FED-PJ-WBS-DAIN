// 서브페이지 JS - res.js

$(document).ready(function() {

    const roomInfoArray = [
        {
            "adult" : 2,
            "child" : 0,
        }, 
        {
            "adult" : 0,
            "child" : 0,
        }, 
        {
            "adult" : 0,
            "child" : 0,    
        }
    ]
    
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
    // let roomCounts = 1;

    let adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();


    // 어린이 인원 0일 시 표시 X
    resNum(".sub_cont_ccnt").hide();

    // 성인 수 0일때 어린이 수 증가 X
    for(let i=0; i<adultNumberCheck.length; i++) {
        console.log()
        if(Number(adultNumberCheck[i])===0) {
            $(".sub_cont_numchild").find(".btnup").attr("disabled", true)
        }
        else {
            $(".sub_cont_numchild").find(".btnup").attr("disabled", false)
        }
    }

    $(".sub_cont_numchild").first().find(".btnup").attr("disabled", false)

    if(Number(adultNumberCheck[1])===0) {
        $(".sub_cont_roomsel").last().find(".sub_cont_numbx")
        .find(".sub_cont_numadult").find(".btnup").attr("disabled", true)
    }

    
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
            if(isAdult) roomInfoArray[buttonIndex - 1]["adult"] = cnt;
            // 어린이 숫자 반영
            else roomInfoArray[buttonIndex - 1]["child"] = cnt;

            //성인이 0명 일때
            let isAdultZero = roomInfoArray[buttonIndex - 1]["adult"];
            if(isAdultZero === 0 ) {
                cnt = 0;
                // totalChildNumber = 0;
                $(this).parent().siblings(".sub_cont_numchild").find(".btnup").attr("disabled", true);
                $(this).parent().siblings(".sub_cont_numchild").find("span").find("em").text(cnt);
                for(let i = 1; i<roomInfoArray.length; i++){
                    roomInfoArray[i]["child"] = 0;
                }
            }

            adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();
            console.log(adultNumberCheck[1]);
            if(Number(adultNumberCheck[1])===0) {
                $(".sub_cont_roomsel").last().find(".sub_cont_numbx")
                .find(".sub_cont_numadult").find("span").find("em")
                .text(0).parent().siblings(".btnup").attr("disabled", true)
                .parent().siblings(".sub_cont_numchild").find("span").find("em").text(0);
                if(roomInfoArray[2]["adult"]>0) {
                    roomInfoArray[2]["adult"] = 0;   
                }
            }

            refreshTotalInfo();

        })
    
        // 플러스 버튼 클릭 시 인원 증가
        btnup.click(function(){
            let buttonIndex = $(this).parent().parent().parent().attr("data-roomnum");
            let isAdult = $(this).parent().attr("data-target") === "adult";
            let plusNum = $(this).prev().find("em");
            cnt = plusNum.text();
            cnt++;
            if(cnt > 5) return;
            plusNum.text(cnt).parent().siblings("input").attr("value", cnt); 


            // 어른 숫자 반영
            if(isAdult) roomInfoArray[buttonIndex - 1]["adult"] = cnt;
            // 어린이 숫자 반영
            else roomInfoArray[buttonIndex - 1]["child"] = cnt;

            //성인이 0명 이상인가?
            let isAdultZero = roomInfoArray[buttonIndex - 1]["adult"];
            if(isAdultZero > 0 ) {
                $(this).parent().siblings(".sub_cont_numchild").find(".btnup").attr("disabled", false);
            }

            adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();
            console.log(adultNumberCheck[1]);
            if(Number(adultNumberCheck[1])>0) {
                $(".sub_cont_roomsel").last().find(".sub_cont_numbx")
                .find(".sub_cont_numadult").find(".btnup").attr("disabled", false)
            }

            refreshTotalInfo();
        })
        
    } // roomCount


    // 호출 
    roomCount();

    function GetTotalAdultNumber(){
        let totalNumber = 0;
        roomInfoArray.forEach(roominfo => {
            // totalNumber += number;
            // console.log(roominfo);
            totalNumber += roominfo["adult"];
        });

        return totalNumber;
    } 

    function GetTotalChildNumber(){
        let totalNumber = 0;
        roomInfoArray.forEach(roominfo => {
            totalNumber += roominfo["child"];
        });

        return totalNumber;
    }


    // 종합 개수 반영하는 함수
    function refreshTotalInfo() {
        let totalAdultNumber = GetTotalAdultNumber();
        let totalChildNumber = GetTotalChildNumber();
        resNum(".sub_cont_acnt").find("em").text(totalAdultNumber);
        resNum(".sub_cont_ccnt").find("em").text(totalChildNumber);
        if(totalChildNumber < 1){
            resNum(".sub_cont_ccnt").hide()
        } 
        else if(totalChildNumber > 0) {
            resNum(".sub_cont_ccnt").show()
        }

        let roomCounts = 0;
        roomInfoArray.forEach((element, idx) => {
            // console.log(element, idx);
            let eleAdult = element.adult;
            // console.log(eleAdult);
            if(eleAdult > 0) {
                roomCounts = idx+1;
                //console.log(roomCounts);
            }
        });
        
        resNum(".sub_cont_rcnt").find("em").text(roomCounts);

    } // refreshTotalInfo 


 }) // load /////
