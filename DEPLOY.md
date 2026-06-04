# 部署上線指引

本專案已完成本機 git 初始化與第一次 commit。以下兩種免費方案擇一即可。
涉及「註冊 / 登入」的步驟需要你本人操作（我無法代為登入帳號）。

---

## 方案 A：GitHub Pages（推薦給靜態網站）

**網址形式**：`https://你的帳號.github.io/jingsong/`

### 步驟

1. **註冊 / 登入 GitHub** → https://github.com
2. 右上角「＋」→「New repository」
   - Repository name：`jingsong`
   - 設為 **Public**
   - **不要**勾選 Add README（本地已有）
   - 按「Create repository」
3. 建好後 GitHub 會顯示一段指令。回到這裡，告訴我你的**帳號名稱**，我幫你接上遠端並推送。
   （或自行執行 GitHub 顯示的 `git remote add origin ...` 與 `git push -u origin main`）
4. 推送完成後：repo 頁面 → **Settings** → 左側 **Pages**
   - Source 選「Deploy from a branch」
   - Branch 選 `main` / `(root)` → Save
5. 等 1–2 分鐘，網址即上線。

---

## 方案 B：Vercel（部署最快、自動 HTTPS）

**網址形式**：`https://jingsong.vercel.app`

### 步驟

1. 前往 https://vercel.com →「Sign Up」，建議用 **GitHub 帳號登入**（需先有 GitHub repo，流程同方案 A 的 1–3）
2. Vercel 後台「Add New → Project」→ 匯入 `jingsong` repo
3. Framework Preset 選「Other」，其餘預設 → Deploy
4. 約 30 秒完成，取得 `.vercel.app` 網址。

---

## 我已經幫你完成的部分

- ✅ `git init` 初始化本地版本庫
- ✅ 第一次 commit（所有網站檔案）
- ✅ 分支命名為 `main`
- ✅ `.gitignore`（排除暫存檔）

## 你需要做的

- ⬜ 註冊 / 登入 GitHub（或 Vercel）
- ⬜ 建立遠端 repo
- ⬜ 告訴我帳號名稱 → 我接上遠端並推送（或你自己 push）
- ⬜ 在平台後台開啟 Pages / 部署

> 完成 repo 建立後，把帳號名稱貼給我，我接著處理推送。
