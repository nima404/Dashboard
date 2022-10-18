import { useDispatch } from "react-redux";
import { editClient } from "../../../../../../../../store/clients/clients.action";
import { ButtonIcon } from "../ButtonIcon";
import { EditInput } from "../EditInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function TableRowWithInputs({ edited, setEditedClient, index }) {
  const { editedData, setEditedData } = edited;
  const dispatch = useDispatch();

  const EditUser = () =>
    toast.success('ویرایش با موفقیت انجام شد', {
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
    EditUser()
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
    </>
  );
}
