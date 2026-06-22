// 城市概覽 (類型 A) — 溫哥華
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.destinations['vancouver'] = {
  type:'destination', slug:'vancouver', title:'溫哥華', titleEn:'Vancouver', flag:'🇨🇦', country:'加拿大',
  locale:'zh-TW', status:'published', lastUpdated:'2026-06-07', source:'Destination Vancouver、加拿大旅遊局',
  summary:'山海環抱的宜居城市，史丹利公園、卡皮蘭諾吊橋與格蘭佛島市集，自然與都會兼具，可延伸洛磯山脈，建議 5–7 天。',
  bestSeason:[6,7,8,9],
  suggestedDays:'5–7 天（含洛磯山脈更久）',
  weather:[
    {month:1,tempHigh:7,tempLow:1,rainfall:170},{month:2,tempHigh:8,tempLow:1,rainfall:105},
    {month:3,tempHigh:10,tempLow:3,rainfall:115},{month:4,tempHigh:13,tempLow:5,rainfall:80},
    {month:5,tempHigh:17,tempLow:9,rainfall:65},{month:6,tempHigh:20,tempLow:12,rainfall:55},
    {month:7,tempHigh:23,tempLow:14,rainfall:35},{month:8,tempHigh:23,tempLow:14,rainfall:35},
    {month:9,tempHigh:19,tempLow:11,rainfall:60},{month:10,tempHigh:13,tempLow:7,rainfall:120},
    {month:11,tempHigh:9,tempLow:3,rainfall:190},{month:12,tempHigh:6,tempLow:1,rainfall:175}
  ],
  budgetLevels:{
    currency:'CAD',
    backpacker:{label:'背包客',lodging:60,food:40,transport:15,sights:25},
    standard:{label:'標準',lodging:180,food:90,transport:25,sights:40},
    comfort:{label:'舒適',lodging:400,food:200,transport:50,sights:80}
  },
  festivals:['櫻花節（4 月）','加拿大日國慶（7/1）','煙火節 Celebration of Light（7–8 月）'],
  entry:{passport:'台灣護照',visaFree:true,days:180,note:'免簽，但需事先申請 eTA 電子旅行授權；護照效期涵蓋停留'},
  safetyNotes:['治安良好，市中心 Downtown Eastside 部分區域入夜避開','溫差大、多雨，洋蔥式穿搭＋雨具','物價與小費較高（餐廳小費約 15–18%）'],
  emergency:{police:'911',ambulance:'911',taiwanOffice:'駐溫哥華台北經濟文化辦事處 +1-604-689-4111'},
  quickLinks:[
    {ic:'📍',title:'景點',desc:'史丹利公園、卡皮蘭諾、格蘭佛島',href:'#',soon:true},
    {ic:'🗺',title:'範本行程',desc:'7 天山海行程',href:'#',soon:true},
    {ic:'🚆',title:'交通指南',desc:'SkyTrain、機場接駁',href:'#',soon:true},
    {ic:'📋',title:'出發前速查',desc:'eTA、小費、緊急電話',href:'#',soon:true}
  ]
};
