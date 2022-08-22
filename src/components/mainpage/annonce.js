import style from "./annonce.module.css";
import annoncelogo from "../media/annonce.svg";
import News from "./news";

const annonce = () => {
  return (
    <div className={style.annonceContainer}>
      <span className={style.header}>АНОНСЫ</span>
      <span className={style.date}>10-Aug-2022</span>
      <img src={annoncelogo} className={style.annonceLogo} alt=""></img>
      <span className={style.annonceText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
        ultricies purus, sit amet luctus ipsum. Ut ac vulputate sem, id molestie
        libero.{" "}
      </span>
      <span className={style.header}>НОВОСТИ</span>
      <News></News>
    </div>
  );
};

export default annonce;
