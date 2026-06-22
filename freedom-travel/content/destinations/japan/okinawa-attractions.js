// 景點 (類型 C) — 沖繩
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.attractions = window.CONTENT.attractions || {};
window.CONTENT.attractions['okinawa'] = [
  {
    type:'attraction', slug:'churaumi', title:'美麗海水族館', titleLocal:'美ら海水族館',
    category:'體驗', area:'本部町', coordinates:{lat:26.6944,lng:127.8779},
    summary:'沖繩必訪地標，巨大「黑潮之海」水槽的鯨鯊與鬼蝠魟震撼，海洋博公園內還有免費海豚秀。',
    duration:'半天', lastUpdated:'2026-06-07', source:'美麗海水族館官網',
    openingHours:'08:30–18:30（季節延長）', ticket:{adult:2180,child:710,currency:'JPY',note:'中小學 710、5 歲以下免費'},
    howToGet:'那霸自駕約 2 小時；或高速巴士', bestTime:'鯨鯊餵食 15:00／17:00',
    tips:['海豚秀、海龜館免費，園區可待大半天','線上買票省排隊','順遊古宇利島'],
    nearby:['kouri'], bookingUrl:'https://churaumi.okinawa'
  },
  {
    type:'attraction', slug:'kouri', title:'古宇利島', titleLocal:'古宇利島',
    category:'景點', area:'今歸仁村', coordinates:{lat:26.7028,lng:128.0183},
    summary:'跨海大橋連接的戀人島，海水透明如鏡，心形岩（Tinu 海灘）是必拍打卡點。',
    duration:'1.5–2 小時', lastUpdated:'2026-06-07', source:'沖繩觀光協會',
    openingHours:'全天（店家不一）', ticket:{adult:0,child:0,currency:'JPY',note:'免費'},
    howToGet:'美麗海水族館自駕約 20 分', bestTime:'晴天上午海色最美',
    tips:['跨海大橋兜風超美','心形岩在 Tinu 海灘','島上有蝦餐車'],
    nearby:['churaumi'], bookingUrl:''
  },
  {
    type:'attraction', slug:'manza', title:'萬座毛', titleLocal:'万座毛',
    category:'景點', area:'恩納村', coordinates:{lat:26.5047,lng:127.8497},
    summary:'海蝕崖上狀如大象鼻子的奇岩，碧海藍天的經典明信片場景，步道好走、適合全家。',
    duration:'30–40 分', lastUpdated:'2026-06-07', source:'恩納村觀光協會',
    openingHours:'08:00–日落', ticket:{adult:100,child:0,currency:'JPY',note:'觀景費'},
    howToGet:'那霸自駕約 1 小時', bestTime:'黃昏夕陽',
    tips:['步道平緩、嬰兒車輪椅可','旁有商場','恩納村海景飯店集中區'],
    nearby:['american-village'], bookingUrl:''
  },
  {
    type:'attraction', slug:'shuri', title:'首里城', titleLocal:'首里城',
    category:'景點', area:'那霸市', coordinates:{lat:26.2172,lng:127.7192},
    summary:'琉球王國的王宮遺址，朱紅正殿展現獨特琉球建築（重建中），可俯瞰那霸市景與了解琉球歷史。',
    duration:'1.5 小時', lastUpdated:'2026-06-07', source:'首里城公園官網',
    openingHours:'08:30–18:00', ticket:{adult:400,child:0,currency:'JPY',note:'部分區域重建中'},
    howToGet:'單軌電車「首里站」步行 15 分', bestTime:'上午較涼',
    tips:['正殿重建中，可看重建過程','守禮門拍照','搭配單軌電車'],
    nearby:['kokusai'], bookingUrl:''
  },
  {
    type:'attraction', slug:'kokusai', title:'國際通', titleLocal:'国際通り',
    category:'購物', area:'那霸市', coordinates:{lat:26.2147,lng:127.6811},
    summary:'那霸最熱鬧的商店街，伴手禮、美食、藥妝一條街，第一牧志公設市場海鮮現買現煮。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'那霸市觀光協會',
    openingHours:'店家多 10:00–22:00', ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'單軌電車「縣廳前」或「牧志站」', bestTime:'傍晚到夜間',
    tips:['紅芋塔、鹽屋、海鹽冰淇淋','牧志市場樓上代客料理','唐吉訶德 24 小時'],
    nearby:['shuri'], bookingUrl:''
  },
  {
    type:'attraction', slug:'gyokusendo', title:'OKINAWA WORLD 玉泉洞', titleLocal:'おきなわワールド',
    category:'體驗', area:'南城市', coordinates:{lat:26.1417,lng:127.7472},
    summary:'壯觀鐘乳石洞玉泉洞＋琉球王國村，Eisa 太鼓表演、玻璃與工藝體驗，雨天也好玩。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'OKINAWA WORLD 官網',
    openingHours:'09:00–17:30', ticket:{adult:2000,child:1000,currency:'JPY'},
    howToGet:'那霸自駕約 30 分', bestTime:'看 Eisa 太鼓表演場次',
    tips:['鐘乳石洞長、好走','太鼓表演必看','南部行程串連'],
    nearby:[], bookingUrl:''
  },
  {
    type:'attraction', slug:'american-village', title:'美國村', titleLocal:'アメリカンビレッジ',
    category:'購物', area:'北谷町', coordinates:{lat:26.3158,lng:127.7556},
    summary:'美式風情的海濱購物娛樂區，摩天輪、彩色塗鴉牆與海景餐廳，傍晚最有氣氛。',
    duration:'2–3 小時', lastUpdated:'2026-06-07', source:'北谷町觀光協會',
    openingHours:'店家多 10:00–22:00', ticket:{adult:0,child:0,currency:'JPY',note:'免費（消費另計）'},
    howToGet:'那霸自駕約 40 分', bestTime:'傍晚看夕陽＋夜景',
    tips:['日落海灘 Sunset Beach','塔可飯、美式漢堡','摩天輪拍照'],
    nearby:['manza'], bookingUrl:''
  },
  {
    type:'attraction', slug:'cape-zanpa', title:'殘波岬', titleLocal:'残波岬',
    category:'景點', area:'讀谷村', coordinates:{lat:26.4435,lng:127.7106},
    summary:'高聳斷崖與白色燈塔，遼闊海景與夕陽，附近有海灘與大獅子像，自駕兜風好點。',
    duration:'45 分–1 小時', lastUpdated:'2026-06-07', source:'讀谷村觀光協會',
    openingHours:'全天（燈塔開放時間另計）', ticket:{adult:0,child:0,currency:'JPY',note:'免費；燈塔登塔 300'},
    howToGet:'那霸自駕約 1 小時', bestTime:'黃昏夕陽',
    tips:['風大、注意安全','燈塔可登頂','搭配美國村'],
    nearby:['american-village'], bookingUrl:''
  }
];
