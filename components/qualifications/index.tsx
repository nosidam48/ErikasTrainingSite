import Image from 'next/image';
import style from './style.module.scss';

const Qualifications = () => (
  <div className={style.qualifications}>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <Image src="/images/NWDog.png" width="100" height="91" alt="" />
      </div>
      <p>North West School of Canine Studies Graduate</p>
    </div>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <Image src="/images/puppyworks.png" width="180" height="72" alt="" />
      </div>
      <p>Trainer and Instructor at Seattle Puppyworks</p>
    </div>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <Image src="/images/paws4training.png" width="200" height="35" alt="" />
      </div>
      <p>Trainer and Instructor at Paws 4 Training</p>
    </div>
  </div>
);

export default Qualifications;
