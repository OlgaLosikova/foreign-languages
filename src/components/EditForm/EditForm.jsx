import styles from "./EditForm.module.css";
import EditButton from "../Buttons/EditButton";
import Input from "../Input/Input";
import { useState } from "react";

export default function EditForm() {
  const [editTable, setEditTable] = useState(true);
  const handleEditEnd = () => {
    setEditTable(false);

  };
  return (
    editTable&&<div className={styles.editForm}>
      <div className={styles.inputGroup}>
        <Input placeholderText="Слово" />
        <Input placeholderText="Транскрипция" />
        <Input placeholderText="Перевод" />
      </div>
      <div>
        <EditButton onClick={handleEditEnd} color="success" icon="done" />
        <EditButton color="warning" icon="edit" />
        <EditButton color="danger" icon="delete" />
      </div>
    </div>
  );
}
