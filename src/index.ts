import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notificationsRoutes.js";
import dotenv from "dotenv";
// import { errorHandler } from "./middlewares/errorHandler";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", notificationRoutes);

// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
