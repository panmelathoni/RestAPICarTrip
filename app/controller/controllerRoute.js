const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Route = db.routehistory;
const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.updateRoute = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Update Route");
	
	Route.update({
		from: req.body.from,
        fromcity: req.body.fromcity,
        to: req.body.to,
        tocity: req.body.tocity,
        distance: req.body.distance,
        consumption_total: req.body.consumption_total,
        valorviagem: req.body.valorviagem,
        precoCombustivel: req.body.precoCombustivel,
        cilindradas: req.body.cilindradas,
		date: req.body.date,
	}, { where: {id: req.body.id}}).then(routeUpdate => {
		res.send("Route updated successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.createRoute= (req, res) => {
	// Save User to Database
	console.log("Processing func -> Create Route");
	
	Route.create({
		from: req.body.from,
        fromcity: req.body.fromcity,
        to: req.body.to,
        tocity: req.body.tocity,
        distance: req.body.distance,
        consumption_total: req.body.consumption_total,
        valorviagem: req.body.valorviagem,
        precoCombustivel: req.body.precoCombustivel,
        cilindradas: req.body.cilindradas, 
		date: req.body.date,
	}).then(routeCreated => {
		res.send("Route registered successfully!" + routeCreated.from);
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.getRouteById = (req, res) => {
	Route.findOne({
		where: {id: req.body.routeId},
		attributes: ['id', 'from', 'fromcity', 'to', 'tocity', 'distance', 'consumption_total', 'valorviagem', 'precoCombustivel', 'cilindradas', 'date']
	}).then(route => {
		res.status(200).json({
			route
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Route",
			"error": err
		});
	})
}
    


exports.getAllRoutes = (req, res) => {
	Route.findAll({
		attributes:  ['id', 'from', 'fromcity', 'to', 'tocity', 'distance', 'consumption_total', 'valorviagem', 'precoCombustivel', 'cilindradas', 'date']
	}).then(route => {
		res.status(200).json({
			route
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Route",
			"error": err
		});
	})
}

exports.deleteRoute = (req, res) => {
	// Save User to Database
	console.log("Processing func -> Delete Route");
	
	Route.destroy(
	{ where: {id: req.body.id}}
	).then(route => {
		res.send("Route deleted successfully!");
	}).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}


