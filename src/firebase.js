import firebase from 'firebase';
//Authentication
import "firebase/auth";
//realtime database
import "firebase/database";
//storage can store images, videoes...
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBByl2KbHvC2GUNoqsthhoKs166rbUHbaI",
    authDomain: "voot-56aea.firebaseapp.com",
    projectId: "voot-56aea",
    storageBucket: "voot-56aea.appspot.com",
    messagingSenderId: "48412949072",
    appId: "1:48412949072:web:bf4b35c1483327095def55"
  };

  
  firebase.initializeApp(firebaseConfig);

  export default firebase;