import { AppProps } from 'next/app'
import { NextRouter, useRouter } from "next/router" 
import Head from 'next/head' 
import Footer from '../components/footer'
import MobileNavBar from '../components/mobileNavBar'
import NavBar from '../components/navBar'
import '../styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const router: NextRouter = useRouter();
  const { pathname } = router;
  const pageTitle: string = pathname.charAt(1).toUpperCase() + pathname.slice(2);
  return (
    <>
    <Head>
      <title> Erika Abrahamson Dog Training - {pageTitle || "Home"} </title>
      <meta 
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        name="viewport"
      ></meta>
    </Head>
    <MobileNavBar />
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default App;
