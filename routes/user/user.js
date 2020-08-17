const Router = require("express").Router();
const userController = require("../../controllers/user");

Router.post("/", userController.createUser);

module.exports = Router;
