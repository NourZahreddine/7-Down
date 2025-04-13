import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/*export const firebaseConfig = {
    apiKey: 'AIzaSyCyie-BHl7lKV2geE0ODaUe1zwKMFKDzE8',
    authDomain: 'log3900-205.firebaseapp.com',
    projectId: 'log3900-205',
    storageBucket: 'log3900-205.appspot.com',
    messagingSenderId: '536536848073',
    appId: '1:536536848073:web:227bf35d8d30d5b39e5f18',
    measurementId: 'G-GQ0ZEX056V',
    
};*/
export const firebaseConfig = {
    apiKey: 'AIzaSyD2rymUJP6FHQzvqhtcOGgw8HknEOKZHKA',
    authDomain: 'projet3-log3900-v2.firebaseapp.com',
    databaseURL: 'https://projet3-log3900-v2-default-rtdb.firebaseio.com',
    projectId: 'projet3-log3900-v2',
    storageBucket: 'projet3-log3900-v2.appspot.com',
    messagingSenderId: '751827017922',
    appId: '1:751827017922:web:3b6454f57683b9c64c9b5b',
    measurementId: 'G-1LTR0G6XYG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const authen = getAuth(app);
export default app;
