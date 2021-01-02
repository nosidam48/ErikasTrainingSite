import Link from "next/link";
import style from "./style.module.scss";

const Services = () => (
  <div className={style.services}>
    <h1>Current Available Services</h1>
    <div className={style.serviceItem}>
      <h3>Private In Person Lessons</h3>
      <img src="/images/in-person.jpeg" />
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
        <li>Vestibulum venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam malesuada sodales magna ac consequat.</li>  
        <li>Suspendisse nec turpis libero. In in ultricies.</li>  
      </ul>
      <Link href="/contact">
      <button className={style.button1}>Contact Erika Now!</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Private Remote Lessons</h3>
      <img src="/images/zoom-dog.jpeg" />
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
        <li>Vestibulum venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam malesuada sodales magna ac consequat.</li>  
        <li>Suspendisse nec turpis libero. In in ultricies.</li>  
      </ul>
      <Link href="/contact">
        <button className={style.button2}>Contact Erika Now!</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Group Lessons</h3>
      <img src="/images/group-dogs.jpeg" />
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
        <li>Vestibulum venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam malesuada sodales magna ac consequat.</li>  
        <li>Suspendisse nec turpis libero. In in ultricies.</li>  
      </ul>
      <Link href="/contact">
        <button className={style.button3}>Contact Erika Now!</button>
      </Link>
    </div>
    <div className={style.serviceItem}>
      <h3>Puppy Fun</h3>
      <img src="/images/puppies.jpeg" />
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>  
        <li>Vestibulum venenatis finibus lorem non auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam malesuada sodales magna ac consequat.</li>  
        <li>Suspendisse nec turpis libero. In in ultricies.</li>  
      </ul>
      <Link href="/contact">
        <button className={style.button4}>Contact Erika Now!</button>
      </Link>
    </div>
  </div>
)

export default Services;