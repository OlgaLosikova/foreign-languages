import EditButton from "../Buttons/EditButton";
import styles from "./Row.module.css";

export default function Row(props) {
  const {
    word,
    transcription,
    translation,
    onClickEditButton,
    hideButton,
    addTableRow,
  } = props;
  let tableCell;
  if (!hideButton && !addTableRow)
    tableCell = (
      <td className={styles.td}>
        <EditButton
          color="warning"
          icon="edit"
          onClickEditButton={onClickEditButton}
        />
      </td>
    );
  else tableCell = <td className={styles.td}></td>;
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{word}</td>
      <td className={styles.td}>{transcription}</td>
      <td className={styles.td}>{translation}</td>
      {tableCell}
    </tr>
  );
}
