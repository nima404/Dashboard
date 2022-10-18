import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";

import { TableRowWithInputs } from "./components/TableRowWithInputs";

import styles from "./table.module.css";
import { TableRow } from "./components/TableRow";

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
                <TableRow
                  key={`${client.id}_${index}`}
                  setEditedData={setEditedData}
                  client={client}
                  index={index}
                  setEditedClient={setEditedClient}
                />
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
