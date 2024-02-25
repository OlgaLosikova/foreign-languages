import NavButton from "../Buttons/NavButton";
import Card from "../Card/Card";
import WordList from "../WordList/WordList";

import styles from "./MainContent.module.css";
export default function MainContent() {
  return (
    <>
  <Card />
  <NavButton textButton="Не знаю"
  color="danger"/>
  <NavButton textButton="Остальные карточки"
  color="secondary"/>
  <NavButton textButton="Знаю"
  color="success"/>
 <>
  </>
  <WordList/>
  </>
 
  );
}