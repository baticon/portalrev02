import style from "./header.module.css";
import magnifyingglass from "../media/magnifyingglass.png";
import userlogo from "../media/userlogo.svg";

const headerlinks = () => {
  return (
    <div className={style.searchDetailsContainer}>
      <div className={style.searchContainer}>
        <img src={magnifyingglass} className={style.searchlogo} alt=""></img>
        <input
          className={style.searchfont}
          placeholder="Поиск по сотруднику"
        ></input>
      </div>
      {/* <span className={style.language}>RU</span> */}
      <select className={style.language}>
        <option value="RU">RU</option>
        <option value="ENG">ENG</option>
        <option value="KZ">KZ</option>
      </select>
      <div className={style.userContainer}>
        <div className={style.userLogoContainer}>
          <img src={userlogo} className={style.userlogo} alt=""></img>
        </div>
        <div className={style.user}>
          <span className={style.userName}>Калова Альбина</span>
          <span className={style.userPosition}>Менеджер</span>
        </div>
      </div>
    </div>
  );
};

export default headerlinks;
