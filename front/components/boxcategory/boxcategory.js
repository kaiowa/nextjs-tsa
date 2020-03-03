import boxStyles from "./boxcategory.module.scss";
import Link from 'next/link';
const BoxCategory = props =>{

  console.log('props boxcategory',props);
function getLink(id,name){
  return `/category/${id}/${name}.html`;
}
return (
  <div className={boxStyles.boxCategory}>
      <div className={boxStyles.shopcatbox}>
        <img src="/images/img-pro-03.jpg" title={props.category.name+' running'}/>
        <h3 className={boxStyles.name}>{props.category.name}</h3>
        
        <a className={boxStyles.description} href={getLink(props.category.id,props.category.name)}>{props.category.description}</a>
      </div>
  </div>
)}
export default BoxCategory
