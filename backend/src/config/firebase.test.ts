// src/config/firebase.test.ts
import admin from "firebase-admin";
import dotenv from "dotenv";

describe("Firebase Configuration", () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Guardar el estado original del proceso
    originalEnv = { ...process.env };
    // Limpiar las variables de entorno
    process.env = { ...originalEnv };
    // Limpiar Firebase
    admin.app().delete();
  });

  afterEach(() => {
    // Restaurar el estado original del proceso
    process.env = originalEnv;
    // Limpiar Firebase
    admin.app().delete();
  });

  it("should initialize Firebase successfully", () => {
    // Configurar las variables de entorno necesarias
    process.env.FIREBASE_SERVICE_ACCOUNT = JSON.stringify({
      type: "service_account",
      project_id: "test-project",
      private_key_id: "test-key-id",
      private_key: "-----BEGIN PRIVATE KEY-----\n-----END PRIVATE KEY-----\n",
      client_email: "test@project.iam.gserviceaccount.com",
      client_id: "test-client-id",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/test%40project.iam.gserviceaccount.com",
    });

    // Ejecutar la inicialización
    const result = admin.initializeApp();

    // Verificar que se inicializó correctamente
    expect(result).toBe(true);
    expect(admin.app().name).toBe("[DEFAULT]");
  });

  it("should throw error when service account is missing", () => {
    // Eliminar la variable de entorno necesaria
    delete process.env.FIREBASE_SERVICE_ACCOUNT;

    // Ejecutar la inicialización
    expect(() => admin.initializeApp()).toThrow(
      "No se encontró el archivo de credenciales de Firebase."
    );
  });

  it("should throw error when service account is invalid", () => {
    // Configurar un service account inválido
    process.env.FIREBASE_SERVICE_ACCOUNT = JSON.stringify({
      type: "invalid_type",
      project_id: "invalid-project",
    });

    // Ejecutar la inicialización
    expect(() => admin.initializeApp()).toThrow();
  });
});
