import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017';
const DB_NAME = 'lexart-fullstack';

const connection = () =>
  MongoClient.connect(MONGO_DB_URL)
    .then(connection => connection.db(DB_NAME))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

export default connection;
