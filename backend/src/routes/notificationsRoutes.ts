import { Router } from "express";
import { sendNotification } from "../controllers/notificationController";

const notificationRoutes = Router();

notificationRoutes.post("/send-notification", sendNotification);

export default notificationRoutes;
