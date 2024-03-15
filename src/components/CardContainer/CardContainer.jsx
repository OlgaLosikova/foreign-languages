import Button from "../Buttons/Button";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";
import { useState} from "react";
import data from "../../words.json";


export default function CardContainer() {
  let [index, setIndex] = useState(0);

  const handleIndexIncrease = () => {
    index < data.length - 1 ? setIndex(++index) : setIndex(0);
  };
  const handleIndexReduce = () => {
    index > 0 ? setIndex(--index) : setIndex(data.length - 1);
  };

  return (
    <div className={styles.cardContainer}>
      <Button
        onClickButton={handleIndexReduce}
        icon="Arrow_Back"
        color="secondary"
      />
      <Card cardIndex={index} />
      <Button
        onClickButton={handleIndexIncrease}
        icon="Arrow_Forward"
        color="secondary"
      />
    </div>
  );
}
