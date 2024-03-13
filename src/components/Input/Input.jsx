import styles from "./Input.module.css";
export default function Input(props) {
  const {placeholderText,value}=props;
  return <input type="text" className={styles.input} placeholder={placeholderText} defaultValue={value}/>;
}