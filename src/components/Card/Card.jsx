import styles from "./Card.module.css";
import EditButton from "../Buttons/EditButton";
import { useState, useEffect } from "react";
import data from "../../words.json";

export default function Card({cardIndex}) {
  const [checkTranslation, setCheckTranslation] = useState(false);

  const handleCheckTranslation = () => {
    setCheckTranslation(true);
  };
  useEffect(()=>{setCheckTranslation(false)},[cardIndex])
    return (
    <div className={styles.card} key={data[cardIndex].id}>
      <p className={styles.title}>{data[cardIndex].english}</p>
      <p className={styles.transcription}>{data[cardIndex].transcription}</p>
      {checkTranslation ? <p className={styles.title}>{data[cardIndex].russian}</p>:<EditButton onClickEditButton={handleCheckTranslation} textButton="Проверить" color="success" />}
    </div>
  );
}
