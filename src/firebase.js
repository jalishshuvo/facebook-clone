import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-pnpmul2uRN1GC1LAGUgH3e7rOX342cs",
  authDomain: "facebook-clone-jalish.firebaseapp.com",
  databaseURL: "https://facebook-clone-jalish.firebaseio.com",
  projectId: "facebook-clone-jalish",
  storageBucket: "facebook-clone-jalish.appspot.com",
  messagingSenderId: "241696229905",
  appId: "1:241696229905:web:5704b36139a7cf6472bfb0",
  measurementId: "G-D5D7E5JFX6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
