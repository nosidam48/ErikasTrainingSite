import Link from "next/link";
import style from "./style.module.scss";

const Footer = () => (
  <div className={style.footer}>
    <div className={style.navLinks}>
      <Link href="/">
        <a className={style.logo}>Home</a>
      </Link>
      <Link href="/about">
        <a>About Erika</a>
      </Link>
      <Link href="/services">
        <a>Services</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
    <div className={style.socialLinks}>
      <Link href="facebook.com/erika">
      <a>
        <img src="/images/socialIcons/fb.svg" width="30" height="30" />
      </a>
      </Link>
      <Link href="instagram.com/erika">
      <a>
        <img src="/images/socialIcons/instagram.svg" width="30" height="30" />
      </a>
      </Link>
      <Link href="linkedIn.com/erika">
      <a>
        <img src="/images/socialIcons/linkedin.svg" width="30" height="30" />
      </a>
      </Link>
      <Link href="twitter.com/erika">
      <a>
        <img src="/images/twitter.svg" width="30" height="30" />
      </a>
      </Link>
    </div>
    <p>© 2020 Erika Abrahamson</p>
  </div>
)

export default Footer;