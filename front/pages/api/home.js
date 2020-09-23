

import MongoUtils from '../../lib/mongodb';

async function getCategories(db){
  const Categories=await db.collection('categories').find({}).toArray();
  return Categories;
}
async function getTopProducts(db){
  const Products=await db.collection('products').find({},{projection:{id:-1,name:-1,nameseo:-1,images:-1,ventas:-1,price:-1,title:-1,url:-1}}).sort({ventas:-1}).limit(5).toArray();
  return Products;
}
async function getBlogHome(db){
  const blogentries=await db.collection('blogentries').find({}).sort({id:-1}).limit(3).toArray();
  return blogentries;
}

module.exports = async (req, res) => {
  
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const categorias=await getCategories(db);
  const productos=await getTopProducts(db);
  const blogentries=await getBlogHome(db);
  const data={
          categorias:categorias,
          productos:productos,
          blogentries:blogentries
        }
  res.status(200).json( data )

}