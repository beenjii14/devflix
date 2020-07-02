const { DB } = require('../lib/db');

class VideosService {
  constructor() {
    this.collection = 'videos';
    this.db = new DB();
  }

  async getVideos({ tags }) {
    tags = tags ? tags.split(',') : [];
    const videos = await this.db.getVideos(this.collection, tags);
    return videos || [];
  }

  async getVideo({ videoId }) {
    const video = await this.db.getVideo(this.collection, videoId);
    return video || {};
  }

  async createVideo({ video }) {
    const createVideoId = await this.db.createVideo(this.collection, video);
    return createVideoId || {};
  }

  async updateVideo({ videoId, video }) {
    const updateVideoId = await this.db.updateVideo(this.collection, videoId, video);
    return updateVideoId || {};
  }

  async deleteVideo({ videoId }) {
    const deleteVideoId = await this.db.deleteVideo(this.collection, videoId);
    return deleteVideoId || {};
  }
}

module.exports = { VideosService };
