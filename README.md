# 📖 Blog API 🚀  

API RESTful para gestionar publicaciones de blog, desarrollada con **Node.js** y **Express.js**.  
Permite crear, leer, actualizar y eliminar publicaciones fácilmente.

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
