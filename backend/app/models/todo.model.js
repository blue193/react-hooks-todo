const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: String,
    date: String
})

module.exports = mongoose.model('Todo', todoSchema, 'todolist');