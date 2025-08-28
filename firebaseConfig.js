// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA4at8MNT-FlP4h72IVST1ArAR2QBPWaOM",
  authDomain: "takip3242.firebaseapp.com",
  projectId: "takip3242",
  storageBucket: "takip3242.firebasestorage.app",
  messagingSenderId: "577195271563",
  appId: "1:577195271563:web:4cb12abc46944dc1d93b8e"
};

// Firebase init
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app, "https://takip3242-default-rtdb.europe-west1.firebasedatabase.app");
export const auth = getAuth(app);

/**
 * Kullanıcı oturum kontrolü
 * @param {Function} callback - user objesi geldiğinde çalışacak fonksiyon
 * @param {string|null} redirectTo - kullanıcı yoksa yönlendirilecek sayfa
 */
export function checkAuth(callback, redirectTo = null) {
  onAuthStateChanged(auth, user => {
    if (user) callback(user);
    else if (redirectTo) window.location.href = redirectTo;
  });
}

/**
 * Ortak referanslar
 */
export function userItemRef(userId, itemId) {
  return ref(db, `users/${userId}/items/${itemId}`);
}

export function userItemsRef(userId) {
  return ref(db, `users/${userId}/items`);
}
