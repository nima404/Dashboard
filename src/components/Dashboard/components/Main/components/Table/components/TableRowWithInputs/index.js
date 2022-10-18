import { useDispatch } from "react-redux";
import { editClient } from "../../../../../../../../store/clients/clients.action";
import { ButtonIcon } from "../ButtonIcon";
import { EditInput } from "../EditInput";

export function TableRowWithInputs({ edited, setEditedClient, index }) {
  const { editedData, setEditedData } = edited;
  const dispatch = useDispatch();
  const rowItems = [
    { name: "firstName", type: "text" },
    { name: "lastName", type: "text" },
    { name: "birthdate", type: "date" },
    { name: "age", type: "number" },
    { name: "height", type: "number" },
    { name: "location", type: "text" },
  ];
  function handleSubmitEdite() {
    dispatch(editClient(editedData));
    setEditedClient();
  }
  function handleCancelEdite() {
    setEditedClient();
  }
  function handleOnChangeInputs(obj) {
    setEditedData((prev) => {
      return { ...prev, ...obj };
    });
  }
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {rowItems.map((item) => (
        <td scope="col" key={`${item.name}`}>
          <EditInput
            value={editedData[item.name]}
            type={item.type}
            handleOnChange={(val) => handleOnChangeInputs({ [item.name]: val })}
          />
        </td>
      ))}
      <th>
        <ButtonIcon
          title={"انصراف"}
          className={"delete_btn"}
          handleClick={handleCancelEdite}
          icon={"x-lg"}
        />
        <ButtonIcon
          title={"ثبت تغییرات"}
          className={"edit_btn"}
          handleClick={handleSubmitEdite}
          icon={"check-lg"}
        />
      </th>
    </tr>
  );
}
