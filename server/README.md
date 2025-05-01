# Lasalle

Aplicación web desarrollada con Node.js y Express, utilizando MongoDB como base de datos. El proyecto está contenedorizado con Docker para facilitar su despliegue y ejecución.

## 📋 Objetivos del proyecto

- Centralizar la gestión de información de un club deportivo (equipos, jugadores, entrenadores, competiciones, etc.).
- Facilitar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre distintas entidades.
- Ofrecer una base sólida para integrar un frontend en el futuro.
- Proporcionar una infraestructura de desarrollo robusta utilizando Docker y MongoDB.

## ✨ Funcionalidades principales

- Creación y administración de entidades deportivas.
- Organización modular en controladores, rutas y modelos.
- Gestión de configuración mediante variables de entorno.
- Despliegue de la infraestructura mediante Docker Compose.

## 📦 Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Docker Compose
- dotenv

## 🚀 Instalación y ejecución

### Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Pasos

```bash
git clone https://github.com/ibonbautista/lasalle.git
cd lasalle
cp .env.example .env
docker-compose up --build

La aplicación estará disponible en http://localhost:3000.

🗂 Estructura del proyecto
bash
Copy
Edit
lasalle/
├── database/             # Configuración de la base de datos
├── src/                  # Código fuente
│   ├── controllers/      # Lógica de negocio
│   ├── models/           # Modelos de datos (Mongoose)
│   ├── routes/           # Definición de rutas
│   └── app.js            # Configuración del servidor
├── .env.example          # Variables de entorno
├── Dockerfile            # Imagen Docker
├── docker-compose.yml    # Orquestación de contenedores
├── package.json          # Dependencias y scripts
└── README.md             # Documentación
🛣️ Roadmap
 Configurar entorno de desarrollo con Docker y MongoDB.

 Estructurar el proyecto en controladores, modelos y rutas.

 Implementar operaciones CRUD para las entidades principales (jugadores, equipos, entrenadores).

 Añadir validaciones de datos usando Mongoose.

 Crear endpoints seguros (añadir autenticación y autorización).

 Desarrollar una pequeña API REST completa.

 Integrar pruebas unitarias y de integración (Jest, Supertest).

 Documentar la API (Swagger o Postman).

 Preparar despliegue en producción (Railway, Render, AWS, etc.).

 Diseñar un frontend simple para interactuar con la API.

📄 Licencia
Este proyecto está bajo la licencia MIT.
Consulta el archivo LICENSE para más información.