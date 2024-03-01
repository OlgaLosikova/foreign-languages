import styles from "./EditButton.module.css";
import cn from "classnames";


export default function EditButton(props) {
  const { textButton, color, icon, onClick} = props;
  const buttonStyle = cn(styles.button, styles[color]);

  return <button onClick={onClick} className={buttonStyle}><span class="material-symbols-outlined">
  {icon}
  </span>{textButton}</button>;
}