module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('fuels', {
        fuel_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.STRING,
            allowNull: false
        }
        
    });

    return User;
}