import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAS4hf6zq4k__Lrg7X8G0vYbzNNHKl9Ab8",
    authDomain: "repl-board.firebaseapp.com",
    projectId: "repl-board",
    storageBucket: "repl-board.appspot.com",
    messagingSenderId: "976013838066",
    appId: "1:976013838066:web:b618ea031f0d9cbd41b26b"
});
export const auth = firebaseConfig.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();


export default firebaseConfig;
