import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyB0Hhja4xjAp0GKEfoNO7qmTf-S03-6-U4",
  authDomain: "react-slack-clone-54435.firebaseapp.com",
  databaseURL: "https://react-slack-clone-54435.firebaseio.com",
  projectId: "react-slack-clone-54435",
  storageBucket: "react-slack-clone-54435.appspot.com",
  messagingSenderId: "439326748824"
};
firebase.initializeApp(config);

export default firebase;
