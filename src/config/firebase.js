// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
//does user exist in database
export const isUserExist = async (user) => {
  const usersRef = collection(db, "users");
  const userDoc = query(usersRef, where("email", "==", user.email));
  const data = await getDocs(userDoc);
  return !data.empty;
};
//add the user to the database
export const CreateUserProfile = async (user, additionalData) => {
  if (!user) return;
  const exist = await isUserExist(user);
  if (exist) return;
  const { displayName, email } = user;
  const createdAt = new Date();
  try {
    await addDoc(collection(db, "users"), {
      displayName,
      email,
      createdAt,
      userId: user.uid,
      ...additionalData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const verifyEmail = async (user) => {
  await sendEmailVerification(user);
};

