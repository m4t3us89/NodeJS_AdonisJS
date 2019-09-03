'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')

class AuthController {
  async register ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    await Mail.send('emails.welcome', user.toJSON(), message => {
      message
        .to(user.email)
        .from('allissonmateus89@gmail.com')
        .subject('Welcome to yardstick')
    })

    return user
  }

  async authenticate ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
