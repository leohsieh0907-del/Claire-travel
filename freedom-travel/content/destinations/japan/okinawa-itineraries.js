// 範本行程 (類型 B) — 沖繩
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.itineraries = window.CONTENT.itineraries || {};
window.CONTENT.itineraries['okinawa'] = [
  {
    type:'itinerary', slug:'okinawa-5d-drive',
    title:'沖繩 5 天・自駕環島', theme:'海島自駕', days:5,
    suitableFor:['親子','朋友','情侶','首次造訪'],
    estCostPerPerson:42000, currency:'JPY',
    lastUpdated:'2026-06-07', source:'本站整理', mapRoute:true,
    itinerary:[
      { day:1, title:'抵達・那霸', blocks:[
        { time:'下午', title:'抵達那霸機場・取車', note:'辦租車與兒童座椅', move:{from:'那霸機場',by:'租車',mins:40,cost:0} },
        { time:'傍晚', poi:'kokusai', note:'國際通晚餐、伴手禮' }
      ]},
      { day:2, title:'北部・水族館與離島', blocks:[
        { time:'上午', poi:'churaumi', note:'黑潮之海鯨鯊、免費海豚秀', move:{from:'那霸',by:'自駕',mins:120,cost:0} },
        { time:'下午', poi:'kouri', note:'跨海大橋、心形岩' }
      ]},
      { day:3, title:'中西部・海景兜風', blocks:[
        { time:'上午', poi:'manza', note:'象鼻岩、恩納海景' },
        { time:'下午', poi:'cape-zanpa', note:'殘波岬燈塔' },
        { time:'傍晚', poi:'american-village', note:'美國村夕陽、晚餐' }
      ]},
      { day:4, title:'南部・文化與鐘乳洞', blocks:[
        { time:'上午', poi:'gyokusendo', note:'玉泉洞、Eisa 太鼓' },
        { time:'下午', poi:'shuri', note:'首里城了解琉球歷史' }
      ]},
      { day:5, title:'採買返程', blocks:[
        { time:'上午', poi:'kokusai', note:'最後採買、牧志市場' },
        { time:'下午', title:'還車・那霸機場', note:'預留還車與登機時間', move:{from:'那霸市區',by:'還車',mins:30,cost:0} }
      ]}
    ],
    alternatives:[
      '☔ 下雨備案：美麗海水族館、玉泉洞（室內）、DMM 水族館、永旺夢樂城購物',
      '👶 親子調整：水族館排整天、海灘玩水半天、減少長程拉車',
      '➕ 想玩水：青之洞窟浮潛、恩納村海上活動（需確認業者年齡限制）'
    ]
  }
];
