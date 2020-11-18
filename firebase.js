import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKq1xApzsVH2efHRVjikjKVQU9zR5xcPA",
  authDomain: "talentos-itesa.firebaseapp.com",
  databaseURL: "https://talentos-itesa.firebaseio.com",
  projectId: "talentos-itesa",
  storageBucket: "talentos-itesa.appspot.com",
  messagingSenderId: "173103881018",
  appId: "1:173103881018:web:ab28cb980b81c1ddb78e03",
  measurementId: "G-3S797XTHYK",
};

firebase.initializeApp(config);

export const db = firebase.firestore(); // this will let you query the database
export const auth = firebase.auth();
export default firebase;
