'use strict'

const User = use('App/Models/User')
const Mail = use('MailProvider')
const Logger = use('Logger')

class AuthController {
  async register ({ request, response }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    const mail = new Mail({
      to: user.email,
      subject: 'Obrigado por fazer parte da nossa equipe. =)',
      template: 'emails.welcome',
      others: user.toJSON()
    })

    try {
      await mail.send()
    } catch (err) {
      return response.status(400).send([{ message: 'Erro Mailgun' }])
    }
    return user
  }

  async authenticate ({ request, response, auth }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)

      Logger.info('request url is %s', request.url())

      Logger.info('request details %j', {
        url: request.url()
        // user: auth.user.username()
      })
      return token
    } catch (err) {
      console.log(err)
      return response.status(401).send([{ message: 'Password Incorreto.' }])
    }
  }
}

module.exports = AuthController
