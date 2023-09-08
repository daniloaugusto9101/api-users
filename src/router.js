const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();

router.get("/clientes", userController.getAll);
router.post("/clientes", userController.addUser);
router.delete("/clientes/:id", userController.delUser);

router.use("/", (req, res) => {
  res.status(200);
  res.send(`Bem vindo! Página inicial da API`);
});

module.exports = router;
