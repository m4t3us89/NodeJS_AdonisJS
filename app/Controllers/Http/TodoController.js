'use strict'

const Todo = use('App/Models/Todo')

class TodoController {
  async index () {
    const todos = await Todo.all()
    return todos
  }
}

module.exports = TodoController
