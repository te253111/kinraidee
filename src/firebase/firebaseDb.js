import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxVIxj-Qc5ydMTmTGrHdK3x1dAXmXivsc",
  authDomain: "kinraidee-1ebfb.firebaseapp.com",
  projectId: "kinraidee-1ebfb",
  storageBucket: "kinraidee-1ebfb.appspot.com",
  messagingSenderId: "457184469386",
  appId: "1:457184469386:web:85f0f00949c6bd1071a873",
  measurementId: "G-TJDRE1CKCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
