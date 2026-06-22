// 內容資料（資料與呈現分離）— 城市概覽 (類型 A)，schema 見規格書 7.1
// 用 window 註冊，讓純 HTML 雙擊也能載入（避免 file:// 下 fetch JSON 的 CORS 問題）
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['osaka'] = {
  type:'destination',
  slug:'osaka',
  title:'大阪',
  titleEn:'Osaka',
  flag:'🇯🇵',
  country:'日本',
  locale:'zh-TW',
  status:'published',
  lastUpdated:'2026-06-07',
  source:'大阪觀光局 osaka-info.jp、日本氣象廳',
  summary:'關西門戶與美食之都，章魚燒、大阪燒與道頓堀的霓虹夜景。適合首次造訪、朋友與親子，市區 2–3 天、含京都奈良約 5 天。交通方便、消費親民，是自由行入門的好選擇。',
  bestSeason:[3,4,10,11],
  suggestedDays:'2–3 天（含京都奈良 5 天）',
  weather:[
    {month:1,tempHigh:9,tempLow:2,rainfall:45},
    {month:2,tempHigh:10,tempLow:2,rainfall:60},
    {month:3,tempHigh:14,tempLow:5,rainfall:100},
    {month:4,tempHigh:20,tempLow:10,rainfall:110},
    {month:5,tempHigh:25,tempLow:15,rainfall:130},
    {month:6,tempHigh:28,tempLow:20,rainfall:185},
    {month:7,tempHigh:32,tempLow:24,rainfall:175},
    {month:8,tempHigh:34,tempLow:25,rainfall:120},
    {month:9,tempHigh:30,tempLow:21,rainfall:175},
    {month:10,tempHigh:24,tempLow:15,rainfall:110},
    {month:11,tempHigh:18,tempLow:9,rainfall:70},
    {month:12,tempHigh:12,tempLow:4,rainfall:40}
  ],
  budgetLevels:{
    currency:'JPY',
    backpacker:{ label:'背包客', lodging:2500, food:2000, transport:800, sights:1000 },
    standard:{ label:'標準', lodging:7000, food:4000, transport:1200, sights:1500 },
    comfort:{ label:'舒適', lodging:16000, food:8000, transport:2000, sights:2500 }
  },
  festivals:[
    '天神祭（7 月，日本三大祭之一，船渡御與煙火）',
    '岸和田地車祭（9 月，山車奔馳震撼）',
    '大阪光之饗宴（12 月，御堂筋燈飾）'
  ],
  entry:{ passport:'台灣護照', visaFree:true, days:90, note:'免簽 90 天，護照效期需涵蓋停留期間' },
  safetyNotes:[
    '治安良好，但道頓堀／難波人潮多，留意隨身財物與扒手',
    '觀光區偶有拉客餐廳，認明明碼標價',
    '地震帶，入住先看逃生路線；緊急時跟著當地指示'
  ],
  emergency:{ police:'110', ambulance:'119', taiwanOffice:'台北駐大阪經濟文化辦事處 +81-6-6443-8481' },
  // 快速連結（Phase 1 會接上對應內容）
  quickLinks:[
    { ic:'📍', title:'景點', desc:'8 個必訪景點與美食', href:'attractions.html?city=osaka', soon:false },
    { ic:'🗺', title:'範本行程', desc:'5 天 4 夜經典路線', href:'itinerary.html?city=osaka', soon:false },
    { ic:'🚆', title:'交通指南', desc:'關西機場到市區、地鐵票券', href:'transport.html?city=osaka', soon:false },
    { ic:'📋', title:'出發前速查', desc:'簽證、插頭、緊急電話', href:'essentials.html?city=osaka', soon:false }
  ]
};
