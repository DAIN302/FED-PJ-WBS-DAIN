// 향수 데이터 JS
const perfumeListData = {
    ce : {
        namekor : "콜로니아 에센자 오 드 코롱",
        nameeng : "Colonia Essensa Eau de Cologne",
        brand : "ACQUA DI PARMA",
        image : "ce_50",
        volume : ["50ml", "100ml"],
        price : [147250, 204250],
        gender : {
            men : ["formal", "elegant"],
            women : []
        },
        notes : ["woody", "citrus"],
        note : {
            top : "베르가못, 레몬, 자몽, 오렌지, 만다린, 네롤리, 쁘띠그레인",
            middle : "로즈마리, 장미, 은방울꽃, 자스민, 클로브",
            base : "베티버, 파출리, 머스크, 앰버"
        },
        desc : ["시트러스하고 우디함이 강조된 젊은 남성들을 위한 향"],
        story : ["남자가 갖출 수 있는 품위의 끝", "남자친구 삼고 싶은 편안한 자상함"]
    }, 
    mirto : {
        namekor : "미르토 디 파나레아 오 드 뚜왈렛",
        nameeng : "Mirto Di Panarea Eau de Toilette",
        brand : "ACQUA DI PARMA",
        image : "mirto_30",
        volume : ["30ml", "75ml", "150ml"],
        price : [104500, 161500, 247500],
        gender : {
            men : ["street"],
            women : []
        },
        notes : ["citrus"],
        note : {
            top : "머틀, 바질, 레몬, 베르가못",
            middle : "바다향기, 자스민, 다마스크 로즈",
            base : "주니퍼, 버지니아 시더우드, 앰버, 렌티스크"
        },
        desc : ["파나레아섬의 미르토가 전하는 짜릿한 지중해의 향"],
        story : ["하얀색 벽과 푸른 지붕이 이어진 산토리니 해변,", "전망대에 다다라 바다를 본 순간", "내 코 끝에 와닿는 누군가의 상쾌한 비누 향기"]
    }, 
    osman : {
        namekor : "오스만투스 오 드 퍼퓸",
        nameeng : "Osmanthus Eau de Parfum",
        brand : "ACQUA DI PARMA",
        image : "osman_20",
        volume : ["20ml", "100ml"],
        price : [147250, 332500],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral","citrus"],
        note : {
            top : "그린 만다린, 네롤리",
            middle : "작약, 핑크 페퍼, 암브레트",
            base : "오스만투스, 파출리"
        },
        desc : [],
        story : []
    }, 
    pico : {
        namekor : "피코 디 아말피 오 드 뚜왈렛",
        nameeng : "Pico Di Amalfi Eau de Toilette",
        brand : "ACQUA DI PARMA",
        image : "pico_30",
        volume : ["30ml", "75ml", "150ml"],
        price : [104500, 161500, 247500],
        gender : {
            men : ["street"],
            women : []
        },
        notes : ["woody"],
        note : {
            top : "레몬, 베르가못, 자몽",
            middle : "무화과꿀, 핑크 페퍼, 자스민 꽃잎",
            base : "무화과 나무, 시더우드, 벤조인"
        },
        desc : [],
        story : []
    }, 
    rosa : {
        namekor : "로사 노빌레 오 드 퍼퓸",
        nameeng : "Rosa Nobile Eau de Parfum",
        brand : "ACQUA DI PARMA",
        image : "rosa_20",
        volume : ["20ml", "50ml", "100ml"],
        price : [118750, 213750, 299250],
        gender : {
            men : [],
            women : ["lovely"]
        },
        notes : ["floral"],
        note : {
            top : "칼라브리아 베르가못, 탠저린, 페퍼",
            middle : "이탈리아 로즈, 작약, 제비꽃, 은방울꽃",
            base : "버지니아 시더우드, 머스크, 앰버그리스"
        },
        desc : [],
        story : []
    }, 
    yuzu : {
        namekor : "유자 오 드 퍼퓸",
        nameeng : "Yuzu Eau de Parfum",
        brand : "ACQUA DI PARMA",
        image : "yuzu_20",
        volume : ["20ml", "100ml"],
        price : [147250, 332500],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral","citrus"],
        note : {
            top : "유자, 베르가못, 초피나무",
            middle : "연꽃, 미모사, 제비꽃잎, 자스민",
            base : "머스크, 감초, 샌달우드"
        },
        desc : [],
        story : []
    }, 
    bal : {
        namekor : "발다프리크 오 드 퍼퓸",
        nameeng : "Bal d'Afrique Eau de Parfum",
        brand : "BYREDO",
        image : "bal_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : ["formal"],
            women : ["modern"],
        },
        notes : ["floral","citrus"],
        note : {
            top : "아프리칸 매리골드, 베르가못, 부쿠",
            middle : "바이올렛, 시클라멘",
            base : "블랙앰버, 모로칸 시더우드, 머스크, 베티버"
        },
        desc : [],
        story : []
    }, 
    blan : {
        namekor : "블랑쉬 오 드 퍼퓸",
        nameeng : "Blanche Eau de Parfum",
        brand : "BYREDO",
        image : "blan_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : ["street"],
            women : ["chic"],
        },
        notes : ["floral"],
        note : {
            top : "핑크 페퍼, 화이트로즈",
            middle : "네롤리, 작약, 제비꽃, 알데하이드",
            base : "머스크, 샌달우드"
        },
        desc : [],
        story : []
    }, 
    ghost : {
        namekor : "모하비고스트 오 드 퍼퓸",
        nameeng : "Mojave Ghost Eau de Parfum",
        brand : "BYREDO",
        image : "ghost_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : ["elegant"],
            women : ["chic", "modern"],
        },
        notes : ["floral", "woody"],
        note : {
            top : "암브레트, 네스베리",
            middle : "매그놀리아, 샌달우드, 바이올렛",
            base : "시더우드, 머스크, 베티버"
        },
        desc : [],
        story : []
    }, 
    inf : {
        namekor : "인플로레센스 오 드 퍼퓸",
        nameeng : "Inflorescence Eau de Parfum",
        brand : "BYREDO",
        image : "inf_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "장미꽃잎, 핑크 프리지아",
            middle : "매그놀리아, 은방울꽃",
            base : "프레쉬 재스민"
        },
        desc : [],
        story : []
    }, 
    lat : {
        namekor : "라튤립 오 드 퍼퓸",
        nameeng : "La Tulipe Eau de Parfum",
        brand : "BYREDO",
        image : "lat_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "시클라멘, 프리지아, 루바브",
            middle : "튤립",
            base : "블론드 우드, 베티버"
        },
        desc : [],
        story : []
    }, 
    sc : {
        namekor : "슈퍼시더 오 드 퍼퓸",
        nameeng : "Super Cedar Eau de Parfum",
        brand : "BYREDO",
        image : "sc_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        gender : {
            mem : ["formal"],
            women : [],
        },
        notes : ["woody"],
        note : {
            top : "장미꽃잎",
            middle : "버지니아 시더우드",
            base : "아이티 베티버, 실크 머스크"
        },
        desc : [],
        story : []
    }, 
    pardoson : {
        namekor : "도손 오 드 퍼퓸",
        nameeng : "Doson Eau de Parfum",
        brand : "DIPTYQUE",
        image : "par-doson_75",
        volume : ["75ml"],
        price : [214800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "아프리카 오렌지꽃, 로즈 아이리스",
            middle : "튜베로즈, 핑크페퍼",
            base : "머스크"
        },
        desc : [],
        story : []
    }, 
    parphilo : {
        namekor : "필로시코스 오 드 퍼퓸",
        nameeng : "Philosykos Eau de Parfum",
        brand : "DIPTYQUE",
        image : "par-philo_75",
        volume : ["75ml"],
        price : [214800],
        gender : {
            mem : ["elegant"],
            women : ["modern"],
        },
        notes : ["floral", "woody"],
        note : {
            top : "무화과잎, 무화과",
            middle : "코코넛, 그린노트",
            base : "시더우드, 우디노트, 무화과나무"
        },
        desc : [],
        story : []
    }, 
    parrose : {
        namekor : "오 로즈 오 드 퍼퓸",
        nameeng : "Eau Rose Eau de Parfum",
        brand : "DIPTYQUE",
        image : "par-rose_75",
        volume : ["75ml"],
        price : [214800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "베르가못, 블랙커런트, 리치",
            middle : "다마스크 로즈, 센티폴리아 로즈",
            base : "시더우드, 머스크, 허니"
        },
        desc : [],
        story : []
    }, 
    partam : {
        namekor : "탐다오 오 드 퍼퓸",
        nameeng : "Tamdao Eau de Parfum",
        brand : "DIPTYQUE",
        image : "par-tam_75",
        volume : ["75ml"],
        price : [214800],
        gender : {
            mem : ["elegant"],
            women : [],
        },
        notes : ["woody"],
        note : {
            top : "로즈, 플럼블로썸, 이탈리안 사이프러스",
            middle : "샌달우드, 시더우드",
            base : "앰버, 스파이시 어코드, 화이트머스크, 브라질리안 로즈우드"
        },
        desc : [],
        story : []
    }, 
    bb : {
        namekor : "블랙베리 앤 베이 코롱",
        nameeng : "Blackberry & Bay Cologne",
        brand : "Jo Malone",
        image : "bb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        gender : {
            mem : ["street"],
            women : [],
        },
        notes : ["fruity", "woody"],
        note : {
            top : "블랙베리",
            middle : "월계수 잎",
            base : "시더우드"
        },
        desc : [],
        story : []
    }, 
    ef : {
        namekor : "잉글리쉬 페어 앤 프리지아 코롱",
        nameeng : "English Pear & Freesia Cologne",
        brand : "Jo Malone",
        image : "ef_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "킹 윌리엄 페어",
            middle : "프리지아",
            base : "파출리"
        },
        desc : [],
        story : []
    }, 
    pb : {
        namekor : "피오니 앤 블러쉬 스웨이드 코롱",
        nameeng : "Peony & Blush Suede Cologne",
        brand : "Jo Malone",
        image : "pb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "빨간 사과",
            middle : "피오니",
            base : "스웨이드"
        },
        desc : [],
        story : []
    }, 
    wb : {
        namekor : "와일드 블루벨 코롱",
        nameeng : "Wild Bluebell Cologne",
        brand : "Jo Malone",
        image : "pb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        gender : {
            mem : [],
            women : ["modern"],
        },
        notes : ["floral", "fruity"],
        note : {
            top : "블루벨",
            middle : "감",
            base : "화이트 머스크"
        },
        desc : [],
        story : []
    }, 
    dg : {
        namekor : "다크 앰버 앤 진저 릴리 코롱 인텐스",
        nameeng : "Dark Amber & Ginger Lily Cologne Intense",
        brand : "Jo Malone",
        image : "dg_100",
        volume : ["100ml"],
        price : [248000],
        gender : {
            mem : ["formal"],
            women : ["modern", "chic"],
        },
        notes : ["floral", "woody"],
        note : {
            top : "블랙 카다멈",
            middle : "블랙 오키드",
            base : "키아라 인센스"
        },
        desc : [],
        story : []
    }, 
    ob : {
        namekor : "오드 앤 베르가못 코롱 인텐스",
        nameeng : "Oud & Bergamot Cologne Intense",
        brand : "Jo Malone",
        image : "ob_100",
        volume : ["100ml"],
        price : [248000],
        gender : {
            mem : ["formal"],
            women : [],
        },
        notes : ["woody", "citrus"],
        note : {
            top : "베르가못",
            middle : "시더우드",
            base : "오드"
        },
        desc : [],
        story : []
    }, 
    vg : {
        namekor : "베티버 앤 골든 바닐라 코롱 인텐스",
        nameeng : "Vetiver & Golden Vanilla Cologne Intense",
        brand : "Jo Malone",
        image : "vg_100",
        volume : ["100ml"],
        price : [248000],
        gender : {
            mem : ["formal"],
            women : ["modern", "chic"],
        },
        notes : ["woody"],
        note : {
            top : "카다멈",
            middle : "베티버 버번",
            base : "바닐라 버번"
        },
        desc : [],
        story : []
    }, 
    angel : {
        namekor : "엔젤 디 피렌체 오 드 코롱",
        nameeng : "Angeli di Firenze Eau de Cologne",
        brand : "Santa Maria Novella",
        image : "angel_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral", "fruity"],
        note : {
            top : "피치, 오렌지",
            middle : "마린 노트, 자스민, 블랙커런트",
            base : "샌달우드, 바닐라, 머스크"
        },
        desc : [],
        story : []
    }, 
    fresia : {
        namekor : "프리지아 오 드 코롱",
        nameeng : "Fresia Eau de Cologne",
        brand : "Santa Maria Novella",
        image : "fresia_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "프리지아 어코드",
            middle : "바이올렛, 캐비지로즈 앱솔루트",
            base : "아이리스, 머스크"
        },
        desc : [],
        story : []
    }, 
    iris : {
        namekor : "아이리스 오 드 퍼퓸",
        nameeng : "L'iris Eau de Parfum",
        brand : "Santa Maria Novella",
        image : "iris_50",
        volume : ["50ml","100ml"],
        price : [163800, 248800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "네롤리, 갈바넘, 티머페퍼",
            middle : "제라늄, 자스민, 매그놀리아",
            base : "아이리스, 머스크, 앰버그리스"
        },
        desc : [],
        story : []
    }, 
    melo : {
        namekor : "멜로그라노 오 드 코롱",
        nameeng : "Melograno Eau de Cologne",
        brand : "Santa Maria Novella",
        image : "melo_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "베르가못, 비터 오렌지, 프레쉬 스파이스",
            middle : "석류, 로즈, 일랑일랑",
            base : "오크모스, 랍다넘, 머스크, 파출리"
        },
        desc : [],
        story : []
    }, 
    pot : {
        namekor : "포푸리 오 드 코롱",
        nameeng : "Pot Pourri Eau de Cologne",
        brand : "Santa Maria Novella",
        image : "pot_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        gender : {
            mem : ["formal"],
            women : [],
        },
        notes : ["woody"],
        note : {
            top : "베르가못, 비터 오렌지, 라우렐",
            middle : "라벤더, 타임, 클로브, 로즈마리",
            base : "파출리, 시더우드, 페루 발삼"
        },
        desc : [],
        story : []
    }, 
    tbc : {
        namekor : "타바코 토스카노 오 드 코롱",
        nameeng : "Tabacco Toscano Eau de Cologne",
        brand : "Santa Maria Novella",
        image : "tbc_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        gender : {
            mem : ["formal"],
            women : [],
        },
        notes : ["woody"],
        note : {
            top : "베르가못, 토스카나 토바코잎",
            middle : "레더, 엠버, 버치우드",
            base : "시더우드, 유창목, 샌달우드, 머스크, 바닐라"
        },
        desc : [],
        story : []
    }, 
    cpc : {
        namekor : "코발트 파출리 앤 시더 오 드 뚜왈렛",
        nameeng : "Cobalt Patchouli & Cedar Eau de Toilette",
        brand : "Jo Loves",
        image : "cpc_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : ["street"],
            women : [],
        },
        notes : ["citrus"],
        note : {
            top : "블루 그레이프프룻",
            middle : "제라늄 비번, 시더잎, 넛맥",
            base : "시더우드 아틀랏, 베티버, 파출리, 머스크"
        },
        desc : [],
        story : []
    }, 
    ec : {
        namekor : "에보니 앤 카시스 오 드 뚜왈렛",
        nameeng : "Ebony & Cassis Eau de Toilette",
        brand : "Jo Loves",
        image : "ec_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : ["formal"],
            women : ["modern"],
        },
        notes : ["woody"],
        note : {
            top : "블랙 커런트, 딸기, 블랙베리",
            middle : "몰약, 넛맥, 대추",
            base : "파출리, 시더우드"
        },
        desc : [],
        story : []
    }, 
    fs : {
        namekor : "넘버42 더 플라워 샵 오 드 뚜왈렛",
        nameeng : "No.42 The Flower Shop Eau de Toilette",
        brand : "Jo Loves",
        image : "fs_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "블랙 커런트, 딸기, 블랙베리",
            middle : "몰약, 넛맥, 대추",
            base : "파출리, 시더우드"
        },
        desc : [],
        story : []
    }, 
    goc : {
        namekor : "그린 오렌지 앤 코리안더 오 드 뚜왈렛",
        nameeng : "Green Orange & Coriander Eau de Toilette",
        brand : "Jo Loves",
        image : "goc_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["chic"],
        },
        notes : ["citrus"],
        note : {
            top : "비터 그린 오렌지, 블랙 페퍼",
            middle : "코리앤더 씨드, 코리앤더 리브스",
            base : "그린 오크모스, 통카 빈"
        },
        desc : [],
        story : []
    }, 
    golden : {
        namekor : "골든 가드니아 오 드 뚜왈렛",
        nameeng : "Golden Gardenia Eau de Toilette",
        brand : "Jo Loves",
        image : "golden_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : ["elegant"],
            women : ["chic"],
        },
        notes : ["woody","floral"],
        note : {
            top : "인센스, 엘레미, 카다멈, 큐민 시드, 그레이챠콜",
            middle : "가드니아, 오렌지 블러썸, 넛맥",
            base : "스웨이드 어코드, 스모크드 우드"
        },
        desc : [],
        story : []
    }, 
    jol : {
        namekor : "조 바이 조 러브스 오 드 뚜왈렛",
        nameeng : "Jo by Jo Loves Eau de Toilette",
        brand : "Jo Loves",
        image : "golden_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["citrus"],
        note : {
            top : "자몽, 비터 오렌지, 라임, 스피어민트",
            middle : "블랙페퍼, 헤디온",
            base : "과이악 우드, 시더우드, 베티버"
        },
        desc : [],
        story : []
    }, 
    mtl : {
        namekor : "망고 타이 라임 오 드 뚜왈렛",
        nameeng : "Mango Thai Lime Eau de Toilette",
        brand : "Jo Loves",
        image : "mtl_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["citrus", "fruity"],
        note : {
            top : "망고, 타임, 블랙페퍼",
            middle : "프리지아, 민트잎",
            base : "화이트 타임 앱솔루트, 베티버"
        },
        desc : [],
        story : []
    }, 
    obf : {
        namekor : "오렌지 버터플라이 오 드 뚜왈렛",
        nameeng : "Orange Butterflies Eau de Toilette",
        brand : "Jo Loves",
        image : "obf_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["citrus", "floral"],
        note : {
            top : "베르가못, 만다린, 쁘띠그레인, 네롤리",
            middle : "오렌지 블라썸, 아라비안 자스민",
            base : "머스트, 트랜스페어런트 우드"
        },
        desc : [],
        story : []
    },    
    pom : {
        namekor : "포멜로 오 드 뚜왈렛",
        nameeng : "Pomelo Eau de Toilette",
        brand : "Jo Loves",
        image : "pom_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "포멜로, 로즈",
            middle : "베티버, 클로브",
            base : "파출리, 스웨이드"
        },
        desc : [],
        story : []
    }, 
    pv : {
        namekor : "핑크 베티버 오 드 뚜왈렛",
        nameeng : "Pink Vetiver Eau de Toilette",
        brand : "Jo Loves",
        image : "pv_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["fruity"],
        note : {
            top : "레드 페퍼 베리, 카다멈, 쥬니퍼 베리",
            middle : "쿠민, 넛맨, 진저, 안젤리카",
            base : "암브레트 파출리, 베티버"
        },
        desc : [],
        story : []
    }, 
    rp : {
        namekor : "로즈 페탈 오 드 뚜왈렛",
        nameeng : "Rose Petal Eau de Toilette",
        brand : "Jo Loves",
        image : "rp_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["floral"],
        note : {
            top : "베르가못, 샤프란, 리치",
            middle : "로즈 워터, 터키쉬로즈, 불가리안 로즈",
            base : "로즈 드 메이 앱솔루트, 암브레트 씨드, 로즈 앱솔루트"
        },
        desc : [],
        story : []
    }, 
    rt : {
        namekor : "레드 트러플 오 드 뚜왈렛",
        nameeng : "Red Truffle 21 Eau de Toilette",
        brand : "Jo Loves",
        image : "rt_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : ["street"],
            women : ["modern"],
        },
        notes : ["fruity", "woody", "citrus"],
        note : {
            top : "블랙 페퍼, 그린 휘그 리프, 비터 시트러스",
            middle : "솔잎, 무화과",
            base : "베티버, 트러플, 파출리"
        },
        desc : [],
        story : []
    }, 
    scrt : {
        namekor : "샤드 오브 시더 앤 레드 타임 오 드 뚜왈렛",
        nameeng : "Shards of Cedar & Red Thyme Eau de Toilette",
        brand : "Jo Loves",
        image : "scrt_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : ["formal"],
            women : ["modern"],
        },
        notes : ["woody", "citrus"],
        note : {
            top : "베르가못, 레드 타임, 민트",
            middle : "넛맥, 제라늄, 라벤더",
            base : "베티버 루트, 파출리, 모스 트리"
        },
        desc : [],
        story : []
    }, 
    sol : {
        namekor : "스모크 플럼 오 드 뚜왈렛",
        nameeng : "Smoked Plum & Leather Eau de Toilette",
        brand : "Jo Loves",
        image : "sol_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["chic"],
        },
        notes : ["woody", "fruity"],
        note : {
            top : "카다멈, 플럼, 시나몬",
            middle : "시스트 랍다넘, 레더, 플럼 블라썸",
            base : "에이지드 꼬냑, 시더, 스모키 우드"
        },
        desc : [],
        story : []
    }, 
    wrll : {
        namekor : "화이트 로즈 앤 레몬 리브스 오 드 뚜왈렛",
        nameeng : "White Rose & Lemon Leaves Eau de Toilette",
        brand : "Jo Loves",
        image : "wrll_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        gender : {
            mem : [],
            women : ["lovely"],
        },
        notes : ["citrus", "floral"],
        note : {
            top : "레몬 필 코롱, 쁘띠 그레인 오일, 핑크 페퍼",
            middle : "로즈 오일, 제라늄 리브스, 뮤게, 바이올렛",
            base : "로즈 앱솔루트, 클로브 새싹, 화이트 허니, 파출리, 앰버, 화이트머스크"
        },
        desc : [],
        story : []
    }, 

}