const { initializeApp } = require('firebase/app');
const { doc, setDoc, getFirestore, deleteDoc } =  require("firebase/firestore");
const {getAuth} = require("firebase/auth");
const { getStorage, deleteObject } =  require("firebase/storage");


const firebaseConfig = {
    apiKey: "AIzaSyD-emfrFSphjqf6WipZNCUs3Br6cX5Jg8Q",
    authDomain: "larguezlesamarres-a1817.firebaseapp.com",
    databaseURL: "https://larguezlesamarres-a1817-default-rtdb.firebaseio.com",
    projectId: "larguezlesamarres-a1817",
    storageBucket: "larguezlesamarres-a1817.appspot.com",
    messagingSenderId: "907895696510",
    appId: "1:907895696510:web:769041d46012e5884e7c2f"
};




module.exports = {
    fireconf: () => {
        return firebaseConfig
    }
}