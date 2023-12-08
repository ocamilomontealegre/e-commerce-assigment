'use strict';

/******* Import Modules *******/
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './src/eccommerceApp/routes.js';

/******* Set app *******/
const app = express();

/******* Set Port *******/
const port = process.env.PORT || 3000;

/******* Middleware *******/
app.use(cors());
app.use(express.json());

/******* Routes *******/
app.use('/', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});