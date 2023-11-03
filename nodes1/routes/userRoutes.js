const Router = require("express").Router();

const { createUser } = require("../controllers/usrController");

Router.post("/", createUser);

module.exports = Router;
