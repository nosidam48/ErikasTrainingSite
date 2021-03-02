import Head from 'next/head';
import Services from '../../components/services';

const ServicesPage = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Choose from a variety of dog training services. No matter your needs Erika can tailor a training session to reach your goals with lasting results. Services available throughout the greater Seattle area including house calls!"
      ></meta>
    </Head>
    <Services />
  </>
);

export default ServicesPage;
