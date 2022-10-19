import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";

import { TableRowWithInputs } from "./components/TableRowWithInputs";

import styles from "./table.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TableRow } from "./components/TableRow";

export function Table() {
  const [theme, toggle] = useTheme();
  const [editedClient, setEditedClient] = useState();
  const filterClients = useSelector((state) => state.client.filteredClients);
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
          {filterClients.length === 0 ? (
            <tr>
              <th className="text-center" colSpan="8">
                هنوز کاربری اضافه نشده است{" "}
              </th>
            </tr>
          ) : (
            filterClients.map((client, index) => {
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
