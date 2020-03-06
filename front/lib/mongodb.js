import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';
const dbName = 'nextjstsa';


const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDb() {
  if (!client.isConnected()) await client.connect();
  client.db(dbName);
  return client;
}

let MongoUtils={
  'client':client,
  'connectDb':connectDb
}
module.exports = MongoUtils;