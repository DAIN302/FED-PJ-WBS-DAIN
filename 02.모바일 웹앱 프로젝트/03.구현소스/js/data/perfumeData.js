// 향수 데이터 JS
const perfumeListData = {
    ce : {
        namekor : "콜로니아 에센자 오 드 코롱",
        nameeng : "Colonia Essensa Eau de Cologne",
        brand : "ACQUA DI PARMA",
        br : "acqua",
        image : "ce_50",
        volume : ["50ml", "100ml"],
        price : [147250, 204250],
        men : true,
        women : false,
        mood : ["formal", "elegant"],
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
        br : "acqua",
        image : "mirto_30",
        volume : ["30ml", "75ml", "150ml"],
        price : [104500, 161500, 247500],
        men : true,
        women : false,
        mood : ["street"],
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
        br : "acqua",
        image : "osman_20",
        volume : ["20ml", "100ml"],
        price : [147250, 332500],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral","citrus"],
        note : {
            top : "그린 만다린, 네롤리",
            middle : "작약, 핑크 페퍼, 암브레트",
            base : "오스만투스, 파출리"
        },
        desc : ["강렬하고 고결한 느낌을 가지고 있는 오스만투스와","활기찬 느낌이 가득한 시트러스의 조화",],
        story : ["이부자리를 펴놓은 듯한 금목서 꽃잎들", "그 위로 몸을 던져서 노곤하게 햇빛을 쬐는 듯한 담백한 향기"]
    }, 
    pico : {
        namekor : "피코 디 아말피 오 드 뚜왈렛",
        nameeng : "Pico Di Amalfi Eau de Toilette",
        brand : "ACQUA DI PARMA",
        br : "acqua",
        image : "pico_30",
        volume : ["30ml", "75ml", "150ml"],
        price : [104500, 161500, 247500],
        men : true,
        women : false,
        mood : ["street"],
        notes : ["woody"],
        note : {
            top : "레몬, 베르가못, 자몽",
            middle : "무화과꿀, 핑크 페퍼, 자스민 꽃잎",
            base : "무화과 나무, 시더우드, 벤조인"
        },
        desc : ["아말피섬의 무화과가 전하는 상큼한 자연의 향"],
        story : ["푸른 바다와 하늘이 하나가 되는 곳,","포지타노 섬에서 식전으로 가볍게 내어준 무화과 한 조각"]
    }, 
    rosa : {
        namekor : "로사 노빌레 오 드 퍼퓸",
        nameeng : "Rosa Nobile Eau de Parfum",
        brand : "ACQUA DI PARMA",
        br : "acqua",
        image : "rosa_20",
        volume : ["20ml", "50ml", "100ml"],
        price : [118750, 213750, 299250],
        men : true,
        women : false,        
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "칼라브리아 베르가못, 탠저린, 페퍼",
            middle : "이탈리아 로즈, 작약, 제비꽃, 은방울꽃",
            base : "버지니아 시더우드, 머스크, 앰버그리스"
        },
        desc : ["화려한 부케에서 영감을 받아", "부드러우면서도 프레쉬한 장미의 향"],
        story : ["무표정한 모습이 서늘한 장미같았던 여자,","다른 사람과 대화를 나누는 모습에선 부케처럼", "활짝 핀 장미의 미소를 띄고 있었던 여자"]
    }, 
    yuzu : {
        namekor : "유자 오 드 퍼퓸",
        nameeng : "Yuzu Eau de Parfum",
        brand : "ACQUA DI PARMA",
        br : "acqua",
        image : "yuzu_20",
        volume : ["20ml", "100ml"],
        price : [147250, 332500],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral","citrus"],
        note : {
            top : "유자, 베르가못, 초피나무",
            middle : "연꽃, 미모사, 제비꽃잎, 자스민",
            base : "머스크, 감초, 샌달우드"
        },
        desc : ["프레쉬하고 쌉싸름한 유자의 향기와", "활기찬 느낌이 가득한 시트러스의 조화"],
        story : ["산뜻하게 풀어낸 유자껍질이", "내려 앉고 있는 라일락 나무 아래의 선선한 그늘"]
    }, 
    bal : {
        namekor : "발다프리크 오 드 퍼퓸",
        nameeng : "Bal d'Afrique Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "bal_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : true,
        women : true,
        mood : ["formal", "modern"],
        notes : ["floral","citrus"],
        note : {
            top : "아프리칸 매리골드, 베르가못, 부쿠",
            middle : "바이올렛, 시클라멘",
            base : "블랙앰버, 모로칸 시더우드, 머스크, 베티버"
        },
        desc : ["20세기 후반의 파리와 아프리카 문화 예술, 음악과 춤에서 영감을 받은", "따뜻하고 로맨틱한 베티버 향"],
        story : ["어색한 둘 사이 부는 찬 바람이 애석하게 느껴지는 날", "사실은 서로의 머릿속에 온기를 나누기 가장 좋은 날이라는", "기대감에 점점 더 가까워지고 달콤해지는 둘의 사이"]
    }, 
    blan : {
        namekor : "블랑쉬 오 드 퍼퓸",
        nameeng : "Blanche Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "blan_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : true,
        women : true,
        mood : ["street", "lovely"],
        notes : ["floral"],
        note : {
            top : "핑크 페퍼, 화이트로즈",
            middle : "네롤리, 작약, 제비꽃, 알데하이드",
            base : "머스크, 샌달우드"
        },
        desc : ["순수하고 심플하면서도 개성이 강한 향", "자연의 투명한 향기와 함께 여성의 순수하고 맑은 면을 담아,","특별한 사람을 위해 만들어낸 향"],
        story : ["섬유유연제 향기가 잔뜩 밴 뒤,","햇살에 빠릿빠릿하게 널어진 옷을 걸치고 시작하는 아침"]
    }, 
    ghost : {
        namekor : "모하비고스트 오 드 퍼퓸",
        nameeng : "Mojave Ghost Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "ghost_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : true,
        women : true,
        mood : ["elegant","chic", "modern"],
        notes : ["floral", "woody"],
        note : {
            top : "암브레트, 네스베리",
            middle : "매그놀리아, 샌달우드, 바이올렛",
            base : "시더우드, 머스크, 베티버"
        },
        desc : ["모하비 사막의 건조하고 황량함을 이겨내고 피어난", "고스트 플라워의 매혹적인 생존과 강인한 생명력에 대한 오마주로 탄생한 향"],
        story : ["모든것이 아직 잠들어 있는 가장 고요한 새벽", "작은 호숫가에서 피어난 물안개가 온 땅을 보랏빛으로 물들이다"]
    }, 
    inf : {
        namekor : "인플로레센스 오 드 퍼퓸",
        nameeng : "Inflorescence Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "inf_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "장미꽃잎, 핑크 프리지아",
            middle : "매그놀리아, 은방울꽃",
            base : "프레쉬 재스민"
        },
        desc : ["자연의 재탄생인 봄의 시작을 축복하기 위해,","봄이 그 절정에 달했을 때 만개하는 꽃의 향"],
        story : ["푸른 잎과 노란 매그놀리아 은방울꽃이", "촉촉하고 투명하게 섞여 있는 포근하고 노란 거품 욕조가", "가득 들어 있는 공간에서 잔잔하게 퍼지는 따사롭고 부드러운 향기"]
    }, 
    lat : {
        namekor : "라튤립 오 드 퍼퓸",
        nameeng : "La Tulipe Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "lat_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "시클라멘, 프리지아, 루바브",
            middle : "튤립",
            base : "블론드 우드, 베티버"
        },
        desc : ["한 계절에 처음 맺는 꽃봉오리처럼", "활기넘치고 매력적이고 낙천적인 느낌의 향"],
        story : ["편하게 입은 것 같은 넉넉한 스타일인 것 같으면서도", "어딘가 모르게 살짝 풀어진 느낌의 섹시함, 여성스러움, 은은한 화사함"]
    }, 
    sc : {
        namekor : "슈퍼시더 오 드 퍼퓸",
        nameeng : "Super Cedar Eau de Parfum",
        brand : "BYREDO",
        br : "byredo",
        image : "sc_50",
        volume : ["50ml", "100ml"],
        price : [215000, 305000],
        men : true,
        women : false,
        mood : ["formal"],
        notes : ["woody"],
        note : {
            top : "장미꽃잎",
            middle : "버지니아 시더우드",
            base : "아이티 베티버, 실크 머스크"
        },
        desc : ["사람이 가장 쉽게 인식할 수 있는 향기 중 하나인", "시더우드의 강력하면서 모던함을 표현한 향수", "스칸디나비아반도의 가구나 삼나무 연필을 연상시킨다."],
        story : ["한번 적으면 지울 수 없는 수동 타자기", "불편하지만 그만큼 높은 몰입감으로 깊은 문장이 나오듯","시더우드의 가장 담백한 향을 군더더기 없이 새긴 향"]
    }, 
    pardoson : {
        namekor : "도손 오 드 퍼퓸",
        nameeng : "Doson Eau de Parfum",
        brand : "DIPTYQUE",
        br : "dip",
        image : "par-doson_75",
        volume : ["75ml"],
        price : [214800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "아프리카 오렌지꽃, 로즈 아이리스",
            middle : "튜베로즈, 핑크페퍼",
            base : "머스크"
        },
        desc : ["여름철 하롱베이 도손 바닷가의 추억을 그린 향", "관능적인 튜베로즈와 자스민의 플로럴 향기에 마린 어코드가 더해져", "신선한 바닷바람의 느낌을 선사합니다."],
        story : ["보송한 흰색 스웨터가 유난히도 잘 어울리는 사람,","그녀에게서 감도는 차분하고 섬세한 고급 진 향기"]
    }, 
    parphilo : {
        namekor : "필로시코스 오 드 퍼퓸",
        nameeng : "Philosykos Eau de Parfum",
        brand : "DIPTYQUE",
        br : "dip",
        image : "par-philo_75",
        volume : ["75ml"],
        price : [214800],
        men : true,
        women : true,
        mood : ["elegant","modern"],
        notes : ["floral", "woody"],
        note : {
            top : "무화과잎, 무화과",
            middle : "코코넛, 그린노트",
            base : "시더우드, 우디노트, 무화과나무"
        },
        desc : ["그리스 펠리온 산의 추억을 그린 향","신선하고 달콤한 무화과 나무의 잎, 꽃, 수액까지 모두 느낄 수 있습니다."],
        story : ["밤새 내린 이슬비가 깊게 적셔져 있는 새벽 정원", "자욱한 안개 속으로 푸른 잎을 내민 무화과 열매의 속살"]
    }, 
    parrose : {
        namekor : "오 로즈 오 드 퍼퓸",
        nameeng : "Eau Rose Eau de Parfum",
        brand : "DIPTYQUE",
        br : "dip",
        image : "par-rose_75",
        volume : ["75ml"],
        price : [214800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "베르가못, 블랙커런트, 리치",
            middle : "다마스크 로즈, 센티폴리아 로즈",
            base : "시더우드, 머스크, 허니"
        },
        desc : ["장미꽃에 대한 찬양을 위해 탄생한 향수", "향수 전문가에게 가장 아름다운 장미로 여겨지는", "다마스커스 장미와 센티폴리아 장미를 사용하여 장미 본연의 향기를 더욱 생생하게 느낄 수 있습니다."],
        story : ["봄날의 아침햇살과 이슬 머금은 생장미","선홍빛 봉오리를 틔우며 만개하는 설렘"]
    }, 
    partam : {
        namekor : "탐다오 오 드 퍼퓸",
        nameeng : "Tamdao Eau de Parfum",
        brand : "DIPTYQUE",
        br : "dip",
        image : "par-tam_75",
        volume : ["75ml"],
        price : [214800],
        men : true,
        women : false,
        mood : ["elegant"],
        notes : ["woody"],
        note : {
            top : "로즈, 플럼블로썸, 이탈리안 사이프러스",
            middle : "샌달우드, 시더우드",
            base : "앰버, 스파이시 어코드, 화이트머스크, 브라질리안 로즈우드"
        },
        desc : ["인도차이나 반도, 그 신성한 숲과 산에 대한 추억으로", "마이조르산 샌달우드의 부드럽고 밀키한 향조를 오마주한 향", "생생한 사이프러스와 향긋한 머틀이 더해져", "신선함을 느낄 수 있는 우디 향수"],
        story : ["고요한 바람, 고요한 사찰", "잔잔한 풍경과 나무향이 내게 주는 깊은 울림", "일상에 지쳐 떠난 깊은 산 속 중턱에 위치한 사찰,","신선한 공기와 샌달우드의 깊은 나무향이 묵직하고 차분하게 느껴지는 곳"]
    }, 
    bb : {
        namekor : "블랙베리 앤 베이 코롱",
        nameeng : "Blackberry & Bay Cologne",
        brand : "Jo Malone",
        br : "malone",
        image : "bb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        men : true,
        women : false,
        mood : ["street"], 
        notes : ["fruity", "woody"],
        note : {
            top : "블랙베리",
            middle : "월계수 잎",
            base : "시더우드"
        },
        desc : ["푸릇한 잎과 블랙베리, 자몽류의 프루지한 상큼한까지 곁들여져", "모던하고 깔끔한 향의 향수"],
        story : ["블랙베리를 따던 어린시절의 추억, 블랙베리로 물든 입술, 끈적해진 손","이제 막 수확한 월계수 잎과 브램블리 우드의 신선함에","진하고 톡 쏘는 느낌의 블랙베리 과즙"]
    }, 
    ef : {
        namekor : "잉글리쉬 페어 앤 프리지아 코롱",
        nameeng : "English Pear & Freesia Cologne",
        brand : "Jo Malone",
        br : "malone",
        image : "ef_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral", "fruity"],
        note : {
            top : "킹 윌리엄 페어",
            middle : "프리지아",
            base : "파출리"
        },
        desc : ["가을의 정수, 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고", "호박, 파츌리, 우디향으로 은은함을 더했습니다."],
        story : ["화장품 화보를 찍어도 괜찮을 것 같은 깨끗한 피부,", "좋은 피부 덕분인지 평소에는 굉장히 수수하게 다니는 편", "옷도 부담없는 꾸민 듯 꾸미지 않은 스타일을 선호하지만","은근히 섹시한 포인트를 놓치지 않는 섬세함도 있는 사람"]
    }, 
    pb : {
        namekor : "피오니 앤 블러쉬 스웨이드 코롱",
        nameeng : "Peony & Blush Suede Cologne",
        brand : "Jo Malone",
        br : "malone",
        image : "pb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "빨간 사과",
            middle : "피오니",
            base : "스웨이드"
        },
        desc : ["꽃의 귀족, 작약의 화려함을 담은 향", "화려하게 핀 작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민","장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미"],
        story : ["사과같은 과일이 가득 담겨져 있는 예쁜 바구니 위", "한가득 올라가 있는 분홍색 작약꽃 다발"]
    }, 
    wb : {
        namekor : "와일드 블루벨 코롱",
        nameeng : "Wild Bluebell Cologne",
        brand : "Jo Malone",
        br : "malone",
        image : "pb_30",
        volume : ["30ml", "100ml"],
        price : [84800,164600],
        men : false,
        women : true,
        mood : ["modern"],
        notes : ["floral", "fruity"],
        note : {
            top : "블루벨",
            middle : "감",
            base : "화이트 머스크"
        },
        desc : ["숲 속 깊은 곳에서 빛나고 있는 사파이어.", "이슬 맺힌 블루벨의 은은하고 달콤한 향기에", "산골짜기 백합, 들장미, 달콤한 감의 향이 더해져","최면을 걸 듯 마음을 사로잡습니다." ],
        story : ["한 폭의 수채화인가, 가만히 바라보게 할 정도로", "고고하고 아름답게 피어있는 방울꽃", "좀처럼 찾아보기 어려운 하늘빛과 연보랏빛 그 사이 중간 즈음", "주변 풍경까지 은은하게 그 색으로 물들여 버리는 잔잔한 아름다움"]
    }, 
    dg : {
        namekor : "다크 앰버 앤 진저 릴리 코롱 인텐스",
        nameeng : "Dark Amber & Ginger Lily Cologne Intense",
        brand : "Jo Malone",
        br : "malone",
        image : "dg_100",
        volume : ["100ml"],
        price : [248000],
        men : true,
        women : true,
        mood : ["formal", "modern", "chic"],
        notes : ["floral", "woody"],
        note : {
            top : "블랙 카다멈",
            middle : "블랙 오키드",
            base : "키아라 인센스"
        },
        desc : ["블랙 카다멈의 청아한 관능미와 신선한 수련이 빛을 더하고,", "앰버로 완성되는 더욱 풍성한 향"],
        story : ["스모키한 연기에 천천히 공간을 채우며 올라가고", "자욱하게 섞여가는 블랙오키드와 달콤한 카다멈의 향기", "숨쉴듯 말듯, 나긋하고 천천하게 번져가는 몽환적인 달콤함"]
    }, 
    ob : {
        namekor : "오드 앤 베르가못 코롱 인텐스",
        nameeng : "Oud & Bergamot Cologne Intense",
        brand : "Jo Malone",
        br : "malone",
        image : "ob_100",
        volume : ["100ml"],
        price : [248000],
        men : true,
        women :  false,
        mood : ["formal"],
        notes : ["woody", "citrus"],
        note : {
            top : "베르가못",
            middle : "시더우드",
            base : "오드"
        },
        desc : ["진귀한 오드의 화려한 부활,", "성스러운 나무의 미스터리하고 스모키한 느낌이", "신선한 베르가못의 투명함과 블랙머스크의 풍부함과 조화를 이루어", "더욱 빛나는 향을 완성합니다"],
        story : ["쥐어지지 않는 모래처럼 가볍게 흘러내리는 스모키 오드향이", "빈티지하면서도 가벼운 질감의 시더우드와 어울리다가", "캐주얼한 마초함으로 가볍게 마무리되는 향"]
    }, 
    vg : {
        namekor : "베티버 앤 골든 바닐라 코롱 인텐스",
        nameeng : "Vetiver & Golden Vanilla Cologne Intense",
        brand : "Jo Malone",
        br : "malone",
        image : "vg_100",
        volume : ["100ml"],
        price : [248000],
        men : true,
        women : true,
        mood : ["formal", "modern", "chic"],
        notes : ["woody"],
        note : {
            top : "카다멈",
            middle : "베티버 버번",
            base : "바닐라 버번"
        },
        desc : ["마다가스카르 해안 근처, 난초가 가득 피어난 정글과", "키 큰 잔디로 가득한 녹색 초원", "뿌리에서부터 돋아난 베티버의 흙내음에 따듯한 바닐라 버번,","아로마틱한 라벤더가 더해집니다."],
        story : ["수평선 너머로 빨갛게 익은 석양이 대지를 단숨에", "감싸 안는 우거진 신록의 숨결과 가파른 산 속의 제라늄", "나뒹구는 열매 사이로 부딪치는 감각적인 베티버"]
    }, 
    angel : {
        namekor : "엔젤 디 피렌체 오 드 코롱",
        nameeng : "Angeli di Firenze Eau de Cologne",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "angel_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral", "fruity"],
        note : {
            top : "피치, 오렌지",
            middle : "마린 노트, 자스민, 블랙커런트",
            base : "샌달우드, 바닐라, 머스크"
        },
        desc : ["1966년 피렌체 대홍수로부터 도시의 심장과 역사를 구해낸", "자원봉사자에게서 영감을 받아 탄생한 향수", "복숭아, 오렌지, 마린 노트의 달콤한 피렌체 천사의 향기"],
        story : ["설익은 모과 껍질의 톡 쏘는 부분을", "한 손으로 가득 모아서 꽉 쥐었을 때,", "톡톡 떨어지는 과즙의 상큼함과", "재스민 가드니아의 하얗고 부드러운 꽃을 녹여낸 비누"]
    }, 
    fresia : {
        namekor : "프리지아 오 드 코롱",
        nameeng : "Fresia Eau de Cologne",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "fresia_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "프리지아 어코드",
            middle : "바이올렛, 캐비지로즈 앱솔루트",
            base : "아이리스, 머스크"
        },
        desc : ["남아프리카에서 기원한 프리지아 꽃은", "모든 감각을 깨워 매력적인 싱그러움의 아우라를 선사합니다.", "신비와 미지의 매력을 상징하는 화이트 프리지아의", "플로럴 어코드가 자아내는 순수하고 깨끗한 이미지"],
        story : ["화창한 하늘에 걸린 구름을 꺼내", "덮을 수 있는 솜이불로 만들어", "하얘질 때까지 빤후, 온몸에 천천히 두른 것 같은 비누의 뽀송함", "세상 모든 순수함을 가득 담은", "시리도록 하얀 비누 향기"]
    }, 
    iris : {
        namekor : "아이리스 오 드 퍼퓸",
        nameeng : "L'iris Eau de Parfum",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "iris_50",
        volume : ["50ml","100ml"],
        price : [163800, 248800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "네롤리, 갈바넘, 티머페퍼",
            middle : "제라늄, 자스민, 매그놀리아",
            base : "아이리스, 머스크, 앰버그리스"
        },
        desc : ["산타 마리아 노벨라가 선보이는 최초의 오 드 퍼퓸", "이탈리아 피렌체를 상징하는 아이리스,", "그 아이리스 중심에 네롤리, 티머페퍼, 제라늄, 매그놀리아,", "자스민이 어우러져 깊은 향기를 자아냅니다."],
        story : ["하이얀 꽃잎들이 경쾌히 흐드러지던","찬란한 계절의 끝자락,","홀로 피어나 봄을 따스히 지키는 오월의 아이리스"]
    }, 
    melo : {
        namekor : "멜로그라노 오 드 코롱",
        nameeng : "Melograno Eau de Cologne",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "melo_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "베르가못, 비터 오렌지, 프레쉬 스파이스",
            middle : "석류, 로즈, 일랑일랑",
            base : "오크모스, 랍다넘, 머스크, 파출리"
        },
        desc : ["달콤한 플로럴 오리엔탈 노트와", "은은한 비누 잔향이 전하는 따뜻한 환대의 감각"],
        story : ["지어진지 오랜 원목 주택 마당", "바싹 마른 지푸라기 더미에서 퍼지는 쌉싸름함과", "하얀 거품을 닮은 일랑일랑의 풍부한 꽃 비누 향기"]
    }, 
    pot : {
        namekor : "포푸리 오 드 코롱",
        nameeng : "Pot Pourri Eau de Cologne",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "pot_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        men : true,
        women : false,
        mood : ["formal"],
        notes : ["woody"],
        note : {
            top : "베르가못, 비터 오렌지, 라우렐",
            middle : "라벤더, 타임, 클로브, 로즈마리",
            base : "파출리, 시더우드, 페루 발삼"
        },
        desc : ["토스카나 언덕의 꽃잎, 잎사귀, 꽃봉이가 자아내는 아로마의 재현", "신선한 월계수, 라벤더, 로즈마리가 전하는 자연의 향기"],
        story : ["비 온 뒤 흠뻑 젖은 토지,", "수분을 한껏 머금은 나무에서 흐르는 수액,","훈제 연기가 밴 육류에서 올라오는 담백-쌉사름함"]
    }, 
    tbc : {
        namekor : "타바코 토스카노 오 드 코롱",
        nameeng : "Tabacco Toscano Eau de Cologne",
        brand : "Santa Maria Novella",
        br : "santa",
        image : "tbc_50",
        volume : ["50ml","100ml"],
        price : [104800, 154800],
        men : true,
        women : false,
        mood : ["formal"],
        notes : ["woody"],
        note : {
            top : "베르가못, 토스카나 토바코잎",
            middle : "레더, 엠버, 버치우드",
            base : "시더우드, 유창목, 샌달우드, 머스크, 바닐라"
        },
        desc : ["우디 오리엔탈 노트와 스모키 바닐라 노트의", "신비롭고 부드러운 금빛 향기"],
        story : ["허스키하고 멋스런 감각적인 목소리와", "노래 스타일이 연상되는 가수 같은 향기"]
    }, 
    cpc : {
        namekor : "코발트 파출리 앤 시더 오 드 뚜왈렛",
        nameeng : "Cobalt Patchouli & Cedar Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "cpc_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : true,
        women : false,
        mood : ["street"],
        notes : ["citrus"],
        note : {
            top : "블루 그레이프프룻",
            middle : "제라늄 비번, 시더잎, 넛맥",
            base : "시더우드 아틀랏, 베티버, 파출리, 머스크"
        },
        desc : ["코로나 이전의 일상으로의 복귀,", "과거의 푸른 하늘을 꿈꾸며 탄생한 향기", "맑고 깨끗한 공기를 담은 상쾌한 향기"],
        story : ["푸른 하늘, 큰 꿈 그리고 창의력", "자유를 축하하고 인생의 모험", "다시 돌아올 행복하고 걱정 없는 이야기"]
    }, 
    ec : {
        namekor : "에보니 앤 카시스 오 드 뚜왈렛",
        nameeng : "Ebony & Cassis Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "ec_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : true,
        women : true,
        mood : ["formal", "modern"],
        notes : ["woody"],
        note : {
            top : "블랙 커런트, 딸기, 블랙베리",
            middle : "몰약, 넛맥, 대추",
            base : "파출리, 시더우드"
        },
        desc : ["완벽하게 숙성된 블랙베리와 카시스의 날카로운 달콤함,","풍부한 넛맥, 몰약, 대추의 깊은 향의 조화"],
        story : ["꿈꾸게 하고 열망을 꺠워", "새로운 삶의 여정을 시작하게 할 향기"]
    }, 
    fs : {
        namekor : "넘버42 더 플라워 샵 오 드 뚜왈렛",
        nameeng : "No.42 The Flower Shop Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "fs_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "블랙 커런트, 딸기, 블랙베리",
            middle : "몰약, 넛맥, 대추",
            base : "파출리, 시더우드"
        },
        desc : ["신선하고 아름다운 꽃들의 꽃집의 향기를 연상시켜주는 향"],
        story : ["매일 아침 일찍 신선한 꽃향기가", "꽃집을 가득 채우는 마법같은 추억의 향기"]
    }, 
    goc : {
        namekor : "그린 오렌지 앤 코리안더 오 드 뚜왈렛",
        nameeng : "Green Orange & Coriander Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "goc_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["chic"],
        notes : ["citrus"],
        note : {
            top : "비터 그린 오렌지, 블랙 페퍼",
            middle : "코리앤더 씨드, 코리앤더 리브스",
            base : "그린 오크모스, 통카 빈"
        },
        desc : ["비터 그린 오렌지와 고수의 잎과 씨앗 향이", "조화롭게 어우러진 스파이시향"],
        story : ["뉴욕에서의 여유로운 하루", "주말 아침 타닥 튀는 벽난로 앞에서", "캐시미어 스웨터를 입고 느긋하게 즐기는 브런치"]
    }, 
    golden : {
        namekor : "골든 가드니아 오 드 뚜왈렛",
        nameeng : "Golden Gardenia Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "golden_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : true,
        women : true,
        mood : ["elegant", "chic"],
        notes : ["woody","floral"],
        note : {
            top : "인센스, 엘레미, 카다멈, 큐민 시드, 그레이챠콜",
            middle : "가드니아, 오렌지 블러썸, 넛맥",
            base : "스웨이드 어코드, 스모크드 우드"
        },
        desc : ["우리를 특별하게 만드는 많은 순간들을 기념하는 향수", "가드니아 꽃잎, 스웨이드 카다멈, 엘레미, 그레이 우드가 어우러진 향기"],
        story : ["최고의 자신을 발견하고 그 순간을 즐기는 것에 대한 향수", "자신이 누구인지에 대한 진실을", "마주할 수 있는 자신감을 불어넣어주는 향수"]
    }, 
    jol : {
        namekor : "조 바이 조 러브스 오 드 뚜왈렛",
        nameeng : "Jo by Jo Loves Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "jol_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["citrus"],
        note : {
            top : "자몽, 비터 오렌지, 라임, 스피어민트",
            middle : "블랙페퍼, 헤디온",
            base : "과이악 우드, 시더우드, 베티버"
        },
        desc : ["자몽, 비터 오렌지, 라임 등의 스파클링 노트에", "우디한 터치가 가미된 시트러스 우디향"],
        story : ["조향사가 자기 자신을 위해 만든", "영감을 원천이 되는 자몽 향기"]
    }, 
    mtl : {
        namekor : "망고 타이 라임 오 드 뚜왈렛",
        nameeng : "Mango Thai Lime Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "mtl_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["citrus", "fruity"],
        note : {
            top : "망고, 타임, 블랙페퍼",
            middle : "프리지아, 민트잎",
            base : "화이트 타임 앱솔루트, 베티버"
        },
        desc : ["기존 향수의 패러다임에서 벗어난 신개념 향수", "달콤한 망고, 샤프한 라임, 톡 쏘는 페퍼의 조합으로 어우러진 향"],
        story : ["군침 도는 샤프란 라임향과 톡 쏘는 페퍼향의 조합", "태국의 가장 역동적인 요리의 맛을 기념하는 향"]
    }, 
    obf : {
        namekor : "오렌지 버터플라이 오 드 뚜왈렛",
        nameeng : "Orange Butterflies Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "obf_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["citrus", "floral"],
        note : {
            top : "베르가못, 만다린, 쁘띠그레인, 네롤리",
            middle : "오렌지 블라썸, 아라비안 자스민",
            base : "머스트, 트랜스페어런트 우드"
        },
        desc : ["오렌지 꽃향과 함께 나비들의 날갯짓을 상상한 향수", "베르가못, 네롤리, 오렌지 블라썸으로 시작해", "머스크로 마무리해주는 아름다운 향"],
        story : ["프랑스 남부의 따뜻한 이른 아침", "오렌지 블라썸으로 공기가 짙게 드리워져 있을 때", "공기를 가득 채운 꽃잎 향을", "호박색의 나비들이 날갯짓으로 휘젓는 모습,", "꽃의 교향곡이 시작되는 장면"]
    },    
    pom : {
        namekor : "포멜로 오 드 뚜왈렛",
        nameeng : "Pomelo Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "pom_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["floral"],
        note : {
            top : "포멜로, 로즈",
            middle : "베티버, 클로브",
            base : "파출리, 스웨이드"
        },
        desc : ["하얀 모래사장, 깨끗한 린넨 시트,", "반짝이는 시원한 물결등을 표현한 시트러스 향"],
        story : ["하얀 모래사장, 깨끗한 린넨 시트,", "반짝이는 시원한 물결 등 여름 휴가의 기억"]
    }, 
    pv : {
        namekor : "핑크 베티버 오 드 뚜왈렛",
        nameeng : "Pink Vetiver Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "pv_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["fruity"],
        note : {
            top : "레드 페퍼 베리, 카다멈, 쥬니퍼 베리",
            middle : "쿠민, 넛맨, 진저, 안젤리카",
            base : "암브레트 파출리, 베티버"
        },
        desc : ["전형적인 베티버의 향과 핑크 페퍼콘의 조합으로 만든", "스파이시한 핑크 베티버 향"],
        story : ["그라스의 향신료 시장, 피렌체의 골목 호텔,","아버지의 바스락 거리는 화이트 셔츠 향", "클래식함과 동시에 깨끗하고 현대적인 베티버 향"]
    }, 
    rp : {
        namekor : "로즈 페탈 25 오 드 뚜왈렛",
        nameeng : "Rose Petal 25 Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "rp_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely", "modern"],
        notes : ["floral"],
        note : {
            top : "베르가못, 샤프란, 리치",
            middle : "로즈 워터, 터키쉬로즈, 불가리안 로즈",
            base : "로즈 드 메이 앱솔루트, 암브레트 씨드, 로즈 앱솔루트"
        },
        desc : ["로즈 앱솔루트와 로즈 드 메이 앱솔루트의 향이", "모던하면서도 섬세하게 빛나는 듯한 플로럴 향"],
        story : ["누군가를 위해 준비한 생화 장미", "장미 꽃잎의 원색적인 아름다움과 싱그러움"]
    }, 
    rt : {
        namekor : "레드 트러플 오 드 뚜왈렛",
        nameeng : "Red Truffle 21 Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "rt_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : true,
        women : true,
        mood : ["street", "modern"],
        notes : ["fruity", "woody", "citrus"],
        note : {
            top : "블랙 페퍼, 그린 휘그 리프, 비터 시트러스",
            middle : "솔잎, 무화과",
            base : "베티버, 트러플, 파출리"
        },
        desc : ["신선한 초록빛의 무화과, 톡톡 튀는 시트러스", "상쾌한 파인향으로 휘감아진", "가장 아름다운 트러플 노트의 향수"],
        story : ["생동감있고, 조화로우며", "현대적으로 재해석된 트러플 향기"]
    }, 
    scrt : {
        namekor : "샤드 오브 시더 앤 레드 타임 오 드 뚜왈렛",
        nameeng : "Shards of Cedar & Red Thyme Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "scrt_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : true,
        women : true,
        mood : ["formal", "modern"],
        notes : ["woody", "citrus"],
        note : {
            top : "베르가못, 레드 타임, 민트",
            middle : "넛맥, 제라늄, 라벤더",
            base : "베티버 루트, 파출리, 모스 트리"
        },
        desc : ["베르가못, 라벤더, 베티버 그리고 타임을", "함께 엮어 세련되고 매혹적인 향기"],
        story : ["밤과 낮 어떤 때에도 완벽한", "가장 원시적인 사랑의 향기"]
    }, 
    spl : {
        namekor : "스모크 플럼 오 드 뚜왈렛",
        nameeng : "Smoked Plum & Leather Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "spl_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["chic"],
        notes : ["woody", "fruity"],
        note : {
            top : "카다멈, 플럼, 시나몬",
            middle : "시스트 랍다넘, 레더, 플럼 블라썸",
            base : "에이지드 꼬냑, 시더, 스모키 우드"
        },
        desc : ["달콤한 플럼 리큐르와 시나몬의", "매혹적인 조합이 훈연한 시더 우드", "부드럽고 따뜻한 가죽과 어우러진 향"],
        story : ["여름 몬테나에서 즐기는 승마", "안장에 부딪히는 태양의 열기와 하루의 끝을 알리는 연기"]
    }, 
    wrll : {
        namekor : "화이트 로즈 앤 레몬 리브스 오 드 뚜왈렛",
        nameeng : "White Rose & Lemon Leaves Eau de Toilette",
        brand : "Jo Loves",
        br : "loves",
        image : "wrll_50",
        volume : ["50ml","100ml"],
        price : [169000, 259000],
        men : false,
        women : true,
        mood : ["lovely"],
        notes : ["citrus", "floral"],
        note : {
            top : "레몬 필 코롱, 쁘띠 그레인 오일, 핑크 페퍼",
            middle : "로즈 오일, 제라늄 리브스, 뮤게, 바이올렛",
            base : "로즈 앱솔루트, 클로브 새싹, 화이트 허니, 파출리, 앰버, 화이트머스크"
        },
        desc : ["우아함과 프레시함이 담긴", "플로럴 프레그런스 화이트 로즈와 페퍼드 시트러스", "시더우가 어우러진 아름다운 플로럴 향"],
        story : ["하얀 장미로 채운 아름다운 집", "사랑과 축하, 인생에서 소중하고 기억에 남은 순간들", "퀸즈 가든에서 즐기는 파티"]
    }, 

}

export {perfumeListData};