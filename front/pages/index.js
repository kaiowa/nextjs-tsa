
import Header from'../components/header/header';
import { NextSeo } from 'next-seo';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
// import people from '../data/data';
import LoginForm from '../components/loginform/loginform';
import BoxCategory from '../components/boxcategory/boxcategory';
import Claim from '../components/claim/claim';
import Config from '../common/config';

const Home = () => {
  let categories;
  const {data, revalidate} = useSWR('/api/categories', async function(args) {
    const res = await fetch(args);
    const json= await res.json();
    return json;
  });
  if (!data) return <h1 className="loading">Loading...</h1>;
  
  console.log(data);

return (
  
  <div className="container container-home">
  <h1 >
    Lorem ippsumm
  </h1>
  <p className="text">Aquí estás y eres de los nuestros, no quieres en tu camiseta el logotipo de un caballo jugando al polo, ni un cocodrilo ni una golondrina, y tampoco quieres que te cobren 10 veces su valor solo por eso. Buscas artículos con personalidad propia, impactantes y que te definan.</p>
  <div className="categories-shop">
        <div className="container-categories">
            <div className="row">
              {data.map(function(categoria){
                return  <BoxCategory category={categoria}></BoxCategory>
              })}
            </div>
        </div>
    </div>
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
        -webkit-justify-content: flex-start;
        -ms-flex-pack: distribute;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
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
    `}</style>
    
  </div>
)}

export default Home
