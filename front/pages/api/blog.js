

import MongoUtils from '../../lib/mongodb';

async function getEntries(db){
  const Categories=await db.collection('blogentries').find({}).sort({id:-1}).toArray();
  return Categories;
}
async function getTopProducts(db){
  const products=await db.collection('products').find({}).sort({id:-1}).limit(5).toArray();
  return products;
}

module.exports = async (req, res) => {
  
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const entries=await getEntries(db);
  const products=await getTopProducts(db);
  const data={
    entries:entries,
    products:products

  }
  res.status(200).json( data )

}