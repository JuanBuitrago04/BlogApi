// Importo las funciones que se encargan de crear y obtener comentarios desde el modelo
import { createComment, getCommentsByPost } from "../models/commentModel.js";

// Esta funcion es para agregar un comentario a un post
export const addComment = async (req, res) => {
  const { postId, userId, content } = req.body;

  try {
    // Llamo a la funcion que crea el comentario en la base de datos
    await createComment(postId, userId, content);

    // Si todo sale bien respondo con un mensaje de exito
    res.status(201).json({ message: "Comentario agregado" });

  } catch (error) {

    // Si algo sale mal respondo con un mensaje de error
    res.status(500).json({ message: "Error al agregar comentario", error });
  }
};

// Esta funcion es para obtener todos los comentarios de un post especifico
export const getComments = async (req, res) => {
  // Obtengo el ID del post desde los parametros de la URL
  const { postId } = req.params;

  try {
    // Llamo a la funcion que obtiene los comentarios de un post
    const comments = await getCommentsByPost(postId);
    // Respondo con la lista de comentarios
    res.json(comments);
  } catch (error) {

    // Si hay un error al obtener los comentarios respondo con un mensaje de error
    res.status(500).json({ message: "Error al obtener comentarios", error });
  }
};
