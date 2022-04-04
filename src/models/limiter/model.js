'use strict';

const limiterModel = (sequelize, DataTypes) => sequelize.define('Limiters', {
  name: { type: DataTypes.STRING, required: true },
  accountId: { type: DataTypes.STRING, required: true },
  recentOnly: { type: DataTypes.BOOLEAN, required: false },
});

module.exports = limiterModel;
