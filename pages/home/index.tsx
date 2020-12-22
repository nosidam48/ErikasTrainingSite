import Head from "next/head";
import Banner from "../../components/banner";
import Intro from "../../components/intro";
import Qualifications from "../../components/qualifications";

const Home = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Welcome to Erika Abrahamson's dog training page.">
      </meta>  
    </Head>
    <Banner />
    <Intro />
    <Qualifications/>
  </>
);

export default Home;