// Import firebase-admin
const admin = require('firebase-admin');

// Initialize the app with a service account, granting admin privileges

var serviceAccount = require("./../utils/firebase-service-account-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.firestore();

module.exports = admin;