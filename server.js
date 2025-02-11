// Importo express para poder crear la aplicacion
import express from "express";

// Importo las rutas de usuarios, posts y comentarios
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";

// Creo una instancia de la aplicacion express
const app = express();

// Uso express.json() para que la aplicacion pueda interpretar los datos JSON enviados en las solicitudes
app.use(express.json());

// Defino las rutas que se van a usar en la API
app.use("/api/users", userRoutes); // Las rutas de usuarios estan bajo "/api/users"

app.use("/api/posts", postRoutes); // Las rutas de posts estan bajo "/api/posts"

app.use("/api/comments", commentRoutes); // Las rutas de comentarios estan bajo "/api/comments"

// Defino el puerto donde el servidor escuchará
const PORT = 3000;

// Pongo el servidor a escuchar en el puerto definido y muestro un mensaje en consola
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));