import admin from "../config/firebase";

export const sendPushNotification = async (
  // token: string,
  title: string,
  body: string,
  screen: string
) => {
  const message = {
    notification: { title, body },
    data: { screen },
    topic: "all_users",
    // token,
  };

  try {
    await admin.messaging().send(message);
    console.log("Notificación enviada", message);
    return { success: true };
  } catch (error) {
    console.error("Error enviando notificación:", error);
    throw error;
  }
};
