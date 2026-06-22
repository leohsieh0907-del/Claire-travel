// 範本行程 (類型 B)，schema 見規格書 7.2
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.itineraries = window.CONTENT.itineraries || {};
window.CONTENT.itineraries['osaka'] = [
  {
    type:'itinerary', slug:'osaka-5d-classic',
    title:'大阪 5 天 4 夜・首訪經典', theme:'經典首訪', days:5,
    suitableFor:['首次造訪','朋友','情侶','親子'],
    estCostPerPerson:45000, currency:'JPY',
    lastUpdated:'2026-06-07', source:'本站整理',
    mapRoute:true,
    itinerary:[
      { day:1, title:'抵達・道頓堀初體驗', blocks:[
        { time:'下午', title:'抵達關西機場', note:'入境、領網卡、買 ICOCA', move:{from:'關西機場',by:'南海電鐵',mins:45,cost:1000} },
        { time:'傍晚', poi:'dotonbori', note:'放行李後先逛，吃章魚燒、看固力果看板' },
        { time:'晚上', poi:'shinsaibashi', note:'順道逛街、藥妝採買' }
      ]},
      { day:2, title:'歷史與市場', blocks:[
        { time:'上午', poi:'osaka-castle', note:'天守閣登頂、公園散步' },
        { time:'中午', poi:'kuromon', note:'市場現吃海鮮、和牛' },
        { time:'晚上', poi:'shinsekai', note:'通天閣夜景、串炸晚餐' }
      ]},
      { day:3, title:'環球影城一日', blocks:[
        { time:'全天', poi:'usj', note:'早到、買快速通關，玩到閉園' }
      ]},
      { day:4, title:'海遊館與夜景', blocks:[
        { time:'上午', poi:'kaiyukan', note:'看鯨鯊、天保山摩天輪' },
        { time:'下午', title:'自由活動／購物', note:'梅田或心齋橋' },
        { time:'晚上', poi:'umeda-sky', note:'空中庭園看大阪夜景' }
      ]},
      { day:5, title:'採買返程', blocks:[
        { time:'上午', poi:'shinsaibashi', note:'最後採買、退稅' },
        { time:'下午', title:'前往關西機場', note:'預留 3 小時辦理登機', move:{from:'難波',by:'南海電鐵',mins:45,cost:1000} }
      ]}
    ],
    alternatives:[
      '☔ 下雨備案：海遊館、梅田藍天（室內）、心齋橋地下街、環球影城雨天照玩',
      '👶 親子調整：環球影城排第 2 天（體力好）、海遊館＋天保山摩天輪、減少夜間行程',
      '➕ 想多待一天：加京都（清水寺＋伏見稻荷）或奈良（餵鹿＋東大寺），JR 約 1 小時'
    ]
  }
];
