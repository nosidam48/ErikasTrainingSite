import Head from 'next/head';
import Banner from '../../components/banner';
import Intro from '../../components/intro';
import Qualifications from '../../components/qualifications';

const Home = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Make Fetch Happen: Private and group dog training through positive reinforcement in the greater Seattle area with Erika Abrahamson as personal trainer."
      ></meta>
    </Head>
    <Banner />
    <Intro />
    <Qualifications />
  </>
);

export default Home;
