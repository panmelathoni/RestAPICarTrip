const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Fuel = db.fuel;
const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.updateFuel = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Update Fuel");
	
	Fuel.update({
		fuel_type: req.body.fuel_type,
		price: req.body.price,
	}, { where: {id: req.body.id}}).then(fuelUpdate => {
		res.send("Fuel updated successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.createFuel = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Create Fuel");
	
	Fuel.create({
		fuel_type: req.body.fuel_type,
		price: req.body.price,
	}).then(fuelCreated => {
		res.send("Fuel registered successfully!" + fuelCreated.fuel_type);
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.getFuelById = (req, res) => {
	Fuel.findOne({
		where: {id: req.body.fuelId},
		attributes: ['id', 'fuel_type', 'price']
	}).then(fuel => {
		res.status(200).json({
			fuel
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Fuel",
			"error": err
		});
	})
}
    


exports.getAllFuels = (req, res) => {
	Fuel.findAll({
		attributes:  ['id', 'fuel_type', 'price']
	}).then(fuel => {
		res.status(200).json({
			fuel
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Fuel",
			"error": err
		});
	})
}

exports.deleteFuel = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Delete Fuel");
	
	Fuel.destroy(
	{ where: {id: req.body.id}}
	).then(fuel => {
		res.send("Fuel deleted successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

