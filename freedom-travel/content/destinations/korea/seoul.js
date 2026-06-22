// 城市概覽 (類型 A) — 首爾
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['seoul'] = {
  type:'destination', slug:'seoul', title:'首爾', titleEn:'Seoul', flag:'🇰🇷', country:'韓國',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07', source:'韓國觀光公社、韓國氣象廳',
  summary:'韓劇與美妝的潮流之都，景福宮的古典與明洞弘大的時尚並存，地鐵發達、美食購物一把抓，建議 4–5 天。',
  bestSeason:[4,5,9,10],
  suggestedDays:'4–5 天',
  weather:[
    {month:1,tempHigh:2,tempLow:-6,rainfall:20},{month:2,tempHigh:5,tempLow:-4,rainfall:25},
    {month:3,tempHigh:11,tempLow:1,rainfall:45},{month:4,tempHigh:18,tempLow:7,rainfall:65},
    {month:5,tempHigh:24,tempLow:13,rainfall:105},{month:6,tempHigh:28,tempLow:18,rainfall:130},
    {month:7,tempHigh:30,tempLow:22,rainfall:395},{month:8,tempHigh:31,tempLow:22,rainfall:365},
    {month:9,tempHigh:26,tempLow:16,rainfall:170},{month:10,tempHigh:20,tempLow:8,rainfall:50},
    {month:11,tempHigh:12,tempLow:1,rainfall:50},{month:12,tempHigh:4,tempLow:-4,rainfall:25}
  ],
  budgetLevels:{
    currency:'KRW',
    backpacker:{label:'背包客',lodging:40000,food:25000,transport:8000,sights:10000},
    standard:{label:'標準',lodging:100000,food:45000,transport:12000,sights:15000},
    comfort:{label:'舒適',lodging:220000,food:90000,transport:20000,sights:25000}
  },
  festivals:['汝矣島櫻花節（4 月）','首爾燈節（11 月，清溪川）','聖誕跨年燈飾（12 月）'],
  entry:{passport:'台灣護照',visaFree:true,days:90,note:'免簽 90 天，需事先申請 K-ETA、填 Q-code'},
  safetyNotes:['治安良好，明洞/弘大人多顧好財物','7–8 月為雨季，備雨具','Google Maps 在韓國不準，改用 Naver/Kakao Map'],
  emergency:{police:'112',ambulance:'119',taiwanOffice:'駐韓國台北代表部 +82-2-6329-6000'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'景福宮、明洞、弘大',href:'#',soon:true},
    {ic:'🗺',title:'範本行程',desc:'5 天經典路線',href:'#',soon:true},
    {ic:'🚆',title:'交通指南',desc:'機場快線、T-money',href:'#',soon:true},
    {ic:'📋',title:'出發前速查',desc:'K-ETA、插頭、緊急電話',href:'#',soon:true}
  ]
};
