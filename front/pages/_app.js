
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '../styles/styles.scss';


import Header from '../components/header/header'
import Footer from '../components/footer/footer'
export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <Header ></Header>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
