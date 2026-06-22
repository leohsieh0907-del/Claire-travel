// 主題攻略 (類型 E)，schema 見規格書 7.6。內嵌 relatedPois 形成內部連結網。
window.CONTENT = window.CONTENT || { destinations:{} };
window.CONTENT.guides = {
  'osaka-food':{
    type:'topic', slug:'osaka-food', title:'大阪必吃・在地人帶路', emoji:'🍴',
    grad:'linear-gradient(135deg,#E8833A,#c0392b)',
    city:'osaka', tags:['美食','大阪'],
    summary:'大阪被稱為「天下廚房」，從章魚燒、大阪燒到串炸與和牛，這篇帶你吃遍經典，附必訪美食地點。',
    lastUpdated:'2026-06-07', source:'本站整理',
    sections:[
      {h:'章魚燒（たこ焼き）',p:'大阪的靈魂小吃，外酥內軟、裹滿醬汁與柴魚片。道頓堀一帶名店林立，現做現吃最香，小心燙口。'},
      {h:'大阪燒（お好み焼き）',p:'麵糊加高麗菜、肉與海鮮煎成的厚餅，鋪上醬汁、美乃滋與柴魚。許多店可自己動手煎，親子同樂。'},
      {h:'串炸（串カツ）',p:'新世界的代表美食，各式食材裹粉油炸沾醬。切記「醬汁禁止二次沾」是當地規矩。'},
      {h:'市場海鮮與和牛',p:'黑門市場現點現吃海鮮、和牛壽司與水果，是吃貨補貨的天堂，建議上午前往最新鮮。'}
    ],
    relatedPois:['dotonbori','kuromon','shinsekai']
  },
  'kansai-family':{
    type:'topic', slug:'kansai-family', title:'關西親子・5 大遛娃景點', emoji:'👨‍👩‍👧',
    grad:'linear-gradient(135deg,#3B82A0,#16a085)',
    city:'osaka', tags:['親子','大阪'],
    summary:'帶孩子玩關西，從主題樂園到水族館與城堡公園，這篇精選親子友善景點與實用安排建議。',
    lastUpdated:'2026-06-07', source:'本站整理',
    sections:[
      {h:'主題樂園放電',p:'環球影城是孩子的夢想國度，瑪利歐世界與小小兵超人氣；建議買快速通關、早到避排隊。'},
      {h:'水族館看鯨鯊',p:'海遊館的巨大水槽鯨鯊是招牌，動線單純好推娃娃車，旁邊還有天保山摩天輪。'},
      {h:'城堡公園跑跳',p:'大阪城公園腹地大、適合野餐放電，天守閣有電梯，登頂看市景；櫻花季尤其美。'},
      {h:'安排小撇步',p:'每天排一個重點＋留白，午後回飯店午休；善用 ICOCA、地鐵電梯；備好零食與雨備案。'}
    ],
    relatedPois:['usj','kaiyukan','osaka-castle']
  }
};
