import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

// google popup signIn
export const googlePopupSignIn = async () =>
  signInWithPopup(auth, authProvider);

// create user with email and password
export const signUpUserWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.log(error);
  }
};

// sign in user with email and password
export const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.log(error);
  }
};

// check user logged in or not based on onAuthStateChanged()
export const checkUserStatus = () => {
  // return onAuthStateChanged(auth);
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

// add collections and document
export const addCollectionsAndDocuments = async (collectionKey, obj) => {
  // collectionKey - collection name
  const collectionRef = collection(db, collectionKey);
  // 1.initiate the batch
  const batch = writeBatch(db);

  obj.forEach((object) => {
    // reference to the doc
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // 2.loop and set each batch for each document
    batch.set(docRef, object);
  });
  // 3.commit a batch to make transaction like process
  await batch.commit();
};

// get doc only

//get collections and documents
export const getCollectionsAndDocuments = async (collectionKey) => {
  const querySnapshot = await getDocs(collection(db, collectionKey));
  let categories = [];
  querySnapshot.forEach((doc) => {
    categories.push(doc.data());
  });
  return categories;
};
