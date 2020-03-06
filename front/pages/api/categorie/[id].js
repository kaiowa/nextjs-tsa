import MongoUtils from '../../../lib/mongodb';

async function getCategorie(db,idCategoria){
  console.log('idCategoria:'+idCategoria);
  const Categoria=await db.collection('categories').find({"id":parseInt(idCategoria)}).toArray();
  return Categoria;
}

async function getProductsCategorie(db,idCategoria,nPagina){
  let inicio=(nPagina*12);
  let fin=(inicio===0)? 11 : inicio+12;

  const Categoria=await db.collection('products').find({"cat":parseInt(idCategoria)}).toArray();
  return Categoria;

}
module.exports = async (req, res) => {
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const categoria=await getCategorie(db,req.query.id);
  const productos=await getProductsCategorie(db,req.query.id,0);
  
  const data={
    categoria:categoria,
    productos:productos
  }
  res.status(200).json( data )
}