// 交通指南 (類型 D) — 京都
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.transport = window.CONTENT.transport || {};
window.CONTENT.transport['kyoto'] = {
  type:'transport', title:'京都交通全攻略',
  lastUpdated:'2026-06-07', source:'各交通業者官網',
  airportTransfers:[
    { airport:'關西國際機場 (KIX)', options:[
      { name:'JR 特急 HARUKA', time:'75 分', cost:2900, currency:'JPY', pros:['直達京都站','舒適'], cons:['較貴'], bestFor:'最方便、行李多' },
      { name:'利木津巴士', time:'85 分', cost:2800, currency:'JPY', pros:['直達京都站八条口','免轉乘'], cons:['塞車風險'], bestFor:'行李多、不想轉車' },
      { name:'JR 關空快速＋新快速（經大阪）', time:'95 分', cost:1910, currency:'JPY', pros:['較省'], cons:['需轉乘'], bestFor:'預算優先' },
      { name:'MK Skygate 共乘計程車', time:'90 分', cost:4500, currency:'JPY', pros:['送到飯店門口'], cons:['需預約'], bestFor:'多人、長輩同行' }
    ]}
  ],
  cityTransit:[
    '京都以「市巴士」為主，景點多靠巴士到達',
    'ICOCA 嗶卡可搭巴士、地鐵、JR',
    '地鐵僅烏丸線、東西線兩條，範圍有限',
    '嵐山搭嵐電（京福電車）或 JR 嵯峨野線',
    '巴士尖峰與觀光季易塞，預留時間'
  ],
  passes:[
    { name:'地鐵・巴士一日券', price:1100, currency:'JPY', note:'市巴士＋地鐵無限搭，跑 4 趟以上就回本，京都最實用' },
    { name:'巴士一日券（僅巴士）', price:700, currency:'JPY', note:'只搭巴士、市區為主時划算' },
    { name:'關西周遊卡 KTP', price:2800, currency:'JPY', note:'跨京阪奈神多日多趟才划算' }
  ],
  intercity:[
    '到大阪：JR 新快速約 30 分／¥580，或阪急電鐵',
    '到奈良：JR 奈良線約 45 分／¥720，或近鐵',
    '到神戶：JR 約 55 分／¥1,110',
    '到東京：新幹線約 2.2 小時／約 ¥14,000'
  ],
  practical:[
    '巴士前門上車後門下車（部分後門上車前付費，看指示）',
    '觀光旺季（櫻楓）巴士非常擠，建議搭地鐵或計程車',
    '京都站有大型置物櫃，行李建議用宅配'
  ]
};
