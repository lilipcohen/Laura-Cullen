import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAMk36qYhAZ-lDCrZdRMfV50PJ7Vj45ZaY',
      authDomain: 'laura-cullen.firebaseapp.com',
      projectId: 'laura-cullen',
      storageBucket: 'laura-cullen.appspot.com',
      messagingSenderId: '701771699551',
      appId: '1:701771699551:web:82cdfa076964cceeff52ea',
      measurementId: 'G-YGFW9MFFGW',
    };
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
