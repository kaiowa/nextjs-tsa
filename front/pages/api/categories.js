
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'nextjstsa';


async function getCategories(db){
  const Products=await db.collection('categories').find({}).toArray();
  return Products;

}
module.exports = async (req, res) => {

  
  const options={useUnifiedTopology:true}
  MongoClient.connect(url,options, async function(err, client) {

    assert.equal(null, err);
    console.log("Connected correctly to server");
    const db = client.db(dbName);
     const categorias=await getCategories(db);
      res.status(200).json( categorias )
  });
  
}