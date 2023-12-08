'use strict';

/******* Import Modules *******/
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';
import fs from 'fs';
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

/******* HTTPS Options *******/
const credentials = {
  key: fs.readFileSync('./src/certificates/key.pem', 'utf8'),
  cert: fs.readFileSync('./src/certificates/cert.pem', 'utf8'),
};

/******* Create HTTPS Server *******/
const httpsServer = https.createServer(credentials, app);

/******* Start HTTPS Server *******/
httpsServer.listen(port, () => {
  console.log(`HTTPS Server is running on port ${port}`);
});