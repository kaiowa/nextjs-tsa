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
module.exports = async (req, res) => {
  let Client=await MongoUtils.connectDb();
  let db=Client.db('nextjstsa');
  const producto=await getProduct(db,req.query.id);
  const categoria=await getCategorie(db,producto[0].cat,0);
  
  const data={
    categoria:categoria[0],
    producto:producto[0]
  }
  res.status(200).json( data )
}