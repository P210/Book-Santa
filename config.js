import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAuJM2OD0IjdwQAvlLfha5FiS8PG9JLzis",
    authDomain: "book-santa-8efca.firebaseapp.com",
    databaseURL: "https://book-santa-8efca.firebaseio.com",
    projectId: "book-santa-8efca",
    storageBucket: "book-santa-8efca.appspot.com",
    messagingSenderId: "585106287121",
    appId: "1:585106287121:web:2f4b781d10a0e6045a9fb0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()