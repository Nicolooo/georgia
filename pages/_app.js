import '../styles/globals.css'
import MenuManager from '../comp/Menu/MenuManager'
function MyApp({ Component, pageProps }) {
  return <MenuManager><Component {...pageProps} /></MenuManager>
}

export default MyApp
