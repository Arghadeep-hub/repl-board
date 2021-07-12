import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
//    firebase config details
});
export const auth = firebaseConfig.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();


export default firebaseConfig;
