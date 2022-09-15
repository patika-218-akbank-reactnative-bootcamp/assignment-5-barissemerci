// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClqocGNWDCsF-usSWxXV7MXoYvn2GoI4o",
  authDomain: "spotifyclone-ba7ea.firebaseapp.com",
  projectId: "spotifyclone-ba7ea",
  storageBucket: "spotifyclone-ba7ea.appspot.com",
  messagingSenderId: "676786415540",
  appId: "1:676786415540:web:7e0ef36a3c1951884cf4e1",
  measurementId: "G-H3VV75BKEK"
};

// Initialize Firebase

let app;
if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}

const auth=firebase.auth()

export {auth};