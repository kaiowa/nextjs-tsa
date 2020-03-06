
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import BoxCategory from '../components/boxcategory/boxcategory';
import Claim from '../components/claim/claim';
import Config from '../common/config';
import FeaturedProducts from '../components/featuredProducts/featuredProducts';
import Spinner from '../components/ui/spinner/spinner';
import ToTop from '../components/ui/totop/totop';

const Home = () => {
 
  const {data, revalidate} = useSWR('/api/home', async function(args) {
    const res = await fetch(args);
    const json= await res.json();
    return json;
  });
  const categorias=(data ) ? data.categorias : null;
  const productos=data ? data.productos : null;
  if (!data) return <Spinner></Spinner>;
 
return (
  
  <div className="container container-home">
  <h1 >
    Lorem ippsumm
  </h1>
  <p className="text">Aquí estás y eres de los nuestros, no quieres en tu camiseta el logotipo de un caballo jugando al polo, ni un cocodrilo ni una golondrina, y tampoco quieres que te cobren 10 veces su valor solo por eso. Buscas artículos con personalidad propia, impactantes y que te definan.</p>
  <ToTop></ToTop>
  <div className="categories-shop">
        <div className="container-categories">
            <div className="row">
              {categorias.map(function(categoria){
                return  <BoxCategory category={categoria}></BoxCategory>
              })}
           
            </div>
        </div>
    </div>
    <FeaturedProducts products={productos}></FeaturedProducts>

    <Claim config={Config.claim1}></Claim>
    <Claim config={Config.claim2}></Claim>
    <NextSeo
      url="https://example.com/article"
      title="Adminin"
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
    
  
    
    .flex-item {
       
        }
     
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      .totop{
    
        display:block;
        position: fixed;
        width: 40px;
        height: 40px;
        bottom: 20px;
        right: 20px;
        background-color: black;
        opacity: 0.5;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border-radius: 4px;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        
      }
      .totop.show{
        display:block;
      }
      .totop.hidden{
        display:none;
      }
    `}</style>
    
  </div>
)}

export default Home
