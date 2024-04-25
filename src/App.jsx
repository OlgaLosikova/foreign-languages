import "./App.css";
import Header from "./components/Header/Header";
import { useContext } from "react";
import EditForm from "./components/EditForm/EditForm";
import WordList from "./components/WordList/WordList";
import CardContainer from "./components/CardContainer/CardContainer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Missing from "./components/Missing/Missing";
import { WordsContext } from "./Context/DataContext";

export default function App() {
  const { addRow, setAddRowStart, setAddRowEnd } = useContext(WordsContext);
  return (
    <div className="App">
      <HashRouter>
        <Header onClickEditButton={setAddRowStart} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {addRow && <EditForm onClickEditButton={setAddRowEnd}/>}
                  <WordList />
                </>
              }
            />
            <Route path="/cards" element={<CardContainer />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}
