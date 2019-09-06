'use strict'

const Todo = use('App/Models/Todo')
const Drive = use('Drive')

class TodoController {
  async index () {
    const todos = await Todo.all()

    return todos
  }

  async profile ({ request, response }) {
    await request.multipart
      .file('file', {}, async file => {
        try {
          const ContentType = file.headers['content-type']
          const ACL = 'public-read'
          // const Key = `${(Math.random() * 100).toString(32)}-${file.clientName}`
          const Key = `${Date.now()}-${file.clientName}`

          const url = await Drive.put(Key, file.stream, {
            ContentType,
            ACL
          })

          return response.json({
            url
          })
        } catch (err) {
          return response.status(err.status).json({
            error: {
              err_message: err.message
            }
          })
        }
      })
      .process()
  }
}

module.exports = TodoController
