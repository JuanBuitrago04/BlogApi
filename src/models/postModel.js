// Importo la conexion a la base de datos
import db from "../config/db.js";

// Funcion para crear un nuevo post en la base de datos
export const createPost = async (title, content, userId) => {

  console.log("Datos recibidos:", title, content, userId); // Muestro los datos recibidos en la consola
  
  // Inserto un nuevo post en la tabla "posts"
  const [result] = await db.execute(
    "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)",
    [title, content, userId] // Uso parametros para evitar inyeccion SQL
  );

  return result; // Retorno el resultado de la consulta
};

// Funcion para obtener todos los posts almacenados en la base de datos
export const getAllPosts = async () => {

  // Selecciono todos los posts de la tabla "posts"
  const [rows] = await db.execute("SELECT * FROM posts");

  return rows; // Retorno la lista de posts obtenidos
};