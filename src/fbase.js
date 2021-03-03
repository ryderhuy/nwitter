import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBipiTv1lThCOYOoscLLMDRR6Cnz8RqmzA",
  authDomain: "nwiter-cd17d.firebaseapp.com",
  projectId: "nwiter-cd17d",
  storageBucket: "nwiter-cd17d.appspot.com",
  messagingSenderId: "257800727565",
  appId: "1:257800727565:web:9b231f4d84debda88eb944",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firebaseInstance = firebase;
export const authService = firebase.auth();
export { storage, firebaseInstance };
