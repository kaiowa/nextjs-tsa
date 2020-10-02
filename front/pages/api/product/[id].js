import MongoUtils from '../../../lib/mongodb';

async function getCategorie(db,idCategoria){
  console.log('idCategoria:'+idCategoria);
  const Categoria=await db.collection('categories').find({"id":parseInt(idCategoria)}).toArray();
  return Categoria;
}

async function getProduct(db,idProducto){
  const Producto=await db.collection('products').find({"id":parseInt(idProducto)}).toArray();
  return Producto;
}
async function getPrices(db,idProducto){
  const Producto=await db.collection('prices_history').find({"id":parseInt(idProducto)}).toArray();
  return Producto;
}
async function getRelated(db,idCategoria){
  const Producto=await db.collection('products').find({"cat":parseInt(idCategoria)}).limit(4).toArray();
  return Producto;

}
module.exports = async (req, res) => {
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const producto=await getProduct(db,req.query.id);
  const categoria=await getCategorie(db,producto[0].cat,0);
  const precios=await getPrices(db,req.query.id);
  const relacionados=await getRelated(db,producto[0].cat)
  const data={
    categoria:categoria[0],
    producto:producto[0],
    precios:precios,
    relacionados:relacionados
  }
  res.status(200).json( data )
}