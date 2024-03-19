import EditButton from "../Buttons/EditButton";
import EditForm from "../EditForm/EditForm";
import styles from "./Row.module.css";
import { useState } from "react";

export default function Row(props) {
  const { word, transcription, translation, addTableRow, onClickEditButton, hideButton } = props;
  const [rowSelect, setRowSelect] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSetEdit = () => {
    setIsEdit(!isEdit);
    setRowSelect(!rowSelect);
    onClickEditButton(true);
  };

  let tableRow;
  let tableCell;
  if (isEdit)
    tableRow = (
      <EditForm
        onClickEditButton={handleSetEdit}
        rowSelect={rowSelect}
        editableWord={word}
        editableTranscription={transcription}
        editableTranslation={translation}
      />
    );
  else {
    if (!addTableRow&&!hideButton)
      tableCell = (
        <td className={styles.td}>
          <EditButton
            color="warning"
            icon="edit"
            onClickEditButton={handleSetEdit}
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
  return <>{tableRow}</>;
}
