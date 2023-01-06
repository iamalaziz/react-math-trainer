import firebaseConfig from './config';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getChapters = async () => {
  const chaptersFromFirebase = [];
  const querySnapshot = await getDocs(collection(db, "chapters"));
  querySnapshot.forEach((doc) => {
    chaptersFromFirebase.push({ ...doc.data(), key: doc.id });
  });
  return chaptersFromFirebase;
};
