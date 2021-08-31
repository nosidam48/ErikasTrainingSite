import style from './style.module.scss';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className={style.footer}>
    {/* TODO: reimplement social links when sites are live */}
    {/* <div className={style.socialLinks}>
      <a
        href="https://www.facebook.com/erika"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/socialIcons/fb.svg"
          width="40"
          height="40"
          alt="Visit Make Fetch Happen on Facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/erika"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/socialIcons/instagram.svg"
          width="40"
          height="40"
          alt="Visit Make Fetch Happen on Instagram"
        />
      </a>
    </div> */}
    <p>{`© ${currentYear} Make Fetch Happen`}</p>
  </div>
);

export default Footer;
