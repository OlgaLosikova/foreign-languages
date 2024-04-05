import styles from "./Input.module.css";
import cn from "classnames";
export default function Input(props) {
  const { placeholderText, value, onChange, danger } = props;
  const inputStyle = cn(styles.input, danger && styles.danger);
  return (
    <input
      type="text"
      className={inputStyle}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
}
