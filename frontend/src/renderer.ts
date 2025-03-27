// import firebase from "firebase/app";
// import "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "775b09706a4cf205711f97d06c37dcbcbf369c75",
//   authDomain: "googleapis.com",
//   databaseURL:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3kiws%40sindicato-del-seguro-de-la-ra.iam.gserviceaccount.com",
//   projectId: "sindicato-del-seguro-de-la-ra",
//   storageBucket: "sindicato-del-seguro-de-la-ra.appspot.com",
//   messagingSenderId: "104073401792015513876",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID",
// };

// // Inicializar Firebase
// firebase.initializeApp(firebaseConfig);

// Inicializar Firebase Cloud Messaging
// const messaging = firebase.messaging();

// // Solicitar permiso para recibir notificaciones
// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("Notification permission granted.");
//     return messaging.getToken();
//   })
//   .then((token) => {
//     console.log("FCM Token: ", token);
//     // Aquí puedes guardar el token en tu base de datos si es necesario.
//   })
//   .catch((error) => {
//     console.error("Error getting notification permission: ", error);
//   });

// // Manejar notificaciones en primer plano
// messaging.onMessage((payload) => {
//   console.log("Message received. ", payload);
//   // Aquí procesas la notificación, por ejemplo, mostrando una notificación
// });
