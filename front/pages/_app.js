
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux';
import SEO from '../next-seo.config'
import '../styles/styles.scss';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import store from '../redux/store';


export default function MyApp({ Component,pageProps} ) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
    <Provider store={store}>
      <Header ></Header>
      <DefaultSeo {...SEO} />
      
      <Component {...pageProps} />
      
      <Footer></Footer>
      </Provider>
    </>
  )
}
