import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD5MS_B6AdGChfEQYFCRofAN2jA193gJkg",
    authDomain: "netflixapp-e87e3.firebaseapp.com",
    databaseURL: 'http://netflixapp-e87e3.firebaseio.com',
    projectId: "netflixapp-e87e3",
    storageBucket: "netflixapp-e87e3.appspot.com",
    messagingSenderId: "689318798159",
    appId: "1:689318798159:web:091382ebbe1916e6d19b3a"}

const firebase = Firebase.initializeApp(config);


export { firebase }
