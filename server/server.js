require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL || '';
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', require('./src/v1/routes'));

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    server.listen(PORT);
    console.log(`mongodb connected ${MONGODB_URL}`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
