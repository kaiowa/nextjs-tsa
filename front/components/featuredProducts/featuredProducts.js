import featuredProductsStyle from "./featuredProducts.module.scss";
import Link from 'next/link';
import BoxProduct from '../boxProduct/boxProduct';

const FeaturedProducts = props =>{

  let {products}=props;

  console.log('productos featured',products);
function getLink(id,name){
  return `/category/${id}/${name}.html`;
}
return (
  <div className={featuredProductsStyle.containerProducts} >
    <h1 className={featuredProductsStyle.h1title}>Productos destacados</h1>
      <div className={featuredProductsStyle.containerProducts}>
        <div className={featuredProductsStyle.productshop}>
          {products.map(function(product){
              return  <BoxProduct product={product}></BoxProduct>
          })}
        </div>
      </div>
  </div>
)}
export default FeaturedProducts
