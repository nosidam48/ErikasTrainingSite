import Head from 'next/head';
import Banner from '../../components/banner';
import Intro from '../../components/intro';
import Qualifications from '../../components/qualifications';

const Home = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Make Fetch happen: Private and group dog training by Erika Abrahamson in the greater Seattle area. Erika works with positive reinforcement training techniques that modify unwanted behaviors in a kind and humane way. Whether you want to work on basic commands or need more specific help with leash work or other behavior modification, Erika is here to help."
      ></meta>
    </Head>
    <Banner />
    <Intro />
    <Qualifications />
  </>
);

export default Home;
