
const Sequelize = require('sequelize');
const logger = require('../logger/logger');
const dbName = require('../middleware/dataBase')
const sequelize = new Sequelize(dbName.DB, dbName.USER, dbName.PASSWORD, {
    host: dbName.HOST,
    dialect: dbName.DIALECT
});

sequelize.authenticate()
    .then(() => {
        logger.info('connected to mysql..')
    })
    .catch(err => {
        logger.error(err)
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user_model')(sequelize, Sequelize)
db.address = require('./addressModel')(sequelize, Sequelize)

db.sequelize.sync()
    .then(() => {
        logger.info('yes is sync');
    })

module.exports = db;