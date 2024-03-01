import Button from "../Buttons/Button";
import WordList from "../WordList/WordList";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import Card from "../Card/Card";

export default function MainContent() {
  const [editTable, setEditTable] = useState(false);
  const [traningStart, setTraningStart] = useState(false);
  const handleEditStart = () => {
    setEditTable(true);
  };
  const handleTraningStart = () => {
    setTraningStart(!traningStart);
  };
  return (
    <>
      {editTable && <EditForm />}
      {traningStart ? (
        <>
          <Card />
          <Button
            onClick={handleTraningStart}
            textButton="Назад"
            color="primary"
          />
        </>
      ) : (
        <>
          <WordList />
          <Button
            onClick={handleEditStart}
            textButton="Добавить слово"
            color="primary"
          />
          <Button
            onClick={handleTraningStart}
            textButton="Тренироваться"
            color="secondary"
          />
        </>
      )}
    </>
  );
}
