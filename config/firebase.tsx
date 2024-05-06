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
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrD0NAP1Qum_y4YNg35vU8Pl6PkwK2v0Y',
  authDomain: 'bauniid1.firebaseapp.com',
  projectId: 'bauniid1',
  storageBucket: 'bauniid1.appspot.com',
  messagingSenderId: '825317241990',
  appId: '1:825317241990:web:974032fd5f22d9bf10cd07',
  measurementId: 'G-28K268PYD5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();
const firestore = getFirestore(app);

const createAccount = async user => {
  try {
    const {user: createdUser} = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    console.log('User created:', createdUser);
    alert('User ' + user.name + ' was created successfully.');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('Create account failed: email already in use');
      alert('The email address is already in use.');
    } else if (error.code === 'auth/invalid-email') {
      console.error('Create account failed: invalid email');
      alert('The email address is invalid.');
    } else if (error.code === 'auth/weak-password') {
      console.error('Create account failed: weak password');
      alert('The password must be at least 6 characters long.');
    } else {
      console.error('Create account failed:', error.message);
      alert('Create account failed.');
    }
  }
};

const login = async (user, successCallback, errorCallback) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const loggedInUser = userCredential.user;
    successCallback(loggedInUser);
  } catch (error) {
    errorCallback(error);
  }
};
export {auth, firestore, createAccount, login};
