import EditForm from "../EditForm/EditForm";
import styles from "./WordList.module.css";
export default function WordList() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
            <th>Заголовок 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ячейка 1</td>
            <td>Ячейка 2</td>
            <td>Ячейка 3</td>
          </tr>
          <tr>
            <td>Ячейка 4</td>
            <td>Ячейка 5</td>
            <td>Ячейка 6</td>
          </tr>
        </tbody>
      </table>
      <EditForm />
    </div>
  );
}
