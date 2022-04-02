'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const queryModel = require('./queries/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

const sequelize = new Sequelize(DATABASE_URL);
const query = queryModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  query: new Collection(query),
};

// {
//   dialectOptions: {
//     ssl: true,
//     rejectUnauthorized: false,
//   },
// }