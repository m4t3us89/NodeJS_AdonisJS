'use strict'

const Todo = use('App/Models/Todo')
const Mail = use('App/Providers/Mail')

class TodoController {
  async index () {
    const todos = await Todo.all()

    return todos
  }
}

module.exports = TodoController
