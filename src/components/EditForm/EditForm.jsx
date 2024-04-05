import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";
import cn from "classnames";
import useInputChecking from "../../hooks/useInputChecking";

export default function EditForm(props) {
  const {
    onClickEditButton,
    rowSelect,
    editableWord,
    editableTranscription,
    editableTranslation,
  } = props;

  const {
    value: valueWord,
    isDanger: isDangerWord,
    handleEdit: handleEditWord,
  } = useInputChecking((value) => {
    return value === "";
  }, editableWord);
  const {
    value: valueTranscription,
    isDanger: isDangerTranscription,
    handleEdit: handleEditTranscription,
  } = useInputChecking((value) => {
    return value === "";
  }, editableTranscription);
  const {
    value: valueTranslation,
    isDanger: isDangerTranslation,
    handleEdit: handleEditTranslation,
  } = useInputChecking((value) => {
    return value === "";
  }, editableTranslation);
  const editStyle = cn(styles.editForm, rowSelect && styles.editFormExisting);
  let disabled = false;
  valueWord === "" || valueTranscription === "" || valueTranslation === ""
    ? (disabled = true)
    : (disabled = false);
  return (
    <div className={editStyle}>
      <div className={styles.inputGroup}>
        <Input
          onChange={handleEditWord}
          value={valueWord}
          danger={isDangerWord}
          placeholderText="Слово"
        />
        <Input
          onChange={handleEditTranscription}
          value={valueTranscription}
          danger={isDangerTranscription}
          placeholderText="Транскрипция"
        />
        <Input
          onChange={handleEditTranslation}
          value={valueTranslation}
          danger={isDangerTranslation}
          placeholderText="Перевод"
        />
      </div>
      <>
        <EditButton
          onClickEditButton={onClickEditButton}
          color="success"
          icon="done"
          disabled={disabled}
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
