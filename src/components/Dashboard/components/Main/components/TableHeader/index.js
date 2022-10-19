import styles from "./style.module.css";
import "./tableHeader.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCLient,
  editNewClient,
} from "../../../../../../store/newClient/newClient.action";
import Fuse from "fuse.js";
import {
  addClient,
  setFiltered,
} from "../../../../../../store/clients/clients.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../../../../../context/themeContext";

export function TableHeader() {
  const { theme } = useContext(ThemeContext);
  const newClient = useSelector((state) => state.newClient);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const floatInputData = [
    { label: "نام", type: "text", item: "firstName", required: true },
    { label: "نام خانوادگی", type: "text", item: "lastName", required: true },
    { label: "قد", type: "number", item: "height" },
    { label: "تاریخ تولد", type: "date", item: "birthdate" },
    { label: "محل سکونت", type: "text", item: "location" },
  ];

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(clearCLient());
  };
  const error = (error) => {
    Modal.error({
      title: error,
    });
  };
  const handleOk = () => {
    const emptyRequired = floatInputData.find(
      (data) => data.required && newClient[data.item] === ""
    );
    if (emptyRequired === undefined) {
      dispatch(addClient(newClient));
      dispatch(clearCLient());
      setIsModalOpen(false);
      AddUser();
    } else {
      error(`وارد کردن ${emptyRequired.label} الزامی است`);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(clearCLient());
  };

  const handleOnChangeInputs = (payload) => {
    dispatch(editNewClient(payload));
  };

  const [searchText, setSearchText] = useState("");

  const filterOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["firstName", "lastName", "location"],
  };

  const clients = useSelector((state) => state.client.clients);

  const fuse = new Fuse(clients, filterOptions);
  useEffect(() => {
    const newFilteredList = fuse.search(searchText).map((node) => node.item);
    dispatch(setFiltered(newFilteredList));
  }, [searchText]);

  const AddUser = () =>
    toast.success("کاربر با موفقیت اضافه شد", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className={styles.table_header}>
      <div className={styles.titleTableHeader}>
        <h3 className={styles.title}>لیست کاربران</h3>
      </div>
      <div className={styles.header_footer_style}>
        <button
          className={`${styles.add_btn} ${
            theme === "dark" && styles.add_btn_dark
          }`}
          onClick={showModal}
        >
          + افزوردن کاربر
        </button>

        <div
          className={`${styles.searchInput_parent} ${
            theme === "dark" && styles.searchInput_parent_dark
          }`}
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"text"}
            className={styles.searchInput_style}
            placeholder="جست و جو.."
          />
        </div>
        <Modal
          style={{ top: 20 }}
          title="اطلاعات کاربر"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="ثبت"
          cancelText="انصراف"
        >
          {floatInputData.map(({ label, type, item, required }) => (
            <FloatingLabelInput
              required={required}
              key={`${label}_float`}
              label={label}
              placeholder={`${label} را وارد کنید`}
              value={newClient[item]}
              changeHandler={(value) => handleOnChangeInputs({ [item]: value })}
              type={type}
            />
          ))}
        </Modal>
      </div>
    </div>
  );
}
