import Trademark from "./logo";
import Headerlinks from "./headerlinks";
import Headerdetails from "./headerdetails";
import style from "./header.module.css";

const header = () => {
  return (
    <div className={style.header}>
      <Trademark />
      <Headerlinks />
      <Headerdetails />
    </div>
  );
};

export default header;
