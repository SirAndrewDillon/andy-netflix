import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed'

const config = {
  apiKey: 'AIzaSyAYI7m9SeLweQnIa1cbBhjNdZrlCunP1eU',
  authDomain: 'andy-netflix.firebaseapp.com',
  databaseURL: 'https://andy-netflix.firebaseio.com',
  projectId: 'andy-netflix',
  storageBucket: 'andy-netflix.appspot.com',
  messagingSenderId: '369400099281',
  appId: '1:369400099281:web:2803b6380d47ead1b5f0f0',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };
