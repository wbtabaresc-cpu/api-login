import express from "express";
const router = express.Router();

router.post("/registro", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ error: "Datos incompletos" });
  }

  res.status(201).json({ message: "Usuario registrado con exito" });
});

export default router;
