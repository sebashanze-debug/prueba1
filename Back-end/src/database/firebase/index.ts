import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseConfigDB } from "../../models/Firebase";

export const FirebaseConfigChave = () => {
  const firebaseConfig: FirebaseConfigDB = {
    apiKey: "AIzaSyA95yf2M-vlPfIvH83WVRsNm4PxTrb4GzA",
    authDomain: "examen-32c2a.firebaseapp.com",
    projectId: "examen-32c2a",
    storageBucket: "examen-32c2a.firebasestorage.app",
    messagingSenderId: "78143975502",
    appId: "1:78143975502:web:0b6255b3bc5d000584131f",
    measurementId: "G-GD5CHDQ8LD"
  };
  const firebaseApp = initializeApp(firebaseConfig)  
  return getFirestore(firebaseApp)
}
export const FirebaseStorage = () => {
  const firebaseConfig: FirebaseConfigDB = {
    apiKey: "AIzaSyA95yf2M-vlPfIvH83WVRsNm4PxTrb4GzA",
    authDomain: "examen-32c2a.firebaseapp.com",
    projectId: "examen-32c2a",
    storageBucket: "examen-32c2a.firebasestorage.app",
    messagingSenderId: "78143975502",
    appId: "1:78143975502:web:0b6255b3bc5d000584131f",
    measurementId: "G-GD5CHDQ8LD"
  };
  const firebaseApp = initializeApp(firebaseConfig)  
  // const storage = firebaseApp.storage
}
