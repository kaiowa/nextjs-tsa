

import MongoUtils from '../../lib/mongodb';

async function getCategories(db){
  const Categories=await db.collection('categories').find({}).toArray();
  return Categories;
}

module.exports = async (req, res) => {
  
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const categorias=await getCategories(db);

  const data={
          categorias:categorias
  }
  res.status(200).json( data )

}