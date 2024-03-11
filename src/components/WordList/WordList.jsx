import styles from "./WordList.module.css";
import data from "../../words.json";
import EditButton from "../Buttons/EditButton";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function WordList() {
const [isEdit, setIsEdit]=useState(false);
const [rowSelect, setRowSelect]=useState(false);
const handleRowEdit=()=>{
  setIsEdit(true);
  setRowSelect(true);
  console.log(rowSelect);
}

  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.tableBody}>
          {Object.keys(data).map((item) => {
            let tableRow;
            console.log(`test ${data[item]}`);
            !isEdit
              ? (tableRow = (
                  <>
                    <td className={styles.td}>{data[item].english}</td>
                    <td className={styles.td}>{data[item].transcription}</td>
                    <td className={styles.td}>{data[item].russian}</td>
                    <td>
                      <EditButton color="warning" icon="edit" onClickEditButton={handleRowEdit} />
                    </td>
                  </>
                ))
              : (tableRow = <EditForm rowSelect={rowSelect}/>);
            return (
              <tr key={data[item].id} className={styles.tr}>
                {tableRow}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
