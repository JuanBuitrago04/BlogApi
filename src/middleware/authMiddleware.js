// Importo jwt para manejar la verificacion de tokens
import jwt from "jsonwebtoken";

// Clave secreta utilizada para firmar y verificar los tokens
const SECRET_KEY = "supersecreto";

// Middleware de autenticacion
export const authMiddleware = (req, res, next) => {

  // Obtengo el token del encabezado de la solicitud
  const token = req.header("Authorization");

  // Verifico si el token no esta presente en la solicitud
  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No hay token" });
  }

  try {

    // Verifico si el token es valido y lo decodifico
    const verified = jwt.verify(token, SECRET_KEY);

    // Almaceno la informacion del usuario en req.user para usarla en las siguientes funciones
    req.user = verified;

    // Llamo a next() para continuar con la siguiente funcion del middleware
    next();
  } catch (error) {

    // Si el token no es valido envio un mensaje de error
    res.status(401).json({ message: "Token invalido" });
  }
};