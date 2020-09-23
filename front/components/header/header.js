import headerStyles from "./header.module.scss";
import Link from 'next/link';
const Header = props =>{
return (<header className={headerStyles.headerFirst}>
<h1 className={headerStyles.logo}><a href="/"><img src="/images/logo.png"/>Accesorios-running.com</a></h1>
<ul className={headerStyles.mainnav}>
  <li>
  <Link  href={{ pathname: `/` }} title="Inicio">Inicio</Link>
  </li>  
  <li>
    <Link  href={{ pathname: `/categorias.html` }} title="Categorias">Categorias</Link>
  </li>
  <li>
    <Link  href={{ pathname: `/comparador.html` }} title="Comparador">Comparador</Link>
  </li>
  <li>
  <Link  href={{ pathname: `/blog.html` }} title="Blog">Blog</Link>
  </li>
</ul>
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id='UA-1857557-15"
  />

  <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-1857557-15');
        `,
    }}
  />
</header> 
  
)}
export default Header
