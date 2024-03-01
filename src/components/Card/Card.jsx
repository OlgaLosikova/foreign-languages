import styles from "./Card.module.css";
import Button from "../Buttons/Button";
export default function Card() {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Cat</p>
      <p className={styles.transcription}>|kæt|</p>
      <Button textButton="Проверить" color="success" />
    </div>
  );
}
