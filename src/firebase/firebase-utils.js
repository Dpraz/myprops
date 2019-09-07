import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBV-VMmNQQVt_-DyVUw2UKSisfyhrFcAZ8",
    authDomain: "mypros-b7faa.firebaseapp.com",
    databaseURL: "https://mypros-b7faa.firebaseio.com",
    projectId: "mypros-b7faa",
    storageBucket: "",
    messagingSenderId: "316538731406",
    appId: "1:316538731406:web:05e913403551c1b2d7c2df"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;