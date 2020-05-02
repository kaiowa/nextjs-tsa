import footerStyles from "./footer.module.scss";
import Link from 'next/link';
// import ChatBot from '../chatBot/ChatBot';

const Footer = props =>{
  let d = new Date();
  let year = d.getFullYear();
return (<footer className={footerStyles.footer}>
  <div className={footerStyles.bloques}>
  <div className={footerStyles.bloque}>
    <p className={footerStyles.title}>Categorias</p>
    <ul>  
        <li> <Link  href={{ pathname: `/categoria/1/brazaletes-running.html` }} title="brazaletes running">Brazaletes</Link></li>
        <li> <Link  href={{ pathname: `/categoria/2/mochilas-running.html` }} title="mochilas running">Mochilas</Link></li>
        <li> <Link  href={{ pathname: `/categoria/7/auriculares-running.html` }} title="auriculares running">Auriculares</Link></li>
        <li> <Link  href={{ pathname: `/categoria/8/Relojes-running.html` }} title="relojes running">Relojes</Link></li>
        <li> <Link  href={{ pathname: `/categoria/4/accesorios-running.html` }} title="accesorios running">Accesorios</Link></li>
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
  Copyright © {year} accesorios-running.com. 
  </div>
</footer> 
)}
export default Footer
