import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

export interface NavBarProps {
  pathname: string;
}

const routeItem = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/services', label: 'Training Services' },
  { url: '/contact', label: 'Contact' },
];

const NavBar = ({ pathname }: NavBarProps) => {
  return (
    <nav className={style.navigation}>
      <div className={style.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/makeFetchHappen.png"
              width="1000"
              height="955"
              alt="Make Fetch Happen Logo - Navigate to Home"
              priority
            />
          </a>
        </Link>
      </div>
      <div className={style.navLinks}>
        {routeItem.map((route, i) => (
          <Link key={i} href={route.url} passHref>
            <a className={route.url === pathname ? style.active : ''}>
              {route.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
