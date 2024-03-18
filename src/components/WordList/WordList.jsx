import styles from "./WordList.module.css";
import data from "../../words.json";
import { useState, useEffect } from "react";
import EditForm from "../EditForm/EditForm";
import Row from "../Row/Row";

export default function WordList(props) {
  const { onClickEditButton, editTableRow, addTableRow } = props;
  const [objList, setObjList] = useState(data);
  const [rowSelect, setRowSelect] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const handleRowEdit = (id) => {
    setHideButton(true);
    setRowSelect(true);
    setObjList(
      objList.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isEdit: true };
        } else {
          return obj;
        }
      })
    );
  };
  useEffect(() => {
    setObjList(data);
    setHideButton(false);
  }, [editTableRow]);
  const table = objList.map((item) => {
    let tableRow;
    if (!item.isEdit) {
      tableRow = (
        <Row
          key={item.id}
          hideButton={hideButton}
          addTableRow={addTableRow}
          onClickEditButton={() => handleRowEdit(item.id)}
          word={item.english}
          transcription={item.transcription}
          translation={item.russian}
        />
      );
    } else {
      tableRow = (
        <EditForm
          key={item.id}
          editableWord={item.english}
          editableTranscription={item.transcription}
          editableTranslation={item.russian}
          rowSelect={rowSelect}
          onClickEditButton={onClickEditButton}
        />
      );
    }
    return <>{tableRow}</>;
  });
  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>{table}</tbody>
    </table>
  );
}
