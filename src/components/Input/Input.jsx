import styles from "./Input.module.css";
export default function Input(props) {
  const {placeholderText}=props;
  return <input type="text" className={styles.input} placeholder={placeholderText}/>;
}