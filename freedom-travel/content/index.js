// 目的地索引（首頁列表＋篩選用）。新增城市時在此加一筆，並建對應 content 資料檔
window.CONTENT_INDEX = [
  { slug:'osaka', title:'大阪', titleEn:'Osaka', flag:'🇯🇵', country:'日本', region:'日本',
    days:'2–3 天', daysNum:3, season:[3,4,10,11], seasonLabel:'3·4·10·11月', budgetTier:'standard',
    summary:'關西門戶與美食之都，章魚燒、道頓堀夜景，交通方便、消費親民，自由行入門首選。' },
  { slug:'kyoto', title:'京都', titleEn:'Kyoto', flag:'🇯🇵', country:'日本', region:'日本',
    days:'2–3 天', daysNum:3, season:[3,4,11], seasonLabel:'3·4·11月', budgetTier:'standard',
    summary:'千年古都，清水寺、嵐山竹林與和服漫步，文化深度與四季之美，常與大阪串遊。' },
  { slug:'okinawa', title:'沖繩', titleEn:'Okinawa', flag:'🇯🇵', country:'日本', region:'日本',
    days:'4–5 天', daysNum:5, season:[4,5,10,11], seasonLabel:'4·5·10·11月', budgetTier:'standard',
    summary:'日本最南的亞熱帶度假海島，美麗海水族館、古宇利島與翡翠海水，自駕兜風、親子友善。' },
  { slug:'seoul', title:'首爾', titleEn:'Seoul', flag:'🇰🇷', country:'韓國', region:'韓國',
    days:'4–5 天', daysNum:5, season:[4,5,9,10], seasonLabel:'4·5·9·10月', budgetTier:'standard',
    summary:'韓劇與美妝潮流之都，景福宮古典與明洞弘大時尚並存，地鐵發達、美食購物一把抓。' },
  { slug:'danang', title:'峴港', titleEn:'Da Nang', flag:'🇻🇳', country:'越南', region:'越南',
    days:'5 天', daysNum:5, season:[2,3,4,5], seasonLabel:'2·3·4·5月', budgetTier:'backpacker',
    summary:'中越濱海度假城市，巴拿山黃金橋、美溪海灘與會安古城，消費親民、性價比高。' },
  { slug:'bangkok', title:'曼谷', titleEn:'Bangkok', flag:'🇹🇭', country:'泰國', region:'東南亞',
    days:'5 天', daysNum:5, season:[11,12,1,2], seasonLabel:'11·12·1·2月', budgetTier:'backpacker',
    summary:'廟宇與市集交織的不夜城，大皇宮、恰圖恰市集、米其林街頭美食與平價按摩，CP 值極高。' },
  { slug:'vancouver', title:'溫哥華', titleEn:'Vancouver', flag:'🇨🇦', country:'加拿大', region:'加拿大',
    days:'5–7 天', daysNum:7, season:[6,7,8,9], seasonLabel:'6·7·8·9月', budgetTier:'comfort',
    summary:'山海環抱的宜居城市，史丹利公園、卡皮蘭諾吊橋與格蘭佛島市集，可延伸洛磯山脈。' }
];
