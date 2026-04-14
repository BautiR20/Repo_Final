// src/config/firebase.js
import admin from "firebase-admin";
import { readFileSync } from "fs";

// Leemos el archivo de la llave que descargamos
const serviceAccount = JSON.parse(
  readFileSync(new URL("../../serviceAccount.json", import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const dbFirebase = admin.firestore();


