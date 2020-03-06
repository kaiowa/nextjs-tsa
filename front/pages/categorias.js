
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import BoxCategory from '../components/boxcategory/boxcategory';

import Spinner from '../components/ui/spinner/spinner';

let  Categorias = (props) => {
 console.log('initialProps',props);
 const {data, revalidate} = useSWR('/api/categorias', async function(args) {
  const res = await fetch(args);
  const json= await res.json();
  return json;
});
const categorias=(data ) ? data.categorias : null;
if (!data) return <Spinner></Spinner>;

return (
  <div className="container categorias"> 
  <div className="categories-shop">
    <div className="container-categories">
        <div className="row">
          {categorias.map(function(categoria){
            return  <BoxCategory category={categoria}></BoxCategory>
          })}
        </div>
    </div>
  </div>
    <NextSeo
      url="https://example.com/article"
      title="Categorias Runing"
      images={[
        'https://example.com/photos/1x1/photo.jpg',
      ]}
      authorName="Sergio Campos"
      publisherName="Kaiowa"
      publisherLogo="https://www.example.com/photos/logo.jpg"
      description="Admin panel nextjs"
      />
     
    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        margin-top :60px;
      }
      .container .text{
        font-size:1.3rem;
        width:98%;
        line-height: 1.8rem;
      }
     .container .categories-shop{
       margin-top:30px;
       width:100%;
       display:flex;
     }
     .container .categories-shop .container-categories{
       width:100%;
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

Categorias.getInitialProps = async (isServer) => {
  
  // let localCategorias=localStorage.getItem('categorias') ? JSON.parse(localStorage.getItem('categorias')) : null;
  // return {  categorias:localCategorias }
  return {}
}
export default Categorias
