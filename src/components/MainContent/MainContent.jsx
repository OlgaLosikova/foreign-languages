import Button from "../Buttons/Button";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import WordList from "../WordList/WordList";
import CardContainer from "../CardContainer/CardContainer";
import styles from "./MainContent.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainContent() {
  const [addRow, setAddRow] = useState(false);
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

  return (
    <Router>
      <main className={styles.mainContent}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {addRow && !editTable && (<EditForm onClickEditButton={handleAddRowEnd} />)}
                <WordList
                  onClickEditButton={handleEditTable}
                  editTableRow={editTable}
                  addTableRow={addRow}
                />
                <div>
                  <Button
                    onClickButton={handleAddRowStart}
                    textButton="Добавить слово"
                    color="primary"
                  />
                  <Link to="/cards">
                    <Button textButton="Тренироваться" color="secondary" />
                  </Link>
                </div>
              </>
            }
          />
          <Route
            path="/cards"
            element={
              <>
                <CardContainer />
                <Link to="/">
                  <Button textButton="Назад" color="primary" />
                </Link>
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
