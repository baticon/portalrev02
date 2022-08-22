import style from "./news.module.css";

const news = () => {
  return (
    <div>
      <div className={style.newsHeader}>
        <span className={style.orangeNews}>orange life</span>
        <span className={style.blackNews}>бизнес</span>
        <span className={style.blackNews}>сми</span>
        <span className={style.blackNews}>процессы</span>
        <span className={style.blackNews}>скидки</span>
        <span className={style.blackNews}>разное</span>
      </div>
      <div className={style.newsWire}>
        <div className={style.individualNews}>
          {/* <img src={annoncelogo} className={style.annonceLogo} alt=""></img> */}
        </div>
      </div>
    </div>
  );
};

export default news;
