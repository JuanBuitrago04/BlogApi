// Importo express para poder crear las rutas
import express from "express";

// Importo las funciones del controlador para los posts
import { addPost, getPosts } from "../controllers/postController.js";

// Creo una instancia del router de express
const router = express.Router();

// Ruta POST para agregar un nuevo post
router.post("/", addPost); // Cuando se haga un POST llamo a la funcion addPost del controlador

// Ruta GET para obtener todos los posts
router.get("/", getPosts); // Cuando se haga un GET llamo a la funcion getPosts del controlador

// Exporto el router para que pueda ser usado en otros archivos
export default router;
