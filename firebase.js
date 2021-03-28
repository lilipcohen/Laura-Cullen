import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "laura-cullen.firebaseapp.com",
  projectId: "laura-cullen",
  storageBucket: "laura-cullen.appspot.com",
  messagingSenderId: "701771699551",
  appId: "1:701771699551:web:82cdfa076964cceeff52ea",
  measurementId: "G-YGFW9MFFGW"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();