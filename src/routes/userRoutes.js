// Importo express para poder crear las rutas
import express from "express";

// Importo las funciones del controlador para el registro y login de usuarios
import { register, login } from "../controllers/userController.js";

// Creo una instancia del router de express
const router = express.Router();

// Ruta POST para registrar un nuevo usuario
router.post("/register", register); // Cuando se haga un POST a "/register" llamo a la funcion register del controlador

// Ruta POST para iniciar sesion con un usuario existente
router.post("/login", login); // Cuando se haga un POST a "/login" llamo a la funcion login del controlador

// Exporto el router para que pueda ser usado en otros archivos
export default router;
