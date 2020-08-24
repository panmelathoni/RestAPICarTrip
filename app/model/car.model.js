module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define('cars', {
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        release_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        hp: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        consumption: {
            type: Sequelize.REAL,
            allowNull: false
        }
        
    });

    return Car;
}