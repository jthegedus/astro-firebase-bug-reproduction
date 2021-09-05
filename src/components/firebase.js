//https://firebase.google.com/docs/firestore/quickstart#web-version-9
// Do all your server side work that you need with firebase here, then export the data out of the file,
// to be picked up by your Astro component, Basically you can decouple your firebase logic from the ui and only have the data requested at build time. 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = getFirestore();

export default firebaseApp