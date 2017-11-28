import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBo9A4ExrVGO8vfNrFBdmqfUP0zzf8kBXk",
    authDomain: "testproject-7e2ca.firebaseapp.com",
    databaseURL: "https://testproject-7e2ca.firebaseio.com",
    projectId: "testproject-7e2ca",
    storageBucket: "testproject-7e2ca.appspot.com",
    messagingSenderId: "163767570518"
};

export const firebaseApp = firebase.initializeApp(config);