import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";
import {
  deleteClient,
  editClient,
} from "../../../../../../store/clients/clients.action";
import { ButtonIcon } from "./components/ButtonIcon";
import { TableRowWithInputs } from "./components/TableRowWithInputs";
import styles from "./table.module.css";
export function Table() {
  const [theme, toggle] = useTheme();
  const [editedClient, setEditedClient] = useState();
  const clients = useSelector((state) => state.client.clients);
  const tableHeader = [
    "#",
    "نام",
    "نام خانوادگی",
    "تاریخ تولد",
    "سن",
    "قد",
    "محل سکونت",
    "عملیات",
  ];
  const initialEditedClient = {
    firstName: "",
    lastName: "",
    birthdate: "",
    age: "",
    height: "",
    location: "",
  };
  const [editedData, setEditedData] = useState(initialEditedClient);
  const dispatch = useDispatch();
  function handleDeleteClient(id) {
    dispatch(deleteClient(id));
  }
  function handleEditeClient(client) {
    setEditedClient(client.id);
    setEditedData(client);
  }

  return (
    <div className={styles.table_container}>
      <table
        className={`table table-hover table-striped ${styles.table_st} ${styles.table_background}`}
        dir="rtl"
      >
        <thead>
          <tr>
            {tableHeader.map((item) => (
              <th scope="col" key={`${item}`}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <th className="text-center" colSpan="8">
                هنوز کاربری اضافه نشده است{" "}
              </th>
            </tr>
          ) : (
            clients.map((client, index) => {
              return client.id === editedClient ? (
                <TableRowWithInputs
                  key={`${index}_edited`}
                  edited={{ editedData, setEditedData }}
                  index={index}
                  setEditedClient={setEditedClient}
                />
              ) : (
                <tr key={`${client.id}_${index}`}>
                  <th scope="col">{index + 1}</th>
                  <th scope="col">{client.firstName}</th>
                  <th scope="col">{client.lastName}</th>
                  <th scope="col">{client.birthdate}</th>
                  <th scope="col">{client.age}</th>
                  <th scope="col">{client.height}</th>
                  <th scope="col">{client.location}</th>
                  <th>
                    <ButtonIcon
                      title={"Delete client"}
                      icon={"trash3"}
                      handleClick={() => handleDeleteClient(client.id)}
                      className={"delete_btn"}
                    />
                    <ButtonIcon
                      title={"Edit client"}
                      icon={"pencil-square"}
                      handleClick={() => handleEditeClient(client)}
                      className={"edit_btn"}
                    />
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
