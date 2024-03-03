import styles from "./EditButton.module.css";
import cn from "classnames";

export default function EditButton(props) {
  const { textButton, color, icon, onClickEditButton } = props;
  const buttonStyle = cn(styles.button, styles[color]);

  return (
    <button onClick={onClickEditButton} className={buttonStyle}>
      <span class="material-symbols-outlined">{icon}</span>
      {textButton}
    </button>
  );
}
