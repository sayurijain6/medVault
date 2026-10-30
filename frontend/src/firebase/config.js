import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase web config is public; env vars override these defaults.
// trim() guards against stray spaces/newlines pasted into the hosting dashboard.
const env = (key, fallback) => (import.meta.env[key] || "").trim() || fallback;

const firebaseConfig = {
  apiKey: env("VITE_FIREBASE_API_KEY", "AIzaSyCGRvVcUN4WkWx_bxUVt1wJKcONjJBgz1k"),
  authDomain: env("VITE_FIREBASE_AUTH_DOMAIN", "medvault-6f6c2.firebaseapp.com"),
  projectId: env("VITE_FIREBASE_PROJECT_ID", "medvault-6f6c2"),
  storageBucket: env("VITE_FIREBASE_STORAGE_BUCKET", "medvault-6f6c2.firebasestorage.app"),
  messagingSenderId: env("VITE_FIREBASE_MESSAGING_SENDER_ID", "62275698530"),
  appId: env("VITE_FIREBASE_APP_ID", "1:62275698530:web:f2e6326b2ba698b811763b")
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
