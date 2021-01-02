import Link from "next/link";
import style from "./style.module.scss";

const Intro = () => (
  <div className={style.intro}>
    <h2>Looking for the perfect dog trainer?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit ac vulputate aliquet. Aliquam tempus velit vel eleifend maximus. Sed sodales sagittis risus sed suscipit. Nulla congue aliquet turpis, sed finibus lorem mattis ut. Etiam mauris nibh, fermentum ut facilisis in, eleifend nec purus. Vivamus quis pulvinar nisl. Sed mattis rhoncus pellentesque. Donec ut diam nisl. Morbi eu felis nisi.
    </p>
    <ul>
      <li>Neque porro quisquam est qui dolorem ipsum</li>
      <li>quia dolor sit amet, consectetur, adipisci velit...</li>
      <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</li>
      <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</li>
    </ul>
    <Link href="/contact">
      <button>Contact Erika Now!</button>
    </Link>
  </div>
)

export default Intro;