import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, orderBy, limit } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getProjectsFromFirestore = async () => {
  const projectsSnapshot = await getDocs(collection(firestore, 'projects'), orderBy('updatedAt', 'desc'), limit(10));
  const projects = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return projects;
};