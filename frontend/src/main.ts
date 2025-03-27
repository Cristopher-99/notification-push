import { app, BrowserWindow, Notification } from "electron";
import path from "path";

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);

// // Aquí vamos a escuchar la notificación de Firebase
// messaging.onMessage((payload) => {
//   console.log("Received notification", payload);

//   const notification = new Notification({
//     title: payload.notification.title,
//     body: payload.notification.body,
//   });

//   notification.show();
// });
