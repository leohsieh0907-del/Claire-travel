# 自由行資訊站

> 為自己規劃行程的旅人，提供一站式、可信、會更新的國外自由行資訊與規劃工具。

純靜態網站（HTML + JS），**資料與呈現分離**：內容存成結構化 JS 資料檔，頁面只負責渲染。零安裝、可離線、好維護。

## 本機開啟

雙擊 `開啟網站.bat`（會啟動本機伺服器並開瀏覽器），或：

```
python -m http.server 8088
```
再開 http://localhost:8088/index.html

> 注意：「預算計算器」與「換算工具」需要伺服器（讀匯率檔），直接雙擊 `index.html` 這兩個工具會打不開，其餘頁面正常。

## 頁面

| 頁面 | 說明 |
|------|------|
| `index.html` | 首頁：目的地探索 + 地區/季節/預算/天數篩選 |
| `city.html` | 城市概覽（天氣/預算/入境/安全） |
| `attractions.html` / `attraction.html` | 景點列表 / 單景點 |
| `itinerary.html` | 範本行程（逐日 + 路線地圖） |
| `transport.html` | 交通指南 |
| `essentials.html` | 出發前速查 |
| `guides.html` / `guide.html` | 主題攻略 |
| `tools/budget.html` | 預算計算器 |
| `tools/packing.html` | 打包清單 |
| `tools/converter.html` | 匯率・時差・電壓換算 |
| `search.html` | 站內搜尋 |
| `my-trips.html` | 收藏（localStorage） |

## 內容結構

```
content/
  index.js                    目的地索引（首頁列表＋篩選）
  guides.js                   主題攻略
  destinations/<country>/<city>.js              城市概覽
  destinations/<country>/<city>-attractions.js  景點
  destinations/<country>/<city>-itineraries.js  範本行程
  destinations/<country>/<city>-transport.js    交通
data/
  rates.json                  匯率
```

## 目的地

- **日本**：大阪、京都、沖繩（完整）
- **韓國**：首爾｜**越南**：峴港｜**東南亞**：曼谷｜**加拿大**：溫哥華（城市概覽）

## 新增城市

1. 在對應 `content/destinations/<country>/` 建資料檔（照現有 schema）
2. 在 `content/index.js` 加一筆（含 region 等 meta）
3. 在用到的頁面 `<script src>` 載入新資料檔

---
純靜態 · 資料驅動 · 內容導向
