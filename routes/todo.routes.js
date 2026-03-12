const express = require("express");
const TodoController = require("../controllers/todo.controller.js");
const router = express.Router();

router.post("/", TodoController.createTodo);

module.exports = router;