import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../../../../../hooks/useTheme/useTheme";
import {
  deleteClient,
  editClient,
} from "../../../../../../store/clients/clients.action";
import { editNewClient } from "../../../../../../store/newClient/newClient.action";
import { EditInput } from "./components/EditInput";
import styles from "./table.module.css";
export function Table() {
  const [theme, toggle] = useTheme();
  const [editedClient, setEditedClient] = useState();
  const clients = useSelector((state) => state.client.clients);
  const initialEditedClient = {
    firstName: "",
    lastName: "",
    age: "",
    height: "",
    birthdate: "",
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
  function handleOnChangeInputs(obj) {
    setEditedData((prev) => {
      return { ...prev, ...obj };
    });
  }
  function handleSubmitEdite() {
    dispatch(editClient(editedData));
    setEditedClient();
  }
  function handleCancelEdite() {
    setEditedClient();
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
              return client.id === editedClient ? (
                <tr key={`${client.id}_${index}`}>
                  <th scope="row">{index + 1}</th>
                  <th scope="col">
                    <EditInput
                      value={editedData.firstName}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ firstName: val })
                      }
                    />
                  </th>
                  <th scope="col">
                    <EditInput
                      value={editedData.lastName}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ lastName: val })
                      }
                    />
                  </th>
                  <th scope="col">
                    <EditInput
                      type={"date"}
                      value={editedData.birthdate}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ birthdate: val })
                      }
                    />
                  </th>
                  <th scope="col">
                    <EditInput
                      value={editedData.age}
                      type={"number"}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ age: val })
                      }
                    />
                  </th>
                  <th scope="col">
                    <EditInput
                      type={"number"}
                      value={editedData.height}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ height: val })
                      }
                    />
                  </th>
                  <th scope="col">
                    <EditInput
                      value={editedData.location}
                      handleOnChange={(val) =>
                        handleOnChangeInputs({ location: val })
                      }
                    />
                  </th>
                  <th>
                    <button
                      title="Delete client"
                      className={styles.delete_btn}
                      onClick={handleCancelEdite}
                    >
                      <i class="bi bi-x-lg"></i>
                    </button>
                    <button
                      className={styles.edit_btn}
                      onClick={handleSubmitEdite}
                    >
                      <i class="bi bi-check-lg"></i>
                    </button>
                  </th>
                </tr>
              ) : (
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
