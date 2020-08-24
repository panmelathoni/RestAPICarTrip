const env = require('./env.js');
 
const Sequelize = require('sequelize');
const { REAL } = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.id
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);
db.car = require('../model/car.model.js')(sequelize, Sequelize);
db.fuel = require('../model/fuel.model.js')(sequelize, Sequelize);
db.routehistory = require('../model/routehistory.model.js')(sequelize, Sequelize);


 
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});


// ***relação dos user e car
db.car.belongsToMany(db.user, { through: 'user_cars', foreignKey: 'carId', otherKey: 'userId'});
db.user.belongsToMany(db.car, { through: 'user_cars', foreignKey: 'userId', otherKey: 'carId'});

// ***relacao do fuel comcar
db.fuel.hasOne(db.car, {
  foreignKey: 'fuelId'
});

db.user.hasMany(db.routehistory,{
  foreignKey: 'userId'
});



module.exports = db;