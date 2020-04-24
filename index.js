const express = require('express');
const app = express();

const config = require('./config');
const videosApi = require('./routes/videos');

app.use(express.json()); // Reemplaza la importacion de body-parser
videosApi(app);

app.listen(config.port, () => {
  console.log(`App listening port http://localhost:${config.port}`);
});
