const TodoController = require('../../controllers/todo.controller.js');

describe('TodoController.createTodo', () => {
    it('Should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function')
    })
})