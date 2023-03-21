// 서브페이지 객실 정보 객체 데이터 관련 JS - rdata.js

const rdata = {
    "all" : {
        luxury : {
            tit : "LUXURY",
            type : "ROOM",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "시티뷰",
            size : "37㎡",
            txt : "유려한 곡선과 금속 몰딩의 인테리어로 우아함과 모던한 분위기를 연출하는 럭셔리 룸은 17층부터 31층까지 위치하여 도심 속에서 잊지 못할 최상의 안락함과 품격있는 서비스를 선보입니다." 
        },
        magnifique : {
            tit : "MAGNIFIQUE",
            type : "ROOM",
            capa : "3명",
            bed : "더블",
            view : "시티뷰",
            size : "44㎡",
            txt : "기존의 프렌치 스타일인 우아한 곡선과 프렌치 모던의 정제함을 소피텔만의 스타일로 재해석하여 아늑하고 차분한 분위기로 파리지앵의 감성을 연상시키며 실용적인 공간을 제공합니다." 
        },
        luxury_lake : {
            tit : "LUXURY LAKE",
            type : "ROOM",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "호수뷰",
            size : "37㎡",
            txt : "아름다운 석촌 호수 전망이 조망되는 객실에서 여유로운 아침을 맞이할 수 있는 럭셔리 레이크 룸은 블루 앤 화이트 쉐브론 패턴의 카펫과 모던 프렌치의 정제된 디테일로 파리지앵 별장처럼 매력적인 느낌을 주며 프렌치 시크 감성과 소피텔만의 편안함을 모두에게 선사합니다. " 
        },
        club_luxury : {
            tit : "CLUB LUXURY",
            type : "ROOM",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "37㎡",
            txt : "25층부터 31층에 위치한 클럽 럭셔리 룸은 곡선이 주는 부드러움과 모던한 분위기를 연출하여 최상의 안락함과 품격있는 서비스를 제공하며 다양한 혜택을 즐길 수 있는 클럽 밀레짐 고객만의 특권이 주어집니다." 
        },
        magnifique_family : {
            tit : "MAGNIFIQUE FAMILY",
            type : "ROOM",
            capa : "4명",
            bed : "더블 및 싱글 ",
            view : "시티뷰",
            size : "57㎡",
            txt : "차분한 분위기를 자아내는 크림, 그레이, 블루 컬러와 금속 몰딩의 조화로 모던함을 연출하는 매니피크 패밀리룸은 매력적인 도시의 전경과 한층 더 여유로운 공간을 자랑합니다." 
        },
        prestige : {
            tit : "PRESTIGE SUITE",
            type : "SUITE",
            capa : "3명",
            bed : "더블 ",
            view : "호수뷰",
            size : "70㎡",
            txt : "스타일리시한 거실에서부터 안락한 침실까지 이어지는 전면 유리창을 통해 풍부한 자연 채광과 아름다운 석촌호수 전망을 담을 수 있는 프레스티지 스위트 룸은 여유로운 크기로 지금까지와는 다른 특별한 경험을 선사합니다." 
        },
        prestige_family : {
            tit : "PRESTIGE FAMILY SUITE",
            type : "SUITE",
            capa : "4명",
            bed : "더블 및 싱글",
            view : "호수뷰",
            size : "70㎡",
            txt : "스타일리시한 거실에서부터 안락한 침실까지 이어지는 전면 유리창을 통해 풍부한 자연 채광과 아름다운 석촌호수 전망을 담을 수 있는 프레스티지 패밀리 스위트 룸은 여유로운 크기와 소파베드가 더해져 가족들과 소중한 추억을 보내기 좋은 최적의 객실입니다. " 
        },
        opera : {
            tit : "OPERA SUITE",
            type : "SUITE",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "135㎡",
            txt : "탁트인 거실의 통유리창을 통해 조망되는 아름다운 석촌호수 전망을 즐길 수 있는 오페라 스위트 룸은 여유로운 크기로 VIP의 안락한 휴식을 위해 디자인 되었습니다." 
        },
        presidential : {
            tit : "PRESIDENTIAL SUITE",
            type : "SUITE",
            capa : "6명",
            bed : "더블",
            view : "호수뷰",
            size : "426㎡",
            txt : "객실 최상층 31층에 위치한 프레지덴셜 스위트 룸은 프렌치 럭셔리의 진수를 보여드립니다." 
        },
        studio : {
            tit : "STUDIO",
            type: "RESIDENCE",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "시티뷰",
            size : "38㎡ ~ 42㎡",
            txt : "서비스드 레지던스 스튜디오는 파리지앵 스타일 인테리어와 오픈형 구조의 세련된 간결함이 돋보입니다."
        },
        signature : {
            tit : "1 BEDROOM SIGNATURE SUITE",
            type: "RESIDENCE",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "71㎡",
            txt : "원 베드룸 시그니처 스위트는 여유로운 객실 공간을 자랑하며 크림과 그레이 톤의 조화로 모던한 인테리어 디자인을 보여주면서도 원목 바닥으로 따뜻한 분위기를 자아냅니다."
        },
        executive : {
            tit : "2 BEDROOM EXECUTIVE SUITE",
            type: "RESIDENCE",
            capa : "6명",
            bed : "더블 및 트윈",
            view : "호수뷰",
            size : "92㎡",
            txt : "매력적인 석촌호수 뷰를 품은 투 베드룸 이그제큐티브 스위트룸은 세련된 인테리어 디자인과 여유로운 분위기를 자아내며, 천연 대리석으로 제작된 욕실은 비교할 수 없는 진정한 힐링의 공간으로 편안하고도 럭셔리한 휴식을 제공합니다."
        },
    },
    "room" :{
        luxury : {
            tit : "LUXURY",
            type : "ROOM",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "시티뷰",
            size : "37㎡",
            txt : "유려한 곡선과 금속 몰딩의 인테리어로 우아함과 모던한 분위기를 연출하는 럭셔리 룸은 17층부터 31층까지 위치하여 도심 속에서 잊지 못할 최상의 안락함과 품격있는 서비스를 선보입니다." 
        },
        magnifique : {
            tit : "MAGNIFIQUE",
            type : "ROOM",
            capa : "3명",
            bed : "더블",
            view : "시티뷰",
            size : "44㎡",
            txt : "기존의 프렌치 스타일인 우아한 곡선과 프렌치 모던의 정제함을 소피텔만의 스타일로 재해석하여 아늑하고 차분한 분위기로 파리지앵의 감성을 연상시키며 실용적인 공간을 제공합니다." 
        },
        luxury_lake : {
            tit : "LUXURY LAKE",
            type : "ROOM",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "호수뷰",
            size : "37㎡",
            txt : "아름다운 석촌 호수 전망이 조망되는 객실에서 여유로운 아침을 맞이할 수 있는 럭셔리 레이크 룸은 블루 앤 화이트 쉐브론 패턴의 카펫과 모던 프렌치의 정제된 디테일로 파리지앵 별장처럼 매력적인 느낌을 주며 프렌치 시크 감성과 소피텔만의 편안함을 모두에게 선사합니다. " 
        },
        club_luxury : {
            tit : "CLUB LUXURY",
            type : "ROOM",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "37㎡",
            txt : "25층부터 31층에 위치한 클럽 럭셔리 룸은 곡선이 주는 부드러움과 모던한 분위기를 연출하여 최상의 안락함과 품격있는 서비스를 제공하며 다양한 혜택을 즐길 수 있는 클럽 밀레짐 고객만의 특권이 주어집니다." 
        },
        magnifique_family : {
            tit : "MAGNIFIQUE FAMILY",
            type : "ROOM",
            capa : "4명",
            bed : "더블 및 싱글 ",
            view : "시티뷰",
            size : "57㎡",
            txt : "차분한 분위기를 자아내는 크림, 그레이, 블루 컬러와 금속 몰딩의 조화로 모던함을 연출하는 매니피크 패밀리룸은 매력적인 도시의 전경과 한층 더 여유로운 공간을 자랑합니다." 
        },
    },
    "suite" : {
        prestige : {
            tit : "PRESTIGE SUITE",
            type : "SUITE",
            capa : "3명",
            bed : "더블 ",
            view : "호수뷰",
            size : "70㎡",
            txt : "스타일리시한 거실에서부터 안락한 침실까지 이어지는 전면 유리창을 통해 풍부한 자연 채광과 아름다운 석촌호수 전망을 담을 수 있는 프레스티지 스위트 룸은 여유로운 크기로 지금까지와는 다른 특별한 경험을 선사합니다." 
        },
        prestige_family : {
            tit : "PRESTIGE FAMILY SUITE",
            type : "SUITE",
            capa : "4명",
            bed : "더블 및 싱글",
            view : "호수뷰",
            size : "70㎡",
            txt : "스타일리시한 거실에서부터 안락한 침실까지 이어지는 전면 유리창을 통해 풍부한 자연 채광과 아름다운 석촌호수 전망을 담을 수 있는 프레스티지 패밀리 스위트 룸은 여유로운 크기와 소파베드가 더해져 가족들과 소중한 추억을 보내기 좋은 최적의 객실입니다. " 
        },
        opera : {
            tit : "OPERA SUITE",
            type : "SUITE",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "135㎡",
            txt : "탁트인 거실의 통유리창을 통해 조망되는 아름다운 석촌호수 전망을 즐길 수 있는 오페라 스위트 룸은 여유로운 크기로 VIP의 안락한 휴식을 위해 디자인 되었습니다." 
        },
        presidential : {
            tit : "PRESIDENTIAL SUITE",
            type : "SUITE",
            capa : "6명",
            bed : "더블",
            view : "호수뷰",
            size : "426㎡",
            txt : "객실 최상층 31층에 위치한 프레지덴셜 스위트 룸은 프렌치 럭셔리의 진수를 보여드립니다." 
        },
    },
    "residence" : {
        studio : {
            tit : "STUDIO",
            type : "RESIDENCE",
            capa : "3명",
            bed : "더블 또는 트윈",
            view : "시티뷰",
            size : "38㎡ ~ 42㎡",
            txt : "서비스드 레지던스 스튜디오는 파리지앵 스타일 인테리어와 오픈형 구조의 세련된 간결함이 돋보입니다."
        },
        signature : {
            tit : "1 BEDROOM SIGNATURE SUITE",
            type : "RESIDENCE",
            capa : "3명",
            bed : "더블",
            view : "호수뷰",
            size : "71㎡",
            txt : "원 베드룸 시그니처 스위트는 여유로운 객실 공간을 자랑하며 크림과 그레이 톤의 조화로 모던한 인테리어 디자인을 보여주면서도 원목 바닥으로 따뜻한 분위기를 자아냅니다."
        },
        executive : {
            tit : "2 BEDROOM EXECUTIVE SUITE",
            type : "RESIDENCE",
            capa : "6명",
            bed : "더블 및 트윈",
            view : "호수뷰",
            size : "92㎡",
            txt : "매력적인 석촌호수 뷰를 품은 투 베드룸 이그제큐티브 스위트룸은 세련된 인테리어 디자인과 여유로운 분위기를 자아내며, 천연 대리석으로 제작된 욕실은 비교할 수 없는 진정한 힐링의 공간으로 편안하고도 럭셔리한 휴식을 제공합니다."
        },
    }
}

