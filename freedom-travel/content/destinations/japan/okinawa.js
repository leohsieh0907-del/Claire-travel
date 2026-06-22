// 城市概覽 (類型 A) — 沖繩
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['okinawa'] = {
  type:'destination', slug:'okinawa', title:'沖繩', titleEn:'Okinawa', flag:'🇯🇵', country:'日本',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07', source:'沖繩觀光協會、日本氣象廳',
  summary:'日本最南的亞熱帶度假海島，翡翠海水、美麗海水族館與琉球文化，自駕兜風配海鮮，飛行短、親子友善，建議 4–5 天。',
  bestSeason:[4,5,6,10,11],
  suggestedDays:'4–5 天（自駕）',
  weather:[
    {month:1,tempHigh:19,tempLow:14,rainfall:110},{month:2,tempHigh:19,tempLow:14,rainfall:120},
    {month:3,tempHigh:21,tempLow:16,rainfall:160},{month:4,tempHigh:24,tempLow:19,rainfall:160},
    {month:5,tempHigh:27,tempLow:22,rainfall:230},{month:6,tempHigh:30,tempLow:25,rainfall:250},
    {month:7,tempHigh:32,tempLow:26,rainfall:140},{month:8,tempHigh:32,tempLow:26,rainfall:240},
    {month:9,tempHigh:31,tempLow:25,rainfall:250},{month:10,tempHigh:28,tempLow:23,rainfall:160},
    {month:11,tempHigh:25,tempLow:19,rainfall:120},{month:12,tempHigh:21,tempLow:16,rainfall:110}
  ],
  budgetLevels:{
    currency:'JPY',
    backpacker:{label:'背包客',lodging:3000,food:2000,transport:2500,sights:1500},
    standard:{label:'標準',lodging:9000,food:4000,transport:3000,sights:2000},
    comfort:{label:'舒適',lodging:20000,food:8000,transport:3500,sights:2500}
  },
  festivals:['那霸龍舟賽（5 月）','沖繩全島 Eisa 太鼓祭（8–9 月）','海洋博公園煙火大會（夏季）'],
  entry:{passport:'台灣護照',visaFree:true,days:90,note:'免簽 90 天；自駕需「台灣駕照日文譯本」＋正本'},
  safetyNotes:['自駕靠左行駛，景點間車程長、排鬆一點','海邊留意水母與海流，颱風季（7–9 月）關注天氣','醫療與便利商店密集，親子長輩友善'],
  emergency:{police:'110',ambulance:'119',taiwanOffice:'台北駐日經濟文化代表處那霸分處 +81-98-862-7008'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'美麗海水族館、古宇利島、萬座毛',href:'attractions.html?city=okinawa',soon:false},
    {ic:'🗺',title:'範本行程',desc:'5 天自駕環島',href:'itinerary.html?city=okinawa',soon:false},
    {ic:'🚆',title:'交通指南',desc:'那霸機場、租車、單軌電車',href:'transport.html?city=okinawa',soon:false},
    {ic:'📋',title:'出發前速查',desc:'簽證、駕照譯本、緊急電話',href:'essentials.html?city=osaka',soon:false}
  ]
};
