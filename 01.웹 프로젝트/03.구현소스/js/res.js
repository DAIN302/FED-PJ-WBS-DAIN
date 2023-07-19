// 서브페이지 JS - res.js
import MakeCaledar from "./calendar.js";
// 달력함수호출
MakeCaledar();

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

// 아코디언 메뉴
// 1. 처음에 다 숨기기
$(".sub_cont_restxt>h3:first").addClass("active");
$(".sub_cont_resdesc").not(":first").addClass("hidden");
// 2. 클릭이벤트 설정
$(".sub_cont_restxt>h3").click(function(){
    // 2-0. 다른 h3 요소 클릭 시 다른 메뉴는 접히기
    $(".sub_cont_restxt>h3").not(this).removeClass("active")
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


// 객실 및 인원선택

// 변경 대상 
// (1) .sub_cont_numcntbx 하위요소
const resNum = x => $(".sub_cont_numcntbx").children(x);

// 이벤트 대상
// (1) 버튼
const btndown = $(".btndown"); 
const btnup = $(".btnup");

// 숫자 변수
let cnt = 0;
// 성인 수 체크 
let adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();

// 어린이 인원 0일 시 표시 X
resNum(".sub_cont_ccnt").hide();

// 성인 수 0일때 어린이 수 증가 X -> 어린이 버튼 비활성화
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
        miNum.text(cnt).parent().siblings("input").val(cnt);

        // 어른 숫자 반영
        if(isAdult) roomInfoArray[buttonIndex - 1]["adult"] = cnt;
        // 어린이 숫자 반영
        else roomInfoArray[buttonIndex - 1]["child"] = cnt;

        //성인이 0명 일때
        let isAdultZero = roomInfoArray[buttonIndex - 1]["adult"];
        // 성인이 0명일 때 어린이 숫자 초기화 및 숫자 증가 비활성화
        if(isAdultZero === 0 ) {
            cnt = 0;
            $(this).parent().siblings(".sub_cont_numchild").find(".btnup").attr("disabled", true);
            $(this).parent().siblings(".sub_cont_numchild").find("span").find("em").text(cnt);
            for(let i = 1; i<roomInfoArray.length; i++){
                roomInfoArray[i]["child"] = 0;
            }
        }

        adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();

        // 객실 1의 성인 수 1명 이하로 내려가지 않게 설정 
        if(Number(adultNumberCheck[0]) < 2 ) {
            $(".sub_cont_numadult").first().find(".btndown").attr("disabled", true)
        }

        // 객실2의 성인 수가 0명이면 객실 3의 숫자 초기화 
        if(Number(adultNumberCheck[1])===0) {
            $(".sub_cont_roomsel").last().find(".sub_cont_numbx")
            .find(".sub_cont_numadult").find("span").find("em")
            .text(0).parent().siblings(".btnup").attr("disabled", true)
            .parent().siblings(".sub_cont_numchild").find("span").find("em").text(0);
            $(".sub_cont_numbx").eq(1).removeClass("active");
            if(roomInfoArray[2]["adult"]>0) {
                roomInfoArray[2]["adult"] = 0;   
                $(".sub_cont_numbx").eq(2).removeClass("active");
            }
        }
        // 객실 3의 성인 수가 0명이면 밑줄 흐리게
        if(Number(adultNumberCheck[2])===0) {
            $(".sub_cont_numbx").eq(2).removeClass("active");
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
        plusNum.text(cnt).parent().siblings("input").val(cnt);


        // 어른 숫자 반영
        if(isAdult) roomInfoArray[buttonIndex - 1]["adult"] = cnt;
        // 어린이 숫자 반영
        else roomInfoArray[buttonIndex - 1]["child"] = cnt;

        //성인이 0명 이상인가?
        let isAdultZero = roomInfoArray[buttonIndex - 1]["adult"];
        // 성인이 0명이상일 때 어린이 숫자 증가 버튼 활성화
        if(isAdultZero > 0 ) {
            $(this).parent().siblings(".sub_cont_numchild").find(".btnup").attr("disabled", false);
        }

        adultNumberCheck = $(".sub_cont_numadult").find("span").find("em").text();

        // 객실 1의 성인 수 2명 이상일 때 감소 버튼 활성화 
        if(Number(adultNumberCheck[0]) > 1 ) {
            $(".sub_cont_numadult").first().find(".btndown").attr("disabled", false)
        }
        // 객실 2의 성인이 1명 이상일 때 객실 3 버튼 활성화
        console.log(adultNumberCheck[1]);
        if(Number(adultNumberCheck[1])>0) {
            $(".sub_cont_roomsel").last().find(".sub_cont_numbx")
            .find(".sub_cont_numadult").find(".btnup").attr("disabled", false);
            $(".sub_cont_numbx").eq(1).addClass("active");
        }
        // 객실 3의 성인이 1명이상일 때 밑줄 진하게
        if(Number(adultNumberCheck[2])>0) {
            $(".sub_cont_numbx").eq(2).addClass("active");
        }

        refreshTotalInfo();
    })
    
} // roomCount


// 함수 호출 
roomCount();

// 인원 종합 구하는 함수
function GetTotalPeopleNumber(age){
    let totalNumber = 0;
    roomInfoArray.forEach(roominfo => {
        totalNumber += roominfo[age];
    });

    return totalNumber;
}

// 종합 개수 반영하는 함수
function refreshTotalInfo() {
    let totalAdultNumber = GetTotalPeopleNumber("adult");
    let totalChildNumber = GetTotalPeopleNumber("child");
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
        let eleAdult = element.adult;
        if(eleAdult > 0) {
            roomCounts = idx+1;
        }
    });
    
    resNum(".sub_cont_rcnt").find("em").text(roomCounts);

} // refreshTotalInfo 

