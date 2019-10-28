const Todo = use('App/Models/Todo')
const Drive = use('Drive')

class TodoController {
  async index ({ request }) {
    const { page, per_page, selector, direction } = request.get()
    if (!selector && !direction) {
      var todos = await Todo.query().paginate(page, per_page)
    } else {
      var todos = await Todo.query()
        .orderBy(selector, direction)
        .paginate(page, per_page)
    }

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

          const todo = await Todo.create({
            file_name: Key,
            descricao: Date.now()
          })

          return response.json(todo)
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
      const todos = request.only(['selectedRows'])
      let files = ''
      todos.selectedRows.forEach(async value => {
        const exists = await Drive.exists(value.file_name)

        const todo = await Todo.find(value.id)

        await todo.delete()

        if (exists) {
          const remove = await Drive.delete(value.file_name)
          if (remove) {
            files = files + value.file_name + ' '
          }
          /* if (remove) {
            return response.json({
              message: 'Arquivo e TODO deletado com sucesso.'
            })
          } else {
            return response
              .status(400)
              .json({ message: 'Falha ao exluir arquivo' })
          } */
        } /* else {
          return response.status(404).json({ message: 'Arquivo não encontrado.' })
        } */
      })

      return response.json({
        files: files,
        message: 'Todos deletados com sucesso.'
      })
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
