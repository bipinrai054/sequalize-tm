import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import db from './config/database.js';

db.authenticate()
  .then(() => console.log('databse connected'))
  .catch((err) => console.log(err));

const app = express();

app.get('/', (req, res) => res.send('index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
