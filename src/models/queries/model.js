'use strict';

const queryModel = (sequelize, DataTypes) => sequelize.define('Queries', {
  accountId: { type: DataTypes.NUMBER, required: true },
  recentOnly: { type: DataTypes.BOOLEAN, required: false },
  friendOwned: { type: DataTypes.BOOLEAN, required: false },
});

module.exports = queryModel;
