// 璟松雲端共用：登入畫面 + 同步輔助
// 需先載入 firebase compat SDK 與 firebase-config.js（已初始化 auth, db）

(function injectLoginGate(){
  const css = `
  #login-gate{position:fixed;inset:0;z-index:9999;background:#1C3A2D;display:none;
    align-items:center;justify-content:center;padding:24px;font-family:'Noto Serif TC',serif}
  #login-gate .lg-card{background:#F4EFE6;max-width:380px;width:100%;padding:0;overflow:hidden}
  #login-gate .lg-top{height:5px;background:#C4A35A}
  #login-gate .lg-body{padding:40px 36px}
  #login-gate .lg-mark{width:64px;height:64px;color:#1C3A2D;margin:0 auto 18px;display:block}
  #login-gate h2{font-weight:400;font-size:1.6rem;letter-spacing:.14em;color:#1C3A2D;text-align:center;margin-bottom:6px}
  #login-gate .lg-sub{font-family:'Jura',sans-serif;letter-spacing:.2em;text-transform:uppercase;font-size:.66rem;color:#8A9E8F;text-align:center;margin-bottom:28px}
  #login-gate label{display:block;font-family:'Jura',sans-serif;text-transform:uppercase;letter-spacing:.16em;font-size:.66rem;color:#8A9E8F;margin-bottom:6px}
  #login-gate input{width:100%;padding:12px 14px;border:1px solid #D2CABE;background:#fff;font-size:.95rem;outline:none;margin-bottom:16px;font-family:'Noto Serif TC',serif}
  #login-gate input:focus{border-color:#C4A35A}
  #login-gate button{width:100%;background:#C4A35A;color:#1C3A2D;border:none;padding:14px;font-family:'Jura',sans-serif;letter-spacing:.2em;text-transform:uppercase;font-size:.82rem;cursor:pointer;transition:background .25s}
  #login-gate button:hover{background:#d6b76e}
  #login-gate .lg-err{color:#a33;font-size:.84rem;margin-top:14px;text-align:center;min-height:1.2em}
  #login-gate .lg-hint{font-size:.78rem;color:#8A9E8F;text-align:center;margin-top:18px;line-height:1.6}
  .cloud-logout{position:fixed;bottom:16px;right:16px;z-index:50;background:rgba(28,58,45,.9);color:#F4EFE6;border:none;
    font-family:'Jura',sans-serif;letter-spacing:.12em;text-transform:uppercase;font-size:.66rem;padding:8px 14px;cursor:pointer;border-radius:2px}
  .cloud-logout:hover{background:#1C3A2D}
  @media print{#login-gate,.cloud-logout{display:none!important}}
  `;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  function build(){
    const g=document.createElement('div');g.id='login-gate';
    g.innerHTML=`<div class="lg-card"><div class="lg-top"></div><div class="lg-body">
      <svg class="lg-mark" viewBox="0 0 100 100">
        <circle cx="50" cy="52" r="42" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="43" y1="36" x2="57" y2="36" stroke="currentColor" stroke-width="2.4"/>
        <line x1="39" y1="46" x2="61" y2="46" stroke="currentColor" stroke-width="2.4"/>
        <line x1="35" y1="57" x2="65" y2="57" stroke="currentColor" stroke-width="2.4"/>
        <line x1="50" y1="57" x2="50" y2="72" stroke="currentColor" stroke-width="2.4"/>
        <line x1="44" y1="72" x2="56" y2="72" stroke="currentColor" stroke-width="2.4"/>
        <circle cx="50" cy="22" r="3" fill="#C4A35A"/>
      </svg>
      <h2>璟松旅遊</h2>
      <div class="lg-sub">Family Login</div>
      <label>帳號</label>
      <input id="lg-email" type="email" placeholder="family@..." autocomplete="username">
      <label>密碼</label>
      <input id="lg-pass" type="password" placeholder="••••••" autocomplete="current-password">
      <button id="lg-btn">登入</button>
      <div class="lg-err" id="lg-err"></div>
      <div class="lg-hint">全家共用帳號登入後，行程與日誌即時同步</div>
    </div></div>`;
    document.body.appendChild(g);
    document.getElementById('lg-btn').addEventListener('click',doLogin);
    document.getElementById('lg-pass').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  }
  if(document.body) build(); else document.addEventListener('DOMContentLoaded',build);
})();

let _cloudReadyCb=null, _cloudStarted=false;
function cloudReady(cb){_cloudReadyCb=cb; if(_cloudUser&&!_cloudStarted){_cloudStarted=true;cb(_cloudUser);}}
let _cloudUser=null;

function doLogin(){
  const email=document.getElementById('lg-email').value.trim();
  const pass=document.getElementById('lg-pass').value;
  const err=document.getElementById('lg-err'); err.textContent='登入中…';
  auth.signInWithEmailAndPassword(email,pass)
    .then(()=>{err.textContent='';})
    .catch(e=>{
      const m={'auth/invalid-email':'帳號格式錯誤','auth/invalid-credential':'帳號或密碼錯誤',
        'auth/wrong-password':'密碼錯誤','auth/user-not-found':'查無此帳號','auth/too-many-requests':'嘗試太多次，請稍後再試'};
      err.textContent=m[e.code]||('登入失敗：'+e.code);
    });
}
function doLogout(){ if(confirm('確定登出？')) auth.signOut().then(()=>location.reload()); }

auth.onAuthStateChanged(user=>{
  const gate=document.getElementById('login-gate');
  if(user){
    _cloudUser=user;
    if(gate) gate.style.display='none';
    if(!document.querySelector('.cloud-logout')){
      const b=document.createElement('button');b.className='cloud-logout';b.textContent='登出';
      b.onclick=doLogout;document.body.appendChild(b);
    }
    if(_cloudReadyCb&&!_cloudStarted){_cloudStarted=true;_cloudReadyCb(user);}
  }else{
    _cloudUser=null;
    if(gate) gate.style.display='flex';
  }
});
