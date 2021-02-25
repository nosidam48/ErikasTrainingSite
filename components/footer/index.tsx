import Link from 'next/link';
import style from './style.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <div className={style.socialLinks}>
      <Link href="facebook.com/erika">
        <a>
          <img src="/images/socialIcons/fb.svg" width="40" height="40" />
        </a>
      </Link>
      <Link href="instagram.com/erika">
        <a>
          <img src="/images/socialIcons/instagram.svg" width="40" height="40" />
        </a>
      </Link>
    </div>
    <p>© 2020 Make Fetch Happen</p>
  </div>
);

export default Footer;
