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

  async remove ({ request, response }) {
    try {
      const { fileName } = request.only(['fileName'])

      const exists = await Drive.exists(fileName)

      if (exists) {
        const remove = await Drive.delete(fileName)
        if (remove) {
          return response.json({ message: 'Arquivo deletado com sucesso.' })
        } else {
          return response
            .status(400)
            .json({ message: 'Falha ao exluir arquivo' })
        }
      } else {
        return response.status(404).json({ message: 'Arquivo não encontrado.' })
      }
    } catch (err) {
      return response.status(err.status).json({
        error: {
          err_message: err.message
        }
      })  
    }
  }
}

module.exports = TodoController
