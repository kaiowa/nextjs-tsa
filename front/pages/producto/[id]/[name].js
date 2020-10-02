import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextSeo, ProductJsonLd } from 'next-seo';
import Spinner from '../../../components/ui/spinner/spinner';
import useSWR from 'swr';
import Claim from '../../../components/claim/claim';
import Producto from '../../../components/producto/producto';
import FichaProducto from '../../../components/fichaProducto/fichaProducto';
import fetch from 'isomorphic-unfetch'


function ProductoName (props) {
  const router = useRouter()
  const { id} = router.query;
  const handleOnDragStart = (e) => e.preventDefault()

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
  const relacionados=data.relacionados;

  console.log('procuto;',data.precios);
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
      <li><a href="/" title="Accesorios Running">Inicio</a></li>
      <li><a href={`/categoria/${data.categoria.id}/${data.categoria.name}.html`} title={data.categoria.name}>{data.categoria.name}</a></li>
      <li>{producto.name}</li>
    </ol>

    <div className="fichaProducto">
      <h1>{producto.name}</h1>
      
      <div className="listados">
        <div className="header">
            {/* <div className="paginacion">1 de xx</div> */}
        </div>
        <div className="listaproductos">
          <FichaProducto producto={producto} precios={data.precios} relacionados={data.relacionados}></FichaProducto>
        </div>
      </div>

    </div>
    <style jsx>{`
    .fichaProducto{
      padding-left:20px;
      padding-right:20px;
    }
    .fichaProducto h1{
      color: #E91E63;
      line-height: 2.2rem;
      font-size: 2rem;
      margin-bottom: 40px;
      margin-top: 30px;
    }
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
    
    }
    .listaproductos {
      display: flex;
      flex-wrap: wrap;   
    }
    


.arrows { 
  white-space: nowrap;
  display: inline-block;
  /* margin-top: 15px; */
  width: 100%;
  background-color: #fbb0c9;
  color: #fff;
  padding:5px;
  z-index: 1;

 }
.arrows li {
    display: inline-block;
    line-height: 15px;
    margin: 0 9px 0 -10px;
    padding: 0 20px;
    position: relative;
}
.arrows li::before,
.arrows li::after {
    border-right: 3px solid #fff;
    content: '';
    display: block;
    height: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
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
   color:#fff;
}

.arrows li:nth-of-type(1) a { color: #fff;z-index: 2;
  position: relative; } 
.arrows li:nth-of-type(2) a { color: #fff;z-index: 2;
  position: relative;} 
.arrows li:nth-of-type(3)  { color: #3a3d6a;z-index: 2;
  position: relative;} 
.arrows li:last-of-type(4)  { color: #3a3d6a;z-index: 2;
  position: relative; } 
  `}</style>
  </div>
  )
}

ProductoName.getInitialProps = async () => {
  console.log('get InitialPropppppsssss');
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  // console.log(json);
  //return {  json }
  return {}
}
export default ProductoName
