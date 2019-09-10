'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.alter('todos', table => {
      table
        .string('file_name')
        .notNullable()
        .default('')
    })
  }

  down () {
    this.table('todos', table => {
      // reverse alternations
    })
  }
}

module.exports = TodoSchema
