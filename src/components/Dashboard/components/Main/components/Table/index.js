import { useTheme } from "../../../../../../hooks/useTheme/useTheme";
import styles from "./table.module.css";
export function Table() {
  const [theme, toggle] = useTheme()
  return (
    <div className={styles.table_container}>
      <table className={`table table-hover table-striped ${theme === "dark" ? "table-dark" : 'table-light'}`} dir="rtl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
