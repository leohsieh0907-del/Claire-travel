# 雲端升級設定指引（Firebase）

跟著以下步驟做，約 10 分鐘。完成後把**第 3 步的設定金鑰**貼給設計師，我接著把網站接上雲端。
全程使用你的 Google 帳號，免費方案即可，**不需要綁信用卡**。

---

## 第 1 步：建立 Firebase 專案

1. 用電腦開 https://console.firebase.google.com
2. 用你的 Google 帳號登入（就是 cat04735@gmail.com 或你想用的帳號）
3. 點 **「建立專案 / Create a project」**
4. 專案名稱輸入：`jingsong-travel`
5. 「Google Analytics」可以**關閉**（不需要），按建立
6. 等待約 30 秒，建立完成 → 點「繼續」

---

## 第 2 步：建立網頁應用程式

1. 進入專案後，在首頁中間點 **`</>`（Web）** 那個圖示
2. App 暱稱輸入：`璟松旅遊`
3. **不要**勾選「Firebase Hosting」
4. 按「註冊應用程式」

---

## 第 3 步：複製設定金鑰（⭐ 這個要給我）

註冊後會看到一段像這樣的程式碼：

```js
const firebaseConfig = {
  apiKey: "AIza................",
  authDomain: "jingsong-travel.firebaseapp.com",
  projectId: "jingsong-travel",
  storageBucket: "jingsong-travel.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123...:web:abc..."
};
```

**把這整段 `firebaseConfig { ... }` 複製貼給我。**

> 安全說明：這組金鑰是「公開金鑰」，貼出來沒關係，真正的保護來自下面的登入帳號與安全規則。

---

## 第 4 步：開啟登入功能（Authentication）

1. 左側選單點 **「Authentication」** → 「開始使用 / Get started」
2. 在「Sign-in method」分頁，點 **「電子郵件/密碼 Email/Password」**
3. 把第一個開關打開（Enable），儲存
4. 切到 **「Users」** 分頁 → 「新增使用者 Add user」
5. 建立一組**全家共用**的登入帳號，例如：
   - Email：`family@jingsong.com`（隨意，不必是真信箱）
   - 密碼：自己設一個好記的（例如 8 碼以上）
6. **記住這組帳密** — 之後全家人在 iPad、電腦都用它登入

---

## 第 5 步：建立資料庫（Firestore）

1. 左側選單點 **「Firestore Database」** → 「建立資料庫 Create database」
2. 位置選 **`asia-east1`（台灣）** 或 `asia-northeast1`（東京）
3. 模式先選 **「以正式版模式啟動 Production mode」**，建立
4. 建好後切到 **「規則 Rules」** 分頁，把內容**全部換成**下面這段，再「發布」：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

> 意思是：只有「登入過的人」才能讀寫資料，外人完全看不到。

---

## 完成！

做完上面，把這兩樣給我：
1. ✅ 第 3 步的 `firebaseConfig { ... }` 整段
2. ✅ 你在第 4 步設定的**登入帳號與密碼**（之後全家用）

我收到後就會：
- 把行程規劃、旅遊日誌改成雲端同步
- 加上登入畫面
- 測試後推上線

之後你在 iPad 寫的，電腦打開就看得到，反之亦然 🎉

---

### 關於照片
日誌照片會**自動壓縮後存到雲端**，免費方案（不綁卡）就夠一般家庭使用。
若未來照片量非常大，再評估是否升級儲存空間。
