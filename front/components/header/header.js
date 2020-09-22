import headerStyles from "./header.module.scss";
import Link from 'next/link';
const Header = props =>{
return (<header className={headerStyles.headerFirst}>
<h1 className={headerStyles.logo}><a href="/"><img src="/images/logo.png"/>Accesorios-running.com</a></h1>
<ul className={headerStyles.mainnav}>
  <li><a href="/">Inicio</a></li>
  <li><a href="/categorias.html">Categorias</a></li>
  <li><a href="/blog.html">Blog</a></li>
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
