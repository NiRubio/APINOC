import { Router } from 'express';
import { register, buscar, login, logout } from '../controllers/controladores.js';

const ruta = Router();

ruta.post('/register', register);
ruta.get('/mostrar', buscar);
ruta.get('/login', login);
ruta.get('/logout', logout);

export default ruta;
