import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";
import cn from "classnames";

export default function EditForm({ onClickEditButton, rowSelect }) {
  const editStyle = cn(styles.editForm, rowSelect && styles.editFormExisting);
  return (
    <div className={editStyle}>
      <div className={styles.inputGroup}>
        <Input placeholderText="Слово" />
        <Input placeholderText="Транскрипция" />
        <Input placeholderText="Перевод" />
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
