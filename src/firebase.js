import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDxvlG4e4pQ2ukxC_WJ0WKOelXZoM5nbjQ",
    authDomain: "armigram-b5ab9.firebaseapp.com",
    projectId: "armigram-b5ab9",
    storageBucket: "armigram-b5ab9.appspot.com",
    messagingSenderId: "303242155991",
    appId: "1:303242155991:web:787b7193088f0717431d92"
  }).auth();