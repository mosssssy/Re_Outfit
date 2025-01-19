import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase の設定（コンソールから取得した設定情報をここに貼り付け）
const firebaseConfig = {
  apiKey: "AIzaSyBAIORnqDJB9JoNQXlX7EW5Xlo9MGF4c7I",
  authDomain: "outfit-1c6c2.firebaseapp.com",
  projectId: "outfit-1c6c2",
  storageBucket: "outfit-1c6c2.firebasestorage.app",
  messagingSenderId: "911210853086",
  appId: "1:911210853086:web:af2c99071fe56b7b61884f",
  measurementId: "G-69EVB8F0QP",
};

// Firebase の初期化
const app = initializeApp(firebaseConfig);

// Firebase サービスのエクスポート
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
