import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyBc8YTk5W3ioRsTQ6rfy3G_BCuGo2mY1VU",
    authDomain: "recipe-book-bfb4e.firebaseapp.com",
    databaseURL: "https://recipe-book-bfb4e.firebaseio.com",
    projectId: "recipe-book-bfb4e",
    storageBucket: "recipe-book-bfb4e.appspot.com",
    messagingSenderId: "278656026118",
    appId: "1:278656026118:web:04dccc4bbffd57dd726587"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const ingredientsCollection = db.collection('Ingredients')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  ingredientsCollection
}