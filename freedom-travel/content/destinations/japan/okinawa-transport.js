// 交通指南 (類型 D) — 沖繩
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.transport = window.CONTENT.transport || {};
window.CONTENT.transport['okinawa'] = {
  type:'transport', title:'沖繩交通全攻略',
  lastUpdated:'2026-06-07', source:'各交通業者官網',
  airportTransfers:[
    { airport:'那霸機場 (OKA)', options:[
      { name:'租車自駕', time:'取車約 40 分', cost:0, currency:'JPY', pros:['最自由','景點都好到'], cons:['需國際駕照譯本','要自己開'], bestFor:'多數人首選、親子家庭' },
      { name:'單軌電車 Yui-Rail', time:'到縣廳前 12 分', cost:270, currency:'JPY', pros:['進那霸市區方便','不塞車'], cons:['只到那霸市區'], bestFor:'只玩那霸、不自駕' },
      { name:'機場利木津巴士', time:'依路線', cost:600, currency:'JPY', pros:['直達主要度假飯店'], cons:['班次少'], bestFor:'住恩納村大型 Resort' },
      { name:'計程車', time:'40 分到恩納', cost:8000, currency:'JPY', pros:['門到門'], cons:['長程貴'], bestFor:'短程或深夜' }
    ]}
  ],
  cityTransit:[
    '本島景點分散，自駕是最佳方式（靠左行駛）',
    '那霸市區可搭單軌電車 Yui-Rail（機場—首里）',
    '不自駕可搭路線巴士或一日遊巴士，但較費時',
    'OTS／Times／ORIX 租車可線上預約中文導航與兒童座椅'
  ],
  passes:[
    { name:'單軌電車一日券', price:800, currency:'JPY', note:'只玩那霸市區（首里城、國際通）時划算' },
    { name:'租車（含 ETC 高速）', price:5000, currency:'JPY', note:'每日約 ¥4,000–6,000（含保險），多人分攤最划算' }
  ],
  intercity:[
    '本島南北：那霸到美麗海約 2 小時（走高速較快）',
    '高速公路：沖繩自動車道，有 ETC',
    '離島：從那霸搭船或國內線到石垣、宮古島',
    '加油：還車前自行加滿（滿油還車）'
  ],
  practical:[
    '靠左行駛，與台灣相反，初上路放慢',
    '景點多免費停車；那霸市區停車較難',
    '颱風季留意航班與道路資訊'
  ]
};
