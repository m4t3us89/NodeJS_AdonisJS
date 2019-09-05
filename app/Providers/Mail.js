const Mail = use('Mail')

class SendMail {
  constructor ({ to, subject, template, others }) {
    this.mail = {
      to,
      subject,
      others,
      template,
      from: 'allissonmateus@gmail.com'
    }
  }

  async send () {
    const { from, to, subject, template, others } = this.mail
    const retorno = await Mail.send(template, others, message => {
      message
        .to(to)
        .from(from)
        .subject(subject)
    })

    console.log(retorno)
  }
}

module.exports = SendMail
