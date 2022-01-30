import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'lexart-fullstack';

const connection = () =>
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(connection => connection.db(DB_NAME))
    .catch(() => {
      process.exit(1);
    });

export default connection;
