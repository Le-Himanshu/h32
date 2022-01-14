import firebase from "firebase/compat"

require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyBWZ4hQCPo3rR7ejZxrDukvh1RI5E3kaQk",
    authDomain: "sosapp-8d795.firebaseapp.com",
    projectId: "sosapp-8d795",
    storageBucket: "sosapp-8d795.appspot.com",
    messagingSenderId: "187906044761",
    appId: "1:187906044761:web:89fb29761c4f2cc5975248"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()