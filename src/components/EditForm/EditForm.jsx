import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";

export default function EditForm() {
  return (
    <div className={styles.editForm}>
      <div className={styles.inputGroup}>
        <Input placeholderText="Слово" />
        <Input placeholderText="Транскрипция" />
        <Input placeholderText="Перевод" />
      </div>
      <div>
        <EditButton color="success" icon="done" />
        <EditButton color="warning" icon="edit" />
        <EditButton color="danger" icon="delete" />
      </div>
    </div>
  );
}
