module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  name: {
		  type: Sequelize.STRING,
		  allowNull: false
	  },
	  username: {
		  type: Sequelize.STRING,
		  allowNull: false
	  },
	  birth_date:  { 
		type: Sequelize.DATE
	  },
	  telephone_number: { 
		type: Sequelize.STRING
	  },
	  address:{ 
		type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING,
		  allowNull: false
	  },
	  password: {
		  type: Sequelize.STRING,
		  allowNull: false
	  }
	});
	
	return User;
}