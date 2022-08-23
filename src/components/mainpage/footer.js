import style from "./footer.module.css";
import youtubeIcon from "../media/youtubeIcon.svg";
import instagramIcon from "../media/instagramIcon.svg";
import facebookIcon from "../media/facebookIcon.svg";

const footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerIcons}>
        <img src={youtubeIcon} className={style.youtubeIcon} alt=""></img>
        <img src={instagramIcon} className={style.instagramIcon} alt=""></img>
        <img src={facebookIcon} className={style.facebookIcon} alt=""></img>
      </div>
    </div>
  );
};

export default footer;
