import categoriesHomeStyles from "./categoriesHome.module.scss";


const CategoriesHome = ({categories}) =>{
console.log('CategoriesHome',categories)
return (
  <div className={categoriesHomeStyles.container}>
    <div className={categoriesHomeStyles.row}>
      <div className={categoriesHomeStyles.col}>
          <div className={categoriesHomeStyles.box1} >
            {categories[0].name}
          </div>
          <div className={categoriesHomeStyles.box2} >
          {categories[1].name}
          </div>
      </div>
    
      <div className={categoriesHomeStyles.col}>
        <div className={categoriesHomeStyles.box2} >{categories[2].name}</div>
        <div className={categoriesHomeStyles.box1} >{categories[3].name}</div>
          
      </div>
    

      <div className={categoriesHomeStyles.col}>
         <div className={categoriesHomeStyles.box1} >{categories[4].name}</div>
          <div className={categoriesHomeStyles.box2} >{categories[5].name}</div>
      </div>
    

    </div>
  </div>
)}
export default CategoriesHome
