import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import './config/db.js'; // o como se llame tu archivo
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import {Coach,Team,CoachTeam,Match_Feedback,Player,Match,Season,Rival,Member,User} from './models/associations.js';

// Cargar variables de entorno
dotenv.config();

// Crear servidor Express
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
const corsOptions = {
    origin: CLIENT_URL,
    credentials: true
}

// Configurar middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'));

// Configurar motor de plantillas
app.set('view engine', 'pug');
app.set('views', 'src/views');

/*// Configurar sesión
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // true para HTTPS
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 semana
    }
})); */

// Configurar rutas
app.use('/', router);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});