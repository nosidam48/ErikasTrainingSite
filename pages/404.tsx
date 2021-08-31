import Image from 'next/image';
import Link from 'next/link';
import { Paths } from '../utils/paths';
import style from './style.module.scss';

const Custom404 = () => (
  <div className={style.banner}>
    <div className={style.imageWrapper}>
      <Image
        layout="fill"
        src="/images/dogAtPlay.jpeg"
        objectFit="cover"
        alt="Dog at play"
        priority
      />
    </div>
    <div className={style.text}>
      <h1 className={style.headline}>
        Oops! <br />
        Page Not Found
      </h1>
      <Link href={Paths.Home} passHref>
        <button className={style.button}>Back to Home</button>
      </Link>
    </div>
  </div>
);

export default Custom404;
