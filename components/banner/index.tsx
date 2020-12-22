import style from "./style.module.scss";

const Banner = () => (
  <div className={style.banner}>
    <div className={style.text}>
    <h1 className={style.headline}>Welcome to Erika's Dog Training</h1>
    <p className={style.subHeadline}>Training dogs in the Seattle area since 2016</p>
    </div>
  </div>
)

export default Banner;