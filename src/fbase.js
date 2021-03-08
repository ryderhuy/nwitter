import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBipiTv1lThCOYOoscLLMDRR6Cnz8RqmzA",
  authDomain: "nwiter-cd17d.firebaseapp.com",
  databaseURL: "https://nwiter-cd17d-default-rtdb.firebaseio.com",
  projectId: "nwiter-cd17d",
  storageBucket: "nwiter-cd17d.appspot.com",
  messagingSenderId: "257800727565",
  appId: "1:257800727565:web:9b231f4d84debda88eb944",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();
const firebaseInstance = firebase;
const authService = firebase.auth();
export { storage, firebaseInstance, database, authService };
