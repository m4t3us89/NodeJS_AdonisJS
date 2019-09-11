'use strict'

class Authenticate {
  get rules () {
    return {
      email: 'email|required',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'Você deve fornecer um endereço de email.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'password.required': 'Você deve fornecer uma senha'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Authenticate
