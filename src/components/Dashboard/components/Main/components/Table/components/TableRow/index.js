import { useDispatch } from "react-redux";
import { ButtonIcon } from "../ButtonIcon";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { deleteClient } from "../../../../../../../../store/clients/clients.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../../../../../Loading";
import { useEffect, useState } from "react";
import { useFetch } from "../../../../../../../../hooks/useFetch/useFetch";

export function TableRow({
  client,
  index,
  deleteData,
  setEditedData,
  setEditedClient,
}) {
  const { confirm } = Modal;
  function handleEditeClient(client) {
    setEditedClient(client.id);
    setEditedData(client);
  }

  const DeleteUserNotif = () =>
    toast.success("کاربر با موفقیت حذف شد", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


  const showDeleteConfirm = (client) => {
    confirm({
      title: "آیا از حذف کاربر زیر مطمئن هستید؟",
      icon: <ExclamationCircleOutlined />,
      content: `${client.name} ${client.family}`,
      okText: "حذف",
      okType: "danger",
      cancelText: "انصراف",
      onOk() {
        deleteData(`http://localhost:5000`, client.id);
        console.log(client.id);
        DeleteUserNotif();
      },
      onCancel() { },
    });
  };

  return (
    <>
      <tr>
        <th scope="col">{index + 1}</th>
        <th scope="col">{client.name}</th>
        <th scope="col">{client.family}</th>
        <th scope="col">{client.birthday}</th>
        <th scope="col">{client.age}</th>
        <th scope="col">{client.height}</th>
        <th scope="col">{client.location}</th>
        <th>
          <ButtonIcon
            title={"حذف کاربر"}
            icon={"trash3"}
            handleClick={() => showDeleteConfirm(client)}
            className={"delete_btn"}
          />
          <ButtonIcon
            title={"ویرایش"}
            icon={"pencil-square"}
            handleClick={() => handleEditeClient(client)}
            className={"edit_btn"}
          />
        </th>
      </tr>
    </>
  );
}
