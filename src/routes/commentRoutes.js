// Importo express para poder crear las rutas
import express from "express";

// Importo las funciones del controlador para los comentarios
import { addComment, getComments } from "../controllers/commentController.js";

// Creo una instancia del router de express
const router = express.Router();

// Ruta POST para agregar un comentario
router.post("/", addComment); // Cuando se haga un POST llamo a la funcion addComment del controlador

// Ruta GET para obtener los comentarios de un post especifico
router.get("/:postId", getComments); // Cuando se haga un GET llamo a la función getComments del controlador

// Exporto el router para que pueda ser usado en otros archivos
export default router;