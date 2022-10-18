import { useDispatch } from "react-redux";
import { ButtonIcon } from "../ButtonIcon";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { deleteClient } from "../../../../../../../../store/clients/clients.action";

export function TableRow({ client, index, setEditedData, setEditedClient }) {
  const { confirm } = Modal;
  const dispatch = useDispatch();
  function handleEditeClient(client) {
    setEditedClient(client.id);
    setEditedData(client);
  }

  const showDeleteConfirm = (client) => {
    confirm({
      title: "آیا از حذف کاربر زیر مطمئن هستید؟",
      icon: <ExclamationCircleOutlined />,
      content: `${client.firstName} ${client.lastName}`,
      okText: "حذف",
      okType: "danger",
      cancelText: "انصراف",
      onOk() {
        dispatch(deleteClient(client.id));
      },
      onCancel() {},
    });
  };

  return (
    <tr>
      <th scope="col">{index + 1}</th>
      <th scope="col">{client.firstName}</th>
      <th scope="col">{client.lastName}</th>
      <th scope="col">{client.birthdate}</th>
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
  );
}
