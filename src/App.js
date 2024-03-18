import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import EditForm from "./components/EditForm/EditForm";
import WordList from "./components/WordList/WordList";
import CardContainer from "./components/CardContainer/CardContainer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Missing from "./components/Missing/Missing";

export default function App() {
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
    <div className="App">
      <Router>
        <Header onClickEditButton={handleAddRowStart} />
        <main>
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
                </>
              }
            />
            <Route path="/cards" element={<CardContainer />} />
            <Route path="*" element={<Missing/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}
