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
  const {data, revalidate} = useSWR(`/api/product/${id}`, async function(args) {
    const res = await fetch(args);
    const json= await res.json();
    return json;
  });
 
  if(!data) return (<Spinner></Spinner>)
  let claim1Config={
    title:'',
    description:data.categoria.claim1
  }
  let seoCat=data.categoria.seo;
  let producto=data.producto;

  return (
    <div className="container container-home">
    <NextSeo
    title={seoCat.title}
    authorName="Sergio Campos"
    publisherName="Kaiowa"
    description={seoCat.description}
    keywords={seoCat.keywords}
    ></NextSeo>
    <ol className="arrows">
      <li><a href="#">Inicio</a></li>
      <li><a href={`/categoria/${data.categoria.id}/${data.categoria.name}.html`}>{data.categoria.name}</a></li>
      <li>Nombre del producto</li>
    </ol>

    <h1>{data.categoria.name}</h1>
    
    <div className="listados">
      <div className="header">
          {/* <div className="paginacion">1 de xx</div> */}
      </div>
      <div className="listaproductos">
        <Producto producto={producto}></Producto>
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


.arrows { white-space: nowrap; display:inline-block;margin-top :15px}
.arrows li {
    display: inline-block;
    line-height: 15px;
    margin: 0 9px 0 -10px;
    padding: 0 20px;
    position: relative;
}
.arrows li::before,
.arrows li::after {
    border-right: 1px solid #666666;
    content: '';
    display: block;
    height: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    transform: skewX(45deg);   
}
.arrows li::after {
    bottom: 0;
    top: auto;
    transform: skewX(-45deg);
}

.arrows li:last-of-type::before, 
.arrows li:last-of-type::after { 
    display: none; 
}

.arrows li a { 
   font-size: 15px;
   letter-spacing: -1px; 
   text-decoration: none;
}

.arrows li:nth-of-type(1) a { color: hsl(0, 0%, 70%); } 
.arrows li:nth-of-type(2) a { color: hsl(0, 0%, 65%); } 
.arrows li:nth-of-type(3) a { color: hsl(0, 0%, 50%); } 
.arrows li:nth-of-type(4) a { color: hsl(0, 0%, 45%); } 
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
