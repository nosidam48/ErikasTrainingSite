import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import { Paths } from '../../utils/paths';

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <nav className={style.mobileNavigation}>
      <div className={style.logo}>
        <Link href={Paths.Home} passHref>
          <a>
            <Image
              src="/images/makeFetchHappen.png"
              width="1000"
              height="955"
              alt="Make Fetch Happen - Navigate to Home Page"
              priority
              data-cy="mobile_logo"
            />
          </a>
        </Link>
      </div>
      {isOpen && (
        <div className={style.mobileNavList}>
          <Link href={Paths.Home} passHref>
            <a onClick={toggleOpen} className={style.mobileNavItem}>
              Home
            </a>
          </Link>
          <Link href={Paths.About} passHref>
            <a onClick={toggleOpen} className={style.mobileNavItem}>
              About
            </a>
          </Link>
          <Link href={Paths.Services} passHref>
            <a onClick={toggleOpen} className={style.mobileNavItem}>
              Training Services
            </a>
          </Link>
          <Link href={Paths.Contact} passHref>
            <a onClick={toggleOpen} className={style.mobileNavItem}>
              Contact
            </a>
          </Link>
        </div>
      )}
      <div
        className={classnames(style.container, isOpen && style.open)}
        onClick={() => setIsOpen(!isOpen)}
        data-cy="burger_menu"
      >
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
