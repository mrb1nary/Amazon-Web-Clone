// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAEokH7D8zTEpVLdRbwVo1AV8HikG7ByUQ",
    authDomain: "clone-ad6ce.firebaseapp.com",
    projectId: "clone-ad6ce",
    storageBucket: "clone-ad6ce.appspot.com",
    messagingSenderId: "395439214829",
    appId: "1:395439214829:web:910167673b305a20ba3ce4",
    measurementId: "G-9976MRMYZJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};