const rsdata = {
    "pool" : {
        sname : "POOL",
        sdesc : "25미터 길이의 수영장은 16층에 위치해있어 석촌호수와 서울 도심이 한눈에 보입니다. 통 유리창으로 들어오는 채광과 함께 즐기는 수영은 소피텔에서의 휴식을 더욱 화사하게 만들어드립니다.",
        sloca : "16층",
        stime : "6:00AM ~ 9:40PM",
        sinq : "02-2092-6000, Sofitel.Seoul@sofitel.com",
        setc : "* 정기 휴관일 - 매월 첫째주 화요일(정기 휴관일은 운영 사정에 따라 임의로 변경 될 수 있습니다.)"
    },
    "fitness" : {
        sname : "SOFITEL FITNESS",
        sdesc : "테크노 짐의 최신 장비를 갖춘 체련장에서 몸과 마음의 휴식과 재충전의 시간을 가져보시기 바랍니다.",
        sloca : "5층 및 16층",
        stime : "5층 24시간, 16층 6:00AM ~ 10:00PM",
        sinq : "02-2092-6000, Sofitel.Seoul@sofitel.com",
        setc : "* 정기 휴관일 - 5층 : 매월 둘째주 화요일, 16층 : 매월 첫째주 화요일(정기 휴관일은 운영 사정에 따라 임의로 변경 될 수 있습니다.)"
    },
    "kids" : {
        sname : "KIDS LOUNGE",
        sdesc : "5층에 마련된 키즈라운지는 투숙객 전용 어린이를 위한 놀이 공간입니다. 다양한 색감의 인테리어로 아이들의 창의력를 자극시키며 석촌호수가 보이는 통 유리창으로 들어오는 자연 채광은 놀이에 즐거움을 더해줍니다.",
        sloca : "5층",
        stime : "8:00AM ~ 9:00PM",
        sinq : "02-2092-6000, Sofitel.Seoul@sofitel.com",
        setc : "* 정기 휴관일 - 매월 둘째주 화요일"
    },
    "busi" : {
        sname : "BUSINESS CORNER",
        sdesc : "5층에 위치한 비즈니스 코너는 간단한 업무를 신속하게 처리할 수 있도록 제공되는 공간으로 비즈니스 고객에게 필요한 컴퓨터, 프린터, 스캐너 및 추가적인 사무 기기가 구비되어 있습니다.",
        sloca : "5층",
        stime : "24시간",
        sinq : "02-2092-6000, Sofitel.Seoul@sofitel.com",
        setc : "이용 문의는 5층 프론트 데스크로 해주시기 바랍니다."
    },
}


