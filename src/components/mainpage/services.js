import style from "./services.module.css";
import globeIcon from "../media/globeIcon.svg";
import gearIcon from "../media/gear.svg";
import briefcaseIcon from "../media/briefcase.svg";
import monitorIcon from "../media/monitor.svg";
import cubesIcon from "../media/cubes.svg";

const services = () => {
  return (
    <div className={style.servicesCotainer}>
      <span className={style.servicesHeadingFont}>Сервисы</span>
      <div className={style.line}>
        <div className={style.iconContainer}>
          <img src={globeIcon} className={style.icon} alt=""></img>
        </div>
        <span className={style.servicesFont}>Jusan Sites</span>
      </div>
      <div className={style.line}>
        <div className={style.iconContainer}>
          <img src={gearIcon} className={style.icon} alt=""></img>
        </div>
        <span className={style.servicesFont}>Internal Resources</span>
      </div>
      <div className={style.line}>
        <div className={style.iconContainer}>
          <img src={briefcaseIcon} className={style.icon} alt=""></img>
        </div>
        <span className={style.servicesFont}>Gos Sites</span>
      </div>
      <div className={style.line}>
        <div className={style.iconContainer}>
          <img src={monitorIcon} className={style.icon} alt=""></img>
        </div>
        <span className={style.servicesFont}>Ivanti Service Desk</span>
      </div>
      <div className={style.line}>
        <div className={style.iconContainer}>
          <img src={cubesIcon} className={style.icon} alt=""></img>
        </div>
        <span className={style.servicesFont}>Jusan Apps</span>
      </div>
    </div>
  );
};

export default services;
