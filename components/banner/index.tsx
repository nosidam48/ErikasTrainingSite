import Link from 'next/link';
import style from './style.module.scss';

const Banner = () => (
  <div className={style.banner}>
    <div className={style.text}>
      <h1 className={style.headline}>
        Dog Training and <br />
        Behavior Modification
      </h1>
      <Link href="/services" passHref>
        <button className={style.button}>Learn More</button>
      </Link>
    </div>
  </div>
);

export default Banner;
