import Link from "next/link"
import { useState } from "react";
import classnames from "classnames";
import style from "./style.module.scss";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <nav className={style.mobileNavigation}>
      <Link href="/">
        <h3 className={style.logo}>Erika's Dog Training</h3>
      </Link>
      {isOpen &&
      <div className={style.mobileNavList}>
      <Link href="/about">
        <a onClick={toggleOpen} className={style.mobileNavItem}>About Erika</a>
      </Link>
      <Link href="/services">
        <a onClick={toggleOpen} className={style.mobileNavItem}>Services Offered</a>
      </Link>
      <Link href="/contact">
        <a onClick={toggleOpen} className={style.mobileNavItem}>Contact</a>
      </Link>
      <Link href="/appointments">
        <a onClick={toggleOpen} className={style.mobileNavItem}>Book an appointment</a>
      </Link>
      </div>
      }
      <div className={classnames(style.container, isOpen && style.open)} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
      </div>
    </nav>
  )
}

export default MobileNavBar;