'use strict'
const Antl = use('Antl')

class Authenticate {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'email|required|exists:users,email',
      password: 'required'
    }
  }

  /* get messages () {
    return {
      'email.required': 'Você deve fornecer um endereço de email.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'password.required': 'Você deve fornecer uma senha',
      'email.exists': 'Não foi possível encontrar um usuário com esse email.'
    }
  } */

  get messages () {
    return Antl.list('validation')
  }

  async fails (errorMessages) {
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Authenticate
