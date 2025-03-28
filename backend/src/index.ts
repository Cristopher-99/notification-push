import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notificationsRoutes.js";
import dotenv from "dotenv";
import scrapingRoutes from "./routes/scrapingRoutes.js";
import cluster from "cluster";
import os from "os";
// import { errorHandler } from "./middlewares/errorHandler";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Configuración básica de Express
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", notificationRoutes);
app.use("/api", scrapingRoutes);

// Función para inicializar el servidor
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

// Si es el proceso principal, crea los workers
if (cluster.isPrimary) {
  console.log(`PID principal: ${process.pid}`);

  // Crear un worker por cada núcleo disponible
  const numCPUs = os.cpus().length;
  console.log(`Iniciando ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Evento cuando un worker muere
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} murió`);
    console.log(`Reiniciando worker...`);
    cluster.fork();
  });
} else {
  // Si es un worker, iniciar el servidor
  console.log(`Worker ${process.pid} iniciado`);
  startServer();
}
