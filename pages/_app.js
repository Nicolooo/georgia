import '../styles/globals.css'
import MenuManager from '../comp/Menu/MenuManager'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return <MenuManager><Component {...pageProps} /></MenuManager>
}

export default MyApp
