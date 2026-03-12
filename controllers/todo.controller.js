const TodoModel = require('../models/todo.model.js');

const createTodo = (req, res, next) => {
    const createdModel = TodoModel.create(req.body);
    res.status(201).json(createdModel);
};

module.exports = {createTodo}