import footerStyles from "./footer.module.scss";
import Link from 'next/link';
const Footer = props =>{

    console.log('props',props);

return (<footer className={footerStyles.footer}>
  <div className={footerStyles.bloques}>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Categorias</p>
    <ul>  
        <li>Brazaletes</li>
        <li>Mochilas</li>
        <li>Auriculares</li>
        <li>Camisetas</li>
        <li>Rejoles</li>
        
    </ul>
  </div>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Enlaces</p>
    <ul>  
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
    </ul>
  </div>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Enlaces</p>
    <ul>  
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
    </ul>
  </div>
  </div>
  <div className={footerStyles.copy}>
  Copyright © 2020 midominio.com. All rights reserved.
  </div>
</footer> 
  
)}
export default Footer