const fdata = {
    "DINING" : {
        fait : {
            name : "Fait Maison",
            loca : "4F",
            tel : "02-2092-6100",
            mail : "hb220-fb7@sofitel.com"
        },
        mio : {
            name : "MIO",
            loca : "3F",
            tel : "02-2092-6102",
            mail : "hb220-fb10@sofitel.com"
        },
        jardin : {
            name : "Jardin D'Hiver",
            loca : "6F",
            tel : "02-2092-6106",
            mail : "hb220-fb8@sofitel.com"
        },
        lespace : {
            name : "L'Espace",
            loca : "6F",
            tel : "02-2092-6104",
            mail : "hb220-fb9@sofitel.com"
        },
        latitude : {
            name : "Latitude32",
            loca : "32F",
            tel : "02-2092-6108",
            mail : "hb220-fb11@sofitel.com"
        },
    },
    "MEETING & WEDDING" : {
        wedding : {
            name : "Magnifique Wedding",
            loca : "4F",
            tel : "02-2092-6110~1",
            mail : "HB220-SL10@sofitel.com"
        },
        grand : {
            name : "Grand Ballroom Vendôme",
            loca : "4F",
            tel : "02-2092-6052",
            mail : "HB220-SL8@sofitel.com"
        },
        bastille : {
            name : "Bastille Room",
            loca : "3F",
            tel : "02-2092-6052",
            mail : "HB220-SL8@sofitel.com"
        },
        concorde : {
            name : "Concorde Room",
            loca : "6F",
            tel : "02-2092-6052",
            mail : "HB220-SL8@sofitel.com"
        },
    },
    "FACILITIES" : {
        club : {
            name : "Club Millésime",
            loca : "32F",
            tel : "02-2092-6000",
            mail : "Sofitel.Seoul@sofitel.com"
        },
        kids : {
            name : "Kids Lounge",
            loca : "5F",
            tel : "02-2092-6000",
            mail : "Sofitel.Seoul@sofitel.com"
        },
        busi : {
            name : "Business Corner",
            loca : "5F",
            tel : "02-2092-6000",
            mail : "Sofitel.Seoul@sofitel.com"
        },
    },
    "WELLNESS" : {
        pool : {
            name : "Pool",
            loca : "16F",
            tel : "02-2092-6000",
            mail : "Sofitel.Seoul@sofitel.com"
        },
        fitness : {
            name : "Sofitel Fitness",
            loca : "5F, 16F",
            tel : "02-2092-6000",
            mail : "Sofitel.Seoul@sofitel.com"
        },
        spa : {
            name : "Sofitel Spa By Beauté BR",
            loca : "16F",
            tel : "02-2092-6085",
            mail : "sofitelspabybeautebr@naver.com"
        },
    },
}; 