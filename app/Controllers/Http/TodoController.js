'use strict'

const Todo = use('App/Models/Todo')
const Drive = use('Drive')

class TodoController {
  async index () {
    const todos = await Todo.all()

    return todos
  }

  async profile ({ request }) {
    // console.log(request)

    // console.log(Helpers.tmpPath('uploads'))

    const file = request.file('file', {
      types: ['image'],
      size: '2mb'
    })

    // console.log(request.multipart.file)

    try {
      // const img = await Drive.get('teste.jpeg')
      // console.log(img)
      /* request.multipart.file('profile_pic', {}, async file => {
        await Drive.disk('s3').put(file.clientName, file.stream)
      })

      await request.multipart.process() */
      // await Drive.disk('s3').put(file.clientName, file.stream)
      console.log(file.stream)
    } catch (err) {
      console.log(err)
    }

    return 'entrou'
  }
}

module.exports = TodoController
