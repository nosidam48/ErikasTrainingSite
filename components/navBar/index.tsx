import Link from "next/link"
import style from "./style.module.scss";

const NavBar = () => (
  <nav className={style.navigation}>
    <Link href="/">
      <h3 className={style.logo}>Erika's Dog Training</h3>
    </Link>
    <Link href="/about">
      <a>About Erika</a>
    </Link>
    <Link href="/services">
      <a>Services Offered</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </nav>
)

export default NavBar;