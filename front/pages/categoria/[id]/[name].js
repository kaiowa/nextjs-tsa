import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextSeo, ProductJsonLd } from 'next-seo';
import Spinner from '../../../components/ui/spinner/spinner';
import useSWR from 'swr';
import Claim from '../../../components/claim/claim';
import Producto from '../../../components/producto/producto';

import fetch from 'isomorphic-unfetch'

function CategoriaName (props) {
  const router = useRouter()
  const { id} = router.query;
  
 if(!id) return (<></>)
  const {data, revalidate} = useSWR(`/api/categorie/${id}`, async function(args) {
    const res = await fetch(args);
    const json= await res.json();
    return json;
  });
 
  if(!data) return (<Spinner></Spinner>)
  let claim1Config={
    title:'',
    description:data.categoria[0].claim1
  }
  let seoCat=data.categoria[0].seo;
  let productos=data.productos;

  return (
    <div className="container container-home">
    <NextSeo
    title={seoCat.title}
    authorName="Sergio Campos"
    publisherName="Kaiowa"
    description={seoCat.description}
    keywords={seoCat.keywords}
    ></NextSeo>
    <section className="headerImage" style={{background:'url(/images/categories/banner-brazaletes.jpg)'}}>
      <h1>{data.categoria[0].name}</h1>
    </section>
    <Claim config={claim1Config}></Claim>
    <div className="listados">
      <div className="header">
          {/* <div className="paginacion">1 de xx</div> */}
      </div>
      <div className="listaproductos">
      {productos.map((producto)=>{
        return  <Producto producto={producto} key={producto._id}></Producto>
      })}
      </div>
    </div>

    <style jsx>{`
    .container {
      min-height: 100vh;
      display: block;
      justify-content: center;
      align-items:center;
      margin-top :72px;
    }
    .headerImage{
      height: 120px;
      color: #fff;
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 30px;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      background-size: 100% !important;
  }
    }
    .headerImage h1{
      flex: 1;
      margin: 0 auto;
      margin-block-start: inherit;
      margin-block-end: inherit;
      margin-top: 13px;
    }
    .listaproductos {
      display: flex;
      flex-wrap: wrap;
    }
  `}</style>
  </div>
  )
}

CategoriaName.getInitialProps = async () => {
  console.log('get InitialPropppppsssss');
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  // console.log(json);
  //return {  json }
  return {}
}
export default CategoriaName
