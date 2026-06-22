// 城市概覽 (類型 A) — 京都，驗證內容管線可複製
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['kyoto'] = {
  type:'destination', slug:'kyoto', title:'京都', titleEn:'Kyoto', flag:'🇯🇵', country:'日本',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07',
  source:'京都市觀光協會、日本氣象廳',
  summary:'千年古都，清水寺、伏見稻荷與嵐山竹林，和服漫步在石板小路。文化深度與四季之美兼具，建議 2–3 天，常與大阪／奈良串遊。',
  bestSeason:[3,4,11],
  suggestedDays:'2–3 天（常併大阪奈良 5 天）',
  weather:[
    {month:1,tempHigh:9,tempLow:1,rainfall:50},{month:2,tempHigh:10,tempLow:1,rainfall:65},
    {month:3,tempHigh:14,tempLow:4,rainfall:105},{month:4,tempHigh:20,tempLow:9,rainfall:120},
    {month:5,tempHigh:25,tempLow:14,rainfall:150},{month:6,tempHigh:28,tempLow:19,rainfall:200},
    {month:7,tempHigh:32,tempLow:23,rainfall:220},{month:8,tempHigh:34,tempLow:24,rainfall:130},
    {month:9,tempHigh:29,tempLow:20,rainfall:180},{month:10,tempHigh:23,tempLow:13,rainfall:120},
    {month:11,tempHigh:17,tempLow:8,rainfall:70},{month:12,tempHigh:11,tempLow:3,rainfall:45}
  ],
  budgetLevels:{
    currency:'JPY',
    backpacker:{label:'背包客',lodging:3000,food:2000,transport:700,sights:1200},
    standard:{label:'標準',lodging:9000,food:4000,transport:1000,sights:1800},
    comfort:{label:'舒適',lodging:20000,food:8000,transport:1500,sights:2500}
  },
  festivals:['祇園祭（7 月，日本三大祭，山鉾巡行）','五山送火（8 月 16 日，大文字燒）','時代祭（10 月，歷史變裝遊行）'],
  entry:{passport:'台灣護照',visaFree:true,days:90,note:'免簽 90 天，護照效期需涵蓋停留期間'},
  safetyNotes:['治安良好，清水寺／嵐山等熱門點人多，顧好財物','夏季悶熱，古蹟需走較多路，多補水','寺院／神社注意禮儀，部分需脫鞋'],
  emergency:{police:'110',ambulance:'119',taiwanOffice:'台北駐大阪經濟文化辦事處 +81-6-6443-8481'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'清水寺、嵐山、伏見稻荷',href:'attractions.html?city=kyoto',soon:false},
    {ic:'🗺',title:'範本行程',desc:'京都 3 天文化路線',href:'itinerary.html?city=kyoto',soon:false},
    {ic:'🚆',title:'交通指南',desc:'巴士一日券、嵐電',href:'transport.html?city=kyoto',soon:false},
    {ic:'📋',title:'出發前速查',desc:'簽證、插頭、緊急電話',href:'essentials.html?city=osaka',soon:false}
  ]
};
