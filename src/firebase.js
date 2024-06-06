import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export const getProjectsFromFirestore = async () => {
  const projectsSnapshot = await firestore.collection('projects').orderBy('updatedAt', 'desc').limit(10).get();
  const projects = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return projects;
};