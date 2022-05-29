import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBtkk0sCfxF4LxyINHm7HqLbgAYT2MRdHo",
  authDomain: "engage-29bb1.firebaseapp.com",
  projectId: "engage-29bb1",
  storageBucket: "engage-29bb1.appspot.com",
  messagingSenderId: "967637565521",
  appId: "1:967637565521:web:8a886d876df0c1e7acb870"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
