import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

const Services = () => (
  <div className={style.services}>
    <div className={style.serviceItem}>
      <h3>Option One</h3>
      <div className={style.serviceImage}>
        <Image
          src="/images/dogBowl.png"
          width="177"
          height="134"
          priority
          className={style.serviceImage}
          alt=""
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam
        malesuada sodales magna ac consequat. Suspendisse nec turpis libero. In
        in ultricies.
      </p>
      <Link href="/contact">
        <button className={style.button1}>Book Now!</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Option Two</h3>
      <div className={style.serviceImage}>
        <Image
          src="/images/dogFace.png"
          width="175"
          height="145"
          priority
          alt=""
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam
        malesuada sodales magna ac consequat. Suspendisse nec turpis libero. In
        in ultricies.
      </p>
      <Link href="/contact">
        <button className={style.button2}>Book Now!</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Option Three</h3>
      <div className={style.serviceImage}>
        <Image
          src="/images/pawHouse.png"
          width="136"
          height="154"
          priority
          className={style.serviceImage}
          alt=""
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nam
        malesuada sodales magna ac consequat. Suspendisse nec turpis libero. In
        in ultricies.
      </p>
      <Link href="/contact">
        <button className={style.button3}>Book Now!</button>
      </Link>
    </div>
  </div>
);

export default Services;
