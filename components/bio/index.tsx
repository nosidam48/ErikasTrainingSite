import Image from 'next/image';
import Qualifications from '../qualifications';
import style from './style.module.scss';

const Bio = () => (
  <div className={style.bioContainer}>
    <div className={style.bio}>
      <div className={style.story}>
        <h1>Erika's Story</h1>
        <p>
          Erika is a lifelong dog lover with a passion for helping owners and
          their dogs develop better relationships through positive reinforcement
          training. She graduated from Northwest School of Canine Studies in
          2015 and is a valued member of the teams at Seattle Puppyworks and
          Paws 4 Training. <br />
          Working with Erika, you can expect to be met with relentless
          positivity and practical solutions to common behavioral issues. Erika
          is a puppy expert with years of experience working in puppy
          socialization studios. She can help with potty training, recall, and
          anything else you and your puppy may need. <br />
          Erika also has extensive experience working with adult dogs. Her
          one-on-one approach and individualized training plans address your
          dog's specific needs and give you the tools to modify unwanted
          behaviors. Erika has worked with hundreds of clients all over Seattle
          and continues to learn and grow as a trainer every day.
        </p>
      </div>
      <div className={style.bioImage}>
        <Image
          alt="Erika with her dog Garbanzo"
          src="/images/erika-bonzo.jpg"
          width="426"
          height="426"
          priority
        />
      </div>
    </div>
    <Qualifications />
  </div>
);

export default Bio;
