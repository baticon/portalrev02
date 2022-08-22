import style from "./header.module.css";

const headerlinks = () => {
  return (
    <div>
      <span
        className={`${style.orangefont} ${style.mainfont}`}
        style={{ marginRight: "30px" }}
      >
        ГЛАВНАЯ
      </span>
      <span className={style.mainfont} style={{ marginRight: "30px" }}>
        О БАНКЕ
      </span>
      <span className={style.mainfont} style={{ marginRight: "30px" }}>
        HR-ПОРТАЛ
      </span>
      <span className={style.mainfont} style={{ marginRight: "89.12px" }}>
        НОВОМУ РАБОТНИКУ
      </span>
    </div>
  );
};

export default headerlinks;
