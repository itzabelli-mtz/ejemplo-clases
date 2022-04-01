import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCHRMbk5CS6dgdnKG5Pd3TMlHnUmRG173A",
    authDomain: "nuevo-mtz.firebaseapp.com",
    projectId: "nuevo-mtz",
    storageBucket: "nuevo-mtz.appspot.com",
    messagingSenderId: "1033476844088",
    appId: "1:1033476844088:web:ea2ffb2dfade23e5d954cd"
  }
  
export const firebaseapp = firebase.initializeApp(firebaseConfig)