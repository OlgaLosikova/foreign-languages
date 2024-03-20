import styles from "./WordList.module.css";
import data from "../../words.json";
import Row from "../Row/Row";

export default function WordList(props) {
  const { addTableRow, onEdit, hideButton, onClickEditButton } = props;

  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>
        {data.map((item) => {
          return (
            <Row
              addTableRow={addTableRow}
              key={item.id}
              word={item.english}
              transcription={item.transcription}
              translation={item.russian}
              onEdit={onEdit}
              hideButton={hideButton}
              onClickEditButton={onClickEditButton}
            />
          );
        })}
      </tbody>
    </table>
  );
}
