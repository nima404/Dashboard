import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";
import { deleteClient } from "../../../../../../store/clients/clients.action";
import styles from "./table.module.css";
export function Table() {
  const [theme, toggle] = useTheme();
  const clients = useSelector((state) => state.client.clients);
  const dispatch = useDispatch();
  function handleDeleteClient(id) {
    dispatch(deleteClient(id));
  }
  return (
    <div className={styles.table_container}>
      <table
        className={`table table-hover table-striped ${styles.table_st} ${styles.table_background}`}
        dir="rtl"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">تاریخ تولد</th>
            <th scope="col">قد</th>
            <th scope="col">محل سکونت</th>
            <th scope="col">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => {
            return (
              <tr key={`${client.id} _${index}`}>
                <th scope="row">{index + 1}</th>
                <th scope="col">{client.firstName}</th>
                <th scope="col">{client.lastName}</th>
                <th scope="col">{client.birthdate}</th>
                <th scope="col">{client.heigth}</th>
                <th scope="col">{client.location}</th>
                <th>
                  <button
                    className={styles.delete_btn}
                    onClick={() => handleDeleteClient(client.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  <button className={styles.edit_btn}>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
