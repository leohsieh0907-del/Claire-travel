// 璟松旅遊 Firebase 設定（apiKey 為公開金鑰，可放版控）
const firebaseConfig = {
  apiKey: "AIzaSyBagwjn2n7cTwJUpxXTT3ED8Q8BNuS-YXc",
  authDomain: "jingsong-travel.firebaseapp.com",
  projectId: "jingsong-travel",
  storageBucket: "jingsong-travel.firebasestorage.app",
  messagingSenderId: "519924558815",
  appId: "1:519924558815:web:d629b74246e31f58b3726a"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
