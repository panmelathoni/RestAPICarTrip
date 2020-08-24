const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Car = db.car;
const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.updateCar = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Update car");
	
	Car.update({
		model: req.body.model,
		brand: req.body.brand,
		release_date: req.body.release_date,
		hp: req.body.hp,
		consumption: req.body.consumption,
		fuelId: req.body.fuelId,
	}, { where: {id: req.body.id}}).then(carUpdate => {
		res.send("Car updated successfully!" + carUpdate.model);
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.createCar = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Create car");
	
	Car.create({
		model: req.body.model,
		brand: req.body.brand,
		release_date: req.body.release_date,
		hp: req.body.hp,
		consumption: req.body.consumption,
	}).then(carCreated => {
		res.send("Car registered successfully!" + carCreated.model);
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.getCarById = (req, res) => {
	Car.findOne({
		where: {id: req.body.carId},
		attributes: ['id', 'model', 'brand', 'release_date', 'hp', 'consumption', 'fuelId']
	}).then(cars => {
		res.status(200).json({
			cars
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Admin Board",
			"error": err
		});
	})
}
    


exports.getAllCars = (req, res) => {
	Car.findAll({
		attributes: ['id', 'model', 'brand', 'release_date', 'hp', 'consumption', 'fuelId']
	}).then(cars => {
		res.status(200).json({
			cars
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Admin Board",
			"error": err
		});
	})
}

exports.deleteCar = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Delete car");
	
	Car.destroy(
	{ where: {id: req.body.id}}
	).then(carDeleted => {
		res.send("Car deleted successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

