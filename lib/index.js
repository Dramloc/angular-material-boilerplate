const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const tasks = require('./tasks');

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static('dist', {
  maxAge: 31536000,
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,HEAD,OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});
app.use('/api/tasks', tasks);

module.exports = app;
