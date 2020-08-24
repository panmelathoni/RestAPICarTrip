const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

    const controller = require('../controller/controller.js');
	const controllerCars = require('../controller/controllerCars.js');
	const controllerFuel = require('../controller/controllerFuel.js');
	const controllerRoute = require('../controller/controllerRoute.js');

 
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
	
	app.post('/api/auth/signin', controller.signin);
	
	app.get('/api/user', [authJwt.verifyToken], controller.userContent);

	app.get('/api/users', [authJwt.verifyToken], controller.findAllUsers);
	
	app.get('/api/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

	//** rotas para cars */
	app.delete('/api/cars/delete', [authJwt.verifyToken], controllerCars.deleteCar);
	app.put('/api/cars/update', [authJwt.verifyToken], controllerCars.updateCar);
	app.post('/api/cars/create', [authJwt.verifyToken], controllerCars.createCar);
	app.get('/api/cars/getAll', [authJwt.verifyToken], controllerCars.getAllCars);
	app.get('/api/cars/getById', [authJwt.verifyToken], controllerCars.getCarById);

	//**novas rotas para fuel */
	app.delete('/api/fuel/delete', [authJwt.verifyToken], controllerFuel.deleteFuel);
	app.put('/api/fuel/update', [authJwt.verifyToken], controllerFuel.updateFuel);
	app.post('/api/fuel/create', [authJwt.verifyToken], controllerFuel.createFuel);
	app.get('/api/fuel/getAll', [authJwt.verifyToken], controllerFuel.getAllFuels);
	app.get('/api/fuel/getById', [authJwt.verifyToken], controllerFuel.getFuelById);

	//**novas rotas para route */
	app.delete('/api/route/delete', [authJwt.verifyToken], controllerRoute.deleteRoute);
	app.put('/api/route/update', [authJwt.verifyToken], controllerRoute.updateRoute);
	app.post('/api/route/create', [authJwt.verifyToken], controllerRoute.createRoute);
	app.get('/api/route/getAll', [authJwt.verifyToken], controllerRoute.getAllRoutes);
	app.get('/api/route/getById', [authJwt.verifyToken], controllerRoute.getRouteById);
}

