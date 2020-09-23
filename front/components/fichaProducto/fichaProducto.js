import React, {useState} from 'react';
import fichaProductoStyles from "./fichaProducto.module.scss";

const fichaProducto = props =>{

  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const producto=props.producto;
  function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }
  function addComparison(){
    console.log(producto);

  }

return (
  <div className={fichaProductoStyles.producto}>
  ficha de productoooo
    <div className={fichaProductoStyles.productoContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <div className={fichaProductoStyles.overlay}></div>
        <img src={producto.images[0].url} className={fichaProductoStyles.image} title={producto.name}></img>
      </a>
    </div>
    <div className={fichaProductoStyles.productoSubContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <p className={fichaProductoStyles.title}>{producto.title}</p>
        <p className={fichaProductoStyles.precio}>{producto.price}</p>
      </a>
     
    </div>
  </div>
);
};
export default fichaProducto
