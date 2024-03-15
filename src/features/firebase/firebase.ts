import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: 'AIzaSyB9p7bG9JPLUX4OseQOnc5bAFq3PtrBcb8',
  authDomain: 'auth-6dfe3.firebaseapp.com',
  projectId: 'auth-6dfe3',
  storageBucket: 'auth-6dfe3.appspot.com',
  messagingSenderId: '1039905590733',
  appId: '1:1039905590733:web:a0e383a688484213cd8884',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
