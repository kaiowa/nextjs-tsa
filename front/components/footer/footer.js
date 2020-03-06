import footerStyles from "./footer.module.scss";
import Link from 'next/link';
const Footer = props =>{

    console.log('props',props);

return (<footer className={footerStyles.footer}>
  <div className={footerStyles.bloques}>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Categorias</p>
    <ul>  
        <li><a href="#">Brazaletes</a></li>
        <li><a href="#">Mochilas</a></li>
        <li><a href="#">Auriculares</a></li>
        <li><a href="#">Camisetas</a></li>
        <li><a href="#">Rejoles</a></li>
        
    </ul>
  </div>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Enlaces</p>
    <ul>  
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
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
