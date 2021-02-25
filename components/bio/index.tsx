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
          socialization studios. She can help with potty training, leash work,
          and anything else you and your puppy may need.
        </p>
      </div>
      <img src="images/erika-bonzo.jpg" width="416" height="426" />
    </div>
  </div>
);

export default Bio;
