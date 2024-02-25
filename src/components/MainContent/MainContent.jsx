import Button from "../Buttons/Button";
import WordList from "../WordList/WordList";

export default function MainContent() {
  return (
    <>
      <WordList />
      <Button textButton="Добавить слово" color="primary" />
      <Button textButton="Тренироваться" color="secondary" />
    </>
  );
}
