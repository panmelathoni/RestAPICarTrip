module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('routehistories', {
        from: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fromcity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        to: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tocity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        distance: {
            type: Sequelize.REAL,
            allowNull: false
        },
        consumption_total: {
            type: Sequelize.REAL,
            allowNull: false
        },
        valorviagem: {
            type: Sequelize.REAL,
            allowNull: false
        },
        precoCombustivel: {
            type: Sequelize.REAL,
            allowNull: false
        },
        cilindradas: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        }
    
    });

    return User;
}