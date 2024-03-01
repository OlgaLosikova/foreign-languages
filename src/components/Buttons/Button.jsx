import styles from "./Button.module.css";
import cn from "classnames";

export default function NavButton(props) {
  const { textButton, color, onClick } = props;
  const buttonStyle = cn(styles.button, styles[color]);

  return (
    <button onClick={onClick} className={buttonStyle}>
      {textButton}
    </button>
  );
}
