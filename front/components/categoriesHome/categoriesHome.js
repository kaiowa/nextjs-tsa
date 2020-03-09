import categoriesHomeStyles from "./categoriesHome.module.scss";
import Link from 'next/link';

const CategoriesHome = ({categories}) =>{
console.log('CategoriesHome',categories)
return (
  <div className={categoriesHomeStyles.container}>
    <div className={categoriesHomeStyles.row}>
      <div className={categoriesHomeStyles.col}>
          <div className={categoriesHomeStyles.box1} >
          <a  href={ `/categoria/${categories[0].id}/${categories[0].slug}.html`} title="runnnnnnggg">
            <img src={`/images/categories/${categories[0].image}`} className={categoriesHomeStyles.imagen} />
            <button className={categoriesHomeStyles.buttonCategorie}>{categories[0].name}</button>
          </a>
           
          </div>
          <div className={categoriesHomeStyles.box2} >
          <a  href={ `/categoria/${categories[1].id}/${categories[1].slug}.html`} >
          <img src={`/images/categories/${categories[1].image}`}  className={categoriesHomeStyles.imagen}/>
          <button className={categoriesHomeStyles.buttonCategorie}>{categories[1].name}</button>
           </a>
          </div>
      </div>
    
      <div className={categoriesHomeStyles.col}>
        <div className={categoriesHomeStyles.box2} >
        <a  href={ `/categoria/${categories[2].id}/${categories[2].slug}.html`} >
          <img src={`/images/categories/${categories[2].image}`} className={categoriesHomeStyles.imagen} />
          <button className={categoriesHomeStyles.buttonCategorie}>{categories[2].name}</button>
        </a>
        </div>
        <div className={categoriesHomeStyles.box1} >
        <a  href={ `/categoria/${categories[3].id}/${categories[3].slug}.html`} >
          <img src={`/images/categories/${categories[3].image}`}  className={categoriesHomeStyles.imagen}/>
          <button className={categoriesHomeStyles.buttonCategorie}>{categories[3].name}</button>
        </a>
        </div>
          
      </div>
    

      <div className={categoriesHomeStyles.col}>
         <div className={categoriesHomeStyles.box1} >
         <a  href={ `/categoria/${categories[4].id}/${categories[4].slug}.html`} >
          <img src={`/images/categories/${categories[4].image}`} className={categoriesHomeStyles.imagen}/>
          <button className={categoriesHomeStyles.buttonCategorie}>{categories[4].name}</button>
          </a>
         </div>
        <div className={categoriesHomeStyles.box2} >
        <a  href={ `/categoria/${categories[5].id}/${categories[5].slug}.html`} >
          <img src={`/images/categories/${categories[5].image}`} className={categoriesHomeStyles.imagen} />
          <button className={categoriesHomeStyles.buttonCategorie}>{categories[5].name}</button>
        </a>
        </div>
      </div>
    

    </div>
  </div>
)}
export default CategoriesHome
