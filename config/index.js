require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  mongo_uri: process.env.MONGO_URI || 'mongodb://localhost:27017/devflix',
  dbName: process.env.MONGO_DB_NAME || 'devflix_dev',
};

module.exports = { config };
