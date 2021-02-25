import Link from 'next/link';
import style from './style.module.scss';

interface NavBarProps {
  pathname: string;
}

const routeItem = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/services', label: 'Training Services' },
  { url: '/contact', label: 'Contact' },
];

const NavBar = ({ pathname }: NavBarProps) => {
  console.log(pathname);

  return (
    <nav className={style.navigation}>
      <div>
        <Link href="/">
          <img
            className={style.logo}
            src="images/makeFetchHappen.png"
            width="1000"
            height="955"
          />
        </Link>
      </div>
      <div className={style.navLinks}>
        {routeItem.map((route, i) => (
          <Link key={i} href={route.url}>
            <a className={route.url === pathname ? style.active : ''}>
              {route.label}
            </a>
          </Link>
        ))}
        {/* <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/services">
        <a>Training Services</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
