import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WordsContextProvider } from "./Context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WordsContextProvider>
      <App />
    </WordsContextProvider>
  </React.StrictMode>
);
