import React, {useState} from 'react';
import fichaProductoStyles from "./fichaProducto.module.scss";
import Chart from "react-google-charts";

class fichaProducto extends React.Component {
//const fichaProducto = (props) =>{
  constructor(props) {
    super(props);
    const producto=props.producto;
    let imagenActiva=producto.images[0].url;
    let precios=props.precios;
    
    let PreciosChart=[];
    let entrada=['Tipo','Fecha'];
    PreciosChart.push(entrada);
    precios.map(function(producto){
        producto.price=producto.price.replace('€','').trim();
        if(producto.price!=''){
          let entrada=[new Date(producto.date).toLocaleString().split(" ")[0],parseFloat(producto.price)]
          
          PreciosChart.push(entrada);
        }
        delete producto._id;
        delete producto.id;
    })
  
   
    this.state = {imagenActivaS:imagenActiva,productoS:producto,preciosS:precios,PreciosChartS:PreciosChart};
  }
  componentDidMount() {
    console.log('componente cargado');
  

}
viewImage =function(url)  {
  this.setState({imagenActivaS:url});
}
  render(){

return (
  <div className={fichaProductoStyles.principal}>
  <div className={fichaProductoStyles.flexcontainer}>

    <div className={fichaProductoStyles.flexitemlista}>
      <div className={fichaProductoStyles.carrousel}>
        <ul>
            {
              this.state.productoS.images.map((imagen,i)=>{
                if(i<4){
                  return  <li key={i} onClick={()=>{this.viewImage(imagen.url)}}><img src={imagen.url} title="Ampliar imagen"></img></li>
                }
            })
          }
        </ul>
      </div>
    </div>
    <div className={fichaProductoStyles.flexitemproducto}>
        <img src={this.state.imagenActivaS} className={fichaProductoStyles.imagenprincipal} title={this.state.productoS.name}></img>
    </div>
    <div className={fichaProductoStyles.flexiteminfo}>
        <p className={fichaProductoStyles.titulo}>{this.state.productoSname}</p>
        <p className={fichaProductoStyles.precio}>{this.state.productoS.price}</p>
        <button className={fichaProductoStyles.botoncompra}>
        <a href={this.state.productoS.url} target="_blank">
          Comprar
          </a>
        </button>
        {/* <p>{this.state.productoS.stars}</p> */}
        {this.state.productoS.bullets.map(function(bullet,i){
              if(i<4){
                return  <p className={fichaProductoStyles.bullet} key={i}>{bullet}</p>
              }
          })}
        <p></p>
  </div>
  

  </div>
  <div class={fichaProductoStyles.infostats} >
          <div class={fichaProductoStyles.stats} >
  
          {
            this.state.productoS.details.map(function(bullet,i){
        
                return  <div><p className={fichaProductoStyles.detailtitle} key={i}>{bullet.title}:</p><p className={fichaProductoStyles.detailvalue}>{bullet.value}</p></div>
          })
        }
          </div>
          <div className={fichaProductoStyles.precios}>
              <Chart
              width={'100%'}
              height={'300px'}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={this.state.PreciosChartS}
              options={{
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '90%', height: '80%' },
                // lineWidth: 25
              }}
              // For tests
              rootProps={{ 'class': 'grafico' }}
            />
      </div>
  </div>
  
</div>
);
}
};
export default fichaProducto
