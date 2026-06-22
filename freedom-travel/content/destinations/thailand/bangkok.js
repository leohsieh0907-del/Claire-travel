// 城市概覽 (類型 A) — 曼谷
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['bangkok'] = {
  type:'destination', slug:'bangkok', title:'曼谷', titleEn:'Bangkok', flag:'🇹🇭', country:'泰國',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07', source:'泰國觀光局',
  summary:'廟宇與市集交織的不夜城，大皇宮的金碧輝煌、恰圖恰市集的挖寶樂趣、米其林街頭美食與平價按摩，消費親民、CP 值極高，建議 5 天。',
  bestSeason:[11,12,1,2],
  suggestedDays:'5 天',
  weather:[
    {month:1,tempHigh:32,tempLow:22,rainfall:10},{month:2,tempHigh:33,tempLow:24,rainfall:20},
    {month:3,tempHigh:34,tempLow:26,rainfall:30},{month:4,tempHigh:35,tempLow:27,rainfall:65},
    {month:5,tempHigh:34,tempLow:26,rainfall:190},{month:6,tempHigh:33,tempLow:26,rainfall:150},
    {month:7,tempHigh:33,tempLow:25,rainfall:160},{month:8,tempHigh:32,tempLow:25,rainfall:190},
    {month:9,tempHigh:32,tempLow:25,rainfall:320},{month:10,tempHigh:32,tempLow:24,rainfall:290},
    {month:11,tempHigh:32,tempLow:23,rainfall:50},{month:12,tempHigh:31,tempLow:21,rainfall:10}
  ],
  budgetLevels:{
    currency:'THB',
    backpacker:{label:'背包客',lodging:600,food:400,transport:200,sights:300},
    standard:{label:'標準',lodging:2000,food:1000,transport:400,sights:600},
    comfort:{label:'舒適',lodging:5000,food:2500,transport:800,sights:1200}
  },
  festivals:['潑水節 Songkran（4 月，泰國新年）','水燈節 Loy Krathong（11 月）','跨年倒數（12 月，河濱）'],
  entry:{passport:'台灣護照',visaFree:true,days:60,note:'免簽 60 天，護照效期需滿 6 個月'},
  safetyNotes:['留意計程車議價、認跳表','生水不生飲、喝瓶裝水','5–10 月為雨季，午後雷陣雨'],
  emergency:{police:'191',ambulance:'1669',taiwanOffice:'駐泰國台北經濟文化辦事處 +66-2-119-3555'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'大皇宮、恰圖恰、水上市場',href:'#',soon:true},
    {ic:'🗺',title:'範本行程',desc:'5 天城市市集',href:'#',soon:true},
    {ic:'🚆',title:'交通指南',desc:'BTS、機場快線、Grab',href:'#',soon:true},
    {ic:'📋',title:'出發前速查',desc:'免簽、換匯、緊急電話',href:'#',soon:true}
  ]
};
