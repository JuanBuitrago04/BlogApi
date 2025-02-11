// Importo la conexion a la base de datos
import db from "../config/db.js";

// Funcion para crear un nuevo usuario en la base de datos
export const createUser = async (username, email, hashedPassword) => {
  
  // Inserto un nuevo usuario en la tabla "users"
  const [result] = await db.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword] // Uso parametros para evitar inyeccion SQL
  );

  return result; // Retorno el resultado de la consulta
};

// Funcion para obtener un usuario por su email desde la base de datos
export const getUserByEmail = async (email) => {

  // Busco un usuario en la tabla "users" filtrando por su email
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

  return rows[0]; // Retorno el primer usuario encontrado (ya que el email es unico)
};
