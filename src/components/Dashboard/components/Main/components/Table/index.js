import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";
import { deleteClient } from "../../../../../../store/clients/clients.action";
import styles from "./table.module.css";
export function Table() {
  const [theme, toggle] = useTheme();
  const [editedClient, setEditedClient] = useState();
  const clients = useSelector((state) => state.client.clients);
  const newClient = useSelector((state) => state.newClient);
  const dispatch = useDispatch();
  function handleDeleteClient(id) {
    dispatch(deleteClient(id));
  }
  function handleEditeClient(client) {
    setEditedClient(client.id);
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
            <th scope="col">سن </th>
            <th scope="col">قد</th>
            <th scope="col">محل سکونت</th>
            <th scope="col">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <th className="text-center" colspan="8">
                هنوز کاربری اضافه نشده است{" "}
              </th>
            </tr>
          ) : (
            clients.map((client, index) => {
              return (
                <tr key={`${client.id}_${index}`}>
                  <th scope="row">{index + 1}</th>
                  <th scope="col">{client.firstName}</th>
                  <th scope="col">{client.lastName}</th>
                  <th scope="col">{client.birthdate}</th>
                  <th scope="col">{client.age}</th>
                  <th scope="col">{client.height}</th>
                  <th scope="col">{client.location}</th>
                  <th>
                    <button
                      title="Delete client"
                      className={styles.delete_btn}
                      onClick={() => handleDeleteClient(client.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                    <button
                      className={styles.edit_btn}
                      onClick={() => handleEditeClient(client)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </th>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
