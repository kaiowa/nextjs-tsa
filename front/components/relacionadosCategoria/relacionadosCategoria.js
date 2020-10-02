import relacionadosCategoriaStyle from "./relacionadosCategoria.module.scss";
import Link from 'next/link';
import BoxProduct from '../boxProduct/boxProduct';

const RelacionadosCategoria = props =>{

  let {productos}=props;
  

  console.log('productos relacionados categoria',productos);

return (
  <div className={relacionadosCategoriaStyle.containerProducts} >
    <h2 className={relacionadosCategoriaStyle.h1title}>Tambien pueden interesarte</h2>
      <div className={relacionadosCategoriaStyle.containerProducts}>
        <div className={relacionadosCategoriaStyle.productshop}>
          {productos.map(function(product){
              return  <BoxProduct product={product}></BoxProduct>
          })}
        </div>
      </div>
  </div>
)}
export default RelacionadosCategoria
