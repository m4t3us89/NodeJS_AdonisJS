'use strict'

class Register {
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'email|required|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'Você deve fornecer um endereço de email.',
      'email.unique': 'Já existe um cadastro do e-mail informado.',
      'username.required': 'Você deve fornecer um nome de usuário.',
      'username.unique': 'Já existe um cadastro do username informado.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'password.required': 'Você deve fornecer uma senha'
    }
  }

  async fails (errorMessages) {
    console.log('entrou')
    return this.ctx.response.status(400).send(errorMessages)
  }
}

module.exports = Register
