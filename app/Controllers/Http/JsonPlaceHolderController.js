'use strict'
const axios = use('axios')

class JsonPlaceHolderController {
  async index ({ response, request }) {
    const comments = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    )

    const { page, per_page } = request.get()
    console.log(page, per_page)
    const comments_ = comments.data.slice(
      page * per_page,
      (page + 1) * per_page
    )

    console.log(comments_.length)
    return comments_
  }
}

module.exports = JsonPlaceHolderController
