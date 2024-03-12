import Button from "../Buttons/Button";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import WordList from "../WordList/WordList"
import CardContainer from "../CardContainer/CardContainer";
import styles from "./MainContent.module.css"

export default function MainContent() {
  const [editTable, setEditTable] = useState(false);
  const [traningStart, setTraningStart] = useState(false);

  const handleEditStart = () => {
    setEditTable(!editTable);
  };
  const handleTraningStart = () => {
    setTraningStart(!traningStart);
  };
  return (
    <>
      {editTable && <EditForm onClickEditButton={handleEditStart} />}
      {traningStart ? 
        (<div className={styles.mainContent}>
          <CardContainer/>
          <Button
            onClickButton={handleTraningStart}
            textButton="Назад"
            color="primary"/>
        </div>) 
        : (<>
          <WordList onClickEditButton={handleEditStart}/>
          {!editTable && (
            <>
              <Button
                onClickButton={handleEditStart}
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
        </>)
        }
    </>
  );
}
