// src/app/firebase-config.ts
import { initializeApp } from 'firebase/app';  // Firebase initialization
import { getFirestore } from 'firebase/firestore';  // Firestore import

import { environment } from '../environments/environment'  // Import environment configuration

// Initialize Firebase with the provided config from the environment file
const app = initializeApp(environment.firebaseConfig);

// Initialize Firestore instance
const firestore = getFirestore(app);

// Export the firestore instance so it can be used in other parts of the application
export { firestore };
