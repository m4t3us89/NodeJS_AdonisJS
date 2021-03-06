# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Integração com Sentry

https://www.npmjs.com/package/adonis-sentry

### Validators

Indicative https://indicative.adonisjs.com/validations/master/array

### ORM

Knexjs.org http://knexjs.org/

### Internationalization

https://adonisjs.com/docs/4.1/internationalization
Arquivos com as mensagens: https://github.com/wemersonrv/adonis-antl-messages/tree/master/resources/locales
