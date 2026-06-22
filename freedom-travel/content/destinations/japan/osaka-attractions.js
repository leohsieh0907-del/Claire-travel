// 景點 / POI 資料 (類型 C)，schema 見規格書 7.3
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.attractions = window.CONTENT.attractions || {};
window.CONTENT.attractions['osaka'] = [
  {
    type:'attraction', slug:'dotonbori', title:'道頓堀', titleLocal:'道頓堀',
    category:'美食', area:'中央區', coordinates:{lat:34.6687,lng:135.5012},
    summary:'大阪最具代表的美食娛樂街，固力果跑跑人看板、運河霓虹與滿街章魚燒、大阪燒，越夜越熱鬧。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'大阪觀光局',
    openingHours:'店家多營業至深夜（各店不一）',
    ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'地鐵御堂筋線「難波站」14 號出口步行 3 分',
    bestTime:'傍晚至夜間，霓虹點燈最美',
    tips:['章魚燒名店排隊長，避開正餐尖峰','運河遊船可從不同角度看看板','留意扒手、顧好隨身物'],
    nearby:['shinsaibashi','kuromon'], bookingUrl:''
  },
  {
    type:'attraction', slug:'osaka-castle', title:'大阪城', titleLocal:'大阪城',
    category:'景點', area:'中央區', coordinates:{lat:34.6873,lng:135.5259},
    summary:'豐臣秀吉所築的名城，金鯱天守閣與護城河、櫻花名所，登頂可俯瞰大阪市景。',
    duration:'1.5–2 小時', lastUpdated:'2026-06-07', source:'大阪城天守閣官網',
    openingHours:'09:00–17:00（最後入館 16:30）',
    ticket:{adult:600,child:0,currency:'JPY',note:'國中以下免費'},
    howToGet:'地鐵谷町線「谷町四丁目站」或 JR「大阪城公園站」步行約 15 分',
    bestTime:'上午較涼、人少；3 月底–4 月初賞櫻',
    tips:['公園廣大，留足步行時間','天守閣內有電梯','春櫻秋楓最美但人多'],
    nearby:['osaka-castle-park'], bookingUrl:''
  },
  {
    type:'attraction', slug:'usj', title:'環球影城', titleLocal:'ユニバーサル・スタジオ・ジャパン',
    category:'體驗', area:'此花區', coordinates:{lat:34.6654,lng:135.4323},
    summary:'日本人氣主題樂園，哈利波特魔法世界、瑪利歐世界、小小兵，刺激設施與親子設施兼具。',
    duration:'一整天', lastUpdated:'2026-06-07', source:'USJ 官網',
    openingHours:'約 09:00–21:00（依季節調整）',
    ticket:{adult:8600,child:5600,currency:'JPY',note:'價格浮動，建議官網/Klook 先買；快速通關另計'},
    howToGet:'JR 夢咲線「環球城站」步行 5 分',
    bestTime:'平日人較少；開園前先到門口',
    tips:['線上先買票與快速通關省排隊','下載官方 App 看等待時間','瑪利歐世界需另抽整理券'],
    nearby:[], bookingUrl:'https://www.usj.co.jp'
  },
  {
    type:'attraction', slug:'kuromon', title:'黑門市場', titleLocal:'黒門市場',
    category:'美食', area:'中央區', coordinates:{lat:34.6657,lng:135.5063},
    summary:'「大阪的廚房」，海鮮、和牛、水果現點現吃，是吃貨的天堂。',
    duration:'1–1.5 小時', lastUpdated:'2026-06-07', source:'黑門市場商店街',
    openingHours:'多數 09:00–18:00（各店不一）',
    ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'地鐵千日前線「日本橋站」10 號出口步行 2 分',
    bestTime:'上午較新鮮、人少',
    tips:['現吃攤位多可邊走邊吃','現金較方便','假日人潮多'],
    nearby:['dotonbori'], bookingUrl:''
  },
  {
    type:'attraction', slug:'shinsekai', title:'新世界・通天閣', titleLocal:'新世界・通天閣',
    category:'景點', area:'浪速區', coordinates:{lat:34.6525,lng:135.5063},
    summary:'昭和懷舊風情街區，地標通天閣與滿街串炸店，復古霓虹別有風味。',
    duration:'1.5–2 小時', lastUpdated:'2026-06-07', source:'通天閣官網',
    openingHours:'通天閣 10:00–20:00',
    ticket:{adult:900,child:400,currency:'JPY',note:'通天閣展望台'},
    howToGet:'地鐵堺筋線「惠美須町站」步行 3 分',
    bestTime:'傍晚看霓虹',
    tips:['串炸名店「達摩」必試','醬汁禁止二次沾','治安近年改善但仍留意財物'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'umeda-sky', title:'梅田藍天大廈・空中庭園', titleLocal:'梅田スカイビル 空中庭園',
    category:'景點', area:'北區', coordinates:{lat:34.7052,lng:135.4897},
    summary:'連通兩棟高樓的環形空中庭園展望台，360 度俯瞰大阪夜景，浪漫必訪。',
    duration:'1–1.5 小時', lastUpdated:'2026-06-07', source:'梅田藍天大廈官網',
    openingHours:'09:30–22:30（最後入場 22:00）',
    ticket:{adult:2000,child:500,currency:'JPY'},
    howToGet:'JR「大阪站」或地鐵「梅田站」步行約 9 分',
    bestTime:'日落前到，看白天轉夜景',
    tips:['頂樓風大、帶外套','先上官網或 Klook 買票','黃昏時段最熱門'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'kaiyukan', title:'海遊館', titleLocal:'海遊館',
    category:'體驗', area:'港區', coordinates:{lat:34.6545,lng:135.4289},
    summary:'世界最大級水族館之一，巨大「太平洋」水槽的鯨鯊是招牌，親子必訪。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'海遊館官網',
    openingHours:'10:00–20:00（最後入館 19:00）',
    ticket:{adult:2700,child:1400,currency:'JPY'},
    howToGet:'地鐵中央線「大阪港站」步行 5 分',
    bestTime:'開館或傍晚人較少',
    tips:['旁邊有天保山摩天輪','線上購票免排隊','假日上午人多'],
    nearby:[], bookingUrl:'https://www.kaiyukan.com'
  },
  {
    type:'attraction', slug:'shinsaibashi', title:'心齋橋', titleLocal:'心斎橋',
    category:'購物', area:'中央區', coordinates:{lat:34.6723,lng:135.5008},
    summary:'大阪第一購物大街，從藥妝、服飾到百貨、精品一應俱全，緊鄰道頓堀。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'心齋橋筋商店街',
    openingHours:'店家多 11:00–21:00',
    ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'地鐵御堂筋線「心齋橋站」直結',
    bestTime:'午後到晚上',
    tips:['藥妝比價、滿額退稅記得帶護照','大丸百貨退稅櫃台集中','與道頓堀步行可達'],
    nearby:['dotonbori'], bookingUrl:''
  }
];
