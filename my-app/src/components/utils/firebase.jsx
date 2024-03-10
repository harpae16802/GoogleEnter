// firebase.utils.jsx

import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth";
// {  用戶 , google 登入 , 彈出google視窗登入 }
import { initializeApp } from "firebase/app";
// 初始化
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWTFKMp3LfzD2VlIuLtPnqo9gJlZqiK9A",
  authDomain: "snack-71928.firebaseapp.com",
  databaseURL: "https://snack-71928-default-rtdb.firebaseio.com",
  projectId: "snack-71928",
  storageBucket: "snack-71928.appspot.com",
  messagingSenderId: "553573429880",
  appId: "1:553573429880:web:a3fbcf5ce663cc4ef8f38d",
  measurementId: "G-Q2T71N6H25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('使用者註冊成功:', user);
    return user;
  } catch (error) {
    console.error('使用者註冊錯誤:', error.message);
    throw error;
  }
};



