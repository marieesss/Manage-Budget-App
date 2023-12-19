/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import PostsController from 'App/Controllers/Http/PostsController'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator  from 'App/Validators/RegisterValidator'

Route.get('/', async () => {
  return new PostsController().index()
})

Route.post('/', async ({request} : HttpContextContract) => {
  const data = await request.validate(RegisterValidator)
  return new PostsController().post(data)
})
