import Image from 'next/image';
import Link from 'next/link';
import { Paths } from '../../utils/paths';
import style from './style.module.scss';

const trainingTopics: string[] = [
  'Biting',
  'Potty Training',
  'Jumping',
  'Leash Manners',
  'Crate Training',
  'And More...',
];

const Services = () => (
  <div className={style.services}>
    <div className={style.serviceItem}>
      <h3>Single Session</h3>
      <div className={style.serviceImage}>
        <Image
          src="/images/dogBowl.png"
          width="177"
          height="134"
          priority
          alt=""
        />
      </div>
      <p className={style.sessionText}>
        Single Sessions can be booked for adult dogs or puppies. The first
        session is a 90-minute consultation to assess your dog’s routine and
        needs. Erika will put together a training plan tailored to your goals
        that will get you training right away! Follow-up sessions are one hour
        long and can be scheduled as needed.
      </p>
      <strong className={style.sessionPrice}>First Session: $100</strong>
      <strong>Follow ups: $90</strong>
      <Link href={Paths.ContactSingle} passHref>
        <button className={style.button1}>Contact Erika</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Training Package</h3>
      <div className={style.serviceImage}>
        <Image
          src="/images/dogFace.png"
          width="175"
          height="145"
          priority
          alt=""
        />
      </div>
      <p className={style.packageText}>
        Erika’s Training Package can be booked for adult dogs or puppies. It
        comes with three hour-long sessions for those pet parents who want
        continued support for their training efforts. This option is great for
        addressing challenging behavioral issues or just getting some extra
        support with the basics. Erika will update your training plan after each
        session to keep you and your dog on track!
      </p>
      <strong>Three Pack: $240</strong>
      <Link href={Paths.ContactTraining} passHref>
        <button className={style.button2}>Contact Erika</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Complete Puppy Session</h3>
      <div className={style.serviceImageLarge}>
        <Image
          src="/images/pawHouse.png"
          width="136"
          height="154"
          priority
          alt=""
        />
      </div>
      <p>
        The Complete Puppy Session includes a two-hour crash course on all
        things puppy. This option is great for new puppy parents, especially
        those with busy schedules. Get all of your questions answered and learn
        new techniques to get your puppy started off on the right paw!
      </p>
      <p>Topics covered include:</p>
      <div className={style.topicList}>
        {trainingTopics.map((topic: string) => {
          return <div key={topic}>{topic}</div>;
        })}
      </div>
      <strong className={style.puppySession}>
        Complete Puppy Session: $175
      </strong>
      <Link href={Paths.ContactPuppy} passHref>
        <button className={style.button3}>Contact Erika</button>
      </Link>
    </div>
  </div>
);

export default Services;
