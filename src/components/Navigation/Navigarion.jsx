import styles from "./Navigation.module.css";
import cn from "classnames";

export default function Navigation(props) {
  const { textButton, onClick } = props;
  const buttonStyle = cn(styles.navigation);

  return (
    <ul className={buttonStyle}>
      <li onClick={onClick} className={styles.navItem}>Log In</li>
      <li onClick={onClick} className={styles.navItem}>Sign Up</li>
    </ul>
  );
}
