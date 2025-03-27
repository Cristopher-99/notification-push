# Sistema de Notificaciones Push

## Description

Sistema de notificaciones push, dividido en tres partes principales:

### 1. **Backend**

- Construido con Node.js y Express.
- Maneja la lógica de envío de notificaciones a través de Firebase Admin.
- Expone endpoints para ser consumidos por el frontend cuando se crea un nuevo contenido.

### 2. **Frontend (Electron App)**

- Aplicación de escritorio desarrollada en Electron.
- Dispara los endpoints del backend al crear nuevo contenido en la plataforma.

### 3. **Mobile App (React Native)**

- Desarrollada en React Native.
- Utiliza `react-native-firebase/messaging` para recibir notificaciones push.
- Muestra las notificaciones en la UI de la aplicación móvil.

### 4. **Mejoras Pendientes**

- Implementación de Puppeteer y scraping para futuras mejoras.
- Pruebas unitarias con Jest en todos los componentes.
- Uso de clustering para mejorar la escalabilidad del backend.

![alt text](<Sistema de notificaciones.jpg>)

## Technologies

### 1. Backend

- [x] Node.js
- [x] TypeScript
- [x] Jest
- [x] Express
- [x] Firebase Admin

### 2. Frontend - Electron

- [x] Electron
- [x] TypeScript
- [x] Jest

### 3. App Mobile - Ya desarollada

- [x] React Native
- [x] react-native-firebase/messaging

### PENDIENTES A APLICAR:

- [ ] PUPPETER
- [ ] SCRAPPING
- [ ] TESTING con JEST
- [ ] CLUSTER
