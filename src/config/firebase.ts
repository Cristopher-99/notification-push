import admin from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "../../sindicato-del-seguro-de-la-ra-firebase-adminsdk-3kiws-775b09706a.json"  assert { type: "json" };// import { ServiceAccount } from "./types/serviceAccount";

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
  
export default admin;
