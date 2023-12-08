'use strict';

/******* Import Modules *******/
import { DataTypes, Sequelize } from 'sequelize';

/******* Create Sequelize instance *******/
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

/******* Define models *******/

// User model
const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'Users'
});

// Product model
const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  picture: { type: DataTypes.STRING, allowNull: false }
});

// Transaction model
const Transaction = sequelize.define('Transaction', {
  transactionId: { type: DataTypes.INTEGER, allowNull: false },
  item: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
});

// Synchronize the models with the database
sequelize.sync();

/******* Export module *******/
export { User, Product, Transaction };


