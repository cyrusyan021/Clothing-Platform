import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCHuhszWpgnhd1eG5zoj9e2uagj2zU8R6Q",
  authDomain: "clothing-web-b6698.firebaseapp.com",
  databaseURL: "https://clothing-web-b6698.firebaseio.com",
  projectId: "clothing-web-b6698",
  storageBucket: "clothing-web-b6698.appspot.com",
  messagingSenderId: "157572109845",
  appId: "1:157572109845:web:07f570eeff3c2402e3e01c",
  measurementId: "G-V2GGSDKSGX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// firestore (like calling api)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error in creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;