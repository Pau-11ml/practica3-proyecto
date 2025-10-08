## 📘 Descripción General

Este proyecto implementa un **modelo de dominio y persistencia de datos** para una aplicación de recomendaciones turísticas destinada a turistas internacionales.  
El desarrollo se realiza **sin frameworks**, usando **Node.js**, **TypeScript** y **TypeORM puro**.

El sistema permite registrar y gestionar información sobre:

- Servicios turísticos (restaurantes, museos, hoteles, etc.)
- Medios de transporte
- Guías culturales e información local
- Reseñas y calificaciones de los usuarios

Además, el proyecto incluye la lógica CRUD para cada entidad y un script de **seeding** que demuestra la conexión, creación y manipulación de los datos del dominio.

---

## 🧰 Tecnologías Utilizadas

- **Node.js**
- **TypeScript**
- **TypeORM (versión 0.3.x)**
- **SQLite** como base de datos embebida
- **Reflect-metadata** (para los decoradores de TypeORM)
