import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TableRowWithInputs } from "./components/TableRowWithInputs";
import styles from "./table.module.css";
import "react-toastify/dist/ReactToastify.css";

import { TableRow } from "./components/TableRow";
import { ThemeContext } from "../../../../../../context/themeContext";
import { Loading } from "../../../Loading";

export function Table() {
  const { theme } = useContext(ThemeContext);
  const [editedClient, setEditedClient] = useState();

  const { clients, filteredClients } = useSelector((state) => state.client);

  const [users, setUser] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("http://localhost:5000").then((result) => result.json()).then((data) => {
      console.log({ data });
      if (!mounted) {
        return;
      }
      setUser(data);
      setLoading(false);
    });
    return () => {
      mounted = false;
      setLoading(false);
    };
  }, [])

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

  // const loading=()=>{}
  // useEffect(() => {
  //   try {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   return clearTimeout();
  // }, []);

  return (
    <div className={styles.table_container}>
      <table
        className={`table table-hover ${theme === "dark" && "table-dark"
          } table-striped ${styles.table_st} ${styles.table_background}`}
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
          {loading ? (
            <Loading />
          ) : clients.length === 0 ? (
            <tr>
              <th className="text-center" colSpan="8">
                هنوز کاربری اضافه نشده است
              </th>
            </tr>
          ) : filteredClients.length === 0 ? (
            <tr>
              <th className="text-center" colSpan="8">
                کاربر مورد نظر پیدا نشد
              </th>
            </tr>
          ) : (
            users.map((client, index) => {
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
