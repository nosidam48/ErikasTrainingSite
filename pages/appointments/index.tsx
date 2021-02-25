import Head from 'next/head';
import Calendly from '../../components/appointments';

const Appointments = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Ready to book an appointment. Fill out this short contact form and Erika will get back to you as soon as possible with possible appointments and more information"
      ></meta>
    </Head>
    <Calendly />
  </>
);

export default Appointments;
