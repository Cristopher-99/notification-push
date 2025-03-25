import admin from "../config/firebase";

export const sendPushNotification = async (token: string, title: string, body: string) => {
  const message = {
    notification: { title, body },
    token,
  };

  try {
    await admin.messaging().send(message);
    console.log("Notificación enviada");
    return { success: true };
  } catch (error) {
    console.error("Error enviando notificación:", error);
    throw error;
  }
};
