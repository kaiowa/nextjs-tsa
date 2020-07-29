import blogHomeStyles from "./blogHome.module.scss";
import Link from 'next/link';
import Parser from 'html-react-parser';

function prepareDescription(texto){
  return texto.split('</p>')[0]
}
const BlogHome = ({blogentries}) =>{
console.log('entriesHome',blogentries)
return (
 
<div className={blogHomeStyles.container}>
    <h2>Nuestro blog</h2>
    <div className={blogHomeStyles.row}>
  
    {blogentries.map(function(entrie){
              return (
                <div className={blogHomeStyles.col}>
                  <div className={blogHomeStyles.title}>{entrie.title}</div>
                  <div className="imageEntry"><img src={entrie.imageTitle} className={blogHomeStyles.imagen}></img></div>
                  <div className={blogHomeStyles.description}>{Parser(prepareDescription(entrie.description))}</div>
                  </div>
                )
          })}
    </div>
  </div>
)}
export default BlogHome
