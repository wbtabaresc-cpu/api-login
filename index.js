import express from "express";
import registroRuta from "./src/rutas/registro.ruta.js"; // Importacion de modulo de rutas
import loginRuta from "./src/rutas/login.ruta.js";

const app = express();
app.use(express.json());

app.use("/api", registroRuta); // Asignacion de rutas al servidor
app.use("/api", loginRuta);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000"); // Levanta el servidor en el puerto 3000 y muestra el mensaje en la consola
});
