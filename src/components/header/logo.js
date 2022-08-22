import logo from "../media/logo.svg";
import style from "./header.module.css";

const trademark = () => {
  return (
    <div>
      <a href="https://jusan.kz/">
        <img src={logo} className={style.logo} alt=""></img>
      </a>
    </div>
  );
};

export default trademark;
