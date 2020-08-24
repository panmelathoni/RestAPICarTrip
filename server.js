var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');
const { fuel } = require('./app/config/db.config.js');

const Role = db.role;
const User = db.user;
const Car = db.car;
const Fuel = db.fuel;
var bcrypt = require('bcryptjs');
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 
//require('./app/route/project.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

//**aqui sao adicionadas as configuracoes iniciais da base de dados */
function initial(){
	Role.create({
		id: 1,
		name: "USER"
	});
	
	Role.create({
		id: 2,
		name: "ADMIN"
	});

	User.create({
		name:"Fabio",
		username:"Fabio",
		email: "fabiofos@gmail.com",
		roles: ["admin"],
		password:bcrypt.hashSync("fabio", 8),
		telephone_number:"123356777",
		birth_date: "1985-09-06 12:00",
		address: "alianca operaria"
	});

	User.create({
		name:"Panmela",
		username:"Panmela",
		email: "panmelathoni@gmail.com",
		roles: ["user", "admin"],
		password:bcrypt.hashSync("cartrip", 8),
		telephone_number:"123356777",
		birth_date: "1985-09-06 12:00",
		address: "alianca operaria"
	});
	
	Car.create({
       "model" : "i30",
	   "brand" : "hyundai",
	   "release_date" : "2012-06-10",
	   "hp" : 200,
	   "consumption" : 8
	});

		
	Car.create({
		"model" : "Cinquencento",
	   "brand" : "fiat",
	   "release_date" : "2013-06-10",
	   "hp" : 123,
	   "consumption" : 5
	});

	Car.create({
		"model" : "A3",
	   "brand" : "audi",
	   "release_date" : "2015-06-10",
	   "hp" : 500,
	   "consumption" : 6
	});
	Car.create( {
		"model" : "A5",
	   "brand" : "audi",
	   "release_date" : "2018-06-10",
	   "hp" : 800,
	   "consumption" : 10
	});
	Fuel.create({
		"fuel_type" : "gasoleo",
		"price" : "1.30"
	});

	Fuel.create({
		"fuel_type" : "gasolina",
		"price" : "1.43"
	});
	
}