// 城市概覽 (類型 A) — 峴港
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['danang'] = {
  type:'destination', slug:'danang', title:'峴港', titleEn:'Da Nang', flag:'🇻🇳', country:'越南',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07', source:'越南國家旅遊局',
  summary:'中越濱海度假城市，巴拿山黃金橋、美溪海灘與會安古城燈籠夜景，消費親民、性價比高，建議 5 天。',
  bestSeason:[2,3,4,5],
  suggestedDays:'5 天',
  weather:[
    {month:1,tempHigh:25,tempLow:19,rainfall:95},{month:2,tempHigh:27,tempLow:20,rainfall:35},
    {month:3,tempHigh:29,tempLow:22,rainfall:20},{month:4,tempHigh:31,tempLow:24,rainfall:20},
    {month:5,tempHigh:34,tempLow:25,rainfall:60},{month:6,tempHigh:34,tempLow:26,rainfall:85},
    {month:7,tempHigh:34,tempLow:25,rainfall:90},{month:8,tempHigh:34,tempLow:25,rainfall:115},
    {month:9,tempHigh:31,tempLow:24,rainfall:350},{month:10,tempHigh:29,tempLow:23,rainfall:610},
    {month:11,tempHigh:27,tempLow:22,rainfall:365},{month:12,tempHigh:25,tempLow:20,rainfall:200}
  ],
  budgetLevels:{
    currency:'VND',
    backpacker:{label:'背包客',lodging:400000,food:200000,transport:150000,sights:200000},
    standard:{label:'標準',lodging:1200000,food:500000,transport:300000,sights:400000},
    comfort:{label:'舒適',lodging:3000000,food:1200000,transport:600000,sights:800000}
  },
  festivals:['峴港國際煙火節（6 月）','會安中秋燈籠節（農曆 8 月）','龍橋週末噴火秀（每週六日）'],
  entry:{passport:'台灣護照',visaFree:false,days:30,note:'需出發前線上辦 e-Visa（電子簽證）'},
  safetyNotes:['治安尚可，留意隨身財物與過馬路','生水不可生飲，喝瓶裝水','9–11 月為雨季、易有颱風'],
  emergency:{police:'113',ambulance:'115',taiwanOffice:'駐胡志明市台北經濟文化辦事處 +84-28-3834-9160'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'巴拿山、美溪海灘、會安',href:'#',soon:true},
    {ic:'🗺',title:'範本行程',desc:'5 天海灘樂園',href:'#',soon:true},
    {ic:'🚆',title:'交通指南',desc:'機場接駁、Grab',href:'#',soon:true},
    {ic:'📋',title:'出發前速查',desc:'e-Visa、換匯、緊急電話',href:'#',soon:true}
  ]
};
