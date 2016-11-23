const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static('dist', {
  maxAge: 31536000000
}));

const port = process.env.PORT || 3000;
app.listen(port);