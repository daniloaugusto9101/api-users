const userModel = require("../models/userModel");

const getAll = (req, res) => {
  user = userModel.getAll();
  return res.status(200).json(user);
};

const addUser = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).end();
  }
  const user = userModel.addUser(body);
  return res.status(200).json(user);
};

const delUser = (req, res) => {
  const id = req.params.id;
  const newDB = userModel.delUser(id);
  return res.status(200).send(newDB);
};

module.exports = {
  getAll,
  addUser,
  delUser,
};
