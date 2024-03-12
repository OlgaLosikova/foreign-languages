import styles from "./WordList.module.css";
import data from "../../words.json";
import EditButton from "../Buttons/EditButton";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function WordList(props) {
  let { editableWord, editableTranscription, editableTranslation } = props;
  const [objList, setObjList] = useState(data);
  const [rowSelect, setRowSelect] = useState(false);
  const handleRowEdit = (id) => {
    setRowSelect(true);
    setObjList(
      objList.map((obj) => {
        console.log(`${obj.id} ${id}`);
        if (obj.id === id) {
          return { ...obj, isEdit: true };
        } else {
          return obj;
        }
      })
    );
  };
  const table = objList.map((item) => {
    editableWord=item.english;
    editableTranscription=item.transcription;
    editableTranslation=item.russian;
    let tableRow;
    if (!item.isEdit) {
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
        <EditForm
          editableWord={editableWord}
          editableTranscription={editableTranscription}
          editableTranslation={editableTranslation}
          rowSelect={rowSelect}
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
