// simple express http server for heroku deployment
const express = require('express');
const morgan = require('morgan');
const logger = require('winston');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static('dist'));

logger.info('server process starting');

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) {
    logger.error('Unable to listen for connections', error);
    process.exit(10);
  }
  logger.info(`express is listening on http://localhost:${port}`);
});
