
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import BoxCategory from '../components/boxcategory/boxcategory';
import Claim from '../components/claim/claim';
import Config from '../common/config';
import FeaturedProducts from '../components/featuredProducts/featuredProducts';
import Spinner from '../components/ui/spinner/spinner';
import ToTop from '../components/ui/totop/totop';
import CategoriesHome from '../components/categoriesHome/categoriesHome';
import BlogHome from '../components/blogHome/blogHome';

const Home = () => {
 
  const {data, revalidate} = useSWR('/api/home', async function(args) {
    const res = await fetch(args);
    const json= await res.json();
    return json;
  });
  const categorias=(data ) ? data.categorias : null;
  const productos=data ? data.productos : null;
  const blogentries=data ? data.blogentries : null;
  if (!data) return <Spinner></Spinner>;
 
return (
  
  <div className="container container-home">
  <h1 >
  Tienda online con accesorios para running
  </h1>
  <p className="text">Encontrarás todo lo que necesitas para salir a correr, zapatillas, brazaletes para llevar tu móvil, camisetas, auriculares, relojes.... Los mejores precios, las mejores marcas y los últimos modelos. Accesorios running es la tienda especializada en Running  líder en España</p>

  {/* <div className="categories-shop">
        <div className="container-categories">
            <div className="row">
              {categorias.map(function(categoria){
                return  <BoxCategory category={categoria}></BoxCategory>
              })}
           
            </div>
        </div>
    </div> */}

    <CategoriesHome categories={categorias}></CategoriesHome>
    <FeaturedProducts products={productos}></FeaturedProducts>

    <Claim config={Config.claim1}></Claim>
    <Claim config={Config.claim2}></Claim>
    <BlogHome blogentries={blogentries}></BlogHome>
    <ToTop></ToTop>

    <NextSeo
      url="https://example.com/article"
      title="Accesorios Running"
      images={[
        'https://example.com/photos/1x1/photo.jpg',
      ]}
      description="Admin panel nextjs"
      keywords="accesorios running, todo para runing, running mujer"
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
        width:80%;
        line-height: 1.8rem;
        text-align:center;
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
