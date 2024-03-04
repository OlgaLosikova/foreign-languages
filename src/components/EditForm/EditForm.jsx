import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";

export default function EditForm({ onClickEditButton }) {
  return (
    <div className={styles.editForm}>
      <div className={styles.inputGroup}>
        <Input placeholderText="Слово" />
        <Input placeholderText="Транскрипция" />
        <Input placeholderText="Перевод" />
      </div>
      <div>
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
      </div>
    </div>
  );
}
