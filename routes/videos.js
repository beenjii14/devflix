const express = require('express');

function videosApi(app) {
  const router = express.Router();
  app.use('/api/videos', router);

  router.post('/', (req, res, next) => {
    const { tags } = req.query;
    res.status(200).send({ message: 'Todo bien para el post' });
  });

  router.put('/:videoId', (req, res, next) => {
    const { videoId } = req.params;
    res.status(200).send({ message: 'Todo bien para el put' });
  });

  router.delete('/:videoId', (req, res, next) => {
    const { videoId } = req.params;
    res.status(200).send({ message: 'Todo bien para el delete' });
  });

  router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'Todo bien lista de peliculas' });
  });

  router.get('/:videoId', (req, res, next) => {
    const { videoId } = req.params;
    res.status(200).send({ message: 'Todo bien obtener pelicula' });
  });
}

module.exports = videosApi;
