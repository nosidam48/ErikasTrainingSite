import style from './style.module.scss';

const Qualifications = () => (
  <div className={style.qualifications}>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <img src="/images/NWDog.png" width="100" height="91" />
      </div>
      <p>North West School of Caninine Studies Graduate</p>
    </div>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <img src="/images/puppyworks.png" width="180" height="72" />
      </div>
      <p>Trainer and Instructor at Seattle Puppyworks</p>
    </div>
    <div className={style.qualList}>
      <div className={style.imageWrapper}>
        <img src="/images/paws4training.png" width="200" height="35" />
      </div>
      <p>Trainer and Instructor at Paws 4 Training</p>
    </div>
  </div>
);

export default Qualifications;
