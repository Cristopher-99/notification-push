import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import admin from "firebase-admin";
import serviceAccount from "./sindicato-del-seguro-de-la-ra-firebase-adminsdk-3kiws-775b09706a.json"  assert { type: "json" };// import { ServiceAccount } from "./types/serviceAccount";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
dotenv.config();

try {
  console.log("Iniciando configuración de Firebase...");
  
  if (!serviceAccount) {
    throw new Error("No se encontró el archivo de credenciales de Firebase.");
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });

  console.log("✅ Firebase inicializado correctamente");
} catch (error) {
  console.error("❌ Error inicializando Firebase:", error);
}

console.log("Firebase initialized", admin);


server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
