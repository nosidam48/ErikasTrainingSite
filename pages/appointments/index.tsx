import Head from "next/head";
import Calendly from "../../components/appointments";

const Appointments = () => (
    <>
    <Head>
    <meta
      name="Description"
      content="Welcome to Erika Abrahamson's dog training page.">
    </meta>  
  </Head>
  <Calendly />
  </>
);

export default Appointments;