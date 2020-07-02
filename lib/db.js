const { MongoClient, ObjectId } = require('mongodb');
const { config: { mongo_uri, dbName } } = require('../config');
const videos = require('../services/videos');
class DB {
  constructor() {
    this.client = new MongoClient(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = dbName;
  }

  connect() {
    return (DB.connection = new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if (!error) {
          console.log('Success connect MongoDB');
          resolve(this.client.db(this.dbName));
        }
        reject(error);
      });
    }));
  }

  async createVideo(collection, video) {
    const db = await this.connect();

    const result = await db.collection(collection).insertOne(video);
    return result.insertedId;
  }

  async getVideos(collection, query) {
    const db = await this.connect();
    query = (query.length > 0) ? { tags: { $all: query } } : {};
    return db.collection(collection).find(query).toArray();
  }

  async getVideo(collection, videoID) {
    const db = await this.connect();

    return db.collection(collection).findOne({ _id: ObjectId(videoID) });
  }

  async updateVideo(collection, videoID, video) {
    const db = await this.connect();

    const response = await db.collection(collection).updateOne({ _id: ObjectId(videoID) }, { $set: video }, { upsert: true });
    return response.insertedId;
  }
  async deleteVideo(collection, videoID) {
    const db = await this.connect();

    await db.collection(collection).deleteOne({ _id: ObjectId(videoID) });

    return videoID;
  }
}

module.exports = { DB };
