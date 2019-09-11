'use strict'

const User = use('App/Models/User')
const Mail = use('App/Providers/Mail')

class AuthController {
  async register ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    const mail = new Mail({
      to: user.email,
      subject: 'Obrigado por fazer parte da nossa equipe. =)',
      template: 'emails.welcome',
      others: user.toJSON()
    })

    mail.send()

    return user
  }

  async authenticate ({ request, response, auth }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)
      return token
    } catch (err) {
      return response.status(401).send([{ message: 'Password Incorreto.' }])
    }
  }
}

module.exports = AuthController
