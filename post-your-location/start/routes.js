'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','PlaceController.home');

Route.on('/signup').render('auth.signup');
Route.post('/signup','UserController.create').validator('CreateUser');

Route.on('/login').render('auth.login');
Route.post('/login','UserController.login').validator('LoginUser');

Route.get('/logout',async({auth,response}) => { 
    await auth.logout();
    return response.redirect('/')
})

Route.get('/myplaces','PlaceController.personal');

Route.get('/post-a-location','PlaceController.userIndex');
Route.get('/post-a-location/delete/:id','PlaceController.delete');
Route.get('/post-a-location/edit/:id','PlaceController.edit');
Route.post('/post-a-location/update/:id','PlaceController.update').validator('CreatePlace');
Route.post('/post-a-location','PlaceController.create').validator('CreatePlace');


