import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyBHtkSgmwtMH2ycExSlW_Im__lyJ8-ZKXs',
  authDomain: 'twitter-clone-8d137.firebaseapp.com',
  projectId: 'twitter-clone-8d137',
  storageBucket: 'twitter-clone-8d137.appspot.com',
  messagingSenderId: '294895433007',
  appId: '1:294895433007:web:294420999a6f1e31ef9dda',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
