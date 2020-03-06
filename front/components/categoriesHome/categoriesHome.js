import categoriesHomeStyles from "./categoriesHome.module.scss";


const CategoriesHome = ({categories}) =>{
console.log('CategoriesHome',categories)
return (
  <div className={categoriesHomeStyles.container}>
    <div className={categoriesHomeStyles.row}>
      <div className={categoriesHomeStyles.col}>
          <div className={categoriesHomeStyles.box1} >
          <img src={`/images/categories/${categories[0].image}`} className={categoriesHomeStyles.imagen} />
           
          </div>
          <div className={categoriesHomeStyles.box2} >
          <img src={`/images/categories/${categories[1].image}`}  className={categoriesHomeStyles.imagen}/>
           
          </div>
      </div>
    
      <div className={categoriesHomeStyles.col}>
        <div className={categoriesHomeStyles.box2} >
        <img src={`/images/categories/${categories[2].image}`} className={categoriesHomeStyles.imagen} />
        </div>
        <div className={categoriesHomeStyles.box1} >
        <img src={`/images/categories/${categories[3].image}`}  className={categoriesHomeStyles.imagen}/>
        </div>
          
      </div>
    

      <div className={categoriesHomeStyles.col}>
         <div className={categoriesHomeStyles.box1} >
          <img src={`/images/categories/${categories[4].image}`} className={categoriesHomeStyles.imagen}/>
         </div>
        <div className={categoriesHomeStyles.box2} >
          <img src={`/images/categories/${categories[5].image}`} className={categoriesHomeStyles.imagen} />
        </div>
      </div>
    

    </div>
  </div>
)}
export default CategoriesHome
