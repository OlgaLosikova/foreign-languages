import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";
import cn from "classnames";

export default function EditForm(props) {
  const {
    onClickEditButton,
    rowSelect,
    editableWord,
    editableTranscription,
    editableTranslation,
  } = props;
  const editStyle = cn(styles.editForm, rowSelect && styles.editFormExisting);
  return (
    <div className={editStyle}>
      <div className={styles.inputGroup}>
        <Input value={editableWord} placeholderText="Слово" />
        <Input value={editableTranscription} placeholderText="Транскрипция" />
        <Input value={editableTranslation} placeholderText="Перевод" />
      </div>
      <>
        <EditButton
          onClickEditButton={onClickEditButton}
          color="success"
          icon="done"
        />
        <EditButton
          onClickEditButton={onClickEditButton}
          color="danger"
          icon="delete"
        />
      </>
    </div>
  );
}
