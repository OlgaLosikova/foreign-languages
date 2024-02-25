import EditForm from "../EditForm/EditForm";
import styles from "./WordList.module.css";
import data from "../../words.json";
export default function WordList() {
  let editTable=false;
  return (
    <div >
      {editTable&&<EditForm />}
      <table className={styles.table}> 
        <tbody className={styles.tableBody}>
          {Object.keys(data).map((item) => {
            return (
              <tr key={data[item].id} className={styles.tr}>
                <td className={styles.td}>{data[item].english}</td>
                <td className={styles.td}>{data[item].transcription}</td>
                <td className={styles.td}>{data[item].russian}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}
