import { createContext, useState } from "react";

const WordsContext = createContext({
  words: [],
  loading: true,
  err: null,
  addRow: false,
  hideButton: false,
  addWord: () => {},
  deleteWord: () => {},
  fetchWords: () => {},
  updateWord: () => {},
  setEdit: () => {},
  setAddRowStart: () => {},
  setAddRowEnd: () => {},
});

const baseUrl = "https://itgirlschool.justmakeit.ru";

function WordsContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [words, setWords] = useState([]);
  const [addRow, setAddRow] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const fetchWords = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/words`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что-то пошло не так...");
        }
      });
      setWords(response);
      setLoading(false);
    } catch (err) {
      setErr(err);
      setLoading(false);
    }
  };

  const updateWord = async (updatedWord, updatedId) => {
    const response = await fetch(`${baseUrl}/api/words/${updatedId}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    const data = await response.json();
    setWords(words.map((word) => (word.id === updatedId ? data : word)));
  };
  const deleteWord = async (deleteId) => {
    await fetch(`${baseUrl}/api/words/${deleteId}/delete`, {
      method: "POST",
    });
    setWords(words.filter((word) => word.id !== deleteId));
  };
  const addWord = async (addedWord) => {
    const response = await fetch(`${baseUrl}/api/words/add`, {
      method: "POST",
      body: JSON.stringify(addedWord),
    });
    const data = await response.json();
    setWords((words) => [...words, data]);
  };
  const setAddRowEnd = () => {
    setAddRow(false);
    console.log(addRow);
  };
  const setAddRowStart = () => {
    setAddRow(true);
    console.log(addRow);
  };
  const setEdit = () => {
    setHideButton(!hideButton);
    console.log("!");
  };
  return (
    <WordsContext.Provider
      value={{
        words,
        loading,
        err,
        addRow,
        hideButton,
        addWord,
        deleteWord,
        fetchWords,
        updateWord,
        setEdit,
        setAddRowStart,
        setAddRowEnd,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}
export { WordsContextProvider, WordsContext };
