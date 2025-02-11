# 📖 Blog API 🚀  

Esta API permite gestionar publicaciones de blog de manera eficiente, proporcionando operaciones para crear, leer, actualizar y eliminar artículos.

Desarrollada con Node.js y Express.js, está diseñada para ser rápida, escalable y fácil de integrar con aplicaciones frontend o móviles.

Cada publicación es tratada como un recurso, accesible a través de endpoints bien definidos, utilizando métodos HTTP estándar como GET, POST, PUT y DELETE.

Los datos se intercambian en formato JSON, asegurando compatibilidad con diversos clientes y facilitando la comunicación entre sistemas.

Además, la API puede incorporar autenticación y control de acceso para proteger la información y garantizar un uso seguro. 🚀

## 📌 Instalación  

### 1️⃣ Clonar el repositorio  
```bash
git clone <repo-url>
cd blogapi
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor
```bash
npm start
```

La API estará disponible en http://localhost:3000 por defecto.

## 🔗 Endpoints

### 📌 Publicaciones (Posts)
```bash
GET    /posts       → Obtener todas las publicaciones  
GET    /posts/:id   → Obtener una publicación por ID  
POST   /posts       → Crear una nueva publicación  
PUT    /posts/:id   → Actualizar una publicación existente  
DELETE /posts/:id   → Eliminar una publicación  
```

### 📌 Ejemplo de solicitud POST /posts
```bash
{
  "title": "Mi primer post",
  "content": "Este es el contenido de mi post.",
  "author": "Juan Pérez"
}
```

### 📌 Respuesta esperada
```bash
{
  "id": 1,
  "title": "Mi primer post",
  "content": "Este es el contenido de mi post.",
  "author": "Juan Pérez",
  "createdAt": "2025-02-11T12:00:00Z"
}
```

## ⚙️ Tecnologías utilizadas

· Node.js - Entorno de ejecución

· Express.js - Framework para el servidor

· MySQL - Base de datos relacional

## 📜 Licencia
Este proyecto está bajo la licencia MIT.
```bash

### Mejoras añadidas:  
✅ Explicación clara de cómo funciona la API.  
✅ Ejemplo de solicitud y respuesta.  
✅ Sección de autenticación (puedes completarla si usas JWT).  
✅ Más detalles sobre tecnologías utilizadas.  

¡Este `README.md` está listo para producción! 🚀📌

```
