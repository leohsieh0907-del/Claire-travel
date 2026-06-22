// 範本行程 (類型 B) — 京都
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.itineraries = window.CONTENT.itineraries || {};
window.CONTENT.itineraries['kyoto'] = [
  {
    type:'itinerary', slug:'kyoto-3d-culture',
    title:'京都 3 天・古都文化', theme:'文化深度', days:3,
    suitableFor:['首次造訪','文化愛好','情侶','家庭'],
    estCostPerPerson:38000, currency:'JPY',
    lastUpdated:'2026-06-07', source:'本站整理', mapRoute:true,
    itinerary:[
      { day:1, title:'東山古寺與和服', blocks:[
        { time:'上午', poi:'kiyomizu', note:'山腳租和服，逛清水寺、二三年坂', move:{from:'京都站',by:'市巴士',mins:15,cost:230} },
        { time:'下午', poi:'gion', note:'花見小路、八坂神社' },
        { time:'傍晚', poi:'nishiki', note:'錦市場吃小吃晚餐' }
      ]},
      { day:2, title:'嵐山與金閣', blocks:[
        { time:'上午', poi:'arashiyama', note:'竹林、渡月橋，可搭嵯峨野小火車', move:{from:'京都站',by:'JR嵯峨野線',mins:17,cost:240} },
        { time:'下午', poi:'kinkakuji', note:'金閣寺金光倒影' },
        { time:'傍晚', poi:'nijo', note:'二条城（或回市區休息）' }
      ]},
      { day:3, title:'神社與抹茶', blocks:[
        { time:'上午', poi:'fushimi-inari', note:'千本鳥居，早去人少', move:{from:'京都站',by:'JR奈良線',mins:5,cost:150} },
        { time:'下午', poi:'uji', note:'宇治平等院＋抹茶甜點' }
      ]}
    ],
    alternatives:[
      '☔ 下雨備案：錦市場、二条城御殿（室內）、抹茶體驗、京都車站購物',
      '👶 親子調整：嵐山小火車＋猴子公園、減少登山（伏見稻荷只走下段）',
      '➕ 想多待一天：加大阪（環球影城/道頓堀）或奈良（餵鹿），JR 約 1 小時'
    ]
  }
];
