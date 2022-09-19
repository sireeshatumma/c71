import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBM0eh6lYtYl9wdXXZo8CsoErQqxqoKqMk",
  authDomain: "wily-dda6a.firebaseapp.com",
  databaseURL: "https://wily-dda6a-default-rtdb.firebaseio.com",
  projectId: "wily-dda6a",
  storageBucket: "wily-dda6a.appspot.com",
  messagingSenderId: "201314742891",
  appId: "1:201314742891:web:567eeba9da746013e9772e",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
