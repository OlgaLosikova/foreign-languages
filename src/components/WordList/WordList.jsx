import styles from "./WordList.module.css";
import Row from "../Row/Row";
import store from "../../stores/WordsStore";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
const WordList = observer((props) => {
  const { onEdit, onClickEditButton } = props;
  const { words, loading, err, fetchWords } = store;

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);
  if (loading) {
    return <Loading />;
  } else if (err) {
    return <Error errorMessage={err.message} />;
  } else
    return (
      <div className={styles.table}>
        {words.map((item) => {
          return (
            <Row
              wordId={item.id}
              key={item.id}
              word={item.english}
              transcription={item.transcription}
              translation={item.russian}
              onEdit={onEdit}
              onClickEditButton={onClickEditButton}
            />
          );
        })}
      </div>
    );
});
export default WordList;
