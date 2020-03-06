import headerStyles from "./header.module.scss";
import Link from 'next/link';
const Header = props =>{

    console.log('props',props);

return (<header className={headerStyles.headerFirst}>
<h1 className={headerStyles.logo}><a href="/"><img src="/images/logo.png"/></a></h1>
<ul className={headerStyles.mainnav}>
  <li><a href="/">Inicio</a></li>
  <li><a href="/categorias.html">Categorias</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</header> 
  
)}
export default Header
