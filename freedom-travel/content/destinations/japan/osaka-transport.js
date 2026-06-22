// 交通指南 (類型 D)，schema 見規格書 7.4
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.transport = window.CONTENT.transport || {};
window.CONTENT.transport['osaka'] = {
  type:'transport', title:'大阪交通全攻略',
  lastUpdated:'2026-06-07', source:'各交通業者官網',
  airportTransfers:[
    { airport:'關西國際機場 (KIX)', options:[
      { name:'南海電鐵 Rapi:t（特急）', time:'38 分', cost:1490, currency:'JPY', pros:['快','直達難波'], cons:['到其他區需轉乘'], bestFor:'住難波／心齋橋' },
      { name:'南海電鐵 空港急行', time:'45 分', cost:1000, currency:'JPY', pros:['便宜','班次多'], cons:['停站較多'], bestFor:'預算優先、住難波' },
      { name:'JR 關空特急 HARUKA', time:'50 分', cost:2380, currency:'JPY', pros:['直達天王寺／新大阪／京都'], cons:['較貴'], bestFor:'住天王寺、要轉京都' },
      { name:'利木津巴士', time:'60 分', cost:1600, currency:'JPY', pros:['直達主要飯店','免拖行李上下樓'], cons:['塞車風險'], bestFor:'行李多、長輩同行' },
      { name:'計程車', time:'50 分', cost:18000, currency:'JPY', pros:['門到門','彈性'], cons:['最貴'], bestFor:'多人分攤、深夜抵達' }
    ]}
  ],
  cityTransit:[
    'ICOCA 嗶卡：搭地鐵、JR、公車與便利商店小額付款都可用，可退卡',
    '大阪地鐵御堂筋線（紅線）貫穿梅田—難波—天王寺，最常用',
    '大阪周遊卡：一日／二日無限搭地鐵＋40 多個景點免費入場，玩景點多很划算',
    '建議用 Google Maps 查轉乘，尖峰（08:00–09:00、18:00–19:00）避開'
  ],
  passes:[
    { name:'大阪周遊卡 1 日', price:2800, currency:'JPY', note:'含地鐵巴士無限搭＋梅田藍天、通天閣、天保山摩天輪等免費，玩 3 個以上景點就回本' },
    { name:'JR Pass 關西版', price:2800, currency:'JPY', note:'只在跑京都／奈良／神戶多趟才划算，純玩大阪市區不需要' },
    { name:'ICOCA（儲值卡）', price:2000, currency:'JPY', note:'含 500 押金，最通用、不綁行程' }
  ],
  intercity:[
    '到京都：JR 京都線新快速約 30 分／¥580，或阪急電鐵',
    '到奈良：近鐵奈良線約 40 分／¥680',
    '到神戶：JR 神戶線約 25 分／¥420',
    '到東京：新幹線約 2.5 小時／約 ¥14,000，或廉航'
  ],
  practical:[
    '末班車約 24:00，夜歸要先查',
    '主要車站有投幣置物櫃，大行李建議用宅配',
    '地鐵多有電梯／無障礙通道'
  ]
};
