import { Link } from "react-router-dom";
import styles from "./Missing.module.css";
import img from "./404.png"

export default function Missing() {
  return (
    <>
      <img className={styles.img} alt="ошибка 404" src={img}></img>
      <Link className={styles.link} to="/"><h2>На главную</h2></Link>
    </>
  );
}
