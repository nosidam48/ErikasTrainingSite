import Link from 'next/link';
import { Paths } from '../../utils/paths';
import style from './style.module.scss';

const Intro = () => (
  <div className={style.intro}>
    <h2>“Fetch is never going to happen”</h2>
    <p>
      While there are always nay-sayers out there, dog trainer and enthusiast
      Erika Abrahamson uses positive reinforcement training techniques that
      modify unwanted behaviors in a kind and humane way. Whether you want to
      work on basic commands or need more specific help with leash work or other
      behavior modification, Erika is here to make fetch happen for you and your
      dog.
    </p>
    <Link href={Paths.About} passHref>
      <button>Erika's Story</button>
    </Link>
  </div>
);

export default Intro;
