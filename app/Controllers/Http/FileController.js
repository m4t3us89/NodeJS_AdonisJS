'use strict'

class FileController {
  async show ({ params, response }) {
    return response.download('./tmp/' + params.file)
  }
}

module.exports = FileController
