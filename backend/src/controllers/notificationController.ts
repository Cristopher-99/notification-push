import { Request, Response } from "express";
import { sendPushNotification } from "../services/notifications";

export const sendNotification = async (req: Request, res: Response) => {
  try {
    const { title, body, screen } = req.body;
    await sendPushNotification(title, body, screen);
    res.status(200).json({ message: "Notificación enviada con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar la notificación" });
  }
};
