// 景點 (類型 C) — 京都
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.attractions = window.CONTENT.attractions || {};
window.CONTENT.attractions['kyoto'] = [
  {
    type:'attraction', slug:'kiyomizu', title:'清水寺', titleLocal:'清水寺',
    category:'景點', area:'東山區', coordinates:{lat:34.9949,lng:135.7850},
    summary:'京都地標古寺，木造清水舞台懸於山腰，俯瞰市景；周邊二三年坂石板老街最適合穿和服漫步。',
    duration:'1.5–2 小時', lastUpdated:'2026-06-07', source:'清水寺官網',
    openingHours:'06:00–18:00（季節延長）', ticket:{adult:400,child:200,currency:'JPY'},
    howToGet:'市巴士「五条坂」或「清水道」站步行 10 分',
    bestTime:'清晨人少；春櫻秋楓最美但擁擠',
    tips:['搭配二三年坂、地主神社一起逛','和服體驗在山腳租','坡道多，穿好走的鞋'],
    nearby:['gion'], bookingUrl:''
  },
  {
    type:'attraction', slug:'fushimi-inari', title:'伏見稻荷大社', titleLocal:'伏見稲荷大社',
    category:'景點', area:'伏見區', coordinates:{lat:34.9671,lng:135.7727},
    summary:'千本鳥居綿延整座稻荷山，朱紅鳥居隧道是京都最具代表的畫面，免費參拜、24 小時開放。',
    duration:'1.5–3 小時', lastUpdated:'2026-06-07', source:'伏見稻荷大社官網',
    openingHours:'24 小時', ticket:{adult:0,child:0,currency:'JPY',note:'免費'},
    howToGet:'JR 奈良線「稻荷站」出站即達',
    bestTime:'清晨或傍晚避人潮',
    tips:['登頂來回約 2 小時，量力而為','越往上人越少、拍照越好','穿好走的鞋'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'arashiyama', title:'嵐山竹林', titleLocal:'嵐山 竹林の道',
    category:'景點', area:'右京區', coordinates:{lat:35.0170,lng:135.6716},
    summary:'高聳竹林夾道的夢幻步道，鄰渡月橋與天龍寺，可搭嵯峨野小火車賞保津川景。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'京都市觀光協會',
    openingHours:'竹林步道全天（天龍寺 08:30–17:00）', ticket:{adult:0,child:0,currency:'JPY',note:'竹林免費；天龍寺 500'},
    howToGet:'JR 嵯峨野線「嵯峨嵐山站」或嵐電「嵐山站」步行',
    bestTime:'清晨最靜謐',
    tips:['小火車旺季要先訂票','順遊天龍寺借景庭園','% Arabica 咖啡看河景'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'kinkakuji', title:'金閣寺', titleLocal:'金閣寺（鹿苑寺）',
    category:'景點', area:'北區', coordinates:{lat:35.0394,lng:135.7292},
    summary:'貼滿金箔的舍利殿倒映鏡湖池，是京都最華麗的世界遺產，四季皆有不同風情。',
    duration:'45 分–1 小時', lastUpdated:'2026-06-07', source:'金閣寺官網',
    openingHours:'09:00–17:00', ticket:{adult:500,child:300,currency:'JPY'},
    howToGet:'市巴士「金閣寺道」站步行 5 分',
    bestTime:'上午光線照在金閣最美',
    tips:['動線單向、約 45 分走完','可搭配龍安寺、仁和寺','假日人多'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'nishiki', title:'錦市場', titleLocal:'錦市場',
    category:'美食', area:'中京區', coordinates:{lat:35.0050,lng:135.7649},
    summary:'「京都的廚房」，400 年歷史的有頂商店街，醃漬物、京野菜、抹茶甜點與串物現吃。',
    duration:'1–1.5 小時', lastUpdated:'2026-06-07', source:'錦市場商店街',
    openingHours:'多數 09:00–18:00', ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'地鐵「四条站」或阪急「烏丸站」步行 3 分',
    bestTime:'上午較新鮮、人少',
    tips:['邊走邊吃，現買現吃','抹茶霜淇淋、玉子燒必試','連通新京極商店街'],
    nearby:['gion'], bookingUrl:''
  },
  {
    type:'attraction', slug:'gion', title:'祇園・花見小路', titleLocal:'祇園 花見小路',
    category:'景點', area:'東山區', coordinates:{lat:35.0036,lng:135.7752},
    summary:'京都最有味道的藝伎街區，石板小路兩側木造茶屋與料亭，傍晚偶見藝伎身影。',
    duration:'1–1.5 小時', lastUpdated:'2026-06-07', source:'京都市觀光協會',
    openingHours:'街區全天（店家不一）', ticket:{adult:0,child:0,currency:'JPY',note:'免費'},
    howToGet:'京阪「祇園四条站」步行 5 分',
    bestTime:'傍晚點燈後最有氣氛',
    tips:['勿追拍藝伎、尊重私人巷弄','順遊八坂神社、白川','和服拍照熱點'],
    nearby:['kiyomizu','nishiki'], bookingUrl:''
  },
  {
    type:'attraction', slug:'uji', title:'宇治・平等院', titleLocal:'平等院',
    category:'景點', area:'宇治市', coordinates:{lat:34.8893,lng:135.8077},
    summary:'十円硬幣上的鳳凰堂所在地，抹茶之鄉宇治，逛完古寺再嚐正宗抹茶甜點。',
    duration:'2–3 小時（含往返）', lastUpdated:'2026-06-07', source:'平等院官網',
    openingHours:'庭園 08:30–17:30', ticket:{adult:700,child:300,currency:'JPY'},
    howToGet:'JR 奈良線或京阪宇治線「宇治站」步行 10 分',
    bestTime:'上午前往，午後嚐抹茶',
    tips:['中村藤吉、伊藤久右衛門抹茶名店','可半日從京都來回','鳳凰堂內部需另預約'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'nijo', title:'二条城', titleLocal:'二条城',
    category:'景點', area:'中京區', coordinates:{lat:35.0142,lng:135.7481},
    summary:'德川幕府的京都居城，世界遺產，二之丸御殿的「鶯聲地板」與庭園展現江戶風華。',
    duration:'1.5–2 小時', lastUpdated:'2026-06-07', source:'二条城官網',
    openingHours:'08:45–16:00（最後入場）', ticket:{adult:1300,child:400,currency:'JPY'},
    howToGet:'地鐵東西線「二条城前站」出站即達',
    bestTime:'上午人少',
    tips:['御殿內禁攝影','春櫻名所','可搭配西陣、晴明神社'],
    nearby:['nishiki'], bookingUrl:''
  }
];
