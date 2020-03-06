

import MongoUtils from '../../lib/mongodb';

async function getCategories(db){
  const Categories=await db.collection('categories').find({}).toArray();
  return Categories;
}
async function getTopProducts(db){
  const Products=await db.collection('products').find({},{projection:{id:-1,name:-1,images:-1,ventas:-1,price:-1,title:-1}}).sort({ventas:-1}).limit(4).toArray();
  return Products;
}
module.exports = async (req, res) => {
  
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const categorias=await getCategories(db);
  const productos=await getTopProducts(db);
  const data={
          categorias:categorias,
          productos:productos
        }
  res.status(200).json( data )

}