import Button from "../Buttons/Button";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import WordList from "../WordList/WordList";
import CardContainer from "../CardContainer/CardContainer";
import styles from "./MainContent.module.css";

export default function MainContent() {
  const [addRow, setAddRow] = useState(false);
  const [traningStart, setTraningStart] = useState(false);
  const [editTable, setEditTable] = useState(false);

  const handleAddRowStart = () => {
    setAddRow(true);
    setEditTable(false);
  };
  const handleAddRowEnd = () => {
    setAddRow(false);
    setEditTable(true);
  };
  const handleEditTable = () => {
    setEditTable(!editTable);

  };
  const handleTraningStart = () => {
    setTraningStart(!traningStart);
  };
  return (
    <>
      {addRow && !editTable && <EditForm onClickEditButton={handleAddRowEnd} />}
      {traningStart ? (
        <div className={styles.mainContent}>
          <CardContainer />
          <Button
            onClickButton={handleTraningStart}
            textButton="Назад"
            color="primary"
          />
        </div>
      ) : (
        <>
          <WordList
            onClickEditButton={handleEditTable}
            editTableRow={editTable}
          />
          {!addRow && (
            <>
              <Button
                onClickButton={handleAddRowStart}
                textButton="Добавить слово"
                color="primary"
              />
              <Button
                onClickButton={handleTraningStart}
                textButton="Тренироваться"
                color="secondary"
              />
            </>
          )}
        </>
      )}
    </>
  );
}
