'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('register', 'AuthController.register').validator('Register')

  Route.post('authenticate', 'AuthController.authenticate').validator(
    'Authenticate'
  )
}).prefix('api/user')

Route.group(() => {
  Route.get('', 'TodoController.index')
  Route.post('profile', 'TodoController.profile')
  Route.delete('profile', 'TodoController.remove')
  // Route.resource('profile', 'TodoController')
}).prefix('api/todo')
// .middleware(['auth'])

Route.group(() => {
  Route.get('', 'JsonPlaceHolderController.index')
}).prefix('api/jsonplaceholder')
// .middleware(['auth'])

Route.get('file/:file', 'FileController.show')

Route.any('*', ({ response }) => {
  return response.status(404).send([
    {
      message: 'Rota não encontrada.'
    }
  ])
})
