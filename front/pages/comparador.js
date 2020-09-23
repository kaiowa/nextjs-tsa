
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
let  Comparador = (props) => {
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
  
  comparador
   

     
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

Comparador.getInitialProps = async (isServer) => {
  
  // let localCategorias=localStorage.getItem('categorias') ? JSON.parse(localStorage.getItem('categorias')) : null;
  // return {  categorias:localCategorias }
  return {}
}
export default Comparador
