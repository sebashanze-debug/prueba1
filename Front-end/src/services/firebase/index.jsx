import { initializeApp } from "firebase/app";

export const FirebaseConfigChave = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA95yf2M-vlPfIvH83WVRsNm4PxTrb4GzA",
    authDomain: "examen-32c2a.firebaseapp.com",
    projectId: "examen-32c2a",
    storageBucket: "examen-32c2a.firebasestorage.app",
    messagingSenderId: "78143975502",
    appId: "1:78143975502:web:0b6255b3bc5d000584131f",
    measurementId: "G-GD5CHDQ8LD"
  };
  return initializeApp(firebaseConfig)  
}
