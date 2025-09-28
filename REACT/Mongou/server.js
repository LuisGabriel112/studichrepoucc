/**
 * Servidor para la aplicación Monguito
 * @author Luis Venegas
 */

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

// Inicialización de la aplicación Express
const app = express();
app.use(cors());

// Configuración de la conexión a MongoDB
const uri = "mongodb+srv://jorgestudillo:jorgestudillo@clusterroot.vpo4g.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRoot";
const client = new MongoClient(uri);

/**
 * Función principal que inicia el servidor
 */
async function main() {
  try {
    // Conectar al cliente de MongoDB
    await client.connect();
    const db = client.db("sample_mflix");
    const movies = db.collection("movies");

    // Definición de endpoints
    app.get("/movies", async (req, res) => {
      // Obtener películas con sus datos relevantes
      const data = await movies
        .find({}, { projection: { poster: 1, title: 1, fullplot: 1 } })
        .limit(60)
        .toArray();
      res.json(data);
    });

    // Iniciar el servidor
    app.listen(4000, () => console.log("Servidor iniciado en http://localhost:4000"));
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

// Ejecutar la función principal
main().catch(console.error);