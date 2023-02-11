import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAAVXZ9Bo84nHZ-Nk6revojkkB08WP3NE4",
  authDomain: "whatsapp-clone-444b9.firebaseapp.com",
  projectId: "whatsapp-clone-444b9",
  storageBucket: "whatsapp-clone-444b9.appspot.com",
  messagingSenderId: "1087799963963",
  appId: "1:1087799963963:web:8cfec2e0b9db152d94071e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
