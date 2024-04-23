// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6Y4MGAqBUqrYqnSIBAFpoewETuEQ_V30',
  authDomain: 'bauni-id-15ff6.firebaseapp.com',
  projectId: 'bauni-id-15ff6',
  storageBucket: 'bauni-id-15ff6.appspot.com',
  messagingSenderId: '1068311267513',
  appId: '1:1068311267513:web:ea8bebca14ab028107b368',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();
const firestore = getFirestore(app);

export {auth, firestore};
