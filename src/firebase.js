import  firebase from 'firebase'
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBskCtKNkquyoIiC7AZULDn24SVTSTn_uI",
    authDomain: "whatsapp-clone-ea49a.firebaseapp.com",
    projectId: "whatsapp-clone-ea49a",
    storageBucket: "whatsapp-clone-ea49a.appspot.com",
    messagingSenderId: "1040160784066",
    appId: "1:1040160784066:web:7e0db64487b11a5cb9c55b",
    measurementId: "G-L9Q4Z364PD"
    })



const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export default db;
export {auth,provider}