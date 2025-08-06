// server/models/Quote.js
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Quote = sequelize.define("Quote", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = {Quote, sequelize};
