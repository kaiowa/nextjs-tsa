
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import BoxCategory from '../components/boxcategory/boxcategory';

import Spinner from '../components/ui/spinner/spinner';

function replaceAll(string){

  let cad=string.replace(new RegExp('<p>', 'g'), '\r');
  cad=cad.replace(new RegExp('</p>', 'g'), '\n');
  return cad;
  
}
function customTitle(string){
  return (string.length>100) ?  string.substring(0,100)+'...': string;
}
let  Blog = (props) => {
 console.log('initialProps',props);
 const {data, revalidate} = useSWR('/api/blog', async function(args) {
  const res = await fetch(args);
  const json= await res.json();
  return json;
});
const entries=(data ) ? data.entries : null;
const productos=(data ) ? data.products : null;
if (!data) return <Spinner></Spinner>;

return (
  <div className="container"> 
  
    <div className="container-entries">
    <h1 className="h1blog">Blog</h1>
        <div className="row">
          {entries.map(function(entrie){
              return  (
                <div className="entrie">
                  <div className="entrie-image"><img src={entrie.imageTitle} className="image-entry"></img></div>
                  <div className="entrie-title">{entrie.title}</div>
                  <div className="entrie-description">{replaceAll(entrie.description)}</div>
                </div>
              )
          })}
        </div>
    </div>
    <div className="container-products">
      <h2 className="h2blog">Productos descatacos</h2>
      {productos.map(function(product){
              return  (
                <div className="product">
                <a href={product.url} target="_blank" rel="nofollow" className="link" title={customTitle(product.title)}>
                  <div className="product-image"><img src={product.images[0].url} className="image-entry"></img></div>
                  <div className="productContent">
                    <div className="product-title">{customTitle(product.title)}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                  </a>
                </div>
              )
          })}
    </div>

     
    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
 
        flex-wrap:wrap;
        align-items:start;
        width: 80%;
        justify-content: center;
        margin: 0 auto;
        margin-top: 130px;

      }
      .product{
        display:flex;
        flex-direction:row;
        margin-bottom:20px;
      }
      .product a{
        display:flex;
      }
      .product .product-image{
        width:30%;
      }
      .product .product-title{
        font-size: 12px;
        line-height: 15px;
      }
      .product .product-price{
        color:#E91E63;
        font-size:20px;
      }
      .product .productContent{
        width:64%;
      }
      .h1blog{
        margin-left:20px;
        font-size:1.50rem;
      }
      .h2blog{
        font-size:1.50rem;
      }
      
      .image-entry{
        max-width:80%;
      }
      .container-entries{
        flex: 1 auto;
        width:65%;
       
      }
      .container-productos .h2blog{
        font-size:1.75rem ;
      }
      .entrie{
        flex :1 auto;
        margin :20px;
      }
      .entrie-title{
        font-size:18px;
        line-height: 20px;
        margin-bottom: 15px;
      }
      .entrie-description{
        font-size:11px;
        color:#888;
        line-height:16px;
      }
      .container .text{
        font-size:1.3rem;
        width:98%;
        line-height: 1.8rem;
      }
 
     .container-products{
       width:30%;
     }
   
      .row {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: distribute;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: start;
        align-items: center;
      }
     
    `}</style>
 
  </div>
)}

Blog.getInitialProps = async (isServer) => {
  
  // let localCategorias=localStorage.getItem('categorias') ? JSON.parse(localStorage.getItem('categorias')) : null;
  // return {  categorias:localCategorias }
  return {}
}
export default Blog
