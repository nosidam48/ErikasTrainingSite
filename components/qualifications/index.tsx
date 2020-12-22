import style from "./style.module.scss";

const Qualifications = () => (
    <div className={style.qualifications}>
      <h2>Qualifications</h2>
      <ul className={style.qualList}>
        <li className={style.qualItem}>Trainer extroardinaire at Puppy Works in Capitol Hill</li>  
        <li className={style.qualItem}>Private training experience live and remote</li>  
        <li className={style.qualItem}>Proud owner of Garbanzo Bean</li>  
      </ul>
    </div>
)

export default Qualifications;