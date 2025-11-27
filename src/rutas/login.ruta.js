import express from "express";
const router = express.Router();

// Usuario de prueba, despues se reemplazara con una bae de datos en Mongo
const usuarioRegistrado = {
  usuario: "William",
  password: "1234"
};

router.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  // Cuando falta algun dato del login
  if (!usuario || !password) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  // Los datos son correctos
  if (usuario === usuarioRegistrado.usuario && password === usuarioRegistrado.password) {
    return res.status(200).json({ message: "Ingreso exitoso" });
  }

  // Los datos son incorrectos
  return res.status(401).json({ error: "Usuario o Contraseña incorrectos" });
});

export default router;
