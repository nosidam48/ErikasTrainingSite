import { AppProps } from 'next/app' 
import Head from 'next/head' 
import Footer from '../components/footer'
import MobileNavBar from '../components/mobileNavBar'
import NavBar from '../components/navBar'
import '../styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <html lang="en" />
      <title> Erika Abrahamson Dog Training </title>
      <meta 
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        name="viewport"
        key="content"
      >
      </meta>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> 
    </Head>
    <body>
    <MobileNavBar />
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </body>
    </>
  )
}

export default App;
