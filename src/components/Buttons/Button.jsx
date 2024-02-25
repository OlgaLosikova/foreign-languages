import styles from "./Button.module.css";
import cn from "classnames";

export default function NavButton(props) {
  const { textButton, color } = props;
  const buttonStyle = cn(styles.button, styles[color]);
  return <button className={buttonStyle}>{textButton}</button>;
}
