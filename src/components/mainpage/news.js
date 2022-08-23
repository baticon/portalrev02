import style from "./news.module.css";
import newsLogo from "../media/newsLogo.svg";
import viewIcon from "../media/viewIcon.svg";
import heartIcon from "../media/heartIcon.svg";
import commentIcon from "../media/commentIcon.svg";

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
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
        <div className={style.individualNews}>
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
        <div className={style.individualNews}>
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
        <div className={style.individualNews}>
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
        <div className={style.individualNews}>
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
        <div className={style.individualNews}>
          <div className={style.individualNewsHeader}>
            <img
              src={newsLogo}
              className={style.individualNewsLogo}
              alt=""
            ></img>
          </div>
          <span className={style.individualNewsHeading}>ЗАГОЛОВОК</span>
          <div className={style.individualNewsDetails}>
            <span className={style.individualNewsDate}>19.08.2022</span>
            <div className={style.metrics}>
              <img src={viewIcon} className={style.viewIcon} alt=""></img>
              <span className={style.count}>162</span>
              <img src={heartIcon} className={style.heartIcon} alt=""></img>
              <span className={style.count}>15</span>
              <img src={commentIcon} className={style.commentIcon} alt=""></img>
              <span className={style.count}>78</span>
            </div>
          </div>
        </div>
      </div>
      <span className={style.watchAllNews}>посмотреть все новости</span>
    </div>
  );
};

export default news;
