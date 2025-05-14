# Lasalle

Aplicación web desarrollada inicialmente con Node.js y Express, utilizando MongoDB como base de datos. Posteriormente, se ha estructurado para incluir un cliente (frontend) que interactúa con la API. El proyecto está contenedorizado con Docker para facilitar su despliegue y ejecución.

## 📋 Objetivos del proyecto

- Centralizar la gestión de información de un club deportivo (equipos, jugadores, entrenadores, competiciones, etc.).
- Facilitar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre distintas entidades.
- Proporcionar una estructura modular para el backend y frontend.
- Despliegue simplificado utilizando Docker y Docker Compose.
- Implementar un frontend que interactúe con la API del backend.

## ✨ Funcionalidades principales

### Backend
- Creación y administración de entidades deportivas (jugadores, equipos, entrenadores).
- Organización modular en controladores, rutas y modelos.
- Gestión de configuración mediante variables de entorno.
- Despliegue de la infraestructura backend mediante Docker Compose.

### Frontend
- Estructura base para el cliente, lista para consumir la API del backend.
- Configuración inicial para futuras integraciones y desarrollo de interfaces.

## 📦 Tecnologías utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose
- dotenv

### Frontend
- React (a implementar)
- CSS (a implementar)
- Axios o Fetch para consumo de API (a implementar)

## 🚀 Instalación y ejecución

### Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/ibonbautista/lasalle.git
cd lasalle
Configurar variables de entorno:

bash
Copy
Edit
cp .env.example .env
Iniciar los contenedores:

bash
Copy
Edit
docker-compose up --build
La aplicación estará disponible en:

Backend: http://localhost:3001

Frontend: Por definir en futuras actualizaciones.

🗂 Estructura del proyecto
bash
Copy
Edit
lasalle/
├── client/                # Código del cliente (frontend)
│   └── src/
│       ├── components/
│       └── App.js
├── server/                # Código del servidor (backend)
│   ├── controllers/       # Lógica de negocio
│   ├── models/            # Modelos de datos (Mongoose)
│   ├── routes/            # Definición de rutas
│   └── app.js             # Configuración del servidor
├── .env.example           # Variables de entorno
├── Dockerfile             # Imagen Docker para backend
├── docker-compose.yml     # Orquestación de contenedores
├── package.json           # Dependencias y scripts
└── README.md              # Documentación
🛣️ Roadmap
 Configurar entorno de desarrollo con Docker y MongoDB.

 Estructurar el backend en controladores, modelos y rutas.

 Implementar operaciones CRUD para las entidades principales (jugadores, equipos, entrenadores).

 Añadir validaciones de datos usando Mongoose.

 Crear endpoints seguros (autenticación y autorización).

 Desarrollar una API REST completa.

 Integrar pruebas unitarias y de integración (Jest, Supertest).

 Documentar la API (Swagger o Postman).

 Estructurar el frontend y crear componentes base.

 Preparar despliegue en producción (Railway, Render, AWS, etc.).

📄 Licencia
Este proyecto está bajo la licencia MIT.
Consulta el archivo LICENSE para más información.