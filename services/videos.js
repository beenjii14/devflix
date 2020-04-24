const DB = require('../lib/db');

class videosService {
  constructor() {
    this.collection = 'videos';
    this.db = new DB();
  }

  async getVideos({ tags }) {
    const videos = await this.db.getAll(this.collection, tags);
    return videos || [];
  }

  async getVideo({ videoId }) {
    const video = await this.db.get(this.collection, videoId);
    return video || {};
  }

  async createVideo(video) {
    const createVideoId = await this.db.create(this.collection, video);
    return createVideoId || {};
  }

  async updateVideo({ videoId, video }) {
    const updateVideoId = await this.db.update(this.collection, videoId, video);
    return updateVideoId || {};
  }

  async deleteVideo({ videoId }) {
    const deleteVideoId = await this.db.delete(this.collection, videoId);
    return deleteVideoId || {};
  }
}

module.exports = videosService;
