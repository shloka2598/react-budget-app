import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTura9SYaSf6WGM5P1jGIW2W6Pgkaz3CQ",
  authDomain: "budjet-app-7bfbb.firebaseapp.com",
  projectId: "budjet-app-7bfbb",
  storageBucket: "budjet-app-7bfbb.appspot.com",
  messagingSenderId: "274888587000",
  appId: "1:274888587000:web:0eae68e48a2ccfa58f2d0d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
