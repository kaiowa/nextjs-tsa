import boxStyles from "./boxproduct.module.scss";
import Link from 'next/link';
const BoxProduct = props =>{

  console.log('props boxcategory',props);
function getLink(id,name){
  return `/producto/${id}/${name}.html`;
}
function getTitle(title){
  let sTitle=(title.length>100) ? title.substring(0,100)+'...' : title;
  return sTitle;
}
return (

  <div className={boxStyles.boxCategory}>
      <p className={boxStyles.ventas}>{props.product.ventas} ventas</p>
     
      <div className={boxStyles.shopcatbox}>
        <a href={getLink(props.product.id,props.product.title)} title={props.product.title}>
          <img src={props.product.images[0].url} title={props.product.title+' running'}/>
        </a>
      </div>
      <p className={boxStyles.precio}>{props.product.price}</p>
      <p className={boxStyles.title} title={props.product.title}>{getTitle(props.product.title)}</p>
  </div>
 
)}
export default BoxProduct
