export function importFirebase() {
  return Promise.all([import(/* webpackChunkName: 'firebase' */ 'firebase/app'), import(/* webpackChunkName: 'firebaseDb' */ 'firebase/database')]);
}
