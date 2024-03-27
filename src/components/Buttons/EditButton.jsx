import { forwardRef } from "react";
import styles from "./EditButton.module.css";
import cn from "classnames";

const EditButton = forwardRef((props, ref) => {
  const { textButton, color, icon, onClickEditButton } = props;
  const buttonStyle = cn(styles.button, styles[color]);

  return (
    <button ref={ref} onClick={onClickEditButton} className={buttonStyle}>
      <span className="material-symbols-outlined">{icon}</span>
      {textButton}
    </button>
  );
});
export default EditButton;
