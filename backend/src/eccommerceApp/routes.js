'use strict';

/******* Import Modules *******/
import express from 'express';
const router = express.Router();

import * as controller from './controller.js'

/******* Define routes *******/

// Register user
router.post('/register', controller.registerUser);

// login
router.post('/login', controller.logUser);

// Create product
router.post('/products', controller.createProduct);

// Find all products
router.get('/products', controller.findAllProducts);

// Update product by Id
router.put('/products/:id', controller.updateProductById);

// Delete product by Id
router.delete('/products/:id', controller.deleteProductById);

// Register transaction
router.post('/registerTransaction', controller.registerTransaction);

/******* Export module *******/
export default router;