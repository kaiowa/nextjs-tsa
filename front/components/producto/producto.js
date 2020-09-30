import React, {useState} from 'react';
import ProductoStyles from "./producto.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import {agregarProducto, eliminarProducto} from '../../redux/actions/comparadorActions';




const Producto = props =>{
  const dispatch = useDispatch();
  const producto=props.producto;
  function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }
  function addComparison(){
    console.log(producto);

  }

  function getLink(id,name){
    return `/producto/${id}/${name}.html`;
  }

return (
  <div className={ProductoStyles.producto}>
    <div className={ProductoStyles.productoContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <div className={ProductoStyles.overlay}></div>
        <img src={producto.images[0].url} className={ProductoStyles.image} alt={producto.seoname} title={producto.name}></img>
      </a>
    </div>
    <div className={ProductoStyles.productoSubContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <p className={ProductoStyles.title}>{producto.title}</p>
        <p className={ProductoStyles.precio}>{producto.price}</p>
      </a>
    </div>
    <div className={ProductoStyles.botonera}>
    <button onClick={() => {dispatch(agregarProducto(producto))}}>Comparar</button>
    <button ><a href={getLink(producto.id,producto.nameseo)}>Precios</a></button>
    </div>
  
  </div>
);
};
export default Producto
