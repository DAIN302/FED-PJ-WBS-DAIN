/// 달력 함수

// 호출
MakeCaledar();


function MakeCaledar() {
    // 선택함수 ///////
    const qs = x => document.querySelector(x);
    const qsa = x => document.querySelectorAll(x);
    
    // 두자릿수 만들기 함수
    const addZero = x => x <10?"0"+x:x;

    // date 객체
    const thisDate = new Date();
    // 오늘 날짜
    const today = new Date();
    // 달력 이동 최대 개월 수
    const limitMonth = 6;
    // 달력에서 표기하는 날짜 객체
    let thisMonth = today;
    // 달력에서 표기하는 년
    let currentYear = thisMonth.getFullYear();
    // 달력에서 표기하는 월
    let currentMonth = thisMonth.getMonth();
    // 체크인 날짜
    let checkInDate = "";
    // 체크아웃 날짜
    let checkOutDate = "";

    // 달력 호출
    InitCalendar(thisMonth);

    // 이전달로 이동
    $(".cal_prebtn").click(function(){
        const startYear = $(".start_yeartit").text()
        const startMonth = $(".start_monthtit").text().split(".")[1]
        
        // 달력이 현재 년 월보다 같거나 작을 경우 뒤로가기 막기
        if(getLimitMonthCheck(parseInt(startYear), parseInt(startMonth)) <= 0) {
            return;
        }

        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        InitCalendar(thisMonth);
        checkReservation();

    })
    // 다음달로 이동
    $(".cal_nextbtn").click(function(){
        const nextYear = $(".next_yeartit").text()
        const nextMonth = $(".next_monthtit").text().split(".")[1]
        
        // 예약 가능 최대 개월수와 같거나 크면 다음달 이동 막기
        if(getLimitMonthCheck(parseInt(nextYear), parseInt(nextMonth)) >= limitMonth) {
            alert(`최대예약 기간은 ${limitMonth}개월 입니다`)
            return;
        }

        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        InitCalendar(thisMonth);
        checkReservation();

    })

    // 달력 그리기
    function InitCalendar(thisMonth) {
        // 데이터 정리
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();

        // html 요소 생성
        let start_calendar = "";
        let last_calendar = "";

        makeStartCalendar();
        makeLastCalendar();

        

        // start_calendar 
        function makeStartCalendar() {
            // 이전달의 마지막 날 날짜와 요일 구하기
            const startDay = new Date(currentYear, currentMonth, 0);
            // 이전달 마지막 날짜
            const prevDate = startDay.getDate();
            // 이전달 마지막 요일
            const prevDay = startDay.getDay();


            // 이번달의 마지막날 날짜와 요일 구하기
            const endDay = new Date(currentYear, currentMonth+1, 0);
            // 이번달 마지막 날짜
            const nextDate = endDay.getDate();
            // 이번달 마지막 요일
            const nextDay = endDay.getDay();

            // 지난 달
            for(let i = prevDate - prevDay; i<= prevDate; i++) {
                start_calendar += prevDisableDay(i);
            }

            // 이번달
            for(let i = 1; i<= nextDate; i++) {
                // 이번달이 현재 년도와 월이 같을 경우
                if(currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                    // 지난 날짜는 disable 처리
                    if(i< today.getDate()) {
                        start_calendar += prevDisableDay(i)
                    } else {
                        start_calendar += dailyDay(currentYear, currentMonth, i);
                    }
                } else {
                    start_calendar += dailyDay(currentYear, currentMonth, i);
                }
            } // for 문

            // 다음달 7일 표시
            for(let i =1; i<=(6-nextDay); i++) {
                start_calendar += nextDisableDay(i);
            }

            $(".start_calendar").html(start_calendar);
            // 년표기 
            $(".start_yeartit").text(currentYear);
            // 월표기
            $(".start_monthtit").text("."+addZero(currentMonth+1));

        }// makeStartCalendar

        // last_calendar 
        function makeLastCalendar() {
            let tempCurrentYear = currentYear;
            let tempCurrentMonth = currentMonth + 1;
    
            if (tempCurrentMonth >= 12) {
                tempCurrentYear = parseInt(tempCurrentYear) + 1;
                tempCurrentMonth = 0;
            }
    
            // 이번 달의 마지막 날 날짜와 요일 구하기
            const startDay = new Date(tempCurrentYear, tempCurrentMonth, 0);
            const prevDate = startDay.getDate();
            const prevDay = startDay.getDay();
    
            // 다음 달의 마지막날 날짜와 요일 구하기
            const endDay = new Date(tempCurrentYear, tempCurrentMonth + 1, 0);
            const nextDate = endDay.getDate();
            const nextDay = endDay.getDay();
    
            // 이번달
            for (let i = prevDate - prevDay; i <= prevDate; i++) {
                last_calendar += prevDisableDay(i);
            }
    
            // 다음달
            for (let i = 1; i <= nextDate; i++) {
                // 다음달이 현재 년도와 월이 같을경우
                if (tempCurrentYear === today.getFullYear() && tempCurrentMonth === today.getMonth()) {
                    // 지난 날짜는 disable 처리
                    if (i < today.getDate()) {
                        last_calendar += prevDisableDay(i)
                    } else {
                        last_calendar += dailyDay(tempCurrentYear, tempCurrentMonth, i);
                    }
                } else {
                    last_calendar += dailyDay(tempCurrentYear, tempCurrentMonth, i);
                }
            }
    
            // 다다음달 7 일 표시
            for (let i = 1; i <= (6 - nextDay); i++) {
                last_calendar += nextDisableDay(i);
            }

            $(".last_calendar").html(last_calendar);
            // 년표기 
            $(".next_yeartit").text(tempCurrentYear);
            // 월표기
            $(".next_monthtit").text("."+addZero(tempCurrentMonth+1));
        }

        // 이전달 미리보기
        function prevDisableDay(day) {
            return `<div class="day prev disable">${day}</div>`;
        }

        // 이번달
        function dailyDay(currentYear, currentMonth, day) {
            const date = currentYear + '' + addZero((currentMonth+1)) + '' + addZero(day)
            if (checkInDate === date) {
                return `<div class="day current checkIn" data-day="${date}"><span>${day}</span><p class="check_in_out_p"></p><p></div>`
            } else if (checkOutDate === date) {
                return `<div class="day current checkOut" data-day="${date}"><span>${day}</span><p class="check_in_out_p"></p><p></div>`
            } else {
                return `<div class="day current" data-day="${date}"><span>${day}</span><p class="check_in_out_p"></p><p></div>`;
            }
        }

        // 다음달 미리보기
        function nextDisableDay(day) {
            return `<div class="day next disable">${day}</div>`;
        }

        // selectday 이벤트 함수 추가
        addClassSelectDay();
    } // InitCalendar 

    // 표시하는 최대 개월 수 => 6개월
    function getLimitMonthCheck(year, month) {
        let months = ((today.getFullYear() - year)*12);
        months -= (today.getMonth()+1);
        months += month;

        return months;
    }

    // 체크인 / 체크아웃 날짜 선택 함수
    function addClassSelectDay() {
        if (checkInDate !== "" && checkOutDate !== "") {
            $('.day').each(function () {
                const data_day = $(this).data('day');
                if (data_day !== undefined && data_day >= checkInDate && data_day <= checkOutDate) {
                    $(this).addClass('selectDay');
                }
            });
        } 
    }


    // 함수 호출
    checkReservation();


    // 체크인/아웃 선택 함수
    function checkReservation() {
        $(".current").on("click", ()=>selectDay(event.currentTarget))
        // 달력날짜클릭
        function selectDay(obj) {
            if(checkInDate ==="") {
                $(obj).addClass("checkIn");
                checkInDate = $(obj).data("day");
                console.log(checkInDate);
                $(".checkIn_date").text(getCheckDateHtml(checkInDate));
            } 
            else {
                // 체크인 날짜 한번 더 클릭했을때 동작 X
                if (parseInt(checkInDate) === $(obj).data("day")) {
                    return;
                }
                // 체크인 날짜보다 체크아웃 날짜를 더 앞으로 찍었을 때 날짜 변경
                if(checkOutDate === "" && parseInt(checkInDate) > $(obj).data("day")) {
                    $(".day").removeClass("checkIn");
                    $(".checkIn_date").text("");

                    checkOutDate = checkInDate;
                    checkInDate = $(obj).data("day");

                    $(obj).addClass("checkIn")
                    $(`.day[data-day"${checkOutDate}"]`).addClass("checkOut");

                    $(".checkIn_date").text(getCheckDateHtml(checkInDate));
                    $(".checkOut_date").text(getCheckDateHtml(checkOutDate));

                    addClassSelectDay();

                    return;
                }

                // 체크아웃
                if(checkOutDate==="") {
                    $(obj).addClass("checkOut");
                    checkOutDate = $(obj).data("day");
                    $(".checkOut_date").text(getCheckDateHtml(checkOutDate));

                    addClassSelectDay();
                } else {
                    // 체크아웃 날짜 지정 후에 체크인 날짜 변경할 경우
                    $(".day").removeClass("checkIn");
                    $(".day").removeClass("checkOut");
                    $(".day").removeClass("selectDay");

                    $(obj).addClass("checkIn");
                    
                    checkInDate = $(obj).data("day");
                    checkOutDate = "";

                    $(".checkIn_date").text(getCheckDateHtml(checkInDate));
                    $(".checkOut_date").text();
                }
            }

        }
    }

    // 체크인/아웃 날짜 표기
    function getCheckDateHtml(check) {
        check = check.toString();
        return check.substring(0,4) + "." + check.substring(4,6)+ "." + check.substring(6,8) + " " +strWeekDay(weekday(check));
    }
    
    // 몇요일인지 알려주는 함수 (숫자 형태)
    function weekday(YYYYMMDD) {
        const weekday_year = YYYYMMDD.substring(0, 4);
        const weekday_menth = YYYYMMDD.substring(4, 6);
        const weekday_day = YYYYMMDD.substring(6, 9);

        return new Date(weekday_year + "-" + weekday_menth + "-" + weekday_day).getDay();
    }

    // 요일 리턴
    function strWeekDay(weekday) {
        switch (weekday) {
            case 0: return "일"
                break;
            case 1: return "월"
                break;
            case 2: return "화"
                break;
            case 3: return "수"
                break;
            case 4: return "목"
                break;
            case 5: return "금"
                break;
            case 6: return "토"
                break;
        }
    }

    
}