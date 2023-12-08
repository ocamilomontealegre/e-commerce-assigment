'use strict';

/******* Import Modules *******/
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import { User, Product, Transaction } from '../config/database.js';

/******* Define methods *******/

// Register the user data in the database
const registerUser = async function(req, res) {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Log user
const logUser = async function(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }})
    if (!user) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    const token = JWT.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create product in the database
const createProduct = async function(req, res) {
  try {
    const product = await Product.create(req.body);
    res.json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Find all products
const findAllProducts = async function(req, res) {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product by Id
const updateProductById = async function(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.update(req.body);
    res.json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product by Id
const deleteProductById = async function(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// RegisterTransaction
const registerTransaction = async function(req, res) {
  try {
    const { item, price } = req.body;
    const transaction = await Transaction.create({
      transactionId: Math.floor(Math.random() * 10000000),
      item,
      price
    })
    res.json({ transaction });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/****** Export module *******/
export {
  registerUser,
  logUser,
  createProduct,
  findAllProducts,
  updateProductById,
  deleteProductById,
  registerTransaction
};