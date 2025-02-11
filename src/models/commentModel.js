// Importo la conexion a la base de datos
import db from "../config/db.js";

// Funcion para crear un comentario en la base de datos
export const createComment = async (postId, userId, content) => {

  // Inserto un nuevo comentario en la tabla "comments"
  const [result] = await db.execute(
    "INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)",
    [postId, userId, content] // Uso parametros para evitar inyeccion SQL
  );
  
  return result; // Retorno el resultado de la consulta
};

// Funcion para obtener todos los comentarios de un post especifico
export const getCommentsByPost = async (postId) => {

  // Selecciono todos los comentarios de la tabla "comments" filtrando por post_id
  const [rows] = await db.execute("SELECT * FROM comments WHERE post_id = ?", [postId]);

  return rows; // Retorno los comentarios obtenidos
};