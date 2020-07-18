import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlpAbAD4XOllmY4CS2hSNQ-bKWbPJhzV0",
    authDomain: "ecomm-db-e117e.firebaseapp.com",
    databaseURL: "https://ecomm-db-e117e.firebaseio.com",
    projectId: "ecomm-db-e117e",
    storageBucket: "ecomm-db-e117e.appspot.com",
    messagingSenderId: "948732639037",
    appId: "1:948732639037:web:97548c4fed51d0c8a2f754",
    measurementId: "G-VZHS95HBWK"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

     return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;