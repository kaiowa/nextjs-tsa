import React, {useState} from 'react';
import ProductoStyles from "./producto.module.scss";

const Producto = props =>{

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
  <div className={ProductoStyles.producto}>
    <div className={ProductoStyles.productoContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <div className={ProductoStyles.overlay}></div>
        <img src={producto.images[0].url} className={ProductoStyles.image} title={producto.name}></img>
      </a>
    </div>
    <div className={ProductoStyles.productoSubContent}>
      <a href={producto.url} rel="nofollow" target="_blank" title={producto.name}>
        <p className={ProductoStyles.title}>{producto.title}</p>
        <p className={ProductoStyles.precio}>{producto.price}</p>
      </a>
      <button onClick={addComparison}>Add</button>
    </div>
  </div>
);
};
export default Producto
