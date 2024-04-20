import "./App.css";
import Header from "./components/Header/Header";
import EditForm from "./components/EditForm/EditForm";
import WordList from "./components/WordList/WordList";
import CardContainer from "./components/CardContainer/CardContainer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Missing from "./components/Missing/Missing";
import { Provider, observer } from "mobx-react";
import store from "./stores/WordsStore";
const App = observer(() => {
  const {addRow, setAddRowStart, setAddRowEnd, setHideButton}=store;

  const handleAddRowStart = () => {
    setAddRowStart();
  };
  const handleAddRowEnd = () => {
    setAddRowEnd();
  };
  const handleSetEdit = () => {
    setHideButton();
  };
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Header onClickEditButton={handleAddRowStart} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {addRow && <EditForm onClickEditButton={handleAddRowEnd} />}
                    <WordList onClickEditButton={handleSetEdit} />
                  </>
                }
              />
              <Route path="/cards" element={<CardContainer />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </main>
        </HashRouter>
      </Provider>
    </div>
  );
});
export default App;
