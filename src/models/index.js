'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const limiterModel = require('./limiter/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

const sequelize = new Sequelize(DATABASE_URL);
const limiter = limiterModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  limiter: new Collection(limiter),
};

// {
//   dialectOptions: {
//     ssl: true,
//     rejectUnauthorized: false,
//   },
// }
