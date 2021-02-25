import { AppProps } from 'next/app';
import { NextRouter, useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../components/footer';
import MobileNavBar from '../components/mobileNavBar';
import NavBar from '../components/navBar';
import '../styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const router: NextRouter = useRouter();
  const { pathname } = router;
  const pageTitle: string =
    pathname.charAt(1).toUpperCase() + pathname.slice(2);
  return (
    <>
      <Head>
        <title> Erika Abrahamson Dog Training - {pageTitle || 'Home'} </title>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#634e4e" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#fdf6ee"></meta>
      </Head>
      <MobileNavBar />
      <NavBar pathname={pathname} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
