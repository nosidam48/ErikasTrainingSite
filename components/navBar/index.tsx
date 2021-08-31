import Image from 'next/image';
import Link from 'next/link';
import { Paths } from '../../utils/paths';
import style from './style.module.scss';

export interface NavBarProps {
  pathname: string;
}

const routeItem = [
  { url: Paths.Home, label: 'Home' },
  { url: Paths.About, label: 'About' },
  { url: Paths.Services, label: 'Training Services' },
  { url: Paths.Contact, label: 'Contact' },
];

const NavBar = ({ pathname }: NavBarProps) => {
  return (
    <nav className={style.navigation}>
      <div className={style.logo}>
        <Link href={Paths.Home} passHref>
          <a>
            <Image
              src="/images/makeFetchHappen.png"
              width="1000"
              height="955"
              alt="Make Fetch Happen Logo - Navigate to Home"
              priority
              data-cy="desktop_logo"
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
