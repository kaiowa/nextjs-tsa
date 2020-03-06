import boxStyles from "./boxcategory.module.scss";
import Link from 'next/link';
const BoxCategory = props =>{

  console.log('props boxcategory',props);
function getLink(id,name){
  return `/categorias/${id}/${name}.html`;
}
return (
  <div className={boxStyles.boxCategory}>
      <div className={boxStyles.shopcatbox}>
      
        <img src={'/images/categories/'+props.category.image} title={props.category.name+' running'}/>
        <h3 className={boxStyles.name}>{props.category.name}</h3>
        <Link  href={{ pathname: `/categoria/${props.category.id}/${props.category.slug}.html` }} >
          <button className={boxStyles.button}>Ver mas</button>
        </Link>
      
      </div>
  </div>
)}
export default BoxCategory
