import { useDispatch } from "react-redux";
import { editClient } from "../../../../../../../../store/clients/clients.action";
import { ButtonIcon } from "../ButtonIcon";
import { EditInput } from "../EditInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetch } from "../../../../../../../../hooks/useFetch/useFetch";

export function TableRowWithInputs({ edited, setEditedClient, index }) {
  const { editedData, setEditedData } = edited;
  const dispatch = useDispatch();
  const { updateData } = useFetch();
  const EditUser = () =>
    toast.success("ویرایش با موفقیت انجام شد", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const rowItems = [
    { name: "name", type: "text" },
    { name: "family", type: "text" },
    { name: "birthday", type: "date" },
    { name: "age", type: "number" },
    { name: "height", type: "number" },
    { name: "location", type: "text" },
  ];
  function handleSubmitEdite() {
    // dispatch(editClient(editedData));
    updateData("http://localhost:5000", editedData.id, editedData);
    setEditedClient();
    EditUser();
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
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        {rowItems.map((item) => (
          <td scope="col" key={`${item.name}`}>
            <EditInput
              value={editedData[item.name]}
              type={item.type}
              handleOnChange={(val) =>
                handleOnChangeInputs({ [item.name]: val })
              }
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
    </>
  );
}
