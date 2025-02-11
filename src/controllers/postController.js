// Importo las funciones que permiten crear y obtener posts desde el modelo
import { createPost, getAllPosts } from "../models/postModel.js";

// Funcion para agregar un nuevo post
export const addPost = async (req, res) => {

  // Muestra en la consola los datos que llegan en la solicitud para verificar que todo este bien
  console.log("Datos recibidos en el controlador:", req.body);

  // Extrae los valores que vienen en la solicitud
  const { title, content, userId } = req.body;

  try {

    // Llama a la funcion que guarda el post en la base de datos
    await createPost(title, content, userId);

    // Responde con un mensaje de exito si todo sale bien
    res.status(201).json({ message: "Publicacion creada con éxito" });

  } catch (error) {
    
    // Si hay un error envia un mensaje indicando que fallo
    res.status(500).json({ message: "Error al crear la publicacion", error });
  }
};

// Funcion para obtener todos los posts
export const getPosts = async (req, res) => {

  try {

    // Llama a la función que obtiene todos los posts de la base de datos
    const posts = await getAllPosts();
    // Envía los posts obtenidos en formato JSON

    res.json(posts);
  } catch (error) {

    // Si ocurre un error responde con un mensaje indicando el problema
    res.status(500).json({ message: "Error al obtener publicaciones", error });
  }
};
