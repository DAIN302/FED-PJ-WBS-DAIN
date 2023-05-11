// 카테고리 데이터 JS
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        notes : ["floral"]
    }, 
    parlom : {
        namekor : "롬브르단로 오 드 퍼퓸",
        nameeng : "L'ombre Dans L'eau Eau de Parfum",
        brand : "DIPTYQUE",
        image : "par-lom_75",
        volume : ["75ml"],
        price : [214800],
        gender : {
            mem : [],
            women : ["modern"],
        },
        notes : ["floral", "woody"]
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
        notes : ["floral", "woody"]
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
        notes : ["floral", "woody"]
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
        notes : ["floral"]
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
        notes : ["woody"]
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
        notes : ["fruity", "woody"]
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
        notes : ["floral"]
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
        notes : ["floral"]
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
        notes : ["floral", "fruity"]
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
        notes : ["floral", "woody"]
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
        notes : ["woody", "citrus"]
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
        notes : ["woody"]
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
        notes : ["floral", "fruity"]
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
        notes : ["floral"]
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
        notes : ["floral"]
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
        notes : ["floral"]
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
        notes : ["woody"]
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
        notes : ["woody"]
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
        notes : ["citrus"]
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
        notes : ["woody"]
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
        notes : ["floral"]
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
        notes : ["citrus"]
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
        notes : ["woody","floral"]
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
        notes : ["citrus"]
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
        notes : ["citrus", "fruity"]
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
        notes : ["citrus", "floral"]
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
        notes : ["floral"]
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
        notes : ["fruity"]
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
        notes : ["floral"]
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
        notes : ["fruity", "woody", "citrus"]
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
        notes : ["woody", "citrus"]
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
        notes : ["woody", "fruity"]
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
        notes : ["citrus", "floral"]
    }, 

}