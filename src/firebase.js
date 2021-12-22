import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCiPe43_sA1kSQClPFXgSnzccLC-_VOBLU",
    authDomain: "grocery-mobile-e4acd.firebaseapp.com",
    databaseURL: "https://grocery-mobile-e4acd-default-rtdb.firebaseio.com",
    projectId: "grocery-mobile-e4acd",
    storageBucket: "grocery-mobile-e4acd.appspot.com",
    messagingSenderId: "707988367854",
    appId: "1:707988367854:web:724b5811fbcc7a063106ff"
};
// initialize firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref(); 
