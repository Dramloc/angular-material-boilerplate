const app = require('./lib/index');
const logger = require('winston');

logger.info('server process starting');

const port = process.env.PORT || 80;
app.listen(port, (error) => {
  if (error) {
    logger.error('Unable to listen for connections', error);
    process.exit(10);
  }
  logger.info(`express is listening on http://localhost:${port}`);
});
