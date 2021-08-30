import Head from 'next/head';
import ContactForm from '../../components/contact';

const Contact = () => (
  <>
    <Head>
      <meta
        name="Description"
        content="Ready to book a dog training appointment with Erika in the greater Seattle area? Contact Erika for more information and possible appointment times."
      ></meta>
    </Head>
    <ContactForm />
  </>
);

export default Contact;
