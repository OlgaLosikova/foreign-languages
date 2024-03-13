import styles from "./WordList.module.css";
import data from "../../words.json";
import EditButton from "../Buttons/EditButton";
import { useState, useEffect } from "react";
import EditForm from "../EditForm/EditForm";

export default function WordList(props) {
  let {
    editableWord,
    editableTranscription,
    editableTranslation,
    onClickEditButton,
    editTableRow,
    addTableRow
  } = props;
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
    editableWord = item.english;
    editableTranscription = item.transcription;
    editableTranslation = item.russian;
    let tableRow;
    if (!item.isEdit) {
      if (!hideButton&&!addTableRow) {
        tableRow = (
          <>
            <td className={styles.td}>{item.english}</td>
            <td className={styles.td}>{item.transcription}</td>
            <td className={styles.td}>{item.russian}</td>
            <td>
              <EditButton
                color="warning"
                icon="edit"
                onClickEditButton={() => handleRowEdit(item.id)}
              />
            </td>
          </>
        );
      } else {
        tableRow = (
          <>
            <td className={styles.td}>{item.english}</td>
            <td className={styles.td}>{item.transcription}</td>
            <td className={styles.td}>{item.russian}</td>
          </>
        );
      }
    } else {
      tableRow = (
        <EditForm
          editableWord={editableWord}
          editableTranscription={editableTranscription}
          editableTranslation={editableTranslation}
          rowSelect={rowSelect}
          onClickEditButton={onClickEditButton}
        />
      );
    }
    return (
      <tr key={item.id} className={styles.tr} id={item.id}>
        {tableRow}
      </tr>
    );
  });
  return (
    <table className={styles.table}>
      <tbody className={styles.tableBody}>{table}</tbody>
    </table>
  );
}
