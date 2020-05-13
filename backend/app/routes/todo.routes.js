module.exports = (app) => {
    const mytodos = require('../contollers/todo.contoller.js');

    app.post('/api/v1/todo',mytodos.create);

    app.get('/api/v1/todos', mytodos.findAll);

    app.put('/api/v1/todos/:todoId', mytodos.update);

    app.delete('/api/v1/todos/:todoId', mytodos.delete);
}