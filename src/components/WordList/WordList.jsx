import styles from "./WordList.module.css";
import data from "../../words.json";
import EditButton from "../Buttons/EditButton";

export default function WordList() {
  return (
    <div>
      <table className={styles.table}>
        <tbody className={styles.tableBody}>
          {Object.keys(data).map((item) => {
            return (
              <tr key={data[item].id} className={styles.tr}>
                <td className={styles.td}>{data[item].english}</td>
                <td className={styles.td}>{data[item].transcription}</td>
                <td className={styles.td}>{data[item].russian}</td>
                <td>
                  <EditButton color="warning" icon="edit" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
