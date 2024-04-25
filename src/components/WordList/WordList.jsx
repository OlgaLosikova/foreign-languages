import styles from "./WordList.module.css";
import Row from "../Row/Row";
import { useContext, useEffect } from "react";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { WordsContext } from "../../Context/DataContext";
export default function WordList(props) {
  const { onEdit } = props;
  const { loading, err, words, fetchWords } = useContext(WordsContext);
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
            />
          );
        })}
      </div>
    );
}
