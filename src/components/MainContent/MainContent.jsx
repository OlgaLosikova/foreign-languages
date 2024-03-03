import Button from "../Buttons/Button";
import WordList from "../WordList/WordList";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import Card from "../Card/Card";

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
      {editTable && <EditForm onClickEditButton={handleEditStart}/>}
      {traningStart ? (
        <>
          <Card />
          <Button
            onClickButton={handleTraningStart}
            textButton="Назад"
            color="primary"/>
        </>) : (
        <>
          <WordList />
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
                color="secondary"/>
            </>
          )}
        </>
      )}
    </>
  );
}
