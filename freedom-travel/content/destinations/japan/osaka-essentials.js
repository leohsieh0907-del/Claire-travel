// 出發前速查 (類型 F)，schema 見規格書 7.5
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.essentials = window.CONTENT.essentials || {};
window.CONTENT.essentials['osaka'] = {
  type:'essentials', title:'日本・大阪 出發前必看',
  lastUpdated:'2026-06-07', source:'外交部領事事務局、日本政府觀光局',
  visa:{ passport:'台灣護照', visaFree:true, days:90, note:'免簽 90 天；護照效期需涵蓋停留期間。入境填「Visit Japan Web」可加速通關。' },
  customs:'菸酒有免稅限額；肉類製品禁止攜入；藥品個人用量內可帶。',
  currency:{ code:'JPY', exchangeTip:'台灣換好日圓現金最划算；當地 7-11 ATM 可提領；機場匯率較差。', cardAcceptance:'中高（都市普及，小店與市場仍備現金）', tipping:'不需小費' },
  power:{ plug:'A 型（兩平腳，與台灣相同）', voltage:'100V（台灣 110V，多數電器可直接用）' },
  sim:'eSIM 最方便（出發前手機開通）；或機場租 WiFi 機、買實體網卡。多人共用 WiFi 機較省。',
  apps:['Google Maps（轉乘）','Japan Transit 乗換案内','Tabelog 找餐廳','Google 翻譯（相機即時翻）','Visit Japan Web（入境）'],
  emergency:{ police:'110', ambulance:'119', taiwanOffice:'台北駐大阪經濟文化辦事處 +81-6-6443-8481（急難救助 +81-90-8794-4568）' },
  etiquette:[
    '電車內不講電話、手機調靜音',
    '手扶梯靠左站、右側通行（大阪與東京相反）',
    '垃圾隨身帶走，路上垃圾桶少',
    '進寺廟、部分餐廳需脫鞋',
    '不邊走邊吃（市場攤位前吃完再走）'
  ],
  phrases:[
    'すみません（su-mi-ma-sen）— 不好意思／謝謝',
    'これください（ko-re-ku-da-sai）— 我要這個',
    'いくらですか（i-ku-ra-de-su-ka）— 多少錢',
    'トイレはどこですか — 廁所在哪',
    'ありがとう（a-ri-ga-tou）— 謝謝'
  ],
  packingHint:'夏季輕便透氣＋防曬；春秋洋蔥式；冬季保暖。詳見打包清單工具（建置中）。'
};
