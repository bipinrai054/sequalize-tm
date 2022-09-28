import Sequelize from 'sequelize';

const db = new Sequelize('codegig', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
});

export default db;
