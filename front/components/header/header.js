import headerStyles from "./header.module.scss";
import Link from 'next/link';
const Header = props =>{

    console.log('props',props);

return (<header className={headerStyles.headerFirst}>
<h1 className={headerStyles.logo}><a href="#"><img src="/images/logo.png"/></a></h1>
<ul className={headerStyles.mainnav}>
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Portfolio</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</header> 
  
)}
export default Header
