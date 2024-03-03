import styles from "./Card.module.css";
import EditButton from "../Buttons/EditButton";
import { useState } from "react";

export default function Card() {
  const [checkTranslation, setCheckTranslation] = useState(false);

  const handleCheckTranslation = () => {
    setCheckTranslation(true);
  };
    return (
    <div className={styles.card}>
      <p className={styles.title}>Cat</p>
      <p className={styles.transcription}>[kæt]</p>
      {checkTranslation? <p className={styles.title}>Кошка</p> :<EditButton onClickEditButton={handleCheckTranslation} textButton="Проверить" color="success" />}
    </div>
  );
}
