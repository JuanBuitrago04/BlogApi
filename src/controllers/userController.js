// Importo bcrypt para encriptar contraseñas y jwt para generar tokens de autenticacion
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Importo las funciones para crear un usuario y obtener un usuario por email desde el modelo
import { createUser, getUserByEmail } from "../models/userModel.js";

// Clave secreta para generar los tokens
const SECRET_KEY = "supersecreto";

// Funcion para registrar un nuevo usuario
export const register = async (req, res) => {

  // Extraigo los valores del cuerpo de la solicitud
  const { username, email, password } = req.body;

  // Verifico que todos los campos esten completos
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  // Encripto la contraseña antes de guardarla en la base de datos
  const hashedPassword = await bcrypt.hash(password, 10);

  try {

    // Guardo el nuevo usuario en la base de datos
    await createUser(username, email, hashedPassword);

    // Respondo con un mensaje de exito si todo sale bien
    res.status(201).json({ message: "Usuario registrado con exito" });

  } catch (error) {

    // Si hay un error envio un mensaje de error
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

// Funcion para iniciar sesion
export const login = async (req, res) => {

  // Extraigo el email y la contraseña del cuerpo de la solicitud
  const { email, password } = req.body;

  try {

    // Busco al usuario en la base de datos por su email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Comparo la contraseña ingresada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Si las credenciales son correctas genero un token de autenticacion
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

    // Respondo con un mensaje de éxito y el token generado
    res.json({ message: "Login exitoso", token });

  } catch (error) {

    // Si ocurre un error respondo con un mensaje indicando el problema
    res.status(500).json({ message: "Error en el servidor", error });
  }
};