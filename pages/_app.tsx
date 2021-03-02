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
        <title> Make Fetch Happen - {pageTitle || 'Home'} </title>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        ></meta>
        <meta
          name="application-name"
          content={`Make Fetch Happen - ${pageTitle || 'Home'}`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={`Make Fetch Happen - ${pageTitle || 'Home'}`}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fdf6ee"></meta>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://uMakeFetchHappen.com" />
        <meta
          name="twitter:title"
          content={`Make Fetch Happen - ${pageTitle || 'Home'}`}
        />
        <meta name="twitter:description" content="Make Fetch Happen" />
        <meta name="twitter:image" content="android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@nosidam48" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Make Fetch Happen!" />
        <meta
          property="og:description"
          content="Dog training through positive reinforcement in the greater Seattle area with Erika Abrahamson"
        />
        <meta property="og:site_name" content="Make Fetch Happen" />
        <meta property="og:url" content="https://uMakeFetchHappen.com" />
        <meta property="og:image" content="apple-touch-icon.png" />
      </Head>
      <MobileNavBar />
      <NavBar pathname={pathname} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
