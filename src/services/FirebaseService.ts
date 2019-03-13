import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';

// FIXME:
interface FirebaseDataObject {
  [key: string]: any;
}

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

function formatFirebaseResponse(data: FirebaseDataObject) {
  return Object.keys(data).map(key => data[key]);
} 

export async function fetchProjectsData() {
  try {
    const data = await base.fetch(process.env.FIREBASE_PROJECTS_URL, {});
    return formatFirebaseResponse(data.projects);
  } catch (error) {
    throw error;
  }
}