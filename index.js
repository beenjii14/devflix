const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();

const { config: { port } } = require('./config');
const videosApi = require('./routes/videos');

app.use(express.json()) // Reemplaza la importacion de body-parser
  .use(logger('dev'))
  .use(cors());

videosApi(app);

app.listen(port, () => {
  console.log(`App listening port http://localhost:${port}`);
});
