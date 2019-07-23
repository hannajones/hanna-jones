import Rebase from 're-base';
import { importFirebase } from '../helpers/firebaseImport';

async function initializeFirebase() {
  try {
    const [firebase] = await importFirebase();
    const app = firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
    const db = firebase.database(app);
    return Rebase.createClass(db);
  } catch (error) {
    throw new Error('Something went wrong - please try refreshing the page');
  }
}

const base = async() => await initializeFirebase();

export default base;
