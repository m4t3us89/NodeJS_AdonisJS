'use strict'

/*
|--------------------------------------------------------------------------
|Monitoramento Sentry
|--------------------------------------------------------------------------
*/
const Sentry = require('@sentry/node')
Sentry.init({
  dsn: 'https://2a27ab3dbb6541a4a65c7b6a4f79f54c@sentry.io/1552900'
})

const path = require('path')
/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/framework/providers/ViewProvider',
  'adonis-sentry/providers/Sentry',
  '@adonisjs/drive/providers/DriveProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/antl/providers/AntlProvider',

  path.join(__dirname, '..', 'providers', 'ExtendValidatorProvider')
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = ['@adonisjs/lucid/providers/MigrationsProvider']

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  MailProvider: 'App/Providers/Mail.js'
}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }
