const express = require('express');

const { VideosService } = require('../services/videos');

function videosApi(app) {
  const router = express.Router();
  const videosService = new VideosService();

  app.use('/api/videos', router);

  router.post('/', async (req, res, next) => {
    const video = req.body;
    try {
      const createVideoId = await videosService.createVideo({ video });
      res.status(200).send({
        code: 201,
        data: {
          message: 'Video created',
          data: createVideoId

        }
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:videoId', async (req, res, next) => {
    const { videoId } = req.params;
    const video = req.body;
    try {
      const updateVideoId = await videosService.updateVideo({ videoId, video });
      res.status(200).send({
        code: 200,
        data: {
          videoId: updateVideoId,
          message: 'Video updated'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:videoId', async (req, res, next) => {
    const { videoId } = req.params;

    try {
      await videosService.deleteVideo({ videoId });
      res.status(200).send({
        code: 200,
        data: {
          videoId,
          message: 'Video deleted'
        }
      });
    } catch (error) {
      next(error);
    }
    res.status(200).send({ message: 'Todo bien para el delete' });
  });

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const videos = await videosService.getVideos({ tags });
      res.status(200).send({
        code: 200,
        data: {
          message: 'Lista de peliculas',
          data: videos,
        },
      });
    } catch (error) {
      res.status(500).send({
        code: 500,
        data: {
          message: 'Error al obtener los videos',
          error
        }
      });
    }
  });

  router.get('/:videoId', async (req, res, next) => {
    const { videoId } = req.params;

    try {
      const video = await videosService.getVideo({ videoId });
      res.status(200).send({
        code: 200,
        data: video
      });
    } catch (error) {
      res.status(500).send({
        code: 500,
        data: {
          message: 'Error en el query',
          error
        }
      });
    }
  });
}

module.exports = videosApi;
