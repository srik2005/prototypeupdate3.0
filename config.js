

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwjeA4lkKhuJI6nfELbOw3AKde_N1q_Ko",
    authDomain: "prototype-time-table.firebaseapp.com",
    databaseURL: "https://prototype-time-table.firebaseio.com",
    projectId: "prototype-time-table",
    storageBucket: "prototype-time-table.appspot.com",
    messagingSenderId: "316219487082",
    appId: "1:316219487082:web:fffa9af23c74986213ab13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase.database